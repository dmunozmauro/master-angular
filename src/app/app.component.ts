import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso de Angular';
  mostrar: boolean;

  constructor() {
    this.mostrar = true;
  }

  ocultar(value) {
      this.mostrar = value;
  }
}
