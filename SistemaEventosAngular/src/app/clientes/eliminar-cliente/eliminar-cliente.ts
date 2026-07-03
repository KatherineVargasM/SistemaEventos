import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cliente } from '../../interfaces/cliente';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector:'app-eliminar-cliente',
  standalone:true,
  imports:[CommonModule,RouterModule],
  templateUrl:'./eliminar-cliente.html',
  styleUrl:'./eliminar-cliente.css'
})
export class EliminarClienteComponent implements OnInit{

  cliente:Cliente={
    clienteId:0,
    nombre:'',
    cedula:'',
    telefono:'',
    correo:''
  };

  constructor(
    private route:ActivatedRoute,
    private clienteService:ClientesService,
    private router:Router
  ){}

  ngOnInit(){

    const id=Number(this.route.snapshot.paramMap.get('clienteid'));

    this.clienteService.getClienteById(id)
    .subscribe(data=>this.cliente=data);

  }

  eliminar(){

    this.clienteService.deleteCliente(this.cliente.clienteId)
    .subscribe(()=>{

      this.router.navigate(['/clientes']);

    });

  }

}