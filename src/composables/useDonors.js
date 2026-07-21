// src/composables/useDonors.js
// فلترة وترتيب المتبرعين

import { ref, computed } from 'vue'

export function useDonors(donors) {
  const search = ref('')
  const bloodTypeFilter = ref('')
  const sortBy = ref('name')

  const filtered = computed(() => {
    let list = [...(donors.value ?? donors)]

    if (search.value.trim()) {
      const q = search.value.trim().toLowerCase()
      list = list.filter((d) => d.name?.toLowerCase().includes(q))
    }
    if (bloodTypeFilter.value) {
      list = list.filter((d) => d.bloodType === bloodTypeFilter.value)
    }
    list.sort((a, b) => (a[sortBy.value] > b[sortBy.value] ? 1 : -1))
    return list
  })

  return { search, bloodTypeFilter, sortBy, filtered }
}
