import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameOfThronesRoutingModule } from './game-of-thrones-routing.module';
import { GameOfThronesComponent } from './game-of-thrones.component';
import { SharedModule } from 'src/app/shared/shared.module';

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
