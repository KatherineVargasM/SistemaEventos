import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EventosService } from '../../services/eventos';
import { Evento } from '../../interfaces/evento';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eliminar-evento',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './eliminar-evento.html',
  styleUrl: './eliminar-evento.css'
})
export class EliminarEventoComponent implements OnInit {

  evento: Evento = {
    eventoId: 0,
    nombre: '',
    descripcion: '',
    fecha: '',
    ubicacion: ''
  };

  constructor(
    private route: ActivatedRoute,
    private eventoService: EventosService,
    private router: Router
  ) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('eventoid'));

    if (id) {
      this.eventoService.getEventoById(id)
        .subscribe(data => this.evento = data);
    }
  }

  eliminar(): void {

    this.eventoService.deleteEvento(this.evento.eventoId)
      .subscribe(() => {
        this.router.navigate(['/eventos']);
      });

  }

}