import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Card, Item, Pagination } from '@app/core/models/component-element.model';
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
              <li (click)="showHouseCharacters(item)">
                <span>{{item.text}}</span>
                <span class="text-muted" *ngIf="item.altText">({{item.altText}})</span>
                <span class="badge bg-secondary">{{item.qty}}</span>
              </li>
            </ng-template>
          </app-list>
        </div>

        <div class="col-6">
          <h1>{{house}}</h1>
          <app-list *ngIf="characterItems.length > 0; else spinner"
                    [items]="characterItems"
                    [currentPage]="currentPage"
                    [itemsPerPage]="itemsPerPage">
            <ng-template #item let-item="item" (itemClicked)="log($event)">
              <li (click)="showCharacterCard(item)">
                <span>{{item.id + 1}}.-</span>
                <span>{{item.text}}</span>
                <span class="text-muted" *ngIf="item.altText">({{item.altText}})</span>
                <span class="badge bg-secondary">{{item.qty}}</span>
              </li>
            </ng-template>
          </app-list>
          <app-pagination [itemsLength]="characterItems.length"
                          [itemsPerPage]="itemsPerPage"
                          [currentPage]="currentPage"
                          (pageChanged)="currentPage=$event">
          </app-pagination>
        </div>

        <div class="col align-self-center">
        <app-card *ngIf="card" [card]="card"></app-card>
        </div>

      </div>
    </div>

    <ng-template  #spinner>
      <app-spinner></app-spinner>
    </ng-template>

  `,
  styles: [
    'li {cursor: pointer; list-style-type: none;}',
    'li:hover {color: #0d6efd; transform: translate(5px, 0px);}',
    'span {margin: 0 3px;}'
  ]
})
export class HarryPotterComponent implements OnInit {

  houseItems: Item[] = [];
  house?: string;
  characters: HarryPotterCharacter[] = [];
  characterItems: Item[] = [];
  card?: Card;

  currentPage = 0;
  itemsLength = this.characterItems.length;
  itemsPerPage = 12;

  constructor(private hpSrv: HarryPotterService) { }

  ngOnInit(): void {
    this.hpSrv.getHouses().subscribe(houses => {
      this.houseItems = houses.map((house: any, i: number) => ({id: i, text: house.name, qty: house.qty}));
      this.showHouseCharacters(this.houseItems[0]);
    });
  }

  showHouseCharacters(item: Item) {
    this.house = item.text;
    this.characterItems = [];
    this.currentPage = 0;
    this.hpSrv.getCharactersFromHouse(item.text).subscribe(characters => {
      this.characters = characters;
      this.characterItems = this.characters.map((char, i) => ({id: i, text: char.name, altText: char.gender}));
      this.showCharacterCard(this.characterItems[0]);
    });
  }

  showCharacterCard(item: Item) {
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
