import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})

export class EmpleadoComponent {
  titulo = 'Componente de empleado';
  empleado: Empleado;
  trabajadores: Array<Empleado>;
  externos: boolean;
  color: string;
  color_seleccionado: string;

  constructor() {
    this.empleado = new Empleado('David Lopez', 45, 'Cocinero', true);
    this.trabajadores = [
      new Empleado('Manolo Martínez', 35, 'Administrativo', true),
      new Empleado('Ana Lopez', 25, 'Cocinera', true),
      new Empleado('Luis García', 64, 'Programador', false)
    ];
    this.externos = false;
    this.color = 'red';
    this.color_seleccionado = '#ccc';
  }

  cambiarExternos() {
    this.externos = !this.externos;
  }

}
