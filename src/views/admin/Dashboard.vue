<template>
  <div>
    <h1 class="h4 fw-bold mb-4">لوحة تحكم الإدارة</h1>
    <div class="row g-3 mb-4">
      <div class="col-md-3 col-6"><AdminStatsCard icon="i-people" :value="dashboardStore.stats.donorsHelped" label="المتبرعون" /></div>
      <div class="col-md-3 col-6"><AdminStatsCard icon="i-building" :value="dashboardStore.stats.hospitalsCount" label="المستشفيات" /></div>
      <div class="col-md-3 col-6"><AdminStatsCard icon="i-drop" :value="dashboardStore.stats.donationRequests" label="طلبات التبرع" /></div>
      <div class="col-md-3 col-6"><AdminStatsCard icon="i-heart" :value="dashboardStore.stats.casesSupported" label="حالات تم دعمها" /></div>
    </div>
    <div class="row g-3">
      <div class="col-lg-8">
        <div class="dash-stat-card p-4">
          <h6 class="fw-bold mb-3">الطلبات الشهرية</h6>
          <SimpleBarChart :data="monthlyData" />
        </div>
      </div>
      <div class="col-lg-4">
        <FraudAlertCard />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useDashboardStore } from '@/stores/dashboardStore'
import AdminStatsCard from '@/components/admin/AdminStatsCard.vue'
import FraudAlertCard from '@/components/admin/FraudAlertCard.vue'
import SimpleBarChart from '@/components/charts/SimpleBarChart.vue'

const dashboardStore = useDashboardStore()

const monthlyData = [
  { label: 'يناير', value: 620 }, { label: 'فبراير', value: 800 }, { label: 'مارس', value: 540 },
  { label: 'أبريل', value: 910 }, { label: 'مايو', value: 760 }, { label: 'يونيو', value: 1020 }
]

onMounted(() => dashboardStore.fetchStats())
</script>
