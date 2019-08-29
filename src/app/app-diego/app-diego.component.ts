import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-diego',
  templateUrl: './app-diego.component.html',
  styleUrls: ['./app-diego.component.css']
})
export class AppDiegoComponent implements OnInit {
  nombre = 'Componente Hijo';

  public mejorJuego: string;
  public mejorJuegoRetro: string;
  public mostrarRetro: boolean;

  public videoJuegos: Array<any>;


  constructor() {
    this.mejorJuego = 'GTA 5';
    this.mejorJuegoRetro = 'Mario 64';
    this.mostrarRetro = true;
    this.videoJuegos = [
      'PacMan',
      'GTA',
      'Sekiro',
      'Assassins Creed',
      5
    ];
  }

  ngOnInit() {}

}
