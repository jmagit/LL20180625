import { Injectable } from '@angular/core';
import { LoggerService } from '../../my-core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private listado: Array<String> = [];

  constructor(private out: LoggerService) { }

  public get Listado() { return this.listado; }

  public add(msg: string): void {
    if (msg && msg !== '') {
      this.listado.push(msg);
    } else {
      this.out.error('Falta el parámetro.');
    }
  }

  public remove(index: number) {
    if (0 <= index && index < this.listado.length) {
      this.listado.splice(index, 1);
    }
  }

  public clear() {
    if (this.listado.length > 0) {
      this.listado.splice(0);
    }
  }

}
