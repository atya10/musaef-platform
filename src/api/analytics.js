// src/api/analytics.js
// جلب الإحصائيات، الخريطة الحرارية، ومؤشرات الأداء

import api from './axios'

export function fetchGlobalStats() {
  return api.get('/analytics/stats')
}

export function fetchHeatmapData(params) {
  return api.get('/analytics/heatmap', { params })
}

export function fetchKpis(role) {
  return api.get('/analytics/kpis', { params: { role } })
}

export function fetchShortageForecast() {
  return api.get('/analytics/shortage-forecast')
}
