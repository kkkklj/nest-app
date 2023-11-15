import { Controller, Get } from '@nestjs/common';

@Controller('/debug')
export class DebugController {
  @Get('/wait5')
  getWait() {
    return new Promise((resolve) => {
      setTimeout(() => {
       resolve({
          msg:'hello',
          code:200
        }) 
      }, 1000);
    }) 
  }
}