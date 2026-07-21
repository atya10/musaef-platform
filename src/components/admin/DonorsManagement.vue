<template>
  <div class="dash-stat-card p-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h6 class="fw-bold mb-0">إدارة المتبرعين</h6>
      <input v-model="search" type="text" class="form-control form-control-sm w-auto" placeholder="بحث..." />
    </div>
    <table class="table table-sm align-middle mb-0">
      <thead class="text-muted small"><tr><th>الاسم</th><th>الفصيلة</th><th>الحالة</th></tr></thead>
      <tbody>
        <tr v-for="d in filtered" :key="d.id">
          <td>{{ d.name }}</td>
          <td>{{ d.bloodType }}</td>
          <td><span class="badge text-bg-success">{{ d.status }}</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const search = ref('')
const donors = ref([
  { id: 1, name: 'أحمد سامي', bloodType: 'O+', status: 'نشط' },
  { id: 2, name: 'مريم خالد', bloodType: 'A-', status: 'نشط' },
  { id: 3, name: 'سامر يوسف', bloodType: 'B+', status: 'موقوف' }
])

const filtered = computed(() =>
  donors.value.filter((d) => d.name.toLowerCase().includes(search.value.toLowerCase()))
)
</script>
