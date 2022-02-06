import { Component, OnInit } from '@angular/core';
import { Card, Item, Pagination } from '@app/core/models/component-element.model';
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
              <li (click)="showCharacterCard(item)">
                  <span>{{item.id + 1}}.-</span>
                  <span>{{item.text}}</span>
                  <span class="text-muted" *ngIf="item.altText">({{item.altText}})</span>
                  <span class="badge bg-secondary">{{item.qty}}</span>
                </li>
            </ng-template>
          </app-list>
          <app-pagination [itemsLength]="items.length"
                          [itemsPerPage]="itemsPerPage"
                          [currentPage]="currentPage"
                          (pageChanged)="currentPage=$event">
          </app-pagination>
        </div>
        <div class="col align-self-center" *ngIf="card">
          <app-card [card]="card"></app-card>
        </div>
      </div>
    </div>  
    
    <ng-template #spinner>
      <app-spinner></app-spinner>
    </ng-template>

  `,
  styles: [
    'li {cursor: pointer; list-style-type: none;}',
    'li:hover {color: #0d6efd; transform: translate(5px, 0px);}',
    'span {margin: 0 3px;}'
  ]
})
export class GameOfThronesComponent implements OnInit {

  items: Item[] = [];
  currentPage = 0;
  itemsPerPage = 12;
  characters: GameOfThronesCharacter[] = [];
  card?: Card;

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
