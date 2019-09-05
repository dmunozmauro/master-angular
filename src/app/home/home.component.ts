import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public welcome: string;
  public identificado: boolean;
  public fecha: any;
  constructor() { 
    this.welcome = '¡Bienvenido!';
    this.identificado = false;
    this.fecha = new Date();
  }

  ngOnInit() {
  }

  entrar() {
    this.identificado = true;
  }

  salir() {
    this.identificado = false;
  }

}
