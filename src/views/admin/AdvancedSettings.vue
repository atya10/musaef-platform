<template>
  <div>
    <h1 class="h4 fw-bold mb-4">{{ t('dashboard.adminNav.settings') }}</h1>
    <div class="dash-stat-card p-4" style="max-width: 640px;">
      <div class="mb-3 d-flex justify-content-between align-items-center">
        <span class="small fw-semibold">وضع الصيانة</span>
        <div class="form-check form-switch m-0">
          <input class="form-check-input" type="checkbox" role="switch" />
        </div>
      </div>
      <div class="mb-3 d-flex justify-content-between align-items-center">
        <span class="small fw-semibold">النسخ الاحتياطي التلقائي</span>
        <div class="form-check form-switch m-0">
          <input class="form-check-input" type="checkbox" role="switch" checked />
        </div>
      </div>
      <hr />
      <h6 class="fw-bold small mb-2">سجلات النظام (Logs)</h6>
      <div class="bg-light rounded-3 p-3 small font-monospace" style="max-height: 160px; overflow-y: auto;">
        [2026-07-19 10:02] تسجيل دخول ناجح - donor@musaef.app<br />
        [2026-07-19 09:41] تمت الموافقة على مستشفى الشفاء<br />
        [2026-07-19 08:15] تحديث مخزون الدم - مستشفى القدس
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
