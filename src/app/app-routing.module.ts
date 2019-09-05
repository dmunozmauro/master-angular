import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { HijoComponent } from './hijo/hijo.component';
import { PeticionesComponent } from './peticiones/peticiones.component';
<<<<<<< HEAD
import { ContactoComponent } from './contacto/contacto.component';
=======
import { LiquidoComponent } from './liquido/liquido.component';
>>>>>>> 2544be0c514c96cb1d5f0acfa524be348c15c7fd

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hijo', component: HijoComponent },
  { path: 'zapatillas', component: ZapatillasComponent },
  { path: 'zapatillas/:marca', component: ZapatillasComponent },
  { path: 'peticiones', component: PeticionesComponent },
<<<<<<< HEAD
  { path: 'contacto', component: ContactoComponent },
=======
  { path: 'liquido', component: LiquidoComponent },
>>>>>>> 2544be0c514c96cb1d5f0acfa524be348c15c7fd
  { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
