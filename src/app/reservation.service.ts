import { Injectable } from '@angular/core';
import { Reservation } from './models/reservation';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor() {}
  reservations: Reservation[] = [];
  getReservations(): Observable<Reservation[]> {
    return of([
      (name : 'Shanthan');
      (date : '09/28/2028');
      (time : '9:59 PM');
      (guests : 1);
      (phone : '6014736327');
    ]);
  }
}
