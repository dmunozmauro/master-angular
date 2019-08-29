import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { configuracion } from '../models/configuracion'; 

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css']
})
export class ZapatillasComponent implements OnInit {

  public zapatillas: Array<Zapatilla>;
  public color: string;
  public fondo: string;

  constructor() {
    this.color = configuracion.color;
    this.fondo = configuracion.fondo;
    
    this.zapatillas = [
      new Zapatilla('Lunar', 1000, 'Nike', 'Negro', true),
      new Zapatilla('Boost', 500, 'Addidas', 'Negro', false),
      new Zapatilla('Classic', 100, 'Reebok', 'Negro', true)
    ]
  }

  ngOnInit() {
    console.log(this.zapatillas);
  }

}
