import { Component, OnInit } from '@angular/core';
import { PeticionesServices } from '../services/peticiones.services';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.css'],
  providers: [PeticionesServices]
})
export class PeticionesComponent implements OnInit {

  public user: any;
  public userId: any;
  constructor(
    private _peticionesServices: PeticionesServices
  ) { 
    this.userId = 1;
  }

  ngOnInit() {
    this.carga();
  }

  carga() {
    this.user = false;
    this._peticionesServices.getUsers(this.userId).subscribe(
      result => {
        this.user = result.data;
        console.log(this.user);
      },
      error => {
        console.log('No se encuentra' , <any>error);
      }
    )
  }

}
