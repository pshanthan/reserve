import { Injectable } from '@angular/core';
import { Reservation } from './models/reservation';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor() {}
  private reservationsSource = new BehaviorSubject<Reservation[]>([
    {
      name: 'Shanthan',
      date: '09/28/2028',
      time: '9:59 PM',
      guests: 1,
      phone: '6014736327',
    },
  ]);
  getReservations(): Observable<Reservation[]> {
    return this.reservationsSource.asObservable();
  }
  addReservation(r: Reservation) {
    const current = this.reservationsSource.value;
    this.reservationsSource.next([...current, r]);
  }
}
