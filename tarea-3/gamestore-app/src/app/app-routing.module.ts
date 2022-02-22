import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGameComponent } from './components/add-game/add-game.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GamesComponent } from './components/games/games.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'games', component: GamesComponent },
  { path: 'game/:id', component: GameDetailsComponent },
  { path: 'new-game', component: AddGameComponent },
  { path: 'edit-game/:id', component: EditGameComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
