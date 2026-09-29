import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReservationListComponent, ReservationFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'reserve';
}
