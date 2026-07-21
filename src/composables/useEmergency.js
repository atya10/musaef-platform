// src/composables/useEmergency.js
// حساب الوقت المتبقي للحالات الطارئة، تحديث شريط التقدم

import { computed } from 'vue'
import { timeAgo } from '@/utils/dateFormatter'
import { URGENCY_LEVELS } from '@/utils/constants'

export function useEmergency(request) {
  const elapsedLabel = computed(() => timeAgo(request.value?.createdAt ?? request.createdAt))

  const urgencyMeta = computed(() => {
    const key = (request.value?.urgency ?? request.urgency ?? 'normal').toUpperCase()
    return URGENCY_LEVELS[key] || URGENCY_LEVELS.NORMAL
  })

  // شريط تقدّم بسيط: كلما مر وقت أطول دون تلبية الطلب، ارتفعت نسبة الإلحاح المعروضة
  const progressPercent = computed(() => {
    const minutesElapsed = (Date.now() - (request.value?.createdAt ?? request.createdAt)) / 60000
    return Math.min(100, Math.round((minutesElapsed / 120) * 100))
  })

  return { elapsedLabel, urgencyMeta, progressPercent }
}
