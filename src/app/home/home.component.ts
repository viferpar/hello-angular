import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService]
})
export class HomeComponent {

  public titulo: string = 'Página principal';
  public listado_ropa: Array<string>;
  public prendaGuardar: string;

  public fecha: Date;
  public nombre = "JUAN lopez MarTinez";

  constructor(
    private _ropaService: RopaService
  ) {
    this.fecha = new Date(2017, 4, 15);
  }

  ngOnInit() {
    this.listado_ropa = this._ropaService.getRopa();
    console.log(this.listado_ropa);

  }

  guardarPrenda() {
    this._ropaService.addRopa(this.prendaGuardar);
    this.prendaGuardar = null;
  }

  eliminarPrenda(index: number) {
    this._ropaService.deleteRopa(index);
  }

}
