import { prisma } from "../../prisma"
import { FeedbacksRepository, FeedbackCreateData } from "../FeedbacksRepository"


export class PrismaFeedbackRepository implements FeedbacksRepository {
  async create({ comment, screenshot, type }: FeedbackCreateData) {
    const res = await prisma.feedback.create({
      data: {
        comment,
        screenshot,
        type
      }
    })
    return res
  }
}