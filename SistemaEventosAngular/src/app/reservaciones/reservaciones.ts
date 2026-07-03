import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Reservacion } from '../interfaces/reservacion';
import { ReservacionesService } from '../services/reservaciones';

@Component({
  selector: 'app-reservaciones',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './reservaciones.html',
  styleUrl: './reservaciones.css'
})
export class ReservacionesComponent implements OnInit {

  reservaciones$!: Observable<Reservacion[]>;

  constructor(private reservacionService: ReservacionesService) { }

  ngOnInit(): void {

    this.reservaciones$ =
      this.reservacionService.getReservaciones();

  }

}