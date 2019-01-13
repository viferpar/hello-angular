import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  public title: string;

  @Input() propiedad_uno: string;
  @Input() propiedad_dos: string;

  @Output() fromHijo = new EventEmitter();

  constructor() {
    this.title = 'Hijo';
  }

  enviar() {
    this.fromHijo.emit({
      nombre: 'Vicent Ferrandiz',
      web: 'noweb.com',
      twitter: '@viferpar'
    });
  }
}
