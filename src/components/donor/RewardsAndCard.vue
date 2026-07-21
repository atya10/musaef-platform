<template>
  <div class="dash-stat-card p-4 text-center">
    <svg class="icon mb-2 text-danger" style="width:32px;height:32px;"><use href="#i-gift" /></svg>
    <h3 class="fw-bold mb-0">{{ donorStore.points }}</h3>
    <p class="text-muted small mb-0">نقطة مكافآت</p>
  </div>
</template>

<script setup>
import { useDonorStore } from '@/stores/donorStore'
const donorStore = useDonorStore()
</script>
