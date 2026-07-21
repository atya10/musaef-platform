<template>
  <div>
    <h1 class="h4 fw-bold mb-1">{{ t('dashboard.welcome') }}, {{ authStore.user?.name }} 👋</h1>
    <p class="text-muted mb-4">فصيلة دمك <strong>{{ donorStore.bloodType }}</strong> — شكراً لكونك جزءاً من مجتمع المتبرعين.</p>

    <div class="row g-3 mb-4">
      <div class="col-md-3 col-6">
        <div class="dash-stat-card p-3 text-center">
          <div class="fw-bold fs-4 text-danger">{{ donorStore.points }}</div>
          <div class="small text-muted">نقاط المكافآت</div>
        </div>
      </div>
      <div class="col-md-3 col-6">
        <div class="dash-stat-card p-3 text-center">
          <div class="fw-bold fs-4 text-danger">{{ donorStore.totalDonations }}</div>
          <div class="small text-muted">مرات التبرع</div>
        </div>
      </div>
      <div class="col-md-3 col-6">
        <div class="dash-stat-card p-3 text-center">
          <div class="fw-bold fs-6 text-success">{{ donorStore.eligibleToDonate ? 'مؤهل للتبرع الآن' : 'غير مؤهل حالياً' }}</div>
          <div class="small text-muted">حالة الأهلية</div>
        </div>
      </div>
      <div class="col-md-3 col-6">
        <div class="dash-stat-card p-3 text-center">
          <div class="fw-bold fs-6">{{ donorStore.nextEligibleDate }}</div>
          <div class="small text-muted">تاريخ الأهلية القادم</div>
        </div>
      </div>
    </div>

    <div class="row g-3">
      <div class="col-lg-8">
        <div class="dash-stat-card p-4">
          <h6 class="fw-bold mb-3">أقرب طلبات التبرع</h6>
          <ul class="list-group list-group-flush">
            <li v-for="req in emergencyStore.activeRequests.slice(0, 4)" :key="req.id" class="list-group-item d-flex justify-content-between align-items-center px-0">
              <div>
                <span class="fw-bold text-danger me-2">{{ req.bloodType }}</span>
                <span class="small text-muted">{{ req.hospital }} — {{ req.city }}</span>
              </div>
              <router-link to="/donor/donation-center" class="btn btn-sm btn-outline-danger">استجابة</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-4">
        <DonorQRCard />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/stores/authStore'
import { useDonorStore } from '@/stores/donorStore'
import { useEmergencyStore } from '@/stores/emergencyStore'
import DonorQRCard from '@/components/donor/DonorQRCard.vue'

const { t } = useI18n()
const authStore = useAuthStore()
const donorStore = useDonorStore()
const emergencyStore = useEmergencyStore()

onMounted(() => {
  donorStore.fetchDashboard()
  emergencyStore.fetchActive()
})
</script>
