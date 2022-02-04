import { Component, Input, OnInit } from '@angular/core';
import Card from 'src/app/models/card.interface';

@Component({
  selector: 'app-card',
  template: `
    <div class="card position-sticky">
      <img [src]="card.image" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{card.title}}</h5>
        <h6 class="card-subtitle mb-2 text-muted" *ngIf="card.subTitle">{{card.subTitle}}</h6>
        <p class="card-text text-end">{{card.text}}</p>
      </div>
    </div>
  `,
  styles: []
})
export class CardComponent {

  @Input() card!: Card;

  constructor() { }

}
