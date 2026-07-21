<template>
  <div>
    <section class="edu-hero d-flex flex-wrap align-items-center justify-content-between gap-4 py-5" style="background: linear-gradient(90deg,#fdeceb,#fff5f5);">
      <div class="container d-flex flex-wrap align-items-center justify-content-between gap-4">
        <div style="max-width: 560px;">
          <h1 class="h3 fw-bold mb-2">{{ t('help.title') }}</h1>
          <p class="text-muted">{{ t('help.subtitle') }}</p>
        </div>
        <div class="edu-hero-illustration" style="max-width: 320px;">
          <img :src="bloodTypesImg" alt="فصائل الدم" class="img-fluid" />
        </div>
      </div>
    </section>

    <section class="container py-5">
      <h2 class="h5 fw-bold text-center mb-4">{{ t('help.compatTitle') }}</h2>
      <div class="row g-4">
        <div class="col-lg-8">
          <div class="table-responsive">
            <table class="table blood-table text-center align-middle">
              <thead>
                <tr>
                  <th></th>
                  <th v-for="bt in bloodTypes" :key="bt">{{ bt }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in matrix" :key="row.donorType">
                  <td class="type-label">{{ row.donorType }}</td>
                  <td v-for="cell in row.compatibleWith" :key="cell.recipientType" :class="cell.compatible ? 'yes' : 'no'">
                    {{ cell.compatible ? '✓' : '–' }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="d-flex gap-4 small text-muted mt-2">
            <span><span class="d-inline-block rounded-circle bg-secondary-subtle me-1" style="width:9px;height:9px;"></span>{{ t('help.legendNo') }}</span>
            <span><span class="d-inline-block rounded-circle bg-success me-1" style="width:9px;height:9px;"></span>{{ t('help.legendYes') }}</span>
          </div>
        </div>
        <div class="col-lg-4 d-flex flex-column gap-3">
          <div class="info-card d-flex gap-3 p-3 border rounded-3">
            <div class="ic"><svg class="icon"><use href="#i-heart" /></svg></div>
            <div>
              <h4 class="h6 fw-bold mb-1">{{ t('help.donateInfoTitle') }}</h4>
              <p class="small text-muted mb-0">{{ t('help.donateInfoBody') }}</p>
            </div>
          </div>
          <div class="info-card d-flex gap-3 p-3 border rounded-3">
            <div class="ic"><svg class="icon"><use href="#i-drop" /></svg></div>
            <div>
              <h4 class="h6 fw-bold mb-1">{{ t('help.receiveInfoTitle') }}</h4>
              <p class="small text-muted mb-0">{{ t('help.receiveInfoBody') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white border-top border-bottom py-5">
      <div class="container text-center">
        <h2 class="h5 fw-bold mb-4">{{ t('help.tipsTitle') }}</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="tip-icon"><svg class="icon"><use href="#i-clock" /></svg></div>
            <h4 class="h6 fw-bold">{{ t('help.tip1Title') }}</h4>
            <p class="small text-muted">{{ t('help.tip1Body') }}</p>
          </div>
          <div class="col-md-4">
            <div class="tip-icon"><svg class="icon"><use href="#i-scale" /></svg></div>
            <h4 class="h6 fw-bold">{{ t('help.tip2Title') }}</h4>
            <p class="small text-muted">{{ t('help.tip2Body') }}</p>
          </div>
          <div class="col-md-4">
            <div class="tip-icon"><svg class="icon"><use href="#i-person" /></svg></div>
            <h4 class="h6 fw-bold">{{ t('help.tip3Title') }}</h4>
            <p class="small text-muted">{{ t('help.tip3Body') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="container py-5">
      <div class="row g-4">
        <div class="col-lg-6">
          <h3 class="h6 fw-bold mb-3">{{ t('help.faqTitle') }}</h3>
          <div class="input-group mb-3">
            <span class="input-group-text bg-white"><svg class="icon"><use href="#i-search" /></svg></span>
            <input v-model="faqSearch" type="text" class="form-control" :placeholder="t('help.searchPlaceholder')" />
          </div>
          <div v-for="(item, i) in filteredFaq" :key="i" class="faq-item border rounded-3 mb-2" :class="{ open: openFaq === i }">
            <div class="faq-q p-3 fw-bold d-flex justify-content-between" @click="openFaq = openFaq === i ? null : i">
              {{ item.q }}
              <i class="bi" :class="openFaq === i ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
            </div>
            <div v-show="openFaq === i" class="px-3 pb-3 small text-muted">{{ item.a }}</div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="border rounded-3 p-4">
            <h3 class="h6 fw-bold mb-1">{{ t('help.contactTitle') }}</h3>
            <p class="small text-muted mb-3">{{ t('help.contactSubtitle') }}</p>
            <form @submit.prevent="contactSent = true">
              <input v-model="contactForm.name" type="text" class="form-control mb-3" :placeholder="t('help.namePlaceholder')" />
              <input v-model="contactForm.email" type="email" class="form-control mb-3" :placeholder="t('help.emailPlaceholder')" />
              <textarea v-model="contactForm.message" rows="4" class="form-control mb-3" :placeholder="t('help.messagePlaceholder')"></textarea>
              <button type="submit" class="btn btn-primary text-white w-100">{{ t('help.contactBtn') }}</button>
              <div v-if="contactSent" class="alert-success-musaef mt-3">
                <div class="check"><svg class="icon"><use href="#i-check" /></svg></div>
                <div>تم إرسال رسالتك بنجاح، سنعاود التواصل معك قريباً.</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { BLOOD_TYPES } from '@/utils/constants'
import { getCompatibilityMatrix } from '@/utils/bloodCompatibility'
import bloodTypesImg from '@/assets/images/blood-types.jpg'

const { t } = useI18n()
const bloodTypes = BLOOD_TYPES
const matrix = getCompatibilityMatrix()

const faqSearch = ref('')
const openFaq = ref(3)
const faqItems = [
  { q: 'هل أستطيع التبرع إذا كنت أتناول أدوية؟', a: 'يعتمد ذلك على نوع الدواء. بعض الأدوية لا تمنع التبرع، بينما البعض الآخر يتطلب فترة انتظار. يُنصح باستشارة الطبيب المختص في مركز التبرع.' },
  { q: 'كم مرة يمكنني التبرع؟', a: 'يمكن للرجال التبرع كل 8 أسابيع، وللنساء كل 12 أسبوعاً، وذلك للحفاظ على مستويات الحديد والصحة العامة.' },
  { q: 'ما العمر المناسب للتبرع؟', a: 'يجب أن يكون عمر المتبرع بين 18 و65 عاماً، مع بعض الاستثناءات وفق تقييم الطبيب.' },
  { q: 'هل التبرع آمن؟', a: 'يعتبر التبرع بالدم آمناً تماماً، حيث يتم استخدام أدوات معقمة وجديدة لمرة واحدة فقط لكل متبرع، ويتم اتباع أعلى معايير السلامة والإجراءات الطبية.' }
]

const filteredFaq = computed(() =>
  faqItems.filter((f) => f.q.toLowerCase().includes(faqSearch.value.toLowerCase()))
)

const contactForm = reactive({ name: '', email: '', message: '' })
const contactSent = ref(false)
</script>
