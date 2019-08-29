import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit, DoCheck, OnDestroy {
  titulo: string;
  constructor() {
    this.titulo = 'HOLA';
    console.log('constructor ejecutado');
  }


  ngOnInit() {
    console.log('ngOnInit ejecutado');
  }

  ngDoCheck() {
    console.log('DoCheck ejecutado');
  }

  ngOnDestroy() {
    console.log('OnDestroy ejecutado');
  }

  cambiarTitulo() {
    this.titulo = 'NUEVO TITULOS';
  }

}

