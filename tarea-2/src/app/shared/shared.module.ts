import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '@app/core/components/navbar.component';
import { SpinnerComponent } from '@app/core/components/spinner.component';
import { CardComponent } from '@app/core/components/card.component';
import { ListComponent } from './components/list.component';
import { PaginationComponent } from './components/pagination.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SpinnerComponent,
    CardComponent,
    ListComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SpinnerComponent,
    CardComponent,
    ListComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
