<template>
  <div>
    <h1 class="h4 fw-bold mb-4">{{ t('dashboard.donorNav.settings') }}</h1>
    <div class="row g-3">
      <div class="col-lg-6">
        <Profile />
      </div>
      <div class="col-lg-6">
        <div class="dash-stat-card p-4">
          <h6 class="fw-bold mb-3">تغيير كلمة المرور</h6>
          <form @submit.prevent="passwordChanged = true">
            <div class="mb-3">
              <label class="form-label small fw-semibold">كلمة المرور الحالية</label>
              <input type="password" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold">كلمة المرور الجديدة</label>
              <input type="password" class="form-control" />
            </div>
            <button class="btn btn-primary text-white">{{ t('common.save') }}</button>
            <div v-if="passwordChanged" class="alert-success-musaef mt-3">
              <div class="check"><svg class="icon"><use href="#i-check" /></svg></div>
              <div>تم تحديث كلمة المرور بنجاح.</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Profile from '@/components/donor/Profile.vue'

const { t } = useI18n()
const passwordChanged = ref(false)
</script>
