import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
})
export class ReservationFormComponent {
  reservationForm = new FormGroup({
    name: new FormControl(),
    date: new FormControl(),
    time: new FormControl(),
    guests: new FormControl(),
    phone: new FormControl(),
  });
}
