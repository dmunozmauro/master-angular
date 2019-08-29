import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { configuracion } from '../models/configuracion';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit, DoCheck, OnDestroy {
  title: string;
  titulo: string;
  fondo: string;
  color: string;
  constructor() {
    this.title = 'Componente hijo!';
    this.titulo = configuracion.descripcion;
    this.fondo = configuracion.fondo;
    this.color = configuracion.color;
/*     console.log('constructor ejecutado');
 */  }

  ngOnInit() {
/*     console.log('ngOnInit ejecutado');
 */  }

  ngDoCheck() {
/*     console.log('DoCheck ejecutado');
 */  }

  ngOnDestroy() {
/*     console.log('OnDestroy ejecutado');
 */  }

  cambiarTitulo() {
    this.titulo = 'Cambió !';
  }

}

