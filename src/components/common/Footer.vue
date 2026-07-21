<template>
  <footer class="musaef-footer py-5 mt-4">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-3">
          <h4>{{ t('footer.followUs') }}</h4>
          <p class="text-muted small mb-3">{{ t('footer.followDesc') }}</p>
          <div class="d-flex gap-2">
            <a href="#" class="social-circle"><svg class="icon"><use href="#i-facebook" /></svg></a>
            <a href="#" class="social-circle"><svg class="icon"><use href="#i-instagram" /></svg></a>
            <a href="#" class="social-circle"><svg class="icon"><use href="#i-twitter" /></svg></a>
            <a href="#" class="social-circle"><svg class="icon"><use href="#i-youtube" /></svg></a>
          </div>
        </div>
        <div class="col-md-3">
          <h4>{{ t('footer.privacyPolicy') }}</h4>
          <p class="text-muted small mb-1">{{ t('footer.privacyDesc') }}</p>
          <a href="#" class="small fw-semibold text-danger">{{ t('footer.readMore') }}</a>
        </div>
        <div class="col-md-3">
          <h4>{{ t('footer.termsOfUse') }}</h4>
          <p class="text-muted small mb-1">{{ t('footer.termsDesc') }}</p>
          <a href="#" class="small fw-semibold text-danger">{{ t('footer.readMore') }}</a>
        </div>
        <div class="col-md-3">
          <h4>{{ t('footer.quickLinks') }}</h4>
          <ul class="list-unstyled small text-muted d-flex flex-column gap-2">
            <li><router-link to="/" class="text-muted">{{ t('nav.home') }}</router-link></li>
            <li><router-link to="/guide" class="text-muted">{{ t('nav.guide') }}</router-link></li>
            <li><a href="#" class="text-muted">{{ t('footer.emergencyCases') }}</a></li>
            <li><router-link to="/about" class="text-muted">{{ t('nav.about') }}</router-link></li>
          </ul>
        </div>
      </div>
      <div class="border-top pt-3 mt-4 text-center text-muted small">
        {{ t('footer.rights') }}
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
