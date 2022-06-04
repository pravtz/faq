import { MailAdapter } from "../adapters/mailAdapter"
import { FeedbacksRepository } from "../Repositories/FeedbacksRepository"

interface SubmitFeedbackServiceRequest {
  type: string
  comment: string
  screenshot: string
}

export class SubmitFeedbackService {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) { }

  async execute(request: SubmitFeedbackServiceRequest) {
    const { type, comment, screenshot } = request

    const res = await this.feedbacksRepository.create({ type, comment, screenshot })

    await this.mailAdapter.sendMail({
      subject: "Novo feedBack",
      body: [
        `<div>`,
        `<p>Tipo de Feedback: ${type} </p>`,
        `<p>comentário : ${comment} </p>`,
        `</div>`,
      ].join('\n')
    })

    return res.id
  }
}