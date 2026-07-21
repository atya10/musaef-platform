<template>
  <nav v-if="totalPages > 1" aria-label="pagination">
    <ul class="pagination pagination-sm justify-content-center mb-0">
      <li class="page-item" :class="{ disabled: modelValue === 1 }">
        <button class="page-link" @click="go(modelValue - 1)">‹</button>
      </li>
      <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: page === modelValue }">
        <button class="page-link" @click="go(page)">{{ page }}</button>
      </li>
      <li class="page-item" :class="{ disabled: modelValue === totalPages }">
        <button class="page-link" @click="go(modelValue + 1)">›</button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({
  modelValue: { type: Number, required: true },
  totalPages: { type: Number, required: true }
})
const emit = defineEmits(['update:modelValue'])

function go(page) {
  if (page < 1 || page > props.totalPages) return
  emit('update:modelValue', page)
}
</script>
