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

  getHouses(): Observable<any> {
    return this.http.get<HarryPotterCharacter[]>(this.urlApi).pipe(
      map(characters => {
        const houses = characters
          .filter(char => char.house !== '')
          .map(char => char.house)
          .reduce((acc, curr) => {
            if (acc[curr]) acc[curr] = acc[curr] + 1;
            else acc[curr] = 1;
            return acc;
          }, <any>{});
        return Object.entries(houses).map(([key, value]) => ({name: key, qty: value}));
      }
      )
    )
  }

}
