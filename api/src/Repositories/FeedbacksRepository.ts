import { feedback } from "@prisma/client"

export interface FeedbackCreateData {
  type: string
  comment: string
  screenshot: string
}

export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<feedback>
}