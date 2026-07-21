// src/utils/dateFormatter.js
// تنسيق التاريخ والوقت وعرضه بطريقة سهلة للمستخدم (منذ دقيقة / ساعة / يوم...)

export function timeAgo(date, locale = 'ar') {
  const now = new Date()
  const target = new Date(date)
  const seconds = Math.floor((now - target) / 1000)

  const units = [
    { limit: 60, divisor: 1, ar: 'منذ لحظات', en: 'just now' },
    { limit: 3600, divisor: 60, ar: 'دقيقة', en: 'minute' },
    { limit: 86400, divisor: 3600, ar: 'ساعة', en: 'hour' },
    { limit: 2592000, divisor: 86400, ar: 'يوم', en: 'day' },
    { limit: 31536000, divisor: 2592000, ar: 'شهر', en: 'month' },
    { limit: Infinity, divisor: 31536000, ar: 'سنة', en: 'year' }
  ]

  if (seconds < 60) {
    return locale === 'ar' ? 'منذ لحظات' : 'just now'
  }

  for (const unit of units) {
    if (seconds < unit.limit) {
      const value = Math.floor(seconds / unit.divisor)
      if (locale === 'ar') {
        return `منذ ${value} ${unit.ar}${value > 1 && value <= 10 ? '' : ''}`
      }
      return `${value} ${unit.en}${value > 1 ? 's' : ''} ago`
    }
  }
  return ''
}

export function formatDate(date, locale = 'ar-EG') {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function formatDateTime(date, locale = 'ar-EG') {
  return new Date(date).toLocaleString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export function calculateAge(birthDate) {
  const today = new Date()
  const dob = new Date(birthDate)
  let age = today.getFullYear() - dob.getFullYear()
  const m = today.getMonth() - dob.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--
  }
  return age
}
