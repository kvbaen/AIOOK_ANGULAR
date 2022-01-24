import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-room-add-dialog',
  templateUrl: './room-add-dialog.component.html',
  styleUrls: ['./room-add-dialog.component.sass']
})
export class RoomAddDialogComponent implements OnInit {
  public form: FormGroup = new FormGroup(
    {
      number: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$")]),
      capacity: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$")])
    }
  );

  constructor(public dialogRef: MatDialogRef<RoomAddDialogComponent>,
    public fb: FormBuilder,
    private firebaseService: FirebaseService) { }

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
      this.firebaseService.addRoom({ number: this.f['number'].value, capacity: this.f['capacity'].value })
    }
  }

}
