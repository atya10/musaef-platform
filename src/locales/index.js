// src/locales/index.js
// إعداد مكتبة Vue I18n، تحديد اللغة الافتراضية، إدارة التبديل بين اللغتين،
// وحفظ اللغة المختارة داخل Local Storage

import { createI18n } from 'vue-i18n'
import ar from './ar.json'
import en from './en.json'

const STORAGE_KEY = 'musaef_locale'
const savedLocale = localStorage.getItem(STORAGE_KEY) || 'ar'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: savedLocale,
  fallbackLocale: 'ar',
  messages: { ar, en }
})

export function setLocale(locale) {
  i18n.global.locale.value = locale
  localStorage.setItem(STORAGE_KEY, locale)
  document.documentElement.setAttribute('lang', locale)
  document.documentElement.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr')
}

// تطبيق الاتجاه الصحيح عند التحميل الأول
setLocale(savedLocale)

export default i18n
