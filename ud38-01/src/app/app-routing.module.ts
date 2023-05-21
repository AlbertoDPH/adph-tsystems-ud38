import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CharacterComponent } from './character/character.component';

const routes: Routes = [
  {
    path:'navbar',
    component: NavbarComponent,
  },
  {
    path:'character',
    component: CharacterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
