<template>
  <div class="dash-stat-card p-4">
    <h6 class="fw-bold mb-3">النداءات النشطة</h6>
    <EmptyState v-if="!emergencyStore.activeRequests.length" />
    <ul v-else class="list-group list-group-flush">
      <li v-for="req in emergencyStore.activeRequests" :key="req.id" class="list-group-item d-flex justify-content-between align-items-center px-0">
        <div>
          <span class="fw-bold text-danger me-2">{{ req.bloodType }}</span>
          <span class="small text-muted">{{ req.hospital }} — {{ timeAgo(req.createdAt) }}</span>
        </div>
        <span class="badge text-bg-light">{{ req.unitsNeeded }} وحدة</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useEmergencyStore } from '@/stores/emergencyStore'
import { timeAgo } from '@/utils/dateFormatter'
import EmptyState from '@/components/common/EmptyState.vue'

const emergencyStore = useEmergencyStore()
</script>
