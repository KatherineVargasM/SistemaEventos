import { Component, OnInit } from '@angular/core';
import { ReservacionesService } from '../../services/reservaciones';
import { Reservacion } from '../../interfaces/reservacion';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component ({
  selector: 'app-reservaciones',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './crear-reservacion.html',
  styleUrl: './crear-reservacion.css'
})
export class CrearReservacionComponent implements OnInit {
  reservaciones$!: Observable<Reservacion[]>;

  constructor(private reservacionesService: ReservacionesService) {}

  ngOnInit(): void {
    this.reservaciones$ = this.reservacionesService.getReservaciones();
  }

  eliminarReservacion(id: number): void {
    if (confirm('¿Estás seguro de cancelar esta reservación?')) {
      this.reservacionesService.deleteReservacion(id).subscribe(() => {
        this.reservaciones$ = this.reservacionesService.getReservaciones();
      });
    }
  }
}