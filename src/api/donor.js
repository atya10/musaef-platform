// src/api/donor.js
// إدارة بيانات المتبرعين

import api from './axios'

export function fetchDonorProfile() {
  return api.get('/donor/profile')
}

export function updateDonorProfile(payload) {
  return api.put('/donor/profile', payload)
}

export function fetchDonorDashboard() {
  return api.get('/donor/dashboard')
}

export function fetchNearbyRequests(params) {
  // params: { lat, lng, radius, bloodType }
  return api.get('/donor/requests/nearby', { params })
}

export function respondToRequest(requestId) {
  return api.post(`/donor/requests/${requestId}/respond`)
}

export function fetchDonationHistory() {
  return api.get('/donor/donations')
}

export function fetchRewards() {
  return api.get('/donor/rewards')
}

export function changePassword(payload) {
  return api.put('/donor/password', payload)
}
