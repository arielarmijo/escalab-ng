import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../models/component-element.model';

@Component({
  selector: 'app-selectable-item',
  template: `
    <li (click)="itemClicked.emit(item)">
      <span *ngIf="showId">{{item.id + 1}}.-</span>
      <span>{{item.text}}</span>
      <span class="text-muted" *ngIf="item.altText">({{item.altText}})</span>
      <span class="badge bg-secondary">{{item.qty}}</span>
    </li>
  `,
  styles: [
    'li {cursor: pointer; list-style-type: none;}',
    'li:hover {color: #0d6efd; transform: translate(5px, 0px);}',
    'span {margin: 0 3px;}'
  ]
})
export class SelectableItemComponent implements OnInit {

  @Input() showId = true;
  @Input() item!: Item;
  @Output() itemClicked = new EventEmitter<Item>();
  

  constructor() { }

  ngOnInit(): void {
  }

}
