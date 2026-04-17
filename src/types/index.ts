export interface ChatMessage {
  question: string
  answer: string
}

export interface PricingPlan {
  id: string
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  highlighted: boolean
}

export interface UseCase {
  profile: string
  title: string
  description: string
  points: string[]
}

export interface ProblemPoint {
  title: string
  description: string
}

export interface HowItWorksStep {
  step: number
  title: string
  description: string
  icon: string
}

export interface PrivacyPoint {
  title: string
  description: string
}

export interface ExampleQuestion {
  text: string
  icon: string
}

export interface Feature {
  icon: string
  title: string
  description: string
  span?: number
}

export interface SocialProofCompany {
  name: string
  style?: 'serif' | 'mono' | 'italic' | 'default'
}
