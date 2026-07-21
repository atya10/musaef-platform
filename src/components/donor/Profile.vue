<template>
  <div class="dash-stat-card p-4">
    <h6 class="fw-bold mb-3">{{ t('dashboard.donorNav.settings') }}</h6>
    <form @submit.prevent>
      <div class="mb-3">
        <label class="form-label small fw-semibold">{{ t('auth.fullName') }}</label>
        <input v-model="form.name" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label small fw-semibold">{{ t('auth.email') }}</label>
        <input v-model="form.email" type="email" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label small fw-semibold">{{ t('auth.bloodType') }}</label>
        <select v-model="form.bloodType" class="form-select">
          <option v-for="bt in bloodTypes" :key="bt" :value="bt">{{ bt }}</option>
        </select>
      </div>
      <button class="btn btn-primary text-white">{{ t('common.save') }}</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/stores/authStore'
import { useDonorStore } from '@/stores/donorStore'
import { BLOOD_TYPES } from '@/utils/constants'

const { t } = useI18n()
const authStore = useAuthStore()
const donorStore = useDonorStore()
const bloodTypes = BLOOD_TYPES

const form = reactive({
  name: authStore.user?.name || '',
  email: authStore.user?.email || '',
  bloodType: donorStore.bloodType
})
</script>
