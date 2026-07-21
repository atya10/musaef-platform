<template>
  <div>
    <div class="auth-tabs">
      <button class="tab-link" :class="{ active: tab === 'register' }" @click="tab = 'register'">{{ t('auth.registerTab') }}</button>
      <button class="tab-link" :class="{ active: tab === 'login' }" @click="tab = 'login'">{{ t('auth.loginTab') }}</button>
    </div>

    <!-- ============ LOGIN ============ -->
    <form v-if="tab === 'login'" @submit.prevent="handleLogin">
      <div class="field-icon-wrap mb-3">
        <label class="form-label small fw-semibold">{{ t('auth.email') }}</label>
        <input v-model="loginForm.email" type="email" class="form-control" :placeholder="t('auth.email')" required />
        <span class="field-icon"><svg class="icon"><use href="#i-mail" /></svg></span>
      </div>
      <div class="field-icon-wrap mb-3">
        <label class="form-label small fw-semibold">{{ t('auth.password') }}</label>
        <input v-model="loginForm.password" type="password" class="form-control" :placeholder="t('auth.password')" required />
        <span class="field-icon"><svg class="icon"><use href="#i-lock" /></svg></span>
      </div>

      <div class="d-flex justify-content-between align-items-center mb-3 small">
        <button type="button" class="btn btn-link p-0 text-danger" @click="showForgot = true">{{ t('auth.forgotPassword') }}</button>
        <label class="d-flex align-items-center gap-2">
          {{ t('auth.rememberMe') }}
          <input type="checkbox" class="form-check-input mt-0" checked />
        </label>
      </div>

      <div v-if="formError" class="text-danger small mb-3">{{ formError }}</div>

      <button type="submit" class="btn btn-primary text-white w-100" :disabled="submitting">
        {{ t('auth.loginBtn') }}
      </button>

      <!-- role switch for demo purposes since there is no real backend yet -->
      <div class="text-center small text-muted mt-3">
        دخول تجريبي كـ:
        <button type="button" class="btn btn-sm btn-outline-secondary mx-1" @click="quickLogin('donor')">متبرع</button>
        <button type="button" class="btn btn-sm btn-outline-secondary mx-1" @click="quickLogin('hospital')">مستشفى</button>
        <button type="button" class="btn btn-sm btn-outline-secondary mx-1" @click="quickLogin('admin')">إدارة</button>
      </div>

      <div class="text-center small text-muted my-3">{{ t('auth.orLoginVia') }}</div>
      <div class="d-flex gap-2 mb-3">
        <button type="button" class="btn btn-outline-secondary btn-sm flex-fill d-flex align-items-center justify-content-center gap-2">
          <svg class="brand-icon"><use href="#i-google-brand" /></svg> Google
        </button>
        <button type="button" class="btn btn-outline-secondary btn-sm flex-fill d-flex align-items-center justify-content-center gap-2">
          <svg class="brand-icon"><use href="#i-apple-brand" /></svg> Apple
        </button>
        <button type="button" class="btn btn-outline-secondary btn-sm flex-fill d-flex align-items-center justify-content-center gap-2">
          <svg class="brand-icon"><use href="#i-facebook-brand" /></svg> Facebook
        </button>
      </div>

      <div class="text-center small text-muted">
        {{ t('auth.noAccount') }} <button type="button" class="btn btn-link p-0 text-danger fw-bold" @click="tab = 'register'">{{ t('auth.createAccount') }}</button>
      </div>
    </form>

    <!-- ============ REGISTER: ACCOUNT FORM ============ -->
    <form v-else-if="!showOrgForm && !donorSuccess" @submit.prevent="handleAccountSubmit">
      <div class="mb-3">
        <label class="form-label small fw-semibold">{{ t('auth.fullName') }}</label>
        <div class="field-icon-wrap">
          <input v-model="accountForm.name" type="text" class="form-control" required />
          <span class="field-icon"><svg class="icon"><use href="#i-person" /></svg></span>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label small fw-semibold">{{ t('auth.email') }}</label>
        <div class="field-icon-wrap">
          <input v-model="accountForm.email" type="email" class="form-control" required />
          <span class="field-icon"><svg class="icon"><use href="#i-mail" /></svg></span>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label small fw-semibold">{{ t('auth.phone') }}</label>
        <div class="field-icon-wrap">
          <input v-model="accountForm.phone" type="tel" class="form-control" required />
          <span class="field-icon"><svg class="icon"><use href="#i-phone" /></svg></span>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label small fw-semibold">{{ t('auth.password') }}</label>
        <div class="field-icon-wrap">
          <input v-model="accountForm.password" type="password" class="form-control" required />
          <span class="field-icon"><svg class="icon"><use href="#i-lock" /></svg></span>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label small fw-semibold">{{ t('auth.confirmPassword') }}</label>
        <div class="field-icon-wrap">
          <input v-model="accountForm.confirmPassword" type="password" class="form-control" required />
          <span class="field-icon"><svg class="icon"><use href="#i-lock" /></svg></span>
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label small fw-semibold">{{ t('auth.accountType') }}</label>
        <div class="d-flex gap-2">
          <label class="radio-card" :class="{ selected: accountType === 'org' }">
            <span class="radio-card-label"><svg class="icon"><use href="#i-building" /></svg> {{ t('auth.orgOption') }}</span>
            <input type="radio" value="org" v-model="accountType" @change="onTypeChange" />
          </label>
          <label class="radio-card" :class="{ selected: accountType === 'donor' }">
            <span class="radio-card-label"><svg class="icon"><use href="#i-person" /></svg> {{ t('auth.donorOption') }}</span>
            <input type="radio" value="donor" v-model="accountType" @change="onTypeChange" />
          </label>
        </div>
      </div>

      <!-- Donor extra fields -->
      <div v-if="accountType === 'donor'">
        <p class="text-danger fw-bold small mb-3">{{ t('auth.donorExtraTitle') }}</p>
        <div class="row g-3 mb-3">
          <div class="col-md-4">
            <label class="form-label small fw-semibold">{{ t('auth.bloodType') }}</label>
            <select v-model="accountForm.bloodType" class="form-select">
              <option value="" disabled selected>{{ t('auth.bloodType') }}</option>
              <option v-for="bt in bloodTypes" :key="bt" :value="bt">{{ bt }}</option>
            </select>
          </div>
          <div class="col-md-4">
            <label class="form-label small fw-semibold">{{ t('auth.birthDate') }}</label>
            <input v-model="accountForm.birthDate" type="date" class="form-control" />
          </div>
          <div class="col-md-4">
            <label class="form-label small fw-semibold">{{ t('auth.gender') }}</label>
            <select v-model="accountForm.gender" class="form-select">
              <option value="" disabled selected>{{ t('auth.gender') }}</option>
              <option value="male">{{ t('auth.male') }}</option>
              <option value="female">{{ t('auth.female') }}</option>
            </select>
          </div>
        </div>
      </div>

      <label class="d-flex align-items-center gap-2 small mb-3">
        <input type="checkbox" class="form-check-input mt-0" v-model="agreeTerms" />
        {{ t('auth.agreeTerms') }}
      </label>

      <div v-if="formError" class="text-danger small mb-3">{{ formError }}</div>

      <button type="submit" class="btn btn-primary text-white w-100" :disabled="submitting">{{ t('auth.createAccountBtn') }}</button>
      <div class="text-center small text-muted mt-3">
        {{ t('auth.alreadyHaveAccount') }} <button type="button" class="btn btn-link p-0 text-danger fw-bold" @click="tab = 'login'">{{ t('auth.loginTab') }}</button>
      </div>
    </form>

    <!-- ============ DONOR SUCCESS ============ -->
    <div v-else-if="donorSuccess" class="alert-success-musaef">
      <div class="check"><svg class="icon"><use href="#i-check" /></svg></div>
      <div>
        <strong>{{ t('auth.donorSuccessTitle') }}</strong>
        {{ t('auth.donorSuccessBody') }}
      </div>
    </div>

    <!-- ============ ORGANIZATION FORM ============ -->
    <form v-else @submit.prevent="handleOrgSubmit">
      <button type="button" class="back-link" @click="resetToChooser">‹ {{ t('auth.backToChooser') }}</button>

      <div class="mb-3">
        <label class="form-label small fw-semibold">{{ t('auth.orgName') }}</label>
        <div class="field-icon-wrap">
          <input v-model="orgForm.orgName" type="text" class="form-control" required />
          <span class="field-icon"><svg class="icon"><use href="#i-building" /></svg></span>
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label small fw-semibold">{{ t('auth.orgType') }}</label>
        <div class="d-flex gap-2">
          <label class="radio-card" :class="{ selected: orgForm.orgType === 'bloodbank' }">
            <span class="radio-card-label">{{ t('auth.bloodBank') }}</span>
            <input type="radio" value="bloodbank" v-model="orgForm.orgType" />
          </label>
          <label class="radio-card" :class="{ selected: orgForm.orgType === 'hospital' }">
            <span class="radio-card-label">{{ t('auth.hospital') }}</span>
            <input type="radio" value="hospital" v-model="orgForm.orgType" />
          </label>
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label small fw-semibold">{{ t('auth.licenseNumber') }}</label>
        <div class="field-icon-wrap">
          <input v-model="orgForm.licenseNumber" type="text" class="form-control" placeholder="Medical License Number" />
          <span class="field-icon"><svg class="icon"><use href="#i-idcard" /></svg></span>
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label small fw-semibold">{{ t('auth.responsibleName') }}</label>
        <div class="field-icon-wrap">
          <input v-model="orgForm.responsibleName" type="text" class="form-control" />
          <span class="field-icon"><svg class="icon"><use href="#i-person" /></svg></span>
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label small fw-semibold">{{ t('auth.officialEmail') }}</label>
        <div class="field-icon-wrap">
          <input v-model="orgForm.officialEmail" type="email" class="form-control" />
          <span class="field-icon"><svg class="icon"><use href="#i-mail" /></svg></span>
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label small fw-semibold">{{ t('auth.phone') }}</label>
        <div class="field-icon-wrap">
          <input v-model="orgForm.phone" type="tel" class="form-control" />
          <span class="field-icon"><svg class="icon"><use href="#i-phone" /></svg></span>
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label small fw-semibold">{{ t('auth.uploadLicense') }}</label>
        <label class="upload-box w-100 m-0">
          <input type="file" class="d-none" @change="orgForm.file = $event.target.files[0]" />
          <div class="upload-icon"><svg class="icon"><use href="#i-upload" /></svg></div>
          {{ t('auth.uploadHint') }}
          <br />{{ t('auth.uploadFormats') }}
        </label>
      </div>

      <button v-if="!orgSuccess" type="submit" class="btn btn-primary text-white w-100" :disabled="submitting">
        {{ t('auth.submitOrgRequest') }}
      </button>

      <div v-if="orgSuccess" class="alert-success-musaef mt-3">
        <div class="check"><svg class="icon"><use href="#i-check" /></svg></div>
        <div>
          <strong>{{ t('auth.orgSuccessTitle') }}</strong>
          {{ t('auth.orgSuccessBody') }}
        </div>
      </div>
    </form>

    <Modal :show="showForgot" title="" @close="showForgot = false">
      <ForgotPassword />
    </Modal>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import { useAuthStore } from '@/stores/authStore'
