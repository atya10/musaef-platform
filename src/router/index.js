// src/router/index.js
// تعريف جميع مسارات التطبيق، ربط كل رابط بالصفحة المناسبة عبر تخطيطاته (Layouts)،
// وإدارة التنقل بين الصفحات باستخدام Navigation Guards للتحقق من صلاحيات المستخدم.

import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import { USER_ROLES } from '@/utils/constants'

const routes = [
  // ===== الصفحات العامة =====
  {
    path: '/',
    component: () => import('@/layouts/PublicLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('@/views/public/HomeView.vue') },
      { path: 'about', name: 'about', redirect: () => ({ path: '/', hash: '#about' }) },
      { path: 'guide', name: 'guide', component: () => import('@/views/public/HelpCenterView.vue') }
    ]
  },

  // ===== المصادقة =====
  {
    path: '/auth',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      { path: '', name: 'auth', component: () => import('@/views/public/AuthPage.vue') }
    ]
  },

  // ===== صفحات المتبرع =====
  {
    path: '/donor',
    component: () => import('@/layouts/DonorLayout.vue'),
    meta: { requiresAuth: true, role: USER_ROLES.DONOR },
    children: [
      { path: 'dashboard', name: 'donor-dashboard', component: () => import('@/views/donor/Dashboard.vue') },
      { path: 'donation-center', name: 'donor-donation-center', component: () => import('@/views/donor/DonationCenter.vue') },
      { path: 'achievements', name: 'donor-achievements', component: () => import('@/views/donor/Achievements.vue') },
      { path: 'settings', name: 'donor-settings', component: () => import('@/views/donor/AccountSettings.vue') }
    ]
  },

  // ===== صفحات المستشفى =====
  {
    path: '/hospital',
    component: () => import('@/layouts/HospitalLayout.vue'),
    meta: { requiresAuth: true, role: USER_ROLES.HOSPITAL },
    children: [
      { path: 'dashboard', name: 'hospital-dashboard', component: () => import('@/views/hospital/Dashboard.vue') },
      { path: 'inventory', name: 'hospital-inventory', component: () => import('@/views/hospital/BloodInventory.vue') },
      { path: 'requests', name: 'hospital-requests', component: () => import('@/views/hospital/EmergencyRequestsManagement.vue') },
      { path: 'settings', name: 'hospital-settings', component: () => import('@/views/hospital/FacilitySettings.vue') }
    ]
  },

  // ===== صفحات الإدارة =====
  {
    path: '/admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    meta: { requiresAuth: true, role: USER_ROLES.ADMIN },
    children: [
      { path: 'dashboard', name: 'admin-dashboard', component: () => import('@/views/admin/Dashboard.vue') },
      { path: 'live-radar', name: 'admin-live-radar', component: () => import('@/views/admin/LiveRadar.vue') },
      { path: 'analytics', name: 'admin-analytics', component: () => import('@/views/admin/AnalyticsCenter.vue') },
      { path: 'accounts', name: 'admin-accounts', component: () => import('@/views/admin/AccountsManagement.vue') },
      { path: 'operations', name: 'admin-operations', component: () => import('@/views/admin/Operations.vue') },
      { path: 'settings', name: 'admin-settings', component: () => import('@/views/admin/AdvancedSettings.vue') }
    ]
  },

  // ===== صفحة 404 =====
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@/views/common/NotFound.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to) => {
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 80 }
    return { top: 0 }
  }
})

// حماية الصفحات: التحقق من تسجيل الدخول وصلاحية نوع الحساب
router.beforeEach((to) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { path: '/auth', query: { redirect: to.fullPath } }
  }

  if (to.meta.role && authStore.role !== to.meta.role) {
    return { path: '/auth' }
  }

  return true
})

export default router
