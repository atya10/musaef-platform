<template>
  <div class="d-flex flex-column min-vh-100">
    <Navbar />
    <main class="flex-fill">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/common/Navbar.vue'
import Footer from '@/components/common/Footer.vue'
</script>
