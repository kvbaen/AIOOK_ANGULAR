import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { title } from 'process';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-add-dialog',
  templateUrl: './movie-add-dialog.component.html',
  styleUrls: ['./movie-add-dialog.component.sass']
})
export class MovieAddDialogComponent implements OnInit {
  public movies: Movie[] = [];
  public movie?: Movie;

  public form: FormGroup = new FormGroup(
    {
      title: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required)
    }
  );

  constructor(public dialogRef: MatDialogRef<MovieAddDialogComponent>,
    public fb: FormBuilder,
    private firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  get f() {
    return this.form.controls;
  }

  close(): void {
    this.dialogRef.close(this.form)
  }

  submit() {
    if (this.form.valid) {
      this.firebaseService.addMovie({ title: this.f['title'].value, type: this.f['type'].value, duration: this.f['duration'].value })
    }
  }

}
