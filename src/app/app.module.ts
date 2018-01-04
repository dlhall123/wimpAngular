import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WimpService } from './wimp.service';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddActorComponent } from './add-actor/add-actor.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module'



@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    AddActorComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [WimpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
