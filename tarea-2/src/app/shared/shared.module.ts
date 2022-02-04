import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner.component';
import { CardComponent } from './components/card.component';
import { SelectableListComponent } from './components/selectable-list.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SpinnerComponent,
    CardComponent,
    SelectableListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SpinnerComponent,
    CardComponent,
    SelectableListComponent
  ]
})
export class SharedModule { }
