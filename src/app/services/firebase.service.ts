import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { Room } from '../models/room';
import { map } from 'rxjs/operators';
import { Seance } from '../models/seance';

@Injectable({
    providedIn: 'root'
  })
export class FirebaseService {
    moviesCollection!: AngularFirestoreCollection<Movie>;
    movies!: Observable<Movie[]>;
    movieDoc!: AngularFirestoreDocument<Movie>;
    roomsCollection!: AngularFirestoreCollection<Room>;
    rooms!: Observable<Room[]>;
    roomDoc!: AngularFirestoreDocument<Room>;
    seancesCollection!: AngularFirestoreCollection<Seance>;
    seances!: Observable<Seance[]>;
    seanceDoc!: AngularFirestoreDocument<Seance>;
    constructor(public afs: AngularFirestore) {
        this.moviesCollection = this.afs.collection('movies', ref => ref.orderBy('title', 'asc'));

        this.movies = this.moviesCollection.snapshotChanges().pipe(map(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data() as Movie;
                data.id = a.payload.doc.id;
                return data;
            });
        }));

        this.roomsCollection = this.afs.collection('rooms', ref => ref.orderBy('number', 'asc'));

        this.rooms = this.roomsCollection.snapshotChanges().pipe(map(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data() as Room;
                data.id = a.payload.doc.id;
                return data;
            });
        }));

        this.seancesCollection = this.afs.collection('seances', ref => ref.orderBy('date', 'asc'));

        this.seances = this.seancesCollection.snapshotChanges().pipe(map(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data() as Seance;
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

    getRooms() {
        return this.rooms;
    }

    addRoom(room: Room) {
        this.roomsCollection.add(room);
    }

    deleteRoom(room: Room) {
        this.roomDoc = this.afs.doc(`rooms/${room.id}`);
        this.roomDoc.delete();
    }

    updateRoom(room: Room) {
        this.roomDoc = this.afs.doc(`rooms/${room.id}`);
        this.roomDoc.update(room);
    }

    getSeances() {
        return this.seances;
    }

    addSeance(seance: Seance) {
        this.seancesCollection.add(seance);
    }

    deleteSeance(seance: Seance) {
        this.seanceDoc = this.afs.doc(`seances/${seance.id}`);
        this.seanceDoc.delete();
    }

    updateSeance(seance: Seance) {
        this.seanceDoc = this.afs.doc(`seances/${seance.id}`);
        this.seanceDoc.update(seance);
    }
}