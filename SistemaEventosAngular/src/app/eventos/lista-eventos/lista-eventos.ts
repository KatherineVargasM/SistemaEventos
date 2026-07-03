import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos';
import { Evento } from '../../interfaces/evento';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-eventos.html'
})
export class ListaEventosComponent implements OnInit {
  eventos: Evento[] = [];

  constructor(private eventosService: EventosService) {}

  ngOnInit(): void {
    this.eventosService.getEventos().subscribe(data => {
      this.eventos = data;
    });
  }
}