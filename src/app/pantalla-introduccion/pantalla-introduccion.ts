import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CajaDialogoComponent } from '../caja-dialogo/caja-dialogo';

@Component({
  selector: 'app-pantalla-introduccion',
  standalone: true,
  imports: [CajaDialogoComponent],
  templateUrl: './pantalla-introduccion.html',
  styleUrl: './pantalla-introduccion.css'
})
export class PantallaIntroduccionComponent implements OnInit, OnDestroy {

  guionOak: string[] = [
    '¡Hola! ¡Perdona que te haya hecho esperar!',
    '¡Te damos la bienvenida al mundo de los POKéMON!',
    'Me llamo OAK. Pero la gente me llama el PROFESOR POKéMON.',
    '¡Este mundo está habitado por criaturas llamadas POKéMON!'
  ];

  pasoActual: number = 0;
  relojDialogo: any;


  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.relojDialogo = setInterval(() => {
      this.avanzarDialogo();
    }, 3000);
  }

  ngOnDestroy() {
    if (this.relojDialogo) {
      clearInterval(this.relojDialogo);
    }
  }

  avanzarDialogo() {
    if (this.pasoActual < this.guionOak.length - 1) {
      this.pasoActual++;
      this.cdr.detectChanges();
      console.log('Cambiando a paso:', this.pasoActual);
    } else {
      clearInterval(this.relojDialogo);
    }
  }
}
