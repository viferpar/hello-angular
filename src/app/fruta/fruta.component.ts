import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})

export class FrutaComponent {

  nombre_componente = 'Componente de fruta';
  listado_frutas = 'Naranja, Manzana, Pera y Sandia';

  nombre: string;
  edad: number;
  mayorEdad: boolean;
  trabajos: Array<string> = ['Carpintero', 'Albañil', 'Fontanero'];

  constructor() {
    this.nombre = 'viferpar';
    this.edad = 25;
    this.mayorEdad = true;
  }

  ngOnInit() {
    this.hola(this.nombre);
  }

  hola(nombre) {
    console.log('Hola ' + nombre);
  }

}
