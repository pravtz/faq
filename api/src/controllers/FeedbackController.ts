import { Request, Response } from 'express'
import { NodemailerMailAdapter } from '../adapters/nodemailer/nodemailerMailAdapter'
import { PrismaFeedbackRepository } from '../Repositories/prisma/PrismaFeedbackRepository'
import { SubmitFeedbackService } from '../services/SubmitFeedbackService'

export class FeedbackController {
  public async setFeedback(request: Request, response: Response) {
    const { type, comment, screenshot } = request.body

    const prismaFeedbackRepository = new PrismaFeedbackRepository
    const nodemailerMailAdapter = new NodemailerMailAdapter

    const submitFeedbackService = new SubmitFeedbackService(prismaFeedbackRepository, nodemailerMailAdapter)

    const res = await submitFeedbackService.execute({ type, comment, screenshot })

    return response.status(201).send({ res })

  }
}