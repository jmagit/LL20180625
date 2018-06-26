import { Injectable } from '@angular/core';


@Injectable()
export class LoggerService {

  constructor() { }

  public log(msg: string): void {
    console.log(msg);
  }

  public info(msg: string): void {
    if (console.info) {
      // tslint:disable-next-line:no-console
      console.info(msg);
    } else {
      console.log(msg);
    }
  }

  public warn(msg: string): void {
    console.warn(msg);
  }

  public error(msg: string): void {
    console.error(msg);
  }
}