<template>
  <div class="dash-stat-card p-4 border-danger-subtle">
    <h6 class="fw-bold mb-3 text-danger"><svg class="icon"><use href="#i-shield" /></svg> تنبيهات كشف التلاعب</h6>
    <EmptyState v-if="!alerts.length" message="لا توجد تنبيهات حالياً" />
    <ul v-else class="list-group list-group-flush">
      <li v-for="a in alerts" :key="a.id" class="list-group-item px-0 small">{{ a.message }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import EmptyState from '@/components/common/EmptyState.vue'

const alerts = ref([])
</script>
