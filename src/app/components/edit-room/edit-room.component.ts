import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Room } from '../models/room';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.sass']
})
export class EditRoomComponent {
  newNumber?: string;
  newCapacity?: string;


  constructor(
    private firebaseService: FirebaseService,
    public dialogRef: MatDialogRef<EditRoomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { room: Room }
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateMovie(): void {
    console.log(this.data.room)
    this.firebaseService.updateRoom({ id: this.data.room.id, number: this.newNumber, capacity: this.newCapacity });
    this.dialogRef.close();
  }
}
