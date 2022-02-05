import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameOfThronesModule } from '../game-of-thrones.module';
import { GameOfThronesCharacter } from '../models/got-character.model';

@Injectable({
  providedIn: 'any'
})
export class GameOfThronesService {

  private urlApi = 'https://thronesapi.com/api/v2/Characters';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<GameOfThronesCharacter[]> {
    return this.http.get<GameOfThronesCharacter[]>(this.urlApi);
  }

  getCharacter(id: number): Observable<GameOfThronesCharacter> {
    return this.http.get<GameOfThronesCharacter>(`${this.urlApi}/${id}`);
  }

}
