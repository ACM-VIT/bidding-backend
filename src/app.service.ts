import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  /*
   * getStatus returns a dummy response
   */
  getStatus(): { status: string } {
    return { status: 'Server is online' }
  }
}
