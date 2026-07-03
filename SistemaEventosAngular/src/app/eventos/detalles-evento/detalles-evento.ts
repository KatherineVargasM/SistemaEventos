import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../../services/eventos';
import { Evento } from '../../interfaces/evento';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles-evento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles-evento.html'
})
export class DetallesEventoComponent implements OnInit {
  evento!: Evento;

  constructor(private route: ActivatedRoute, private eventoService: EventosService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('eventoid'));
    this.eventoService.getEventoById(id).subscribe(data => this.evento = data);
  }
}