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
import { MovieAddDialogComponent } from './components/movies/movie-add-dialog/movie-add-dialog.component';
import { MovieEditDialogComponent } from './components/movies/movie-edit-dialog/movie-edit-dialog.component';
import { RoomEditDialogComponent } from './components/rooms/room-edit-dialog/room-edit-dialog.component';
import { RoomAddDialogComponent } from './components/rooms/room-add-dialog/room-add-dialog.component';
import { SeancesComponent } from './components/seances/seances.component';
import { SeanceEditDialogComponent } from './components/seances/seance-edit-dialog/seance-edit-dialog.component';
import { SeanceAddDialogComponent } from './components/seances/seance-add-dialog/seance-add-dialog.component';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { BuyTicketComponent } from './components/buy-ticket/buy-ticket.component';
import { SeanceDetailsComponent } from './components/seances/seance-details/seance-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    RoomsComponent,
    MovieAddDialogComponent,
    MovieEditDialogComponent,
    RoomEditDialogComponent,
    RoomAddDialogComponent,
    SeancesComponent,
    SeanceEditDialogComponent,
    SeanceAddDialogComponent,
    BuyTicketComponent,
    SeanceDetailsComponent
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
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
