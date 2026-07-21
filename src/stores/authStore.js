// src/stores/authStore.js
// يحفظ: بيانات المستخدم، الدور (Role)، رمز المصادقة (Token)
//
// ملاحظة مهمة: لا يوجد حالياً اتصال فعلي بواجهة خلفية (Backend Laravel)،
// لذلك يعمل المتجر بوضع "محاكاة" (MOCK_MODE) حتى يتم ربط ملفات src/api
// بخادم حقيقي. عند توفر الخادم، بدّل MOCK_MODE إلى false فقط.

import { defineStore } from 'pinia'
import * as authApi from '@/api/auth'
import { USER_ROLES } from '@/utils/constants'

const MOCK_MODE = true

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('musaef_user') || 'null'),
    token: localStorage.getItem('musaef_token') || null,
    loading: false,
    error: null
  }),

  getters: {
    isAuthenticated: (state) => Boolean(state.token),
    role: (state) => state.user?.role || null,
    isDonor: (state) => state.user?.role === USER_ROLES.DONOR,
    isHospital: (state) => state.user?.role === USER_ROLES.HOSPITAL,
    isAdmin: (state) => state.user?.role === USER_ROLES.ADMIN
  },

  actions: {
    _persist(user, token) {
      this.user = user
      this.token = token
      localStorage.setItem('musaef_user', JSON.stringify(user))
      localStorage.setItem('musaef_token', token)
    },

    async login({ email, password, role }) {
      this.loading = true
      this.error = null
      try {
        if (MOCK_MODE) {
          // محاكاة استجابة الخادم لأغراض العرض التجريبي فقط
          const mockUser = {
            id: 'demo-user',
            name: email.split('@')[0] || 'مستخدم مسعف',
            email,
            role: role || USER_ROLES.DONOR
          }
          this._persist(mockUser, `mock-token-${Date.now()}`)
          return mockUser
        }
        const { data } = await authApi.login({ email, password })
        this._persist(data.user, data.token)
        return data.user
      } catch (err) {
        this.error = err?.response?.data?.message || 'تعذر تسجيل الدخول'
        throw err
      } finally {
        this.loading = false
      }
    },

    async registerDonor(payload) {
      this.loading = true
      this.error = null
      try {
        if (MOCK_MODE) {
          const mockUser = {
            id: 'demo-donor',
            name: payload.name,
            email: payload.email,
            role: USER_ROLES.DONOR
          }
          this._persist(mockUser, `mock-token-${Date.now()}`)
          return mockUser
        }
        const { data } = await authApi.registerDonor(payload)
        this._persist(data.user, data.token)
        return data.user
      } catch (err) {
        this.error = err?.response?.data?.message || 'تعذر إنشاء الحساب'
        throw err
      } finally {
        this.loading = false
      }
    },

    async registerOrganization(payload) {
      this.loading = true
      this.error = null
      try {
        if (MOCK_MODE) {
          // طلبات الجهات (مستشفى/بنك دم) تحتاج مراجعة يدوية قبل التفعيل،
          // لذلك لا يتم حفظ جلسة دخول تلقائية هنا.
          return { pending: true }
        }
        const { data } = await authApi.registerOrganization(payload)
        return data
      } catch (err) {
        this.error = err?.response?.data?.message || 'تعذر إرسال طلب التسجيل'
        throw err
      } finally {
        this.loading = false
      }
    },

    async forgotPassword(email) {
      if (MOCK_MODE) return { sent: true }
      return authApi.forgotPassword(email)
    },

    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('musaef_user')
      localStorage.removeItem('musaef_token')
      if (!MOCK_MODE) authApi.logout()
    }
  }
})
