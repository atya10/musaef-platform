<template>
  <div class="text-center py-5 text-muted">
    <svg class="icon mb-3" style="width:42px;height:42px;"><use href="#i-search" /></svg>
    <p class="mb-0">{{ message || t('common.noData') }}</p>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
defineProps({ message: { type: String, default: '' } })
const { t } = useI18n()
</script>
