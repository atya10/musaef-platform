// src/stores/donorStore.js
// يحفظ: رصيد النقاط، مستوى المتبرع، حالة الأهلية للتبرع

import { defineStore } from 'pinia'
import * as donorApi from '@/api/donor'

const MOCK_MODE = true

export const useDonorStore = defineStore('donor', {
  state: () => ({
    points: 320,
    level: 'متبرع فضي',
    eligibleToDonate: true,
    nextEligibleDate: '2026-08-15',
    bloodType: 'O+',
    donationHistory: [
      { id: 1, date: '2026-05-02', hospital: 'مستشفى الشفاء', units: 1 },
      { id: 2, date: '2026-02-10', hospital: 'مستشفى القدس', units: 1 }
    ],
    loading: false
  }),

  getters: {
    totalDonations: (state) => state.donationHistory.length
  },

  actions: {
    async fetchDashboard() {
      if (MOCK_MODE) return
      this.loading = true
      try {
        const { data } = await donorApi.fetchDonorDashboard()
        Object.assign(this, data)
      } finally {
        this.loading = false
      }
    }
  }
})
