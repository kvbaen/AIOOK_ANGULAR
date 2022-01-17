import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Movie } from '../models/movie';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { EditMovieComponent } from '../edit-movie/edit-movie.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  displayedColumns = [
    'title',
    'type',
    'duration',
    'edit',
    'delete'
  ];
  columnsToDisplay = [
    'title',
    'type',
    'duration'
  ];
  expandedElement!: Movie | null;
  movies!: Movie[];
  editState: boolean = false;
  movieToEdit!: Movie | null;

  constructor(private firebaseService: FirebaseService, public dialog: MatDialog) { }

  ngOnInit() {
    this.firebaseService.getMovies().subscribe(movies => {
      //console.log(movies);
      this.movies = movies;
    });
  }

  deleteMovie(movie: Movie) {
    this.clearState();
    this.firebaseService.deleteMovie(movie);
  }

  editMovie(event: any, movie: Movie) {
    this.editState = true;
    this.movieToEdit = movie;
  }

  updateMovie(movie: Movie) {
    this.firebaseService.updateMovie(movie);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.movieToEdit = null;
  }

  openDialog(data: any): void {
    const dialogRef = this.dialog.open(EditMovieComponent, {
      height: '400px',
      width: '600px',
      data: data
    })
  }
  // dataSource!: MatTableDataSource<any>;

  // displayedColumns = [
  //   'title',
  //   'duration',
  //   'edit', 
  //   'delete'
  // ];

  // @ViewChild(MatSort) sort!:MatSort;

  // constructor(private router: Router, public firebaseService: FirebaseService) { }

  // ngAfterViewInit(): void {
  //   this.firebaseService
  //   .getMovies()
  //   .subscribe(data => (this.dataSource = new MatTableDataSource(data)))
  //   this.dataSource.sort = this.sort;
  // }

  // deleteMovie(): void {
  //   this.firebaseService.deleteMovie();
  // }
  // movies(): void {
  //   this.router.navigateByUrl('/movies')
  // }

}
