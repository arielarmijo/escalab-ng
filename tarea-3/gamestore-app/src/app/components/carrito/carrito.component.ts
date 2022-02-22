import { Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import Game from 'src/app/models/game.js';
import { GamesService } from 'src/app/services/games.service';

interface Item {
  quantity: number,
  game: Game
}

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnChanges {

  @Input() game?: Game;
  items: Item[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const game = changes['game'].currentValue;
    if (!game) return;
    for (const item of this.items) {
      if (item.game.name === game.name) {
        item.quantity = item.quantity + 1;
        return;
      }
    }
    this.items.push({ quantity: 1, game });
  }

  removeGame(index: number) {
    const [item] = this.items.splice(index, 1);
  }

}
