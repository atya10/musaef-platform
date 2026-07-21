// src/api/hospital.js
// إدارة بيانات المستشفيات

import api from './axios'

export function fetchHospitalProfile() {
  return api.get('/hospital/profile')
}

export function updateHospitalProfile(payload) {
  return api.put('/hospital/profile', payload)
}

export function fetchHospitalDashboard() {
  return api.get('/hospital/dashboard')
}

export function fetchBloodInventory() {
  return api.get('/hospital/inventory')
}

export function updateBloodInventory(bloodType, payload) {
  return api.put(`/hospital/inventory/${bloodType}`, payload)
}

export function fetchActiveRequests() {
  return api.get('/hospital/requests')
}

export function fetchDonorResponses(requestId) {
  return api.get(`/hospital/requests/${requestId}/responses`)
}
