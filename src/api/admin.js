// src/api/admin.js
// إدارة عمليات لوحة الإدارة

import api from './axios'

export function fetchAdminDashboard() {
  return api.get('/admin/dashboard')
}

export function fetchDonors(params) {
  return api.get('/admin/donors', { params })
}

export function fetchHospitals(params) {
  return api.get('/admin/hospitals', { params })
}

export function approveOrganization(orgId) {
  return api.post(`/admin/hospitals/${orgId}/approve`)
}

export function rejectOrganization(orgId, reason) {
  return api.post(`/admin/hospitals/${orgId}/reject`, { reason })
}

export function fetchFraudAlerts() {
  return api.get('/admin/fraud-alerts')
}

export function fetchSystemLogs(params) {
  return api.get('/admin/logs', { params })
}

export function updateSystemSettings(payload) {
  return api.put('/admin/settings', payload)
}
