import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
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
  @Input() itemsPerPage!: number;
  @Input() currentPage = 0;

  @ContentChild('item', { static: false }) itemTemplate!: TemplateRef<any>;

  constructor() { }

  get start() {
    console.log({currentPage: this.currentPage});
    return this.currentPage * this.itemsPerPage;
  }

  get end() {
    return this.start + this.itemsPerPage;
  }

}