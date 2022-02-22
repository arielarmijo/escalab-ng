import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Game from 'src/app/models/game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnChanges, OnInit {

  @Input() game: Game = {
    name: '',
    description: '',
    platform: '',
    img: ''
  };
  @Output() gameFormEvent = new EventEmitter<Game>();
  gameForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.game = changes['game'].currentValue;
  }

  ngOnInit(): void {
    this.gameForm = this.fb.group({
      name: [this.game.name, [Validators.required, Validators.minLength(3)]],
      description: [this.game.description, [Validators.required, Validators.minLength(3)]],
      platform: [this.game.platform, [Validators.required, Validators.minLength(3)]],
      image: [this.game.img, [Validators.required]]
    });
  }

  saveGame() {
    if (this.gameForm.valid) {
      const game: Game = {
        name: this.name?.value,
        description: this.description?.value,
        platform: this.description?.value,
        img: this.image?.value
      };
      this.gameFormEvent.emit(game);
    }
  }

  get name() {
    return this.gameForm.get('name');
  }

  get description() {
    return this.gameForm.get('description');
  }

  get platform() {
    return this.gameForm.get('platform');
  }

  get image() {
    return this.gameForm.get('image');
  }

}
