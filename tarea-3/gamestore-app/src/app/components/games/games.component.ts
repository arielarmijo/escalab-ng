import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import Game from 'src/app/models/game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Game[] = [];
  game?: Game;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.setUp();
  }

  setUp() {
    this.gamesService.getGames().subscribe(games => {
      this.games = games;
    });
  }

  selectGame(game: Game): void {  
    this.game = {...game};
  }

}
