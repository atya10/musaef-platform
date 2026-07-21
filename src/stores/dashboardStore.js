// src/stores/dashboardStore.js
// يحفظ: الإحصائيات السريعة الخاصة بلوحات التحكم

import { defineStore } from 'pinia'
import * as analyticsApi from '@/api/analytics'

const MOCK_MODE = true

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    stats: {
      casesSupported: 3580,
      donationRequests: 8920,
      hospitalsCount: 245,
      donorsHelped: 3580
    },
    loading: false
  }),

  actions: {
    async fetchStats() {
      if (MOCK_MODE) return
      this.loading = true
      try {
        const { data } = await analyticsApi.fetchGlobalStats()
        this.stats = data
      } finally {
        this.loading = false
      }
    }
  }
})
