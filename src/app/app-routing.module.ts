import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { HijoComponent } from './hijo/hijo.component';
import { PeticionesComponent } from './peticiones/peticiones.component';
import { LiquidoComponent } from './liquido/liquido.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hijo', component: HijoComponent },
  { path: 'zapatillas', component: ZapatillasComponent },
  { path: 'zapatillas/:marca', component: ZapatillasComponent },
  { path: 'peticiones', component: PeticionesComponent },
  { path: 'liquido', component: LiquidoComponent },
  { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
