import { Component, OnInit } from '@angular/core';
import { Liquido } from '../models/liquido';

@Component({
  selector: 'app-liquido',
  templateUrl: './liquido.component.html',
  styleUrls: ['./liquido.component.css']
})
export class LiquidoComponent implements OnInit {

  public liquidos: Liquido;

  constructor() {
    this.liquidos = new Liquido('', '', '', '', 0, '');
  }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(this.liquidos);
    form.reset();
  }

}
