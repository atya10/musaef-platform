<template>
  <div class="d-flex">
    <aside class="dash-sidebar p-3" :class="{ open: sidebarOpen }">
      <router-link to="/" class="brand d-inline-flex align-items-center gap-2 mb-4 bg-white rounded-3 px-2 py-1">
        <img :src="logo" alt="مسعف" />
      </router-link>
      <nav class="nav flex-column gap-1">
        <router-link to="/donor/dashboard" class="nav-link" active-class="active">
          <i class="bi bi-speedometer2 me-2"></i>{{ t('dashboard.donorNav.dashboard') }}
        </router-link>
        <router-link to="/donor/donation-center" class="nav-link" active-class="active">
          <i class="bi bi-droplet-half me-2"></i>{{ t('dashboard.donorNav.donationCenter') }}
        </router-link>
        <router-link to="/donor/achievements" class="nav-link" active-class="active">
          <i class="bi bi-trophy me-2"></i>{{ t('dashboard.donorNav.achievements') }}
        </router-link>
        <router-link to="/donor/settings" class="nav-link" active-class="active">
          <i class="bi bi-gear me-2"></i>{{ t('dashboard.donorNav.settings') }}
        </router-link>
      </nav>
    </aside>

    <div class="flex-fill">
      <header class="dash-topbar d-flex align-items-center justify-content-between px-4 py-3">
        <button class="btn btn-sm btn-outline-secondary d-lg-none" @click="sidebarOpen = !sidebarOpen">
          <i class="bi bi-list"></i>
        </button>
        <div class="input-group input-group-sm" style="max-width: 280px;">
          <span class="input-group-text bg-white"><svg class="icon"><use href="#i-search" /></svg></span>
          <input type="text" class="form-control" :placeholder="t('common.search')" />
        </div>
        <div class="d-flex align-items-center gap-3">
          <span class="position-relative">
            <i class="bi bi-bell fs-5"></i>
            <span v-if="notificationStore.unreadCount" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="font-size: 9px;">
              {{ notificationStore.unreadCount }}
            </span>
          </span>
          <div class="dropdown">
            <button class="btn btn-sm btn-light dropdown-toggle" data-bs-toggle="dropdown">
              {{ authStore.user?.name || t('dashboard.welcome') }}
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
import { useAuthStore } from '@/stores/authStore'
import { useNotificationStore } from '@/stores/notificationStore'
import logo from '@/assets/images/logo-full.jpg'

const { t } = useI18n()
const { logout } = useAuth()
const authStore = useAuthStore()
const notificationStore = useNotificationStore()
const sidebarOpen = ref(false)
</script>
