import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { SeancesComponent } from './components/seances/seances.component';

const routes: Routes = [
  {
    path: '', component: MoviesComponent
  },
  {
    path: 'Rooms', component: RoomsComponent
  },
  {
    path: 'Movies', component: MoviesComponent
  },
  {
    path: 'Seances', component: SeancesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
