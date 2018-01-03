import { Component, OnInit } from '@angular/core';
import { WimpService } from './wimp.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movies;
  actors;
  constructor(private wimpService: WimpService){}
  
  getMovies(){
      this.wimpService.getRecords("movies")
        .subscribe(moviesFromAPI => {
          this.movies = moviesFromAPI;
        })
  }
  
  getActors() {
    this.wimpService.getRecords("actors")
      .subscribe(actorsFromAPI => {
        this.actors = actorsFromAPI;
      })
  }

  submitMovie(movieForm: NgForm){
    console.log(movieForm.value);
    this.wimpService.addRecord("movies", movieForm.value)
    .subscribe(
      moviesInfo => {
      console.log(moviesInfo)
      this.getMovies();
      });
  }
  submitActor(actorForm: NgForm) {
    console.log(actorForm.value);
    this.wimpService.addRecord("actors", actorForm.value)
      .subscribe(
      actorsInfo => {
        console.log(actorsInfo)
        this.getActors();
      });
  }

  ngOnInit() {
    this.getMovies();
    this.getActors();
  }

}
