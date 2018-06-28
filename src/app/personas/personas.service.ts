import { Injectable } from '@angular/core';
import { LoggerService } from '../../my-core';
import { NotificationService } from '../services/notification.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PersonasDAOService {
  protected baseUrl = environment.URL_WS + 'personas';
  protected option = {};

  constructor(private http: HttpClient) { }
  query(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  get(id: any) {
    return this.http.get(this.baseUrl + '/' + id);
  }
  add(item: any) {
    return this.http.post(this.baseUrl, item);
  }
  change(item: any) {
    return this.http.put(this.baseUrl, item);
  }
  remove(id: any) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}

@Injectable()
export class PersonasVMDAOService {
  private modo: 'list' | 'add' | 'edit' | 'view' | 'delete' = 'list';
  private listado: Array<any>;
  private elemento: any;
  private idOriginal: any;
  private pk = 'id';
  private cancelURL = '/personas';

  constructor(private out: LoggerService,
    private notify: NotificationService,
    private dao: PersonasDAOService,
    private router: Router) { }

  public get Modo() { return this.modo; }
  public get Listado() { return this.listado; }
  public get Elemento() { return this.elemento; }

  public list() {
    this.dao.query().subscribe(
      data => {
        this.listado = data;
        this.modo = 'list';
      },
      err => this.notify.add(err.message)
    );
  }

  public add() {
    this.elemento = {};
    this.modo = 'add';
  }

  public edit(key: any) {
    this.dao.get(key).subscribe(
      data => {
        this.elemento = data;
        this.idOriginal = key;
        this.modo = 'edit';
      },
      err => this.notify.add(err.message)
    );
  }

  public view(key: any) {
    this.dao.get(key).subscribe(
      data => {
        this.elemento = data;
        this.modo = 'view';
      },
      err => this.notify.add(err.message)
    );
  }
  public delete(key: any) {
    if (!window.confirm('¿Seguro?')) { return; }
    this.dao.remove(key).subscribe(
      data => {
        this.list();
      },
      err => this.notify.add(err.message)
    );
  }

  public cancel() {
    this.elemento = null;
    this.idOriginal = null;
    // this.list();
    this.router.navigateByUrl(this.cancelURL);
  }

  public send() {
    switch (this.modo) {
      case 'add':
        this.dao.add(this.elemento).subscribe(
          data => this.cancel(),
          err => this.notify.add(err.message)
        );
        break;
      case 'edit':
        this.dao.change(this.elemento).subscribe(
          data => this.cancel(),
          err => this.notify.add(err.message)
        );
        break;
      case 'view':
        this.cancel();
        break;
    }
  }
}

@Injectable()
export class PersonasVMService {
  private modo: 'list' | 'add' | 'edit' | 'view' | 'delete' = 'list';
  private listado: Array<any>;
  private elemento: any;
  private idOriginal: any;
  private pk = 'id';

  constructor(private out: LoggerService,
    private notify: NotificationService) { }

  public get Modo() { return this.modo; }
  public get Listado() { return this.listado; }
  public get Elemento() { return this.elemento; }

  public list() {
    if (!this.listado) {
      this.listado = [
        {id: 1, nombre: 'Carmelo', apellidos: 'Coton', edad: 34},
        {id: 2, nombre: 'Pepito', apellidos: 'Grillo', edad: 155},
        {id: 3, nombre: 'Pedro', apellidos: 'Pica Piedra', edad: 55},
        {id: 4, nombre: 'Pablo', apellidos: 'Marmol', edad: 47},
      ];
    }
    this.modo = 'list';
  }

  public add() {
    this.elemento = {};
    this.modo = 'add';
  }

  public edit(key: any) {
    // tslint:disable-next-line:triple-equals
    const rslt = this.listado.find(item => item[this.pk] == key);
    if (rslt) {
      this.elemento = Object.assign({}, rslt);
      this.idOriginal = key;
      this.modo = 'edit';
    } else {
      this.notify.add('No encontrado.');
    }
  }

  public view(key: any) {
    // tslint:disable-next-line:triple-equals
    const rslt = this.listado.find(item => item[this.pk] == key);
    if (rslt) {
      this.elemento = Object.assign({}, rslt);
      this.modo = 'view';
    } else {
      this.notify.add('No encontrado.');
    }
  }
  public delete(key: any) {
    if (!window.confirm('¿Seguro?')) { return; }

    // tslint:disable-next-line:triple-equals
    const ind = this.listado.findIndex(item => item[this.pk] == key);
    if (ind >= 0) {
      this.listado.splice(ind, 1);
      this.list();
    } else {
      this.notify.add('No encontrado.');
    }
  }

  public cancel() {
    this.elemento = null;
    this.idOriginal = null;
    this.list();
  }

  public send() {
    switch (this.modo) {
      case 'add':
        this.listado.push(this.elemento);
        this.cancel();
        break;
      case 'edit':
        // tslint:disable-next-line:triple-equals
        const ind = this.listado.findIndex(item => item[this.pk] == this.idOriginal);
        if (ind >= 0) {
          this.listado[ind] = this.elemento;
          this.cancel();
        } else {
          this.notify.add('No encontrado.');
        }
        break;
      case 'view':
        this.cancel();
        break;
    }
  }
}
