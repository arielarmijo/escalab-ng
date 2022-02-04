import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="d-flex justify-content-center my-3">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  `,
  styles: [
    '.spinner-border {width: 5rem; height: 5rem;}'
  ]
})
export class SpinnerComponent {

  constructor() { }

}
