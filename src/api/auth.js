// src/api/auth.js
// تسجيل الدخول، إنشاء الحساب، واستعادة كلمة المرور

import api from './axios'

export function login(credentials) {
  // credentials: { email, password }
  return api.post('/auth/login', credentials)
}

export function registerDonor(payload) {
  return api.post('/auth/register/donor', payload)
}

export function registerOrganization(payload) {
  // payload يُرسل كـ multipart/form-data بسبب رفع ملف الترخيص
  return api.post('/auth/register/organization', payload, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

export function logout() {
  return api.post('/auth/logout')
}

export function forgotPassword(email) {
  return api.post('/auth/forgot-password', { email })
}

export function resetPassword(payload) {
  // payload: { token, email, password, password_confirmation }
  return api.post('/auth/reset-password', payload)
}

export function fetchCurrentUser() {
  return api.get('/auth/me')
}
