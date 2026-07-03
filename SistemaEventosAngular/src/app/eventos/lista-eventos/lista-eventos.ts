import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos';
import { Evento } from '../../interfaces/evento';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-eventos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-eventos.html',
  styleUrl: './lista-eventos.css'
})
export class ListaEventosComponent implements OnInit {
  eventos$!: Observable<Evento[]>;

  constructor(private eventosService: EventosService) {}

  ngOnInit(): void {
    this.eventos$ = this.eventosService.getEventos();
  }

  eliminarEvento(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este evento?')) {
      this.eventosService.deleteEvento(id).subscribe(() => {
        this.eventos$ = this.eventosService.getEventos();
      });
    }
  }
}