import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
})
export class ReservationFormComponent {
  constructor(private reservationService: ReservationService) {}
  reservationForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    date: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    time: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    guests: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    phone: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });
  onSubmit() {
    const v = this.reservationForm.getRawValue();
    const r: Reservation = {
      name: v.name,
      date: v.date,
      time: v.time,
      guests: Number(v.guests),
      phone: v.phone,
    };
    this.reservationService.addReservation(r);
    this.reservationForm.reset();
  }
}
