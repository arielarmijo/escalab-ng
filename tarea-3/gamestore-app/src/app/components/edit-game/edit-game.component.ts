import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Game from 'src/app/models/game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {

  game$!: Observable<Game>;
  id!: number;

  constructor(private gameService: GamesService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.game$ = this.gameService.getGame(this.id);
    });
  }

  ngOnInit(): void {
  }

  updateGame(game: Game) {
    this.gameService.putGame(this.id, game).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('/games');
    })
  }

}
