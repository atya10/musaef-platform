<template>
  <div>
    <!-- Hero -->
    <section class="container py-5 d-flex flex-wrap align-items-center justify-content-between gap-4">
      <div class="text-center text-lg-end" style="max-width: 520px;">
        <h1 class="fw-bold display-6 mb-1">{{ t('home.brand') }}<span>...</span></h1>
        <h2 class="fw-bold h3 mb-3">{{ t('home.titleLine1') }} {{ t('home.titleLine2') }}</h2>
        <p class="text-muted">{{ t('home.subtitle') }}</p>
        <div class="d-flex gap-3 justify-content-center justify-content-lg-end mt-4">
          <a href="#" class="btn btn-primary text-white px-4"><svg class="icon"><use href="#i-heart" /></svg> {{ t('nav.donateNow') }}</a>
          <router-link to="/guide" class="btn btn-outline-secondary px-4">{{ t('home.exploreBtn') }}</router-link>
        </div>
      </div>
      <div class="home-hero-illustration mx-auto" style="max-width: 420px;">
        <img :src="dropHero" alt="مسعف" class="img-fluid" />
      </div>
    </section>

    <!-- About blurb (نبذة عن منصة مسعف) -->
    <section id="about" class="bg-white py-5 border-top border-bottom">
      <div class="container">
        <div class="row align-items-center g-4 mb-5">
          <div class="col-lg-5 mx-auto text-center order-lg-2">
            <img :src="aiDoctor" alt="مسعف بالذكاء الاصطناعي" class="img-fluid rounded-4" />
          </div>
          <div class="col-lg-7 order-lg-1 text-center text-lg-end">
            <h2 class="h4 fw-bold mb-2">من نحن</h2>
            <p class="text-muted mb-0">
              منصة ذكية تهدف إلى تسهيل التبرع بالدم وإنقاذ الأرواح باستخدام الذكاء الاصطناعي والتقنيات الحديثة.
              نربط بين المتبرعين والمحتاجين في لحظات الطوارئ لضمان وصول الدم في الوقت المناسب.
            </p>
          </div>
        </div>
        <div class="row g-4 text-center">
          <div class="col-md-4">
            <div class="ac-icon mx-auto"><svg class="icon"><use href="#i-target" /></svg></div>
            <h3 class="h6 fw-bold">أهدافنا</h3>
            <p class="text-muted small">إنقاذ الأرواح عبر تسهيل التبرع بدم آمن وسريع وفعال باستخدام التقنية والذكاء الاصطناعي.</p>
          </div>
          <div class="col-md-4">
            <div class="ac-icon mx-auto"><svg class="icon"><use href="#i-mail" /></svg></div>
            <h3 class="h6 fw-bold">رسالتنا</h3>
            <p class="text-muted small">توفير الدم بأسرع وقت وبأعلى معايير الأمان من خلال منصة موثوقة تعتمد على التقنية والتعاون الإنساني.</p>
          </div>
          <div class="col-md-4">
            <div class="ac-icon mx-auto"><svg class="icon"><use href="#i-eye" /></svg></div>
            <h3 class="h6 fw-bold">رؤيتنا</h3>
            <p class="text-muted small">أن نكون المنصة الرائدة والأكثر موثوقية في مجال التبرع بالدم على مستوى الوطن العربي.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="container py-5 text-center">
      <h2 class="h4 fw-bold mb-5">{{ t('home.howItWorks') }}</h2>
      <div class="row g-4">
        <div class="col-md-2 col-6" v-for="(step, i) in steps" :key="i">
          <div class="step-card card border p-3 h-100">
            <div class="step-num">{{ i + 1 }}</div>
            <div class="step-icon mb-2"><svg class="icon"><use :href="`#${step.icon}`" /></svg></div>
            <h4 class="h6 fw-bold">{{ step.title }}</h4>
            <p class="small text-muted mb-0">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="container pb-5">
      <div class="stats-bar p-4 d-flex flex-wrap justify-content-around text-center gap-3">
        <div class="stat-icon-wrap">
          <div class="stat-icon"><svg class="icon"><use href="#i-heart" /></svg></div>
          <div class="fw-bold fs-4">{{ dashboardStore.stats.casesSupported.toLocaleString() }}+</div>
          <div class="small">{{ t('home.statCases') }}</div>
        </div>
        <div class="stat-icon-wrap">
          <div class="stat-icon"><svg class="icon"><use href="#i-drop" /></svg></div>
          <div class="fw-bold fs-4">{{ dashboardStore.stats.donationRequests.toLocaleString() }}+</div>
          <div class="small">{{ t('home.statRequests') }}</div>
        </div>
        <div class="stat-icon-wrap">
          <div class="stat-icon"><svg class="icon"><use href="#i-building" /></svg></div>
          <div class="fw-bold fs-4">{{ dashboardStore.stats.hospitalsCount.toLocaleString() }}+</div>
          <div class="small">{{ t('home.statHospitals') }}</div>
        </div>
        <div class="stat-icon-wrap">
          <div class="stat-icon"><svg class="icon"><use href="#i-people" /></svg></div>
          <div class="fw-bold fs-4">{{ dashboardStore.stats.donorsHelped.toLocaleString() }}+</div>
          <div class="small">{{ t('home.statHelped') }}</div>
        </div>
      </div>
    </section>

    <!-- Latest emergency cases -->
    <section class="container pb-5">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="h4 fw-bold mb-0">{{ t('home.latestCases') }}</h2>
        <a href="#" class="small text-muted">{{ t('home.viewAllCases') }} ‹</a>
      </div>
      <div class="row g-3">
        <div class="col-md-3 col-sm-6" v-for="req in emergencyStore.activeRequests" :key="req.id">
          <div class="case-card card border p-3 h-100">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="case-type">{{ req.bloodType }}</span>
              <span class="case-urgent">{{ t('home.urgent') }}</span>
            </div>
            <h4 class="h6 fw-bold">{{ req.hospital }}</h4>
            <div class="case-meta small text-muted d-flex align-items-center gap-1 mb-1">
              <svg class="icon"><use href="#i-pin" /></svg>{{ req.city }}
            </div>
            <div class="case-meta small text-muted mb-1">{{ t('home.unitsNeeded') }}: {{ req.unitsNeeded }} {{ t('home.unitsLabel') }}</div>
            <div class="case-meta small text-muted d-flex align-items-center gap-1 mb-3">
              <svg class="icon"><use href="#i-clock" /></svg>{{ timeAgo(req.createdAt) }}
            </div>
            <div class="d-flex gap-2 mt-auto">
              <div class="case-share"><svg class="icon"><use href="#i-share" /></svg></div>
              <button class="btn btn-primary text-white btn-sm flex-fill">{{ t('home.donateBtn') }}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDashboardStore } from '@/stores/dashboardStore'
import { useEmergencyStore } from '@/stores/emergencyStore'
import { timeAgo } from '@/utils/dateFormatter'
import dropHero from '@/assets/images/drop-hero.jpg'
import aiDoctor from '@/assets/images/ai-doctor.jpg'

const { t } = useI18n()
const dashboardStore = useDashboardStore()
const emergencyStore = useEmergencyStore()

const steps = [
  { icon: 'i-person-plus', title: t('home.step1Title'), desc: t('home.step1Desc') },
  { icon: 'i-clipboard', title: t('home.step2Title'), desc: t('home.step2Desc') },
  { icon: 'i-megaphone', title: t('home.step3Title'), desc: t('home.step3Desc') },
  { icon: 'i-shield', title: t('home.step4Title'), desc: t('home.step4Desc') },
  { icon: 'i-pin', title: t('home.step5Title'), desc: t('home.step5Desc') }
]

onMounted(() => {
  dashboardStore.fetchStats()
  emergencyStore.fetchActive()
})
</script>
