import Game from './game';

export interface GameStoreApiResponse {
  code: number,
  error: boolean,
  message: string | Game | Game[]
}