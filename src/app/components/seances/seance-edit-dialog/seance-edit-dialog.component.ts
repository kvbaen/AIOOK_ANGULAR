import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/models/movie';
import { Room } from 'src/app/models/room';
import { Seance } from 'src/app/models/seance';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-seance-edit-dialog',
  templateUrl: './seance-edit-dialog.component.html',
  styleUrls: ['./seance-edit-dialog.component.sass']
})
export class SeanceEditDialogComponent implements OnInit {
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

  constructor(public dialogRef: MatDialogRef<SeanceEditDialogComponent>,
    public fb: FormBuilder,
    private firebaseService: FirebaseService,
    @Inject(MAT_DIALOG_DATA) public data: { seance: Seance }) { }

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
      this.firebaseService.updateSeance({id: this.data.seance.id, movie: this.f['movie'].value, room: this.f['room'].value, date: this.f['date'].value,
      available_tickets: this.f['room'].value.capacity, sold_tickets: 0, seats_taken: []})
    }
  }

}
