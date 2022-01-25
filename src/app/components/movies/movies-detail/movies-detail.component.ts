import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { Seance } from 'src/app/models/seance';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.sass']
})
export class MoviesDetailComponent implements OnInit {
  seances: Seance[] = [];
  movies: Movie[] = [];
  movieId!: string;
  dataChart = [
    { name: "", value: 0 },
  ];
  constructor(private route: ActivatedRoute,
    private firebaseService: FirebaseService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.movieId = params['id']
    })
    this.firebaseService.getMovies().subscribe(data => {
      this.movies = data;
    })
    this.firebaseService.getSeances().subscribe(data => {
      this.seances = data;
      this.getMoviePopularity();
    })

  }

  getMoviePopularity() {
    let idx;
    this.dataChart = []
    if (this.seances.length > 0) {
      this.seances.forEach(s => {
        console.log(s.movie)
        if (this.movieId == s.movie.id) {
          idx = this.dataChart.findIndex(d => {
            return d.name == s.date.toLocaleString().slice(0, -6);
          })
          if (idx >= 0) {
            this.dataChart[idx].value += s.sold_tickets
          }
          else {
            this.dataChart.push({ name: s.date.toLocaleString().slice(0, -6), value: s.sold_tickets })
          }
        }
      })
    }
  }

}
