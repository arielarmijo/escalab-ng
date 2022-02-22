import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Game from 'src/app/models/game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  constructor( private gameService: GamesService, private router: Router) { }

  ngOnInit(): void {
  }

  saveGame(game: Game) {
    this.gameService.postGame(game).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('/games');
    });
  }

}
