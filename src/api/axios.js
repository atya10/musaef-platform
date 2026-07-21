// src/api/axios.js
// إعداد عنوان الخادم (Base URL) و Interceptors لإرفاق رمز المصادقة (Token)
// مع جميع الطلبات. هذا الملف هو نقطة الاتصال الوحيدة بالواجهة الخلفية (Backend Laravel).

import axios from 'axios'
import { API_BASE_URL } from '@/utils/constants'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

// إرفاق رمز المصادقة (Token) مع كل طلب إن وُجد
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('musaef_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// معالجة موحّدة للأخطاء (مثل انتهاء صلاحية الجلسة)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('musaef_token')
    }
    return Promise.reject(error)
  }
)

export default api
