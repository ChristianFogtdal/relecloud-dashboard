import { makeStyles, tokens, Text, Title3 } from '@fluentui/react-components'
import type { ReactNode } from 'react'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: tokens.spacingHorizontalM,
    marginBottom: tokens.spacingVerticalL,
    flexWrap: 'wrap',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
  },
  actions: {
    display: 'flex',
    gap: tokens.spacingHorizontalS,
    alignItems: 'center',
  },
})

interface PageHeaderProps {
  title: string
  description?: string
  actions?: ReactNode
}

export function PageHeader({ title, description, actions }: PageHeaderProps) {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <div className={styles.text}>
        <Title3>{title}</Title3>
        {description && <Text style={{ color: tokens.colorNeutralForeground3 }}>{description}</Text>}
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  )
}
