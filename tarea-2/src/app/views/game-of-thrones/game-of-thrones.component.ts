import { Component, OnInit } from '@angular/core';
import { Card, ListItem } from '@app/core/models/component-element.model';
import { GameOfThronesService } from './services/game-of-thrones.service';
import { GameOfThronesCharacter } from './models/got-character.model';

@Component({
  selector: 'app-game-of-thrones',
  template: `
    <h1 class="text-center mb-4">Game of Thrones Characters</h1>   
    <app-spinner *ngIf="items.length == 0"></app-spinner>
    <div class="container" *ngIf="items.length > 0">
      <div class="row">
        <div class="col">
          <app-selectable-list [items]="items" (listItemClickEvent)="onListItemClick($event)"></app-selectable-list>
        </div>
        <div class="col-4">
        <app-card *ngIf="card" [card]="card"></app-card>
        </div>
      </div>
    </div>
  `,
  styles: [
    'li {cursor: pointer;}',
    'li:hover {color: blue; transform: translate(5px, 0px);}'
  ]
})
export class GameOfThronesComponent implements OnInit {

  items: Array<ListItem> = [];
  characters: GameOfThronesCharacter[] = [];
  card?: Card;

  constructor(private gotSrv: GameOfThronesService) { }

  ngOnInit(): void {
    this.gotSrv.getCharacters().subscribe(characters => {
      this.items = characters.map(char => ({name: char.fullName, altName: char.title}));
      this.card = this.characterToCard(characters[0]);
      this.characters = characters;
    });
  }

  onListItemClick(index: number) {
    this.card = this.characterToCard(this.characters[index]);
  }

  private characterToCard(character: GameOfThronesCharacter): Card {
    return {
      image: character.imageUrl,
      title: character.fullName,
      subTitle: character.family,
      text: character.title
    }
  }

}
