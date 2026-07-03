import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EventosService } from '../../services/eventos';
import { Evento } from '../../interfaces/evento';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles-evento',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalles-evento.html',
  styleUrl: './detalles-evento.css'
})
export class DetallesEventoComponent implements OnInit {
  evento: Evento = { 
    eventoId: 0, 
    nombre: '', 
    descripcion: '', 
    fecha: '', 
    ubicacion: '' 
  };

  constructor(private route: ActivatedRoute, private eventoService: EventosService) {}

  ngOnInit(): void {

  const id = Number(this.route.snapshot.paramMap.get('eventoid'));

  console.log("ID:", id);

  if(id){

    this.eventoService.getEventoById(id).subscribe({
      next:data=>{
        console.log("RECIBIDO:",data);
        this.evento=data;
      },
      error:err=>{
        console.error(err);
      }
    });

  }

}
}