import { Component, EventEmitter, Input, Output } from '@angular/core';

// https://blog.bitsrc.io/component-reusability-techniques-with-angular-727a6c603ad2
@Component({
  selector: 'app-pagination',
  template: `
    <nav>
      <ul class="pagination">
        <ng-container *ngFor="let p of pages">
          <li class="page-item"><button class="page-link" (click)="pageChanged.emit(p)">{{p + 1}}</button></li>
        </ng-container>
      </ul>
    </nav>
  `,
  styles: [
    'nav {margin-top: 1rem;}',
    'ul {justify-content: center;}'
  ]
})
export class PaginationComponent {

  @Input() itemsLength!: number;
  @Input() itemsPerPage!: number;
  @Input() currentPage!: number;

  @Output() pageChanged = new EventEmitter<number>();

  constructor() { }

  get pages() {
    const size = Math.ceil(this.itemsLength/this.itemsPerPage);
    const pages = new Array(size);
    console.log({pages: size});
    return pages.fill(0).map((e, i) => i);
  }

}