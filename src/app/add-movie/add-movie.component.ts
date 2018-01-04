import { Component, OnInit } from '@angular/core';
import { WimpService } from '../wimp.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  private movies;
  private updateMovie = null;

  constructor(private wimpService: WimpService) { }

  getMovies() {
    this.wimpService.getRecords("movies")
      .subscribe(moviesFromAPI => {
        this.movies = moviesFromAPI;
      })
  }

  editMovie(movie){
    this.updateMovie = movie;
  }
  submitMovie(movieForm: NgForm) {
    if(!this.updateMovie){
      this.wimpService.addRecord("movies", movieForm.value)
        .subscribe(
        moviesInfo => {
          this.getMovies();
        });
    } else {
      this.wimpService.editRecord("movies", movieForm.value, this.updateMovie.id)
        .subscribe(
        actorInfo => {
          this.getMovies();
        }
        )
      this.updateMovie = null;
    }
    movieForm.resetForm();
  }
  deleteMovie(movieId) {
    this.wimpService.deleteRecord("movies", movieId)
      .subscribe(
      movieInfo => {
        this.getMovies();
      }
      )
  }

  ngOnInit() {
    this.getMovies();
  }

}
