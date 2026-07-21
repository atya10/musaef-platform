<template>
  <div>
    <h1 class="h4 fw-bold mb-4">{{ t('dashboard.hospitalNav.requests') }}</h1>
    <div class="row g-3">
      <div class="col-lg-6">
        <EmergencyLaunchForm />
      </div>
      <div class="col-lg-6 d-flex flex-column gap-3">
        <ActiveRequests />
        <DonorResponses />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import EmergencyLaunchForm from '@/components/hospital/EmergencyLaunchForm.vue'
import ActiveRequests from '@/components/hospital/ActiveRequests.vue'
import DonorResponses from '@/components/hospital/DonorResponses.vue'

const { t } = useI18n()
</script>
