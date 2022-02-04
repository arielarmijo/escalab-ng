import { Component, Input, OnInit } from '@angular/core';
import Link from 'src/app/models/link.interface';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid">
        <h1 class="navbar-brand">{{brand}}</h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" *ngFor="let link of links">
              <a class="nav-link" [routerLink]="link.url" routerLinkActive="active">{{link.name}}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [
    '#navbarNav {justify-content: flex-end;}',
    '.navbar-nav {align-items: center}'
  ]
})
export class NavbarComponent {

  @Input() brand!: string;
  @Input() links!: Link[];

  constructor() { }

}
