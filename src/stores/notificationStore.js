// src/stores/notificationStore.js
// يحفظ: عدد الإشعارات غير المقروءة

import { defineStore } from 'pinia'
import * as notificationApi from '@/api/notification'

const MOCK_MODE = true

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    items: [
      { id: 1, message: 'طلب تبرع عاجل قريب منك (O-)', read: false, createdAt: Date.now() - 10 * 60 * 1000 },
      { id: 2, message: 'تم قبول طلب تسجيل مستشفى الشفاء', read: false, createdAt: Date.now() - 3600 * 1000 },
      { id: 3, message: 'حصلت على 20 نقطة جديدة', read: true, createdAt: Date.now() - 86400 * 1000 }
    ],
    loading: false
  }),

  getters: {
    unreadCount: (state) => state.items.filter((n) => !n.read).length
  },

  actions: {
    async fetchAll() {
      if (MOCK_MODE) return
      this.loading = true
      try {
        const { data } = await notificationApi.fetchNotifications()
        this.items = data
      } finally {
        this.loading = false
      }
    },
    markRead(id) {
      const item = this.items.find((n) => n.id === id)
      if (item) item.read = true
      if (!MOCK_MODE) notificationApi.markAsRead(id)
    },
    markAllRead() {
      this.items.forEach((n) => (n.read = true))
      if (!MOCK_MODE) notificationApi.markAllAsRead()
    }
  }
})
