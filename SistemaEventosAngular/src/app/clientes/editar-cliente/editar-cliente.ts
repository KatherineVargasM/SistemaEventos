import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../interfaces/cliente';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector:'app-editar-cliente',
  standalone:true,
  imports:[FormsModule,RouterModule],
  templateUrl:'./editar-cliente.html',
  styleUrl:'./editar-cliente.css'
})
export class EditarClienteComponent implements OnInit{

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

  guardar(){

    this.clienteService.updateCliente(this.cliente)
    .subscribe(()=>{

      this.router.navigate(['/clientes']);

    });

  }

}