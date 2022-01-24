import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { throws } from 'assert';
import { Seance } from 'src/app/models/seance';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.sass']
})
export class BuyTicketComponent implements OnInit {
  available_tickets: number[] = [];
  seances: Seance[] = [];
  public form: FormGroup = new FormGroup(
    {
      seat: new FormControl('', Validators.required)
    }
  );

  constructor(public dialogRef: MatDialogRef<BuyTicketComponent>,
    public fb: FormBuilder,
    private firebaseService: FirebaseService,
    @Inject(MAT_DIALOG_DATA) public data: { seance: Seance }) { }

  ngOnInit(): void {
    if (this.data.seance.available_tickets != undefined && this.data.seance.sold_tickets != undefined && this.data.seance.seats_taken != undefined) {
      this.available_tickets = this.calculateSeats(this.data.seance.available_tickets, this.data.seance.sold_tickets, this.data.seance.seats_taken)
    }

  }

  get f() {
    return this.form.controls;
  }

  close(): void {
    this.dialogRef.close(this.form)
  }

  calculateSeats(available_tickets: number, sold_tickets: number, seats: number[]) {
    console.log("bleh")
    let seats_array: number[] = [];
    const max_seats = available_tickets + sold_tickets;
    console.log(max_seats);
    for (var x = 1; x <= max_seats; x++) {
      seats_array.push(x);
    }
    seats.forEach(element => {
      seats_array = seats_array.filter((item) => item != element);
    });
    return seats_array;
  }

  submit() {
    if (this.form.valid) {
      if (this.data.seance.available_tickets != undefined && this.data.seance.sold_tickets != undefined && this.data.seance.seats_taken != undefined) {
        this.data.seance.seats_taken?.push(this.f['seat'].value);
        this.data.seance.available_tickets--;
        this.data.seance.sold_tickets++;
      }
      this.firebaseService.updateSeance(this.data.seance);
    }
  }

}
