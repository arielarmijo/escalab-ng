import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '@app/core/components/navbar.component';
import { SpinnerComponent } from '@app/core/components/spinner.component';
import { CardComponent } from '@app/core/components/card.component';
import { SelectableListComponent } from '@app/core/components/selectable-list.component';

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
