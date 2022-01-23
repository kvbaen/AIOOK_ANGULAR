import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Room } from '../models/room';

@Component({
  selector: 'app-room-edit-dialog',
  templateUrl: './room-edit-dialog.component.html',
  styleUrls: ['./room-edit-dialog.component.sass']
})
export class RoomEditDialogComponent implements OnInit {
  public form: FormGroup = new FormGroup(
    {
      number: new FormControl(this.data.room.number, Validators.required),
      capacity: new FormControl(this.data.room.capacity, Validators.required),
    }
  );

  constructor(public dialogRef: MatDialogRef<RoomEditDialogComponent>,
    public fb: FormBuilder,
    private firebaseService: FirebaseService,
    @Inject(MAT_DIALOG_DATA) public data: { room: Room}) { }

  ngOnInit(): void {
  }

  get f() {
    return this.form.controls;
  }

  close(): void {
    this.dialogRef.close(this.form)
  }

  submit() {
    if (this.form.valid) {
      this.firebaseService.updateRoom({ id: this.data.room.id, number: this.f['number'].value, capacity: this.f['capacity'].value })
    }
  }

}
