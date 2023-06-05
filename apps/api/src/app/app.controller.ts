import { Body, Controller, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/send-email')
  sendEmail(@Body() { from, message }: { message: string; from: string }) {
    console.log(process.env.EMAIL_USER);
    return this.appService.sendEmail(from, message);
  }
}
