import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Room } from '../models/room';
import { RoomAddDialogComponent } from '../room-add-dialog/room-add-dialog.component';
import { RoomEditDialogComponent } from '../room-edit-dialog/room-edit-dialog.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.sass']
})
export class RoomsComponent implements OnInit {
  rooms: Room[] = [];
  displayedColumns = [
    'number',
    'capacity',
    'edit',
    'delete'
  ];

  constructor(public dialog: MatDialog, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.refreshRooms();
  }

  openDialogEdit(data: Room): void {
    console.log(data);
    let dialogRef = this.dialog.open(RoomEditDialogComponent, {
      data: {
        room: data
      }
    });
    dialogRef.afterClosed().subscribe((data: Room[]) => {
      this.refreshRooms()
    });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(RoomAddDialogComponent);
    dialogRef.afterClosed().subscribe((data: Room[]) => {
      this.refreshRooms()
    });
  }

  deleteRoom(room: Room) {
    this.firebaseService.deleteRoom(room);
  }

  refreshRooms() {
    this.firebaseService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    },
      (error => {
        console.log(error)
      })
    );
  }
}
