<template>
  <div>
    <h1 class="h4 fw-bold mb-4">{{ t('dashboard.adminNav.accounts') }}</h1>
    <div class="row g-3">
      <div class="col-lg-6"><DonorsManagement /></div>
      <div class="col-lg-6"><Hospitals /></div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import DonorsManagement from '@/components/admin/DonorsManagement.vue'
import Hospitals from '@/components/admin/Hospitals.vue'

const { t } = useI18n()
</script>
