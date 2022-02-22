import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import Game from 'src/app/models/game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  game!: Game;
  id!: number;

  constructor(private activatedRoute: ActivatedRoute, private gameService: GamesService, private route: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.gameService.getGame(this.id).subscribe(game => {
        this.game = game;
      });
    })
   }

  ngOnInit(): void {
  }

  deleteGame() {
    this.gameService.deleteGame(this.id).subscribe(resp => {
      this.route.navigateByUrl('/games');
    });
  }

}
