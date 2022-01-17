import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Movie } from '../components/models/movie';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class FirebaseService {
    moviesCollection!: AngularFirestoreCollection<Movie>;
    movies!: Observable<Movie[]>;
    movieDoc!: AngularFirestoreDocument<Movie>;
    constructor(public afs: AngularFirestore) {
        this.moviesCollection = this.afs.collection('movies', ref => ref.orderBy('title', 'asc'));

        this.movies = this.moviesCollection.snapshotChanges().pipe(map(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data() as Movie;
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }

    getMovies() {
        return this.movies;
    }

    addMovie(movie: Movie) {
        this.moviesCollection.add(movie);
    }

    deleteMovie(movie: Movie) {
        this.movieDoc = this.afs.doc(`movies/${movie.id}`);
        this.movieDoc.delete();
    }

    updateMovie(movie: Movie) {
        this.movieDoc = this.afs.doc(`movies/${movie.id}`);
        this.movieDoc.update(movie);
    }

    // getMovies() {
    //     return this.db.collection('movies').valueChanges();
    // }

    // addMovie(value: { title: string; duration: number; }) {
    //     return this.db.collection('movies').add({
    //         title: value.title,
    //         duration: value.duration
    //     });
    // }

    // getMovie(movieKey: any) {
    //     return this.db.collection('movies').doc(movieKey).snapshotChanges();
    // }

    // deleteMovie(movieKey: string) {
    //     return this.db.collection('movies').doc(movieKey).delete();
    // }

    // updateUser(movieKey: string, value: { title: string; duration: number; }) {
    //     return this.db.collection('movies').doc(movieKey).set(value);
    // }
}