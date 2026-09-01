import { Card, CardHeader, makeStyles, tokens, Text, Title2 } from '@fluentui/react-components'
import { ArrowTrendingLines20Regular, ArrowTrendingDown20Regular } from '@fluentui/react-icons'
import type { ReactNode } from 'react'

const useStyles = makeStyles({
  card: {
    minWidth: '220px',
    flex: '1 1 220px',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: tokens.borderRadiusCircular,
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
  },
  value: {
    marginTop: tokens.spacingVerticalXS,
  },
  trend: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXXS,
    marginTop: tokens.spacingVerticalXS,
  },
  trendUp: {
    color: tokens.colorPaletteGreenForeground1,
  },
  trendDown: {
    color: tokens.colorPaletteRedForeground1,
  },
})

interface KpiCardProps {
  label: string
  value: string
  icon: ReactNode
  trendValue?: string
  trendDirection?: 'up' | 'down'
}

export function KpiCard({ label, value, icon, trendValue, trendDirection }: KpiCardProps) {
  const styles = useStyles()

  return (
    <Card className={styles.card}>
      <CardHeader
        image={<div className={styles.icon}>{icon}</div>}
        header={<Text weight="semibold">{label}</Text>}
      />
      <Title2 className={styles.value}>{value}</Title2>
      {trendValue && (
        <div className={`${styles.trend} ${trendDirection === 'down' ? styles.trendDown : styles.trendUp}`}>
          {trendDirection === 'down' ? <ArrowTrendingDown20Regular /> : <ArrowTrendingLines20Regular />}
          <Text size={200}>{trendValue}</Text>
        </div>
      )}
    </Card>
  )
}
