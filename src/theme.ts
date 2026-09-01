import { createLightTheme, createDarkTheme, type BrandVariants, type Theme } from '@fluentui/react-components'

// Blue brand ramp (PRD primary colour) used to derive the Fluent theme.
const relecloudBrand: BrandVariants = {
  10: '#020305',
  20: '#111723',
  30: '#16233c',
  40: '#182d51',
  50: '#193768',
  60: '#18427f',
  70: '#134d97',
  80: '#0058AF',
  90: '#0063C6',
  100: '#1970D6',
  110: '#3C7FE0',
  120: '#5A90E6',
  130: '#77A2EC',
  140: '#94B4F1',
  150: '#B2C7F6',
  160: '#D0DBFA',
}

export const relecloudLightTheme: Theme = createLightTheme(relecloudBrand)
export const relecloudDarkTheme: Theme = createDarkTheme(relecloudBrand)
