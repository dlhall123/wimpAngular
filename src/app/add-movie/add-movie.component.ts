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

  constructor(private wimpService: WimpService) { }

  getMovies() {
    this.wimpService.getRecords("movies")
      .subscribe(moviesFromAPI => {
        this.movies = moviesFromAPI;
      })
  }
  submitMovie(movieForm: NgForm) {
    console.log(movieForm.value);
    this.wimpService.addRecord("movies", movieForm.value)
      .subscribe(
      moviesInfo => {
        this.movies.push(moviesInfo);
      });
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
