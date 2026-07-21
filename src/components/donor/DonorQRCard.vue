<template>
  <div class="dash-stat-card p-4 text-center">
    <div class="mx-auto mb-3 d-flex align-items-center justify-content-center bg-light rounded-3" style="width:140px;height:140px;">
      <i class="bi bi-qr-code" style="font-size: 90px;"></i>
    </div>
    <h6 class="fw-bold mb-1">{{ donorStore.level }}</h6>
    <p class="text-muted small mb-0">{{ t('auth.bloodType') }}: <strong>{{ donorStore.bloodType }}</strong></p>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useDonorStore } from '@/stores/donorStore'

const { t } = useI18n()
const donorStore = useDonorStore()
</script>
