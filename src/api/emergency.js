// src/api/emergency.js
// إنشاء نداءات الطوارئ، جلب نتائج المطابقة الذكية، وإدارة طلبات التبرع

import api from './axios'

export function createEmergencyRequest(payload) {
  // payload: { bloodType, unitsNeeded, urgency, hospitalId, notes }
  return api.post('/emergency/requests', payload)
}

export function fetchEmergencyRequests(params) {
  return api.get('/emergency/requests', { params })
}

export function fetchRequestById(requestId) {
  return api.get(`/emergency/requests/${requestId}`)
}

export function fetchSmartMatches(requestId) {
  return api.get(`/emergency/requests/${requestId}/matches`)
}

export function updateRequestStatus(requestId, status) {
  return api.patch(`/emergency/requests/${requestId}/status`, { status })
}

export function cancelRequest(requestId) {
  return api.delete(`/emergency/requests/${requestId}`)
}
