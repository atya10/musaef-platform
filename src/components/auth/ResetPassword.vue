<template>
  <div class="small-form-card mx-auto bg-white rounded-4 shadow p-4" style="max-width: 480px;">
    <h2 class="h5 fw-bold mb-2">{{ t('auth.recoverTitle') }}</h2>
    <p class="text-muted small mb-4">{{ t('auth.password') }} / {{ t('auth.confirmPassword') }}</p>

    <form @submit.prevent="submit">
      <div class="field-icon-wrap mb-3">
        <input v-model="password" type="password" class="form-control" :placeholder="t('auth.password')" required />
        <span class="field-icon"><svg class="icon"><use href="#i-lock" /></svg></span>
      </div>
      <div class="field-icon-wrap mb-3">
        <input v-model="confirmPassword" type="password" class="form-control" :placeholder="t('auth.confirmPassword')" required />
        <span class="field-icon"><svg class="icon"><use href="#i-lock" /></svg></span>
      </div>
      <button type="submit" class="btn btn-primary w-100 text-white">{{ t('common.save') }}</button>
    </form>

    <div v-if="error" class="text-danger small mt-3">{{ error }}</div>
    <div v-if="done" class="alert-success-musaef mt-3">
      <div class="check"><svg class="icon"><use href="#i-check" /></svg></div>
      <div>{{ t('auth.donorSuccessBody') }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const password = ref('')
const confirmPassword = ref('')
const error = ref('')
const done = ref(false)

function submit() {
  if (password.value !== confirmPassword.value) {
    error.value = 'كلمتا المرور غير متطابقتين'
    return
  }
  error.value = ''
  done.value = true
}
</script>
