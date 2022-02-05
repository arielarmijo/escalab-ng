import { Component, OnInit } from '@angular/core';
import { Card, Item, ListItem } from '@app/core/models/component-element.model';
import { HarryPotterService } from './services/harry-potter.service';
import { HarryPotterCharacter } from './models/hp-character.model';

@Component({
  selector: 'app-harry-potter',
  template: `

    <div class="container" *ngIf="houseItems.length > 0; else spinner">
      <div class="row">

        <div class="col-3">
          <h1>Houses</h1>
          <app-list [items]="houseItems">
            <ng-template #item let-item="item" (itemClicked)="log($event)">
              <app-selectable-item [item]="item" [showId]="false" (itemClicked)="showHouseCharacters($event)"></app-selectable-item>
            </ng-template>
          </app-list>
        </div>

        <div class="col">
          <h1>{{house}}</h1>
          <app-list [items]="characterItems" [currentPage]="currentPage" [itemsPerPage]="itemsPerPage" *ngIf="characterItems.length > 0; else spinner">
            <ng-template #item let-item="item" (itemClicked)="log($event)">
              <app-selectable-item [item]="item" [showId]="true" (itemClicked)="showCharactersCard($event)"></app-selectable-item>
            </ng-template>
          </app-list>
          <app-pagination [currentPage]="currentPage" [itemsLength]="characterItems.length"
            [itemsPerPage]="itemsPerPage" (pageChanged)="currentPage=$event">
          </app-pagination>
        </div>

        <div class="col">
        <app-card *ngIf="card" [card]="card"></app-card>
        </div>

      </div>
    </div>

    <ng-template  #spinner>
      <app-spinner></app-spinner>
    </ng-template>

  `,
  styles: [
    'li {cursor: pointer;}',
    'li:hover {color: #0d6efd; transform: translate(5px, 0px);}',
    '.badge {margin: 0 0.5rem;}'
  ]
})
export class HarryPotterComponent implements OnInit {

  houseItems: Item[] = [];
  house?: string;
  characters: HarryPotterCharacter[] = [];
  characterItems: Item[] = [];
  card?: Card;

  currentPage = 0;
  itemsPerPage = 12;

  constructor(private hpSrv: HarryPotterService) { }

  ngOnInit(): void {
    this.hpSrv.getHouses().subscribe(houses => {
      this.houseItems = houses.map((house: any, i: number) => ({id: i, text: house.name, qty: house.qty}));
      this.house = houses[0].name;
      this.showHouseCharacters(this.houseItems[0]);
    });
  }

  showHouseCharacters(item: Item) {
    this.house = item.text;
    this.characterItems = [];
    this.currentPage = 0;
    this.hpSrv.getCharactersFromHouse(item.text).subscribe(characters => {
      this.characterItems = characters.map((char, i) => ({id: i, text: char.name, altText: char.gender}));
      this.characters = characters;
      this.showCharactersCard(this.characterItems[0]);
    });
  }

  showCharactersCard(item: Item) {
    this.card = this.characterToCard(this.characters[item.id]);
  }

  private characterToCard(character: HarryPotterCharacter): Card {
    return {
      image: character.image !== '' ? character.image : './assets/images/anonymous-user.jpg',
      title: character.name,
      subTitle: character.house,
      text: character.actor
    }
  }

}
