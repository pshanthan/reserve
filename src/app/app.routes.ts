import { Routes } from '@angular/router';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

export const routes: Routes = [
  {
    path: 'reservation',
    component: ReservationListComponent,
  },
  {
    path: 'new',
    component: ReservationFormComponent,
  },
];
