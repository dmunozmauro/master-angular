import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable() 
export class ZapatillaServices {
    public zapatillas: Array<Zapatilla>;
    constructor() {
        this.zapatillas = [
            new Zapatilla('Lunar', 1000, 'Nike', 'Negro', true),
            new Zapatilla('Boost', 500, 'Addidas', 'Negro', false),
            new Zapatilla('Classic', 100, 'Reebok', 'Negro', true),
            new Zapatilla('Airforce', 1500, 'Nike', 'Roja', true),
          ]
    }

    getText() {
        return 'Hola desde servicios';
    }

    getZapatillas(): Array<Zapatilla> {
        return this.zapatillas;
    }
}