import { Component } from '@angular/core';
import { Link } from '@app/core/models/component-element.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-navbar [brand]="title" [links]="links"></app-navbar>
      <div class="container mt-5">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: ['']
})
export class AppComponent {

  title = 'Tarea 2';
  links: Link[] = [
    {
      name: "Home",
      url: "home"
    },
    {
      name: "Game of Thrones",
      url: "game-of-thrones"
    },
    {
      name: "Harry Potter",
      url: "harry-potter"
    }
  ]
}
