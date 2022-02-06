import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'game-of-thrones', loadChildren: () => import('./views/game-of-thrones/game-of-thrones.module').then(m => m.GameOfThronesModule) },
  { path: 'harry-potter', loadChildren: () => import('./views/harry-potter/harry-potter.module').then(m => m.HarryPotterModule) },
  { path: '', redirectTo:'/home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
