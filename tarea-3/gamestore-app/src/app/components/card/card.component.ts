import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Game from 'src/app/models/game';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() game!: Game;
  @Input() index!: number;
  @Output() buyGameEvent = new EventEmitter<Game>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buyGame() {
    this.buyGameEvent.emit(this.game);
  }

  viewGame() {
    this.router.navigate(['/game',  this.index]);
  }

}
