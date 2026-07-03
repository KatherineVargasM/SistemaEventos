import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ReservacionesService } from '../../services/reservaciones';
import { EventosService } from '../../services/eventos';
import { ClientesService } from '../../services/clientes';
import { Evento } from '../../interfaces/evento';
import { Cliente } from '../../interfaces/cliente';

@Component({
  selector: 'app-crear-reservacion',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crear-reservacion.html'
})
export class CrearReservacionComponent implements OnInit {
  reservacionForm: FormGroup;
  eventos: Evento[] = [];
  clientes: Cliente[] = [];

  constructor(
    private fb: FormBuilder, 
    private reservacionesService: ReservacionesService,
    private eventosService: EventosService,
    private clientesService: ClientesService
  ) {
    this.reservacionForm = this.fb.group({
      eventoId: ['', Validators.required],
      clienteId: ['', Validators.required],
      estado: ['Confirmada']
    });
  }

  ngOnInit(): void {

    this.eventosService.getEventos().subscribe(data => this.eventos = data);
    this.clientesService.getClientes().subscribe(data => this.clientes = data);
  }

  onSubmit() {
    if (this.reservacionForm.valid) {
      this.reservacionesService.createReservacion(this.reservacionForm.value).subscribe(() => {
        alert('Reservación creada correctamente');
        this.reservacionForm.reset();
      });
    }
  }
}