import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';
import { EditRoomComponent } from '../edit-room/edit-room.component';
import { Room } from '../models/room';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.sass']
})
export class RoomsListComponent implements OnInit {

  displayedColumns = [
    'number',
    'capacity',
    'edit',
    'delete'
  ];
  rooms!: Room[];

  constructor(private firebaseService: FirebaseService, public dialog: MatDialog) { }

  ngOnInit() {
    this.firebaseService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    });
  }

  deleteRoom(room: Room) {
    this.firebaseService.deleteRoom(room);
  }

  openDialog(data: Room): void {
    console.log(data)
    const dialogRef = this.dialog.open(EditRoomComponent, {
      width: '450px',
      data: {
        room: data
      }
    })
  }
}
