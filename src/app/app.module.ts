import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routing, appRoutingProviders } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './hijo/hijo.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { HomeComponent } from './home/home.component';
import { PeticionesComponent } from './peticiones/peticiones.component';

import { HttpClientModule } from '@angular/common/http';
import { LiquidoComponent } from './liquido/liquido.component';

import { CalculadoraPipes } from './pipes/calculadora.pipes';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    ZapatillasComponent,
    HomeComponent,
    PeticionesComponent,
    CalculadoraPipes,
    ContactoComponent,
    LiquidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
