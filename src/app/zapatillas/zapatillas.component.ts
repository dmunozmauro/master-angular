import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Zapatilla } from '../models/zapatilla';
import { configuracion } from '../models/configuracion';


@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css']
})
export class ZapatillasComponent implements OnInit {
  public title: string;
  public zapatillas: Array<Zapatilla>;
  public color: string;
  public fondo: string;
  public marcas: String[];
  public mi_marca: string;

  public nombre: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = 'Componente de zapatillas';
    this.color = configuracion.color;
    this.fondo = configuracion.fondo;

    this.zapatillas = [
      new Zapatilla('Lunar', 1000, 'Nike', 'Negro', true),
      new Zapatilla('Boost', 500, 'Addidas', 'Negro', false),
      new Zapatilla('Classic', 100, 'Reebok', 'Negro', true),
      new Zapatilla('Airforce', 1500, 'Nike', 'Roja', true),
    ]

    this.marcas = new Array();
    
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.marca;
      console.log(this.nombre)
    });
    this.getMarcas();
  }

  getMarcas() {
    this.zapatillas.forEach((zapatilla, index) => {
      if (this.marcas.indexOf(zapatilla.marca) < 0) {
        this.marcas.push(zapatilla.marca);
      }
    });
    //console.log('Las marcas son: ', this.marcas)
  }

  getMarca() {
    alert(this.mi_marca);
  }

  addMarca() {
    this.marcas.push(this.mi_marca);
  }

  borrarMarca(index) {
    /* delete this.marcas[index]; */
    this.marcas.splice(index, 1);
  }


}
