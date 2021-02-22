import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroComponents/heroes/heroes.component';
import { HeroDetailComponent } from './components/heroComponents/hero-detail/hero-detail.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { VillainDetailComponent } from './components/villainComponents/villain-detail/villain-detail.component';
import { VillainsComponent } from './components/villainComponents/villains/villains.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'hero-detail/:id', component: HeroDetailComponent },
  { path: 'villain-detail/:id', component: VillainDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'villains', component: VillainsComponent },
  { path: 'topbar', component: TopbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
