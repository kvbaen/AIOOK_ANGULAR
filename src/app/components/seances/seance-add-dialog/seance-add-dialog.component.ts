import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Movie } from 'src/app/models/movie';
import { Room } from 'src/app/models/room';
import { Seance } from 'src/app/models/seance';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-seance-add-dialog',
  templateUrl: './seance-add-dialog.component.html',
  styleUrls: ['./seance-add-dialog.component.sass']
})
export class SeanceAddDialogComponent implements OnInit {
  movies: Movie[] = [];
  rooms: Room[] = [];
  seances: Seance[] = [];
  public minDate =  new Date().toISOString().slice(0, -8);
  public form: FormGroup = new FormGroup(
    {
      movie: new FormControl('', Validators.required),
      room: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required)
    }
  );

  constructor(public dialogRef: MatDialogRef<SeanceAddDialogComponent>,
    public fb: FormBuilder,
    private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.getMovies().subscribe(data => {
      this.movies = data;
    });
    this.firebaseService.getRooms().subscribe(data => {
      this.rooms = data;
    });
  }

  get f() {
    return this.form.controls;
  }

  close(): void {
    this.dialogRef.close(this.form)
  }

  submit() {
    console.log(this.f['room'].value.capacity);
    if (this.form.valid) {
      this.firebaseService.addSeance({ movie: this.f['movie'].value, room: this.f['room'].value, date: this.f['date'].value,
      available_tickets: this.f['room'].value.capacity ,sold_tickets: 0, seats_taken: []})
    }
  }

}
