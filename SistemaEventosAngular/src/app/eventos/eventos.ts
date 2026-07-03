import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Evento } from '../interfaces/evento';
import { EventosService } from '../services/eventos';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './eventos.html',
  styleUrl: './eventos.css'
})
export class EventosComponent implements OnInit {

  eventos$!: Observable<Evento[]>;

  constructor(private eventoService: EventosService) { }

  ngOnInit(): void {
    this.eventos$ = this.eventoService.getEventos();
  }

}