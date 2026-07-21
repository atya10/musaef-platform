<template>
  <div>
    <h1 class="h4 fw-bold mb-4">{{ t('dashboard.donorNav.achievements') }}</h1>
    <div class="row g-3">
      <div class="col-lg-4">
        <DonorQRCard />
      </div>
      <div class="col-lg-4">
        <RewardsAndCard />
      </div>
      <div class="col-lg-4">
        <div class="dash-stat-card p-4 text-center">
          <svg class="icon mb-2 text-danger" style="width:32px;height:32px;"><use href="#i-shield" /></svg>
          <h3 class="fw-bold mb-0">{{ donorStore.totalDonations }}</h3>
          <p class="text-muted small mb-0">شهادات إنقاذ حياة</p>
        </div>
      </div>
      <div class="col-12">
        <DonationHistory />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useDonorStore } from '@/stores/donorStore'
import DonorQRCard from '@/components/donor/DonorQRCard.vue'
import RewardsAndCard from '@/components/donor/RewardsAndCard.vue'
import DonationHistory from '@/components/donor/DonationHistory.vue'

const { t } = useI18n()
const donorStore = useDonorStore()
</script>
