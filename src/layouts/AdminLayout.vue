<template>
  <div class="d-flex">
    <aside class="dash-sidebar p-3" :class="{ open: sidebarOpen }">
      <router-link to="/" class="brand d-inline-flex align-items-center gap-2 mb-4 bg-white rounded-3 px-2 py-1">
        <img :src="logo" alt="مسعف" />
      </router-link>
      <nav class="nav flex-column gap-1">
        <router-link to="/admin/dashboard" class="nav-link" active-class="active">
          <i class="bi bi-speedometer2 me-2"></i>{{ t('dashboard.adminNav.dashboard') }}
        </router-link>
        <router-link to="/admin/live-radar" class="nav-link" active-class="active">
          <i class="bi bi-broadcast me-2"></i>{{ t('dashboard.adminNav.radar') }}
        </router-link>
        <router-link to="/admin/analytics" class="nav-link" active-class="active">
          <i class="bi bi-graph-up me-2"></i>{{ t('dashboard.adminNav.analytics') }}
        </router-link>
        <router-link to="/admin/accounts" class="nav-link" active-class="active">
          <i class="bi bi-people me-2"></i>{{ t('dashboard.adminNav.accounts') }}
        </router-link>
        <router-link to="/admin/operations" class="nav-link" active-class="active">
          <i class="bi bi-gift me-2"></i>{{ t('dashboard.adminNav.operations') }}
        </router-link>
        <router-link to="/admin/settings" class="nav-link" active-class="active">
          <i class="bi bi-sliders me-2"></i>{{ t('dashboard.adminNav.settings') }}
        </router-link>
      </nav>
    </aside>

    <div class="flex-fill">
      <header class="dash-topbar d-flex align-items-center justify-content-between px-4 py-3">
        <button class="btn btn-sm btn-outline-secondary d-lg-none" @click="sidebarOpen = !sidebarOpen">
          <i class="bi bi-list"></i>
        </button>
        <h6 class="mb-0 fw-bold">لوحة تحكم الإدارة</h6>
        <div class="d-flex align-items-center gap-3">
          <span class="position-relative">
            <i class="bi bi-bell fs-5"></i>
            <span v-if="notificationStore.unreadCount" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="font-size: 9px;">
              {{ notificationStore.unreadCount }}
            </span>
          </span>
          <div class="dropdown">
            <button class="btn btn-sm btn-light dropdown-toggle" data-bs-toggle="dropdown">
              {{ authStore.user?.name || 'مدير النظام' }}
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
