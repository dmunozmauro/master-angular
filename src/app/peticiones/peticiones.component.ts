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
  public usuario_guardado;

  public new_user: any;

  constructor(
    private _peticionesServices: PeticionesServices
  ) {
    this.userId = 1;
    this.new_user = {
      "name": "",
      "job": ""
    }
  }

  ngOnInit() {
    this.carga();
  }

  carga() {
    this.user = false;
    this._peticionesServices.getUsers(this.userId).subscribe(
      result => {
        this.user = result.data;
        /* console.log(this.user); */
      },
      error => {
        console.log('No se encuentra', <any>error);
      }
    )
  }

  onSubmit(formUser) {
    this._peticionesServices.addUser(this.new_user).subscribe(
      result => {
        this.usuario_guardado = result;
        console.log(result);
        formUser.reset();
      }, 
      error => {
        console.log(error);
      }
    );
  }

}
