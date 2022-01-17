import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service'
import { Router } from '@angular/router';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {

  movie: Movie = {
    title: '',
    type: '',
    duration:''
  }

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.movie.title != '' && this.movie.type != '' && this.movie.duration != ''){
      this.firebaseService.addMovie(this.movie);
      this.movie.title = '';
      this.movie.type = '';
      this.movie.duration = '';
    }
  }
  // movieForm!: FormGroup;

  // validation_messages = {
  //   'title': [
  //     { type: 'required', message: 'Title is required.' }
  //   ],
  //   'duration': [
  //     { type: 'required', message: 'Duration is required.' },
  //   ]
  // };

  // constructor(private fb: FormBuilder, public firebaseService: FirebaseService, private router: Router) {
  // }

  // ngOnInit(): void {
  //   this.movieForm = this.fb.group({
  //     title: new FormControl('', Validators.required),
  //     duration: new FormControl('', Validators.required)
  //   });
  // }

  // resetFields(){
  //   this.movieForm = this.fb.group({
  //     title: new FormControl('', Validators.required),
  //     duration: new FormControl('', Validators.required)
  //   });
  // }

  // onSubmit(value: { title: string; duration: number; }){
  //   this.firebaseService.addMovie(value)
  //   .then(
  //     res => {
  //       this.resetFields();
  //       this.router.navigate(['/home']);
  //     }
  //   )
  // }
}
