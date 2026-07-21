// src/api/notification.js
// جلب الإشعارات وتحديث حالتها

import api from './axios'

export function fetchNotifications(params) {
  return api.get('/notifications', { params })
}

export function markAsRead(notificationId) {
  return api.patch(`/notifications/${notificationId}/read`)
}

export function markAllAsRead() {
  return api.patch('/notifications/read-all')
}
