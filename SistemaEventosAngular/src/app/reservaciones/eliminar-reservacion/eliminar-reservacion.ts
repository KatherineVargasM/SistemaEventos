import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Reservacion } from '../../interfaces/reservacion';
import { ReservacionesService } from '../../services/reservaciones';

@Component({
  selector: 'app-eliminar-reservacion',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './eliminar-reservacion.html',
  styleUrl: './eliminar-reservacion.css'
})
export class EliminarReservacionComponent implements OnInit {

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
    private reservacionService: ReservacionesService,
    private router: Router
  ) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('reservacionid'));

    this.reservacionService.getReservacionById(id)
      .subscribe(data => {

        this.reservacion = data;

      });

  }

  eliminar() {

    this.reservacionService.deleteReservacion(this.reservacion.reservacionId)
      .subscribe(() => {

        this.router.navigate(['/reservaciones']);

      });

  }

}