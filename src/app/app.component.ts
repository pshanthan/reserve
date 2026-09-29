import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReservationListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'reserve';
}
