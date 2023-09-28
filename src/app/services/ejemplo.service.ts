import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EjemploService {
  logeado: boolean = false;
  ruta: string = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {}

  Loguear() {
    this.logeado = !this.logeado;
    return this.logeado;
  }

  TraerPaises() {
    return this.http.get(this.ruta);
  }
}
