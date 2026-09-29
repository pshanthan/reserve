import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
})
export class ReservationFormComponent {
  reservations: Reservation[] = [];
  reservationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    guests: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });
  onSubmit() {
    const r: Reservation = this.reservationForm.value as Reservation;
    this.reservationForm.add(r);
    this.reservationForm.reset();
  }
  addReservation(r: Reservation) {
    this.reservations.push(r);
  }
}
