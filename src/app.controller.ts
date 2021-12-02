import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { SaveUserCredentialsDto } from './credentials.dto';
import { v4 as uuid } from 'uuid';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @Render('index')
  index() {
    const id = uuid();
    return { uuid: id };
  }

  @Post('save')
  async create(@Body() saveUserCredentials: SaveUserCredentialsDto) {
    const user = await this.appService.create(saveUserCredentials);
    return user;
  }

}
