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
      id: 1,
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
    r.id = Date.now();
    const current = this.reservationsSource.value;
    this.reservationsSource.next([...current, r]);
  }
  cancelReservation(id: number) {
    const current = this.reservationsSource.value;
    this.reservationsSource.next(current.filter((r) => r.id !== id));
  }
}
