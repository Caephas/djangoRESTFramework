import { Component } from '@angular/core';
import { ApiService } from './api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]

})
export class AppComponent {
  movies = [{title: 'test'}]
  selectedMovie

  constructor(private api: ApiService){
    this.getAllMovies()
    this.selectedMovie = {id: -1, title: ' ', description: '', year: 0}
  }
  getAllMovies = () => {
    this.api.getAllMovies().subscribe(
      data => {
      this.movies = data
      },
      error => {
        console.log(error)
      }
    )
  }
  movieClicked = (movie) => {

    this.api.getOneMovie(movie.id).subscribe(
      data => {
        this.selectedMovie = data
      },
      error => {
        console.log(error)
      }
    )
  }
  updateMovie = () => {
    this.api.updateMovie(this.selectedMovie).subscribe(
      data => {
        this.selectedMovie = data
      },
      error => {
        console.log(error)
      }
    )
  }
}
