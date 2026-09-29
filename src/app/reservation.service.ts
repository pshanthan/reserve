import { Injectable } from '@angular/core';
import { Reservation } from './models/reservation';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor() {}
  private reservations: Reservation[] = [];
  private reservationsSource = new BehaviorSubject<Reservation[]>({
    name: 'Shanthan',
    date: '09/28/2028',
    time: '9:59 PM',
    guests: 1,
    phone: '6014736327',
  });
  getReservations(): Observable<Reservation[]> {
    return of(this.reservations);
  }
  addReservation(r: Reservation) {
    this.reservations.push(r);
  }
}
