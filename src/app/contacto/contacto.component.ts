import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public titulo: string;
  public parametro: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titulo = 'Página de contacto';
  }

  ngOnInit() {

    this._route.params.forEach((params: Params) => {
      this.parametro = params['page'];
    });

  }

  redirigir() {
    this._router.navigate(['/contacto', 'google.es']);
  }

}
