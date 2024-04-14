import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Clase01-Ejercicio01';
  unaEdad: number = 0;
  otraEdad: number = 0;
  suma: number = 0;
  promedio: number = 0;

  calcular() {
   
    this.suma = this.unaEdad + this.otraEdad;
    this.promedio = this.suma/2;

  }

  limpiar()
  {
      this.suma = 0;
      this.promedio = 0;
  }
}
