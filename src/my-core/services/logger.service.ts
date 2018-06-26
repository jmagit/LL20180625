import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';

export const ERROR_LEBEL = new InjectionToken<number>('ERROR_LEBEL');

@Injectable()
export class LoggerService {
  private nivel = 5;

  constructor(@Optional() @Inject(ERROR_LEBEL) nivel: number) {
    if (nivel >= 0) {
      this.nivel = nivel;
    }
  }

  public log(msg: string): void {
    if (this.nivel > 3) {
      console.log(msg);
    }
  }

  public info(msg: string): void {
    if (this.nivel > 2) {
      if (console.info) {
        // tslint:disable-next-line:no-console
        console.info(msg);
      } else {
        console.log(msg);
      }
    }
  }

  public warn(msg: string): void {
    if (this.nivel > 1) {
      console.warn(msg);
    }
  }

  public error(msg: string): void {
    if (this.nivel > 0) {
      console.error(msg);
    }
  }
}
