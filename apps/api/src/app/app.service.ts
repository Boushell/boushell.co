import { createTransport, Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private transporter: Transporter<SMTPTransport.SentMessageInfo>;
  constructor() {
    this.transporter = createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }
  sendEmail(from, message) {
    this.transporter.sendMail({
      from: from,
      to: 'james@boushell.co',
      subject: '👋 Boushell.co Contact Submission',
      text: `${message}`,
      html: `${message}`,
    });
  }
}
