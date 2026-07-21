<template>
  <div class="dash-stat-card p-4">
    <h6 class="fw-bold mb-3">إدارة المستشفيات</h6>
    <table class="table table-sm align-middle mb-0">
      <thead class="text-muted small"><tr><th>الاسم</th><th>النوع</th><th>الحالة</th><th></th></tr></thead>
      <tbody>
        <tr v-for="h in hospitals" :key="h.id">
          <td>{{ h.name }}</td>
          <td>{{ h.type }}</td>
          <td>
            <span class="badge" :class="h.approved ? 'text-bg-success' : 'text-bg-warning'">
              {{ h.approved ? 'مُعتمد' : 'قيد المراجعة' }}
            </span>
          </td>
          <td>
            <button v-if="!h.approved" class="btn btn-sm btn-outline-success" @click="h.approved = true">قبول</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const hospitals = ref([
  { id: 1, name: 'مستشفى الشفاء', type: 'مستشفى', approved: true },
  { id: 2, name: 'بنك دم القدس', type: 'بنك دم', approved: false }
])
</script>
