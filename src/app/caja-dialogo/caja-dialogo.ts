import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-caja-dialogo',
  standalone: true,
  imports: [],
  templateUrl: './caja-dialogo.html',
  styleUrl: './caja-dialogo.css'
})
export class CajaDialogoComponent {
  @Input() texto: string = '';
}
