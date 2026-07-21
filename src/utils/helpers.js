// src/utils/helpers.js
// دوال عامة مساعدة تُستخدم في مختلف أجزاء المشروع

/**
 * تتحقق من صحة صيغة البريد الإلكتروني
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/**
 * تتحقق من صحة رقم الهاتف (أرقام فقط، 8-15 خانة)
 */
export function isValidPhone(phone) {
  return /^[0-9+\s-]{8,15}$/.test(phone)
}

/**
 * تُنشئ مُعرّف فريد بسيط (لأغراض العرض التجريبي فقط)
 */
export function generateId(prefix = 'id') {
  return `${prefix}_${Date.now()}_${Math.floor(Math.random() * 10000)}`
}

/**
 * تقصير نص طويل مع إضافة "..."
 */
export function truncate(text, maxLength = 60) {
  if (!text || text.length <= maxLength) return text
  return `${text.slice(0, maxLength).trim()}…`
}

/**
 * تجميع مصفوفة كائنات بحسب مفتاح معيّن
 */
export function groupBy(array, key) {
  return array.reduce((acc, item) => {
    const group = item[key]
    if (!acc[group]) acc[group] = []
    acc[group].push(item)
    return acc
  }, {})
}

/**
 * تأخير بسيط (لمحاكاة زمن استجابة الشبكة في البيانات التجريبية)
 */
export function delay(ms = 400) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * تنسيق رقم بإضافة فواصل الآلاف
 */
export function formatNumber(num) {
  return new Intl.NumberFormat('en-US').format(num)
}
