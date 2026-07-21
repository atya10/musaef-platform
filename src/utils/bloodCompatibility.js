// src/utils/bloodCompatibility.js
// تحديد توافق فصائل الدم: من يستطيع التبرع لمن، ومن يستطيع الاستقبال من من.

import { BLOOD_TYPES } from './constants'

// donor -> array of compatible recipient types
const DONATION_MAP = {
  'O-': ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'],
  'O+': ['O+', 'A+', 'B+', 'AB+'],
  'A-': ['A-', 'A+', 'AB-', 'AB+'],
  'A+': ['A+', 'AB+'],
  'B-': ['B-', 'B+', 'AB-', 'AB+'],
  'B+': ['B+', 'AB+'],
  'AB-': ['AB-', 'AB+'],
  'AB+': ['AB+']
}

/**
 * هل يستطيع donorType التبرع لـ recipientType؟
 */
export function canDonateTo(donorType, recipientType) {
  return DONATION_MAP[donorType]?.includes(recipientType) ?? false
}

/**
 * الفصائل التي يمكن لـ donorType التبرع لها
 */
export function getCompatibleRecipients(donorType) {
  return DONATION_MAP[donorType] ?? []
}

/**
 * الفصائل التي يمكنها التبرع لـ recipientType (عكس الخريطة)
 */
export function getCompatibleDonors(recipientType) {
  return BLOOD_TYPES.filter((donorType) => canDonateTo(donorType, recipientType))
}

/**
 * مصفوفة كاملة (صفوف = المتبرع، أعمدة = المستقبل) لعرضها في جدول توافق فصائل الدم
 */
export function getCompatibilityMatrix() {
  return BLOOD_TYPES.map((donorType) => ({
    donorType,
    compatibleWith: BLOOD_TYPES.map((recipientType) => ({
      recipientType,
      compatible: canDonateTo(donorType, recipientType)
    }))
  }))
}
