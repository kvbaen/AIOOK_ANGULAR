import { Component, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FirebaseService } from 'src/app/services/firebase.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.sass']
})
export class EditMovieComponent {
  newTitle?: string;
  newType?: string;
  newDuration?: string;

  constructor(
    private afs: AngularFirestore,
    private firebaseService: FirebaseService,
    public dialogRef: MatDialogRef<EditMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { movie: Movie }
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateMovie(): void {
    console.log(this.data.movie)
    this.firebaseService.updateMovie({ id: this.data.movie.id, title: this.newTitle, type: this.newType, duration: this.newDuration });
    this.dialogRef.close();
  }

}
