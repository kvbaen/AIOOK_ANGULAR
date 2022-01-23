import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-edit-dialog',
  templateUrl: './movie-edit-dialog.component.html',
  styleUrls: ['./movie-edit-dialog.component.sass']
})
export class MovieEditDialogComponent implements OnInit {
  public form: FormGroup = new FormGroup(
    {
      title: new FormControl(this.data.movie.title, [Validators.required, Validators.minLength(2)]),
      type: new FormControl(this.data.movie.type, [Validators.required, Validators.minLength(2)]),
      duration: new FormControl(this.data.movie.duration, [Validators.required, Validators.minLength(2)])
    }
  );

  constructor(public dialogRef: MatDialogRef<MovieEditDialogComponent>,
    public fb: FormBuilder,
    private firebaseService: FirebaseService,
    @Inject(MAT_DIALOG_DATA) public data: { movie: Movie}) { }

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
      this.firebaseService.updateMovie({ id: this.data.movie.id, title: this.f['title'].value, type: this.f['type'].value, duration: this.f['duration'].value })
    }
  }
}
