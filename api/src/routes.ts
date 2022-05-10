import { Router } from 'express'
import { Request, Response } from 'express'

const routes = Router()

routes.get("/", (request: Request, response: Response) => {
  return response.status(200).json({ status: "ok" })
})

export default routes