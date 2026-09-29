import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink } from '@angular/router';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ReservationListComponent,
    ReservationFormComponent,
    RouterLinkWithHref,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'reserve';
}
