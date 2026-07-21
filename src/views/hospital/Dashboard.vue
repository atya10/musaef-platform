<template>
  <div>
    <h1 class="h4 fw-bold mb-1">{{ t('dashboard.welcome') }}, {{ hospitalStore.facilityName }}</h1>
    <p class="text-muted mb-4">نظرة عامة على حالة المنشأة اليوم</p>

    <div class="row g-3 mb-4">
      <div class="col-md-3 col-6">
        <div class="dash-stat-card p-3 text-center">
          <div class="fw-bold fs-4 text-danger">{{ hospitalStore.inventory.reduce((s, i) => s + i.units, 0) }}</div>
          <div class="small text-muted">إجمالي وحدات الدم</div>
        </div>
      </div>
      <div class="col-md-3 col-6">
        <div class="dash-stat-card p-3 text-center">
          <div class="fw-bold fs-4 text-danger">{{ emergencyStore.activeRequests.length }}</div>
          <div class="small text-muted">نداءات نشطة</div>
        </div>
      </div>
      <div class="col-md-3 col-6">
        <div class="dash-stat-card p-3 text-center">
          <div class="fw-bold fs-4 text-danger">{{ hospitalStore.criticalTypes.length }}</div>
          <div class="small text-muted">فصائل بحالة حرجة</div>
        </div>
      </div>
      <div class="col-md-3 col-6">
        <div class="dash-stat-card p-3 text-center">
          <div class="fw-bold fs-4 text-success">A+</div>
          <div class="small text-muted">توقع الذكاء الاصطناعي: طلب مرتفع قريباً</div>
        </div>
      </div>
    </div>

    <div class="row g-3">
      <div class="col-lg-7">
        <div class="dash-stat-card p-4">
          <h6 class="fw-bold mb-3">مخزون الدم حسب الفصيلة</h6>
          <SimpleBarChart :data="chartData" />
        </div>
      </div>
      <div class="col-lg-5">
        <ActiveRequests />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHospitalStore } from '@/stores/hospitalStore'
import { useEmergencyStore } from '@/stores/emergencyStore'
import SimpleBarChart from '@/components/charts/SimpleBarChart.vue'
import ActiveRequests from '@/components/hospital/ActiveRequests.vue'

const { t } = useI18n()
const hospitalStore = useHospitalStore()
const emergencyStore = useEmergencyStore()

const chartData = computed(() =>
  hospitalStore.inventory.map((i) => ({ label: i.bloodType, value: i.units }))
)

onMounted(() => {
  hospitalStore.fetchInventory()
  emergencyStore.fetchActive()
})
</script>
