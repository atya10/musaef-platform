<template>
  <div class="d-flex">
    <aside class="dash-sidebar p-3" :class="{ open: sidebarOpen }">
      <router-link to="/" class="brand d-inline-flex align-items-center gap-2 mb-4 bg-white rounded-3 px-2 py-1">
        <img :src="logo" alt="مسعف" />
      </router-link>
      <nav class="nav flex-column gap-1">
        <router-link to="/hospital/dashboard" class="nav-link" active-class="active">
          <i class="bi bi-speedometer2 me-2"></i>{{ t('dashboard.hospitalNav.dashboard') }}
        </router-link>
        <router-link to="/hospital/inventory" class="nav-link" active-class="active">
          <i class="bi bi-droplet-half me-2"></i>{{ t('dashboard.hospitalNav.inventory') }}
        </router-link>
        <router-link to="/hospital/requests" class="nav-link" active-class="active">
          <i class="bi bi-megaphone me-2"></i>{{ t('dashboard.hospitalNav.requests') }}
        </router-link>
        <router-link to="/hospital/settings" class="nav-link" active-class="active">
          <i class="bi bi-gear me-2"></i>{{ t('dashboard.hospitalNav.settings') }}
        </router-link>
      </nav>
    </aside>

    <div class="flex-fill">
      <header class="dash-topbar d-flex align-items-center justify-content-between px-4 py-3">
        <button class="btn btn-sm btn-outline-secondary d-lg-none" @click="sidebarOpen = !sidebarOpen">
          <i class="bi bi-list"></i>
        </button>
        <router-link to="/hospital/requests" class="btn btn-danger btn-sm text-white">
          <svg class="icon"><use href="#i-megaphone" /></svg> نداء طارئ جديد
        </router-link>
        <div class="d-flex align-items-center gap-3">
          <span class="position-relative">
            <i class="bi bi-bell fs-5"></i>
            <span v-if="notificationStore.unreadCount" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="font-size: 9px;">
              {{ notificationStore.unreadCount }}
            </span>
          </span>
          <div class="dropdown">
            <button class="btn btn-sm btn-light dropdown-toggle" data-bs-toggle="dropdown">
              {{ hospitalStore.facilityName }}
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><button class="dropdown-item" @click="logout">{{ t('dashboard.logout') }}</button></li>
            </ul>
          </div>
        </div>
      </header>
      <main class="p-4">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAuth } from '@/composables/useAuth'
import { useHospitalStore } from '@/stores/hospitalStore'
import { useNotificationStore } from '@/stores/notificationStore'
import logo from '@/assets/images/logo-full.jpg'

const { t } = useI18n()
const { logout } = useAuth()
const hospitalStore = useHospitalStore()
const notificationStore = useNotificationStore()
const sidebarOpen = ref(false)
</script>
