export type EventStatus = 'Active' | 'Draft' | 'Cancelled' | 'Completed'

export interface EventItem {
  id: string
  name: string
  category: string
  venue: string
  city: string
  startDate: string
  endDate: string
  status: EventStatus
  capacity: number
  registrations: number
  revenue: number
  description: string
}

export type RegistrationStatus = 'Approved' | 'Pending' | 'Waitlisted' | 'Cancelled'

export interface Registration {
  id: string
  attendeeName: string
  email: string
  eventId: string
  eventName: string
  status: RegistrationStatus
  registeredOn: string
  ticketType: string
}

export type ActivityType = 'registration' | 'event' | 'communication' | 'system'

export interface ActivityItem {
  id: string
  type: ActivityType
  message: string
  timestamp: string
}

export interface TrendPoint {
  label: string
  registrations: number
  attendance: number
}

export interface CategoryBreakdown {
  category: string
  value: number
}
