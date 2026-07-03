import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventosService } from '../../services/eventos';
import { Evento } from '../../interfaces/evento';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-evento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-evento.html',
  styleUrl: './crear-evento.css'
})
export class CrearEventoComponent {
  evento: Evento = { eventoId: 0, nombre: '', descripcion: '', fecha: '', ubicacion: '' };

  constructor(private eventoService: EventosService, private router: Router) {}

  guardar(): void {
    this.eventoService.createEvento(this.evento).subscribe(() => {
      this.router.navigate(['/eventos']);
    });
  }
}