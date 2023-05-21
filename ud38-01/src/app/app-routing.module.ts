import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CharacterComponent } from './character/character.component';
import { MainComponent } from './main/main.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent
  },
  {
    path:'navbar',
    component: NavbarComponent
  },
  {
    path:'character',
    component: CharacterComponent
  },
  {
    path:'character/:id',
    component:CharacterDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
