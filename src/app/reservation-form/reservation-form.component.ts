import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
})
export class ReservationFormComponent {
  constructor(private reservationService: ReservationService) {}
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
    this.reservationService.addReservation(r);
    this.reservationForm.reset();
  }
}
