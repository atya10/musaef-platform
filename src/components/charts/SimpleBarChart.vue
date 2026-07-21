<template>
  <!--
    مخطط أعمدة بسيط بدون مكتبات خارجية، لعرض بيانات سريعة داخل لوحات التحكم.
    عند الحاجة لمخططات أكثر تقدماً، يمكن استبدال هذا المكوّن بمكتبة مثل Chart.js
    دون التأثير على بقية النظام لأن الاستخدام محصور بهذا المكوّن فقط.
  -->
  <div class="d-flex align-items-end gap-2" style="height: 160px;">
    <div
      v-for="item in data"
      :key="item.label"
      class="d-flex flex-column align-items-center justify-content-end flex-fill"
    >
      <div
        class="bg-danger rounded-top w-100"
        :style="{ height: `${(item.value / max) * 100}%`, opacity: 0.85 }"
      ></div>
      <span class="small text-muted mt-1">{{ item.label }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: { type: Array, required: true } // [{ label, value }]
})

const max = computed(() => Math.max(...props.data.map((d) => d.value), 1))
</script>
