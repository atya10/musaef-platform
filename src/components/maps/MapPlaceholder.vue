<template>
  <!--
    عنصر نائب للخريطة التفاعلية. يُنصح لاحقاً بربط مكتبة خرائط حقيقية
    مثل Leaflet أو Google Maps API هنا فقط، دون التأثير على بقية الصفحات
    التي تستخدم هذا المكوّن (HospitalLayout, DonationCenter, LiveRadar...).
  -->
  <div class="border rounded-3 d-flex flex-column align-items-center justify-content-center text-muted bg-light" :style="{ height }">
    <svg class="icon mb-2" style="width:32px;height:32px;"><use href="#i-pin" /></svg>
    <span class="small">{{ label || 'عرض الخريطة التفاعلية هنا' }}</span>
  </div>
</template>

<script setup>
defineProps({
  height: { type: String, default: '280px' },
  label: { type: String, default: '' }
})
</script>
