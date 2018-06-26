import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {
  private nombre = 'Mundo';
  public Listado = [
    {id: 1, nombre: 'Barcelona'},
    {id: 2, nombre: 'LLEIDA'},
    {id: 3, nombre: 'tarragona'},
    {id: 4, nombre: 'GiroNA'},
  ];
  public idProvincia = 2;
  public resultado = '';

  public visible = true;
  public estetica = { importante: true, error: false, remarcado: true };

  constructor(public notify: NotificationService) { }

  public get Nombre() { return this.nombre; }
  public set Nombre(valor: string) { this.nombre = valor; }

  ngOnInit() {
  }

  public saluda() {
    this.resultado = `Hola ${this.nombre}`;
  }
  public despide() {
    this.resultado = `Adios ${this.nombre}`;
  }
  public di(algo: string) {
    this.resultado = `Dice ${algo}`;
  }

  public cambia() {
    this.visible = !this.visible;
    this.estetica.importante = !this.estetica.importante;
    this.estetica.error = !this.estetica.error;
  }

  public calcula(a: number, b: number): number {
    return a + b;
  }

  public add(provincia: string) {
    this.Listado.push({
      id: this.Listado.length + 1,
      nombre: provincia
    });
    this.idProvincia = this.Listado.length;
  }
}
