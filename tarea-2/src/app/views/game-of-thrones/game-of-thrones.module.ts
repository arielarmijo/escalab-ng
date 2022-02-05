import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/core/shared.module';
import { GameOfThronesRoutingModule } from './game-of-thrones-routing.module';
import { GameOfThronesComponent } from './game-of-thrones.component';

@NgModule({
  declarations: [
    GameOfThronesComponent
  ],
  imports: [
    CommonModule,
    GameOfThronesRoutingModule,
    SharedModule
  ]
})
export class GameOfThronesModule { }
