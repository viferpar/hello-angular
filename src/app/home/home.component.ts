import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo: string;
  public listado_ropa: Array<string>;
  public prendaGuardar: string;

  public fecha: Date;
  public nombre: string;

  constructor(
    private _ropaService: RopaService
  ) {
    this.titulo = 'Página principal';
    this.fecha = new Date(2017, 4, 15);
    this.nombre = 'JUAN lopez MarTinez';
  }

  ngOnInit() {
    this.listado_ropa = this._ropaService.getRopa();
  }

  guardarPrenda() {
    this._ropaService.addRopa(this.prendaGuardar);
    this.prendaGuardar = null;
  }

  eliminarPrenda(index: number) {
    this._ropaService.deleteRopa(index);
  }

}
