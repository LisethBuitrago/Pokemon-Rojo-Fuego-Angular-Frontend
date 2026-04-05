import { Component } from '@angular/core';
import { PantallaIntroduccionComponent } from './pantalla-introduccion/pantalla-introduccion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PantallaIntroduccionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'ProyectoPokemon';
}
