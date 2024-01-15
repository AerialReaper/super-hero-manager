import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHeroComponent } from './components/add-hero/add-hero.component';
import { ModifyHeroComponent } from './components/modify-hero/modify-hero.component';
import { ViewAllHeroesComponent } from './components/view-all-heroes/view-all-heroes.component';

const routes: Routes = [
  { path: 'add-hero', component: AddHeroComponent },
  { path: 'modify-hero/:id', component: ModifyHeroComponent },
  { path: 'see-all-heroes', component: ViewAllHeroesComponent },
  { path: '', redirectTo: '/see-all-heroes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
