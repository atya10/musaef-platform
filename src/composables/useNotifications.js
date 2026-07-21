// src/composables/useNotifications.js
// استقبال الإشعارات الجديدة، تنبيه المستخدم

import { useNotificationStore } from '@/stores/notificationStore'
import { timeAgo } from '@/utils/dateFormatter'

export function useNotifications() {
  const store = useNotificationStore()

  function formattedItems() {
    return store.items.map((n) => ({ ...n, elapsed: timeAgo(n.createdAt) }))
  }

  return {
    items: store.items,
    unreadCount: store.unreadCount,
    formattedItems,
    markRead: store.markRead,
    markAllRead: store.markAllRead
  }
}
