import { Component } from '@angular/core';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent {

  public titulo: string;
  public administrador: boolean;

  public dato_externo: string;
  public identity: any;

  public datosHijo: any;

  constructor() {
    this.titulo = 'Plantillas ngTemplate en Angular';
    this.administrador = true;
    this.dato_externo = 'viferpar';
    this.identity = {
      id: 1,
      web: 'noweb.com',
      tematica: 'Desarrollo software'
    };
  }

  cambiar(value: boolean) {
    this.administrador = value;
  }

  receiveData(event) {
    this.datosHijo = event;
  }

}
