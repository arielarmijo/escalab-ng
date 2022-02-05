import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Item } from '@app/core/models/component-element.model';

// https://blog.bitsrc.io/component-reusability-techniques-with-angular-727a6c603ad2
@Component({
  selector: 'app-list',
  template: `
    <ng-container *ngFor="let item of items | slice : start : end">
      <ng-container *ngTemplateOutlet="itemTemplate; context: { item: item }"></ng-container>
    </ng-container>
  `,
  styles: [ ]
})
export class ListComponent {

  @Input() items!: Item[];
  @Input() currentPage = 0;
  @Input() itemsPerPage = 10;

  @ContentChild('item', { static: false }) itemTemplate!: TemplateRef<any>;

  constructor() { }

  get start() {
    return this.currentPage * this.itemsPerPage;
  }

  get end() {
    return this.start + this.itemsPerPage;
  }

}