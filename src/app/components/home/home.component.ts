import { Component, OnInit} from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Movie } from '../models/movie';
import { EditMovieComponent } from '../edit-movie/edit-movie.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  displayedColumns = [
    'title',
    'type',
    'duration',
    'edit',
    'delete'
  ];
  movies!: Movie[];

  constructor(private firebaseService: FirebaseService, public dialog: MatDialog) { }

  ngOnInit() {
    this.firebaseService.getMovies().subscribe(movies => {
      this.movies = movies;
    });
  }

  deleteMovie(movie: Movie) {
    this.firebaseService.deleteMovie(movie);
  }

  updateMovie(movie: Movie) {
    this.firebaseService.updateMovie(movie);
  }

  openDialog(data: Movie): void {
    console.log(data)
    const dialogRef = this.dialog.open(EditMovieComponent, {
      width: '450px',
      data: {
        movie: data
      }
    })
  }

}
