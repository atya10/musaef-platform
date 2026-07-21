// src/composables/useHospitals.js
// فلترة وترتيب المستشفيات

import { ref, computed } from 'vue'

export function useHospitals(hospitals) {
  const search = ref('')
  const cityFilter = ref('')

  const filtered = computed(() => {
    let list = [...(hospitals.value ?? hospitals)]
    if (search.value.trim()) {
      const q = search.value.trim().toLowerCase()
      list = list.filter((h) => h.name?.toLowerCase().includes(q))
    }
    if (cityFilter.value) {
      list = list.filter((h) => h.city === cityFilter.value)
    }
    return list
  })

  return { search, cityFilter, filtered }
}
