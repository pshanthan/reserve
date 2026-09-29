import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../models/reservation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation-list',
  imports: [CommonModule],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css',
})
export class ReservationListComponent implements OnInit {
  constructor(private reservationService: ReservationService) {}
  reservations: Reservation[] = [];
  ngOnInit(): void {
    this.getReservations();
  }
  getReservations() {
    return this.reservationService
      .getReservations()
      .subscribe((r) => (this.reservations = r));
  }
}
