import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SubComponent } from './sub/sub.component';

const routes: Routes = [
  {path:"home", component: AppComponent},
  {path: "sub", component: SubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
