<template>
  <div class="dash-stat-card p-4 text-center">
    <svg class="icon mb-2 text-danger" style="width:28px;height:28px;"><use :href="`#${icon}`" /></svg>
    <h3 class="fw-bold mb-0">{{ value }}</h3>
    <p class="text-muted small mb-0">{{ label }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, required: true },
  value: { type: [String, Number], required: true },
  label: { type: String, required: true }
})
</script>
