import { Badge } from '@fluentui/react-components'
import type { EventStatus, RegistrationStatus } from '../../types'

type Status = EventStatus | RegistrationStatus

const appearanceMap: Record<Status, { color: 'success' | 'warning' | 'danger' | 'informative' | 'subtle'; text: string }> = {
  Active: { color: 'success', text: 'Active' },
  Draft: { color: 'subtle', text: 'Draft' },
  Cancelled: { color: 'danger', text: 'Cancelled' },
  Completed: { color: 'informative', text: 'Completed' },
  Approved: { color: 'success', text: 'Approved' },
  Pending: { color: 'warning', text: 'Pending' },
  Waitlisted: { color: 'informative', text: 'Waitlisted' },
}

export function StatusBadge({ status }: { status: Status }) {
  const config = appearanceMap[status]
  return (
    <Badge color={config.color} appearance="tint" size="medium">
      {config.text}
    </Badge>
  )
}
