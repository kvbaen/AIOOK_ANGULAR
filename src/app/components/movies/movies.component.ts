import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service'
import { Movie } from '../../models/movie';
import { MatDialog } from '@angular/material/dialog';
import { MovieEditDialogComponent } from './movie-edit-dialog/movie-edit-dialog.component';
import { MovieAddDialogComponent } from './movie-add-dialog/movie-add-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  displayedColumns = [
    'title',
    'type',
    'duration',
    'detail',
    'edit',
    'delete'
  ];
  constructor(public dialog: MatDialog, private firebaseService: FirebaseService,
    private router: Router) { }

  ngOnInit() {
    this.refreshMovies();
  }

  openDialogEdit(data: Movie): void {
    console.log(data);
    let dialogRef = this.dialog.open(MovieEditDialogComponent, {
      height: '225px',
      data: {
        movie: data
      }
    });
    dialogRef.afterClosed().subscribe((data: Movie[]) => {
      this.refreshMovies()
    });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(MovieAddDialogComponent, {
      height: '225px'
    });
    dialogRef.afterClosed().subscribe((data: Movie[]) => {
      this.refreshMovies()
    });
  }

  deleteMovie(movie: Movie) {
    this.firebaseService.deleteMovie(movie);
  }

  refreshMovies() {
    this.firebaseService.getMovies().subscribe(movies => {
      this.movies = movies;
    },
      (error => {
        console.log(error)
      })
    );
  }

}


