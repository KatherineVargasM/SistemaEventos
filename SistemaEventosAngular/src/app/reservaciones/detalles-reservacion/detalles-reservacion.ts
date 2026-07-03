import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Reservacion } from '../../interfaces/reservacion';
import { ReservacionesService } from '../../services/reservaciones';

@Component({
  selector: 'app-detalles-reservacion',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalles-reservacion.html',
  styleUrl: './detalles-reservacion.css'
})
export class DetallesReservacionComponent implements OnInit {

  reservacion: Reservacion = {
    reservacionId: 0,
    eventoId: 0,
    evento: {} as any,
    clienteId: 0,
    cliente: {} as any,
    fechaReservacion: '',
    estado: ''
  };

  constructor(
    private route: ActivatedRoute,
    private reservacionService: ReservacionesService
  ) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('reservacionid'));

    this.reservacionService.getReservacionById(id)
      .subscribe(data => {
        this.reservacion = data;
      });

  }

}