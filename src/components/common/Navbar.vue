<template>
  <header class="musaef-navbar bg-white py-3">
    <div class="container d-flex align-items-center justify-content-between flex-wrap gap-3">
      <router-link to="/" class="musaef-logo">
        <img :src="logo" alt="مسعف" />
      </router-link>

      <nav class="d-flex gap-4">
        <router-link to="/" class="nav-link" active-class="active">{{ t('nav.home') }}</router-link>
        <router-link to="/about" class="nav-link" active-class="active">{{ t('nav.about') }} <i class="bi bi-chevron-down small"></i></router-link>
        <router-link to="/guide" class="nav-link" active-class="active">{{ t('nav.guide') }} <i class="bi bi-chevron-down small"></i></router-link>
      </nav>

      <div class="d-flex align-items-center gap-2">
        <button class="btn btn-sm btn-outline-secondary" @click="toggleLocale">
          <i class="bi bi-globe2 me-1"></i>{{ locale === 'ar' ? 'EN' : 'AR' }}
        </button>
        <router-link to="/auth?tab=login" class="btn btn-sm btn-outline-secondary">{{ t('nav.login') }}</router-link>
        <router-link to="/auth?tab=register" class="btn btn-sm btn-outline-secondary">{{ t('nav.register') }}</router-link>
        <a href="#" class="btn btn-sm btn-primary text-white"><i class="bi bi-heart-fill me-1"></i>{{ t('nav.donateNow') }}</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { setLocale } from '@/locales'
import logo from '@/assets/images/logo-full.jpg'

const { t, locale } = useI18n()

function toggleLocale() {
  setLocale(locale.value === 'ar' ? 'en' : 'ar')
}
</script>
