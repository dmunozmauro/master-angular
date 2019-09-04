import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { configuracion } from '../models/configuracion';

import { ZapatillaServices } from '../services/zapatillas.services';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css'],
  providers: [ZapatillaServices]
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
    private _router: Router,
    private _zapatillaService: ZapatillaServices
  ) {
    this.title = 'Componente de zapatillas';
    this.color = configuracion.color;
    this.fondo = configuracion.fondo;
    this.marcas = new Array();
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.marca;
      
    });
    this.zapatillas = this._zapatillaService.getZapatillas();
    this.getMarcas();
  }

  getMarcas() {
    this.zapatillas.forEach((zapatilla, index) => {
      if (this.marcas.indexOf(zapatilla.marca) < 0) {
        this.marcas.push(zapatilla.marca);
      }
    });
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
