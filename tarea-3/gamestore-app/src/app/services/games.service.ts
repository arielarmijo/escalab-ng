import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import Game from '../models/game.js';
import { GameStoreApiResponse } from '../models/response.js';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  apiURL = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<GameStoreApiResponse>(`${this.apiURL}/products`).pipe(
      map(resp => resp.message as Game[])
    );
  }

  getGame(id: number): Observable<Game> {
    return this.http.get<GameStoreApiResponse>(`${this.apiURL}/product/${id}`).pipe(
      map(resp => resp.message as Game)
    );
  }

  postGame(game: Game): Observable<string> {
    return this.http.post<GameStoreApiResponse>(`${this.apiURL}/product`, game).pipe(
      map(resp => resp.message as string)
    );
  }

  putGame(id: number, game: Game): Observable<Game> {
    return this.http.put<GameStoreApiResponse>(`${this.apiURL}/product/${id}`, game).pipe(
      map(resp => resp.message as Game)
    );
  }

  deleteGame(id: number): Observable<string> {
    return this.http.delete<GameStoreApiResponse>(`${this.apiURL}/product/${id}`).pipe(
      map(resp => resp.message as string)
    );
  }


}
