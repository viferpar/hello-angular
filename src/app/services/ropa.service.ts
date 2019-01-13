import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RopaService {

  public nombre_prenda: string;
  public coleccion_ropa: Array<string>;

  constructor() {
    this.nombre_prenda = 'Pantalones vaqueros';
    this.coleccion_ropa = ['Pantalones Blancos', 'Camiseta roja'];
  }

  prueba(nombre_prenda) {
    return nombre_prenda;
  }

  addRopa(nombre_prenda: string): Array<string> {
    this.coleccion_ropa.push(nombre_prenda);
    return this.getRopa();
  }

  deleteRopa(index: number): Array<string> {
    this.coleccion_ropa.splice(index, 1);
    return this.getRopa();
  }

  getRopa(): Array<string> {
    return this.coleccion_ropa;
  }

}
