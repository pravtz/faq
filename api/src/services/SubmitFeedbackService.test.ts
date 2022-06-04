import { SubmitFeedbackService } from "./SubmitFeedbackService"

const createFeedBackSpy = jest.fn()
const SendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackService(
  { create: createFeedBackSpy },
  { sendMail: SendMailSpy }
)

describe('Submit feedback', () => {
  it('Should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: "anything",
      screenshot: 'anything'
    })).resolves.toBe('id')
  })


})