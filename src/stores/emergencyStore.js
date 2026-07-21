// src/stores/emergencyStore.js
// يحفظ: قائمة النداءات الطارئة النشطة

import { defineStore } from 'pinia'
import * as emergencyApi from '@/api/emergency'

const MOCK_MODE = true

export const useEmergencyStore = defineStore('emergency', {
  state: () => ({
    activeRequests: [
      { id: 1, bloodType: 'O-', hospital: 'مستشفى الاهلي العربي', city: 'غزة - مدينة غزة', unitsNeeded: 4, createdAt: Date.now() - 30 * 60 * 1000, urgency: 'urgent' },
      { id: 2, bloodType: 'A+', hospital: 'مستشفى ناصر الطبي', city: 'خان يونس - جنوب قطاع غزة', unitsNeeded: 1, createdAt: Date.now() - 45 * 60 * 1000, urgency: 'urgent' },
      { id: 3, bloodType: 'B-', hospital: 'مستشفى الاهلي العربي', city: 'غزة - مدينة غزة', unitsNeeded: 4, createdAt: Date.now() - 30 * 60 * 1000, urgency: 'critical' },
      { id: 4, bloodType: 'AB+', hospital: 'مستشفى العودة', city: 'النصيرات - وسط قطاع غزة', unitsNeeded: 3, createdAt: Date.now() - 15 * 60 * 1000, urgency: 'urgent' }
    ],
    loading: false
  }),

  actions: {
    async fetchActive() {
      if (MOCK_MODE) return
      this.loading = true
      try {
        const { data } = await emergencyApi.fetchEmergencyRequests({ status: 'pending' })
        this.activeRequests = data
      } finally {
        this.loading = false
      }
    }
  }
})