import { BLOOD_TYPES, USER_ROLES } from '@/utils/constants'
import Modal from '@/components/common/Modal.vue'
import ForgotPassword from '@/components/auth/ForgotPassword.vue'

const { t } = useI18n()
const route = useRoute()
const { submitting, formError, submitLogin, redirectByRole } = useAuth()
const authStore = useAuthStore()
const bloodTypes = BLOOD_TYPES

const tab = ref(route.query.tab === 'register' ? 'register' : 'login')
const showForgot = ref(false)

// ----- login -----
const loginForm = reactive({ email: '', password: '' })

async function handleLogin() {
  await submitLogin(loginForm)
}

async function quickLogin(role) {
  await authStore.login({ email: `demo-${role}@musaef.app`, password: 'demo1234', role })
  await redirectByRole(role)
}

// ----- register: account (donor) -----
const accountType = ref('')
const donorSuccess = ref(false)
const agreeTerms = ref(true)
const accountForm = reactive({
  name: '', email: '', phone: '', password: '', confirmPassword: '',
  bloodType: '', birthDate: '', gender: ''
})

function onTypeChange() {
  // handled reactively via v-if in template
}

async function handleAccountSubmit() {
  formError.value = ''
  if (accountForm.password !== accountForm.confirmPassword) {
    formError.value = 'كلمتا المرور غير متطابقتين'
    return
  }
  await authStore.registerDonor({ ...accountForm, role: USER_ROLES.DONOR })
  donorSuccess.value = true
}

// ----- register: organization -----
const showOrgForm = computed(() => accountType.value === 'org')
const orgSuccess = ref(false)
const orgForm = reactive({
  orgName: '', orgType: 'bloodbank', licenseNumber: '', responsibleName: '',
  officialEmail: '', phone: '', file: null
})

async function handleOrgSubmit() {
  await authStore.registerOrganization(orgForm)
  orgSuccess.value = true
}

function resetToChooser() {
  accountType.value = ''
  orgSuccess.value = false
}
</script>
