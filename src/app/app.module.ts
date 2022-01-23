import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { MoviesComponent } from './components/movies/movies.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FirebaseService } from './services/firebase.service';
import { MatDialogModule } from '@angular/material/dialog';
import { RoomsComponent } from './components/rooms/rooms.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MovieAddDialogComponent } from './components/movie-add-dialog/movie-add-dialog.component';
import { MovieEditDialogComponent } from './components/movie-edit-dialog/movie-edit-dialog.component';
import { RoomEditDialogComponent } from './components/room-edit-dialog/room-edit-dialog.component';
import { RoomAddDialogComponent } from './components/room-add-dialog/room-add-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    RoomsComponent,
    MovieAddDialogComponent,
    MovieEditDialogComponent,
    RoomEditDialogComponent,
    RoomAddDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
