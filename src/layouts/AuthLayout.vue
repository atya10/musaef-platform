<template>
  <div class="auth-page">
    <img :src="dropIcon" class="floating-logo" alt="مسعف" />

    <div class="auth-shell">
      <!-- اللوحة اليسرى: صورة + شعار المنصة + زر تغيير اللغة -->
      <div class="auth-hero">
        <div class="hero-photo" :style="{ backgroundImage: `url(${heroPhoto})` }"></div>
        <div class="hero-body">
          <h1>{{ t('auth.tagline1') }} <span>{{ t('auth.taglineHighlight') }}</span></h1>
          <div class="hero-divider"></div>
          <p>{{ t('auth.heroSubtitle') }}</p>
          <div class="hero-features">
            <div class="hero-feature">
              <div class="icon-circle"><svg class="icon"><use href="#i-heart" /></svg></div>
              <span>{{ t('auth.featureSafe') }}</span>
            </div>
            <div class="hero-feature-divider"></div>
            <div class="hero-feature">
              <div class="icon-circle"><svg class="icon"><use href="#i-people" /></svg></div>
              <span>{{ t('auth.featureCommunity') }}</span>
            </div>
            <div class="hero-feature-divider"></div>
            <div class="hero-feature">
              <div class="icon-circle"><svg class="icon"><use href="#i-clock" /></svg></div>
              <span>{{ t('auth.featureFast') }}</span>
            </div>
            <div class="hero-feature-divider"></div>
            <div class="hero-feature">
              <div class="icon-circle"><svg class="icon"><use href="#i-shield" /></svg></div>
              <span>{{ t('auth.featureSave') }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- اللوحة اليمنى: محتوى الصفحة (AuthPage.vue) -->
      <div class="auth-card">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import dropIcon from '@/assets/images/drop-icon.png'
import heroPhoto from '@/assets/images/hero-photo.jpg'

const { t } = useI18n()
</script>
