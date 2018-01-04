import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddActorComponent } from './add-actor/add-actor.component';

const appRoutes: Routes = [
  { path: 'actors', component: AddActorComponent },
  { path: 'movies', component: AddMovieComponent },
  { path: '**', redirectTo: '/actors' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
