<template>
  <div class="dash-stat-card p-4">
    <h6 class="fw-bold mb-3">جدول مخزون الدم</h6>
    <table class="table align-middle mb-0">
      <thead class="text-muted small">
        <tr><th>الفصيلة</th><th>الوحدات المتوفرة</th><th>الحالة</th></tr>
      </thead>
      <tbody>
        <tr v-for="item in hospitalStore.inventory" :key="item.bloodType">
          <td class="fw-bold">{{ item.bloodType }}</td>
          <td>{{ item.units }}</td>
          <td>
            <span
              class="badge rounded-pill"
              :class="{
                'text-bg-success': item.status === 'جيد',
                'text-bg-warning': item.status === 'منخفض',
                'text-bg-danger': item.status === 'حرج'
              }"
            >{{ item.status }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useHospitalStore } from '@/stores/hospitalStore'
const hospitalStore = useHospitalStore()
</script>
