import { Component, OnInit } from '@angular/core';
import { Card, Item, ListItem } from '@app/core/models/component-element.model';
import { GameOfThronesService } from './services/game-of-thrones.service';
import { GameOfThronesCharacter } from './models/got-character.model';

@Component({
  selector: 'app-game-of-thrones',
  template: `

    <h1 class="text-center mb-3">Game of Thrones Characters</h1>

    <div class="container" *ngIf="items.length > 0; else spinner">
      <div class="row">
        <div class="col-8">
          <app-list [items]="items" [currentPage]="currentPage" [itemsPerPage]="itemsPerPage">
            <ng-template #item let-item="item">
              <app-selectable-item [item]="item" (itemClicked)="showCharacterCard($event)"></app-selectable-item>
            </ng-template>
          </app-list>
          <app-pagination [currentPage]="currentPage" [itemsLength]="items.length"
            [itemsPerPage]="itemsPerPage" (pageChanged)="currentPage = $event">
          </app-pagination>
        </div>
        <div class="col align-self-center">
          <app-card *ngIf="card" [card]="card"></app-card>
        </div>
      </div>
    </div>  
    
    <ng-template #spinner>
      <app-spinner></app-spinner>
    </ng-template>

  `,
  styles: [ ]
})
export class GameOfThronesComponent implements OnInit {

  items: Array<Item> = [];
  characters: GameOfThronesCharacter[] = [];
  card?: Card;

  currentPage = 0;
  itemsPerPage = 12;

  constructor(private gotSrv: GameOfThronesService) { }

  ngOnInit(): void {
    this.gotSrv.getCharacters().subscribe(characters => {
      this.items = characters.map(char => ({id: char.id, text: char.fullName, altText: char.title}));
      this.characters = characters;
      this.card = this.characterToCard(characters[0]);
    });
  }

  showCharacterCard(item: Item) {
    this.card = this.characterToCard(this.characters[item.id]);
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
