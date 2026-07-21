<template>
  <div>
    <h1 class="h4 fw-bold mb-4">{{ t('dashboard.adminNav.radar') }}</h1>
    <MapPlaceholder height="420px" label="الخريطة الحرارية للنداءات الطارئة المباشرة" class="mb-4" />
    <div class="dash-stat-card p-4">
      <h6 class="fw-bold mb-3">الحالات الحرجة الآن</h6>
      <ul class="list-group list-group-flush">
        <li v-for="req in emergencyStore.activeRequests" :key="req.id" class="list-group-item d-flex justify-content-between align-items-center px-0">
          <span><span class="fw-bold text-danger me-2">{{ req.bloodType }}</span>{{ req.hospital }}</span>
          <span class="badge text-bg-danger">{{ req.urgency }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useEmergencyStore } from '@/stores/emergencyStore'
import MapPlaceholder from '@/components/maps/MapPlaceholder.vue'

const { t } = useI18n()
const emergencyStore = useEmergencyStore()
</script>
