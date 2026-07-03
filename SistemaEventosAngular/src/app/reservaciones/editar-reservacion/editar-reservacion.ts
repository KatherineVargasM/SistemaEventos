import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Reservacion } from '../../interfaces/reservacion';
import { ReservacionesService } from '../../services/reservaciones';

@Component({
  selector: 'app-editar-reservacion',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './editar-reservacion.html',
  styleUrl: './editar-reservacion.css'
})
export class EditarReservacionComponent implements OnInit {

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

  guardar() {

    this.reservacionService.updateReservacion(this.reservacion)
      .subscribe(() => {

        this.router.navigate(['/reservaciones']);

      });

  }

}