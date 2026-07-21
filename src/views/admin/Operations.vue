<template>
  <div>
    <h1 class="h4 fw-bold mb-4">{{ t('dashboard.adminNav.operations') }}</h1>
    <div class="row g-3">
      <div class="col-lg-6">
        <div class="dash-stat-card p-4">
          <h6 class="fw-bold mb-3"><svg class="icon text-danger"><use href="#i-gift" /></svg> إدارة المكافآت</h6>
          <p class="small text-muted">إدارة نقاط المكافآت وقواعد منحها للمتبرعين النشطين.</p>
          <button class="btn btn-outline-secondary btn-sm">إضافة مكافأة جديدة</button>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="dash-stat-card p-4">
          <h6 class="fw-bold mb-3"><svg class="icon text-danger"><use href="#i-bell" /></svg> الإشعارات الجماعية</h6>
          <textarea class="form-control mb-3" rows="3" placeholder="اكتب نص الإشعار الجماعي..."></textarea>
          <button class="btn btn-primary text-white btn-sm">إرسال للجميع</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
