import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //decorateur de controller
export class AppController {
  constructor(private readonly appService: AppService) { }
  @Get() //Url vide -> juste Get('/')  //Url de base //c une route
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('sayGoodbye')   //entry  Route SayGoodbye
  sayGoodbye(): string {
    return this.appService.logicToSayGoodbye()
  }
}
