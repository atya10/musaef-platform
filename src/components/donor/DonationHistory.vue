<template>
  <div class="dash-stat-card p-4">
    <h6 class="fw-bold mb-3">سجل التبرعات</h6>
    <EmptyState v-if="!donorStore.donationHistory.length" />
    <table v-else class="table table-sm align-middle mb-0">
      <thead class="text-muted small">
        <tr><th>التاريخ</th><th>المستشفى</th><th>الوحدات</th></tr>
      </thead>
      <tbody>
        <tr v-for="item in donorStore.donationHistory" :key="item.id">
          <td>{{ formatDate(item.date) }}</td>
          <td>{{ item.hospital }}</td>
          <td>{{ item.units }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useDonorStore } from '@/stores/donorStore'
import { formatDate } from '@/utils/dateFormatter'
import EmptyState from '@/components/common/EmptyState.vue'

const donorStore = useDonorStore()
</script>
