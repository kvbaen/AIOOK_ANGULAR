import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Room } from '../models/room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.sass']
})
export class RoomsComponent implements OnInit {

  room: Room = {
    number: '',
    capacity: ''
  }

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.room.number != '' && this.room.capacity != ''){
      this.firebaseService.addRoom(this.room);
      this.room.number = '';
      this.room.capacity = '';
    }
  }
}
