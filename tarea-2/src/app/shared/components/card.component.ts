import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Card } from '@app/core/models/component-element.model';

@Component({
  selector: 'app-card',
  template: `
    <div class="card bg-body shadow border">
      <img class="card-img-top rouded mx-auto" [hidden]="loading" [src]="card.image" (load)="loading=false"/>
      <app-spinner *ngIf="loading"></app-spinner>
      <div class="card-body p-2">
        <h5 class="card-title fw-bold">{{card.title}}</h5>
        <h6 class="card-subtitle mb-2 text-muted fs-6 text-end" *ngIf="card.subTitle">{{card.subTitle}}</h6>
        <p class="card-text text-center">{{card.text}}</p>
      </div>
    </div>
  `,
  styles: [
    'img {max-width: 300px; height: auto;}'
  ]
})
export class CardComponent implements OnChanges {

  @Input() card!: Card;

  loading = true;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const currImg = changes['card'].currentValue.image;
    const preImg = changes['card'].previousValue?.image;
    this.loading = currImg !== preImg;
  }

}
