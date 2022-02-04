import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HarryPotterRoutingModule } from './harry-potter-routing.module';
import { HarryPotterComponent } from './harry-potter.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HarryPotterComponent
  ],
  imports: [
    CommonModule,
    HarryPotterRoutingModule,
    SharedModule
  ]
})
export class HarryPotterModule { }
