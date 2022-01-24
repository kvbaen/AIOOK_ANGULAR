import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movie } from 'src/app/models/movie';
import { Room } from 'src/app/models/room';
import { Seance } from 'src/app/models/seance';
import { FirebaseService } from 'src/app/services/firebase.service';
import { BuyTicketComponent } from '../buy-ticket/buy-ticket.component';
import { SeanceAddDialogComponent } from './seance-add-dialog/seance-add-dialog.component';
import { SeanceEditDialogComponent } from './seance-edit-dialog/seance-edit-dialog.component';

@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.sass']
})
export class SeancesComponent implements OnInit {
  movies: Movie[] = [];
  rooms: Room[] = [];
  seances: Seance[] = [];
  displayedColumns = [
    'movie',
    'room',
    'date',
    'time',
    'sold_tickets',
    'available_tickets',
    'buy',
    'edit',
    'delete'

  ];

  constructor(public dialog: MatDialog, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.refreshSeances();
    this.firebaseService.getMovies().subscribe(data => {
      this.movies = data;
    });
    this.firebaseService.getRooms().subscribe(data => {
      this.rooms = data;
    });
    this.firebaseService.getSeances().subscribe(data => {
      this.seances = data;
    });

  }

  openDialogEdit(data: Seance): void {
    let dialogRef = this.dialog.open(SeanceEditDialogComponent, {
      height: '225px',
      data: {
        seance: data,
      }
    });
    dialogRef.afterClosed().subscribe((data: Seance[]) => {
      this.refreshSeances()
    });
  }

  openTicketDialog(data: Seance): void {
    let dialogRef = this.dialog.open(BuyTicketComponent, {
      height: '225px',
      data: {
        seance: data,
      }
    });
    dialogRef.afterClosed().subscribe((data: Seance[]) => {
      this.refreshSeances()
    });
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(SeanceAddDialogComponent, {
      height: '225px',
    }
    );
    dialogRef.afterClosed().subscribe((data: Seance[]) => {
      this.refreshSeances()
    });
  }

  deleteSeance(seance: Seance) {
    this.firebaseService.deleteSeance(seance);
  }

  refreshSeances() {
    this.firebaseService.getSeances().subscribe(seances => {
      this.seances = seances;
    },
      (error => {
        console.log(error)
      })
    );
  }

  toDateString() {

  }
}
