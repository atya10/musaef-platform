<template>
  <IconSprite />
  <router-view />
</template>

<script setup>
// App.vue is intentionally minimal: every route is wrapped by its own
// layout (PublicLayout / AuthLayout / DonorLayout / HospitalLayout / AdminLayout)
// as defined in src/router/index.js, following the project's architecture doc.
import IconSprite from '@/components/common/IconSprite.vue'
</script>
