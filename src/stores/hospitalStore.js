// src/stores/hospitalStore.js
// يحفظ: بيانات المستشفى، حالة مخزون الدم

import { defineStore } from 'pinia'
import * as hospitalApi from '@/api/hospital'

const MOCK_MODE = true

export const useHospitalStore = defineStore('hospital', {
  state: () => ({
    facilityName: 'مستشفى الشفاء',
    inventory: [
      { bloodType: 'A+', units: 42, status: 'جيد' },
      { bloodType: 'A-', units: 8, status: 'منخفض' },
      { bloodType: 'B+', units: 25, status: 'جيد' },
      { bloodType: 'B-', units: 5, status: 'حرج' },
      { bloodType: 'AB+', units: 12, status: 'جيد' },
      { bloodType: 'AB-', units: 3, status: 'حرج' },
      { bloodType: 'O+', units: 55, status: 'جيد' },
      { bloodType: 'O-', units: 10, status: 'منخفض' }
    ],
    loading: false
  }),

  getters: {
    criticalTypes: (state) => state.inventory.filter((i) => i.status === 'حرج')
  },

  actions: {
    async fetchInventory() {
      if (MOCK_MODE) return
      this.loading = true
      try {
        const { data } = await hospitalApi.fetchBloodInventory()
        this.inventory = data
      } finally {
        this.loading = false
      }
    }
  }
})
