import { Component, OnInit } from '@angular/core';
import Card from 'src/app/models/card.interface';
import { HarryPotterCharacter } from 'src/app/models/harry-potter-character.interface';
import ListItem from 'src/app/models/list-item.interface';
import { HarryPotterService } from 'src/app/services/harry-potter.service';

@Component({
  selector: 'app-harry-potter',
  template: `
    <div class="container">
      <div class="row">
        <div class="col fs-6" *ngIf="houses.length > 0">
          <h2>Houses</h2>
          <app-selectable-list [items]="houseItems" (listItemClickEvent)="onHouseItemClick($event)"></app-selectable-list>
        </div>
        <div class="col" *ngIf="characters.length > 0">
          <h4>{{house}}</h4>
          <app-selectable-list [items]="characterItems" (listItemClickEvent)="onCharacterItemClick($event)"></app-selectable-list>
        </div>
        <div class="col" *ngIf="characters.length > 0">
          <app-card *ngIf="card" [card]="card"></app-card>
        </div>
        <div class="col" *ngIf="characters.length === 0">
          <app-spinner></app-spinner>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class HarryPotterComponent implements OnInit {

  house?: string;
  houses: any[] = [];
  houseItems: ListItem[] = [];
  characters: HarryPotterCharacter[] = [];
  characterItems: ListItem[] = [];
  card?: Card;

  constructor(private hpSrv: HarryPotterService) { }

  ngOnInit(): void {
    this.hpSrv.getHouses().subscribe(houses => {
      this.houses = houses;
      this.house = houses[0].name;
      this.houseItems = houses.map((house: any) => ({name: house.name, altName: house.qty}));
      this.onHouseItemClick(0);
    });
  }

  onHouseItemClick(index: number) {
    this.house = this.houses[index].name;
    this.characters = [];
    this.hpSrv.getCharactersFromHouse(this.house as string).subscribe(characters => {
      this.characters = characters;
      this.characterItems = characters.map(char => ({name: char.name, altName: char.gender}));
      this.card = this.characterToCard(characters[0]);
    });
  }

  onCharacterItemClick(index: number) {
    this.card = this.characterToCard(this.characters[index]);
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
