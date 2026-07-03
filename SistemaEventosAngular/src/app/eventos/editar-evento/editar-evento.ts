import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from '../../services/eventos';
import { Evento } from '../../interfaces/evento';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-evento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-evento.html'
})
export class EditarEventoComponent implements OnInit {
  evento: Evento = { eventoId: 0, nombre: '', descripcion: '', fecha: '', ubicacion: '' };

  constructor(private route: ActivatedRoute, private eventoService: EventosService, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('eventoid'));
    this.eventoService.getEventoById(id).subscribe(data => this.evento = data);
  }

  guardar(): void {
    this.eventoService.updateEvento(this.evento).subscribe(() => this.router.navigate(['/eventos']));
  }
}