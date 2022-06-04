import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mailAdapter";

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ea92d8ff711357",
    pass: "b8a80f0dc342a0"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Pravtz <ederson.ufrgs@gmail.com>",
      subject,
      html: body
    })
  }
}