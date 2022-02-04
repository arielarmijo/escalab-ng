import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HarryPotterCharacter } from '../models/harry-potter-character.interface';

@Injectable({
  providedIn: 'root'
})
export class HarryPotterService {

  private urlApi = 'http://hp-api.herokuapp.com/api/characters';

  private houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

  constructor(private http: HttpClient) { }

  getCharactersFromHouse(house: string): Observable<HarryPotterCharacter[]> {
    return this.http.get<HarryPotterCharacter[]>(`${this.urlApi}/house/${house}`);
  }

  getHouses(): string[] {
    return this.houses;
  }

}
