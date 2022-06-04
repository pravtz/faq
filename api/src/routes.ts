import { Router } from 'express'
import { FeedbackController } from './controllers/FeedbackController'

const routes = Router()
const feedbackController = new FeedbackController

routes.get("/", feedbackController.setFeedback)

export default routes