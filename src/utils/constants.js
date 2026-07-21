// src/utils/constants.js
// القيم والثوابت المستخدمة داخل النظام

export const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

export const USER_ROLES = {
  DONOR: 'donor',
  HOSPITAL: 'hospital',
  ADMIN: 'admin'
}

export const ORG_TYPES = {
  BLOOD_BANK: 'bloodbank',
  HOSPITAL: 'hospital'
}

export const URGENCY_LEVELS = {
  CRITICAL: { key: 'critical', label_ar: 'حرج', label_en: 'Critical', color: 'danger' },
  URGENT: { key: 'urgent', label_ar: 'عاجل', label_en: 'Urgent', color: 'warning' },
  NORMAL: { key: 'normal', label_ar: 'عادي', label_en: 'Normal', color: 'secondary' }
}

export const REQUEST_STATUS = {
  PENDING: 'pending',
  MATCHED: 'matched',
  IN_PROGRESS: 'in_progress',
  FULFILLED: 'fulfilled',
  CANCELLED: 'cancelled'
}

export const GENDERS = [
  { value: 'male', label_ar: 'ذكر', label_en: 'Male' },
  { value: 'female', label_ar: 'أنثى', label_en: 'Female' }
]

export const MIN_DONOR_AGE = 18
export const MAX_DONOR_AGE = 65
export const MIN_DONOR_WEIGHT_KG = 50
export const DONATION_INTERVAL_DAYS_MALE = 56
export const DONATION_INTERVAL_DAYS_FEMALE = 84

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'
