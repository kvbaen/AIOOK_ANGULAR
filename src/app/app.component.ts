import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'AIOOK_ANGULAR';

  constructor(private router: Router) { }

  btnMovies() {
    this.router.navigateByUrl('/Movies');
  };

  btnRooms() {
    this.router.navigateByUrl('/Rooms');
  };

}
