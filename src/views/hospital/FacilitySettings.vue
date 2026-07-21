<template>
  <div>
    <h1 class="h4 fw-bold mb-4">{{ t('dashboard.hospitalNav.settings') }}</h1>
    <div class="dash-stat-card p-4" style="max-width: 560px;">
      <div class="mb-3">
        <label class="form-label small fw-semibold">اسم المنشأة</label>
        <input v-model="form.name" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label small fw-semibold">{{ t('auth.officialEmail') }}</label>
        <input v-model="form.email" type="email" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label small fw-semibold">{{ t('auth.phone') }}</label>
        <input v-model="form.phone" type="tel" class="form-control" />
      </div>
      <button class="btn btn-primary text-white">{{ t('common.save') }}</button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHospitalStore } from '@/stores/hospitalStore'

const { t } = useI18n()
const hospitalStore = useHospitalStore()
const form = reactive({ name: hospitalStore.facilityName, email: '', phone: '' })
</script>
