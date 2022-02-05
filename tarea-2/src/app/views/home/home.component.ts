import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <h1>Tarea 2</h1>
      <p>Demostración de:</p>
      <ul>
        <li>Modularización de componentes.</li>
        <li>Carga perezosa.</li>
        <li>Compocisión de componentes.</li>
      </ul>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
