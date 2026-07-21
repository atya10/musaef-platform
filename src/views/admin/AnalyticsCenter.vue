<template>
  <div>
    <h1 class="h4 fw-bold mb-4">{{ t('dashboard.adminNav.analytics') }}</h1>
    <div class="row g-3">
      <div class="col-lg-6">
        <div class="dash-stat-card p-4">
          <h6 class="fw-bold mb-3">توقع نقص فصائل الدم</h6>
          <SimpleBarChart :data="shortageForecast" />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="dash-stat-card p-4">
          <h6 class="fw-bold mb-3">تقارير الذكاء الاصطناعي</h6>
          <ul class="list-group list-group-flush small">
            <li class="list-group-item px-0">من المتوقع ارتفاع الطلب على فصيلة O- خلال الأسبوعين القادمين.</li>
            <li class="list-group-item px-0">انخفاض ملحوظ في تبرعات فصيلة AB- هذا الشهر.</li>
            <li class="list-group-item px-0">لم يتم رصد أي حالات تلاعب مشبوهة هذا الأسبوع.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import SimpleBarChart from '@/components/charts/SimpleBarChart.vue'

const { t } = useI18n()

const shortageForecast = [
  { label: 'A+', value: 30 }, { label: 'A-', value: 70 }, { label: 'B+', value: 40 },
  { label: 'B-', value: 85 }, { label: 'AB+', value: 20 }, { label: 'AB-', value: 90 },
  { label: 'O+', value: 35 }, { label: 'O-', value: 95 }
]
</script>
