<template>
  <div class="dash-stat-card p-4">
    <h6 class="fw-bold mb-3">استجابات المتبرعين</h6>
    <EmptyState v-if="!responses.length" message="لا يوجد متبرعون مستجيبون بعد" />
    <ul v-else class="list-group list-group-flush">
      <li v-for="r in responses" :key="r.id" class="list-group-item d-flex justify-content-between align-items-center px-0">
        <span>{{ r.name }}</span>
        <span class="badge text-bg-success">{{ r.status }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
// بيانات تجريبية إلى حين ربط hospital.js بالواجهة الخلفية الفعلية
const responses = []
</script>
