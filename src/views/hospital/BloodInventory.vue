<template>
  <div>
    <h1 class="h4 fw-bold mb-4">{{ t('dashboard.hospitalNav.inventory') }}</h1>
    <div v-if="hospitalStore.criticalTypes.length" class="alert alert-danger d-flex align-items-center gap-2 small">
      <svg class="icon"><use href="#i-shield" /></svg>
      تنبيه: الفصائل التالية بحالة حرجة: <strong>{{ hospitalStore.criticalTypes.map(item => item.bloodType).join('، ') }}</strong>
    </div>
    <BloodInventoryTable />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useHospitalStore } from '@/stores/hospitalStore'
import BloodInventoryTable from '@/components/hospital/BloodInventoryTable.vue'

const { t } = useI18n()
const hospitalStore = useHospitalStore()
</script>
