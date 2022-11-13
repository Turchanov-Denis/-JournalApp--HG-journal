import { Controller, Get } from '@nestjs/common';
import { AppService } from './user.service';
@Controller('app')
export class AppController {
  constructor(private AppService: AppService) {

  }
  @Get()
  getQuest(): string {
    return this.AppService.getQuest()
  }
}