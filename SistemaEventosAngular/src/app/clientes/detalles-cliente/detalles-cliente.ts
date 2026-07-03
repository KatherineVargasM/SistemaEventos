import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cliente } from '../../interfaces/cliente';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-detalles-cliente',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalles-cliente.html',
  styleUrl: './detalles-cliente.css'
})
export class DetallesClienteComponent implements OnInit {

  cliente: Cliente = {
    clienteId:0,
    nombre:'',
    cedula:'',
    telefono:'',
    correo:''
  };

  constructor(
    private route:ActivatedRoute,
    private clienteService:ClientesService
  ){}

  ngOnInit():void{

    const id=Number(this.route.snapshot.paramMap.get('clienteid'));

    this.clienteService.getClienteById(id)
      .subscribe(data=>this.cliente=data);

  }

}