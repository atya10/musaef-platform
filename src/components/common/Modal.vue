<template>
  <teleport to="body">
    <div v-if="show" class="modal d-block" tabindex="-1" style="background: rgba(17,30,47,.45);">
      <div class="modal-dialog modal-dialog-centered" :class="size ? `modal-${size}` : ''">
        <div class="modal-content border-0 rounded-4 shadow">
          <div class="modal-header border-0 pb-0">
            <h5 class="modal-title fw-bold">{{ title }}</h5>
            <button type="button" class="btn-close" @click="$emit('close')"></button>
          </div>
          <div class="modal-body">
            <slot />
          </div>
          <div v-if="$slots.footer" class="modal-footer border-0 pt-0">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
defineProps({
  show: { type: Boolean, default: false },
  title: { type: String, default: '' },
  size: { type: String, default: '' } // 'sm' | 'lg' | 'xl'
})
defineEmits(['close'])
</script>
