<template>
  <div class="dash-stat-card p-4">
    <h6 class="fw-bold mb-3"><svg class="icon text-danger me-1"><use href="#i-megaphone" /></svg> إطلاق نداء طارئ</h6>
    <form @submit.prevent="submit">
      <div class="row g-3">
        <div class="col-md-6">
          <label class="form-label small fw-semibold">{{ t('auth.bloodType') }}</label>
          <select v-model="form.bloodType" class="form-select" required>
            <option value="" disabled selected>{{ t('auth.bloodType') }}</option>
            <option v-for="bt in bloodTypes" :key="bt" :value="bt">{{ bt }}</option>
          </select>
        </div>
        <div class="col-md-6">
          <label class="form-label small fw-semibold">عدد الوحدات المطلوبة</label>
          <input v-model.number="form.unitsNeeded" type="number" min="1" class="form-control" required />
        </div>
        <div class="col-12">
          <label class="form-label small fw-semibold">درجة الإلحاح</label>
          <div class="d-flex gap-2">
            <button
              v-for="level in urgencyLevels"
              :key="level.key"
              type="button"
              class="btn btn-sm"
              :class="form.urgency === level.key ? `btn-${level.color}` : `btn-outline-${level.color}`"
              @click="form.urgency = level.key"
            >{{ level.label_ar }}</button>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary text-white mt-4">إرسال النداء</button>
    </form>
    <div v-if="sent" class="alert-success-musaef mt-3">
      <div class="check"><svg class="icon"><use href="#i-check" /></svg></div>
      <div>تم إطلاق النداء الطارئ بنجاح وسيتم إشعار المتبرعين القريبين المتوافقين.</div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { BLOOD_TYPES, URGENCY_LEVELS } from '@/utils/constants'
import { useEmergencyStore } from '@/stores/emergencyStore'

const { t } = useI18n()
const emergencyStore = useEmergencyStore()
const bloodTypes = BLOOD_TYPES
const urgencyLevels = Object.values(URGENCY_LEVELS)
const sent = ref(false)

const form = reactive({ bloodType: '', unitsNeeded: 1, urgency: 'urgent' })

function submit() {
  emergencyStore.activeRequests.unshift({
    id: Date.now(),
    bloodType: form.bloodType,
    hospital: 'حسابك',
    city: '-',
    unitsNeeded: form.unitsNeeded,
    createdAt: Date.now(),
    urgency: form.urgency
  })
  sent.value = true
}
</script>
