import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso de Angular';
  public color: string;
  public fondo: string;
  public navbarOpen: boolean = false;

  constructor() {
    this.color = configuracion.color;
    this.fondo = configuracion.fondo;
  }

  /* toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  } */

}
