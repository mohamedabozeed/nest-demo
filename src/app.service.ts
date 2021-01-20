import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! at ' + new Date().toLocaleTimeString('ar-EG');
  }
}
