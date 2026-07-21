// src/composables/useAuth.js
// التحقق من صحة البيانات، إدارة عمليات تسجيل الدخول، توجيه المستخدم

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import { isValidEmail } from '@/utils/helpers'
import { USER_ROLES } from '@/utils/constants'

export function useAuth() {
  const router = useRouter()
  const authStore = useAuthStore()
  const submitting = ref(false)
  const formError = ref('')

  function validateLoginForm({ email, password }) {
    if (!isValidEmail(email)) return 'الرجاء إدخال بريد إلكتروني صحيح'
    if (!password || password.length < 6) return 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'
    return ''
  }

  function redirectByRole(role) {
    if (role === USER_ROLES.HOSPITAL) return router.push('/hospital/dashboard')
    if (role === USER_ROLES.ADMIN) return router.push('/admin/dashboard')
    return router.push('/donor/dashboard')
  }

  async function submitLogin(form) {
    formError.value = validateLoginForm(form)
    if (formError.value) return false

    submitting.value = true
    try {
      const user = await authStore.login(form)
      await redirectByRole(user.role)
      return true
    } catch (err) {
      formError.value = authStore.error || 'تعذر تسجيل الدخول'
      return false
    } finally {
      submitting.value = false
    }
  }

  function logout() {
    authStore.logout()
    router.push('/auth')
  }

  return { submitting, formError, submitLogin, logout, redirectByRole }
}
