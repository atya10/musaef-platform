<template>
  <div>
    <h1 class="h4 fw-bold mb-4">مركز التبرع</h1>

    <div class="row g-3 mb-4">
      <div class="col-md-8">
        <input v-model="search" type="text" class="form-control" placeholder="ابحث عن مستشفى أو مدينة..." />
      </div>
      <div class="col-md-4">
        <select v-model="bloodTypeFilter" class="form-select">
          <option value="">{{ t('common.all') }}</option>
          <option v-for="bt in bloodTypes" :key="bt" :value="bt">{{ bt }}</option>
        </select>
      </div>
    </div>

    <MapPlaceholder class="mb-4" label="خريطة مواقع التبرع القريبة" />

    <EmptyState v-if="!filtered.length" />
    <div v-else class="row g-3">
      <div class="col-md-6 col-lg-4" v-for="req in filtered" :key="req.id">
        <div class="case-card card border p-3 h-100">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="case-type">{{ req.bloodType }}</span>
            <span class="case-urgent">عاجل</span>
          </div>
          <h4 class="h6 fw-bold">{{ req.hospital }}</h4>
          <div class="small text-muted mb-1">{{ req.city }}</div>
          <div class="small text-muted mb-3">مطلوب: {{ req.unitsNeeded }} وحدات دم</div>
          <button class="btn btn-primary text-white btn-sm mt-auto">التبرع الآن</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useEmergencyStore } from '@/stores/emergencyStore'
import { BLOOD_TYPES } from '@/utils/constants'
import MapPlaceholder from '@/components/maps/MapPlaceholder.vue'
import EmptyState from '@/components/common/EmptyState.vue'

const { t } = useI18n()
const emergencyStore = useEmergencyStore()
const bloodTypes = BLOOD_TYPES
const search = ref('')
const bloodTypeFilter = ref('')

const filtered = computed(() =>
  emergencyStore.activeRequests.filter((r) => {
    const matchesSearch = !search.value || r.hospital.includes(search.value) || r.city.includes(search.value)
    const matchesType = !bloodTypeFilter.value || r.bloodType === bloodTypeFilter.value
    return matchesSearch && matchesType
  })
)
</script>
