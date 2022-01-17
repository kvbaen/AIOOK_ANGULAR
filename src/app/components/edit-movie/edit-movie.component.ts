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
  newTitle!: string;
  newType!:string;
  newDuration!: string;
  movie!: Movie;

  constructor(
    private afs: AngularFirestore,
    private firebaseService: FirebaseService,
    public dialogRef: MatDialogRef<EditMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) {
      console.log("asdasdasdas");
     }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateMovie(): void {
    this.afs.collection('movies').doc(`movies/${this.movie.id}`).update({title: this.newTitle, type: this.newType, duration: this.newDuration});
    this.dialogRef.close();
  }

}
