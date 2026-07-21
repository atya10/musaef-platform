<template>
  <div class="d-flex flex-column align-items-center justify-content-center py-5 text-muted">
    <div class="spinner-border text-danger mb-3" role="status"></div>
    <span>{{ label || t('common.loading') }}</span>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
defineProps({ label: { type: String, default: '' } })
const { t } = useI18n()
</script>
