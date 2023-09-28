import { Component, OnInit } from '@angular/core';
import { EjemploService } from './services/ejemplo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  logeadoDesdeComponent: boolean = false;
  arrayPaises: Array<any> = [];
  constructor(private ejService: EjemploService) {}

  ngOnInit(): void {
    const consulta = this.ejService.TraerPaises();

    consulta.subscribe((respuesta) => {
      console.log(respuesta);
      this.arrayPaises = respuesta as Array<any>;
    });

    this.logeadoDesdeComponent = this.ejService.logeado;
  }

  Loguear() {
    this.logeadoDesdeComponent = this.ejService.Loguear();
  }
}
