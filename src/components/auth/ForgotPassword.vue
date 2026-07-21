<template>
  <div class="small-form-card mx-auto bg-white rounded-4 shadow p-4" style="max-width: 480px;">
    <h2 class="h5 fw-bold mb-2">{{ t('auth.recoverTitle') }}</h2>
    <p class="text-muted small mb-4">{{ t('auth.recoverSubtitle') }}</p>

    <form @submit.prevent="submit">
      <div class="field-icon-wrap mb-3">
        <input v-model="email" type="email" class="form-control" :placeholder="t('auth.email')" required />
        <span class="field-icon"><svg class="icon"><use href="#i-mail" /></svg></span>
      </div>
      <button type="submit" class="btn btn-primary w-100 text-white" :disabled="sending">
        {{ t('auth.sendRecoverLink') }}
      </button>
    </form>

    <div v-if="sent" class="alert-success-musaef mt-3">
      <div class="check"><svg class="icon"><use href="#i-check" /></svg></div>
      <div>{{ t('auth.recoverSubtitle') }}</div>
    </div>

    <div class="text-center small text-muted mt-3">
      {{ t('auth.rememberedPassword') }}
      <router-link to="/auth?tab=login" class="text-danger fw-bold">{{ t('auth.loginTab') }}</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/stores/authStore'

const { t } = useI18n()
const authStore = useAuthStore()
const email = ref('')
const sending = ref(false)
const sent = ref(false)

async function submit() {
  sending.value = true
  try {
    await authStore.forgotPassword(email.value)
    sent.value = true
  } finally {
    sending.value = false
  }
}
</script>
