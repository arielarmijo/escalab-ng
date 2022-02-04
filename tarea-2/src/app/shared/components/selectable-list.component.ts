import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import ListItem from 'src/app/models/list-item.interface';

@Component({
  selector: 'app-selectable-list',
  template: `
    <ul>
      <li *ngFor="let item of items; let i = index" (click)="onListItemClicked(i)">
        {{item.name}} <span class="text-muted" *ngIf="item.altName">({{item.altName}})</span>
      </li>
    </ul>
  `,
  styles: [
    'li {cursor: pointer;}',
    'li:hover {color: blue; transform: translate(5px, 0px);}'
  ]
})
export class SelectableListComponent {
  
  @Input() items?: ListItem[];
  @Output() listItemClickEvent = new EventEmitter<number>();

  constructor() { }

  onListItemClicked(index: number) {
    this.listItemClickEvent.emit(index);
  }

}
