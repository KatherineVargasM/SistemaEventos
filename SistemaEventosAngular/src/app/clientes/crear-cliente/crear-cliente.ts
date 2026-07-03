import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../interfaces/cliente';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-crear-cliente',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './crear-cliente.html',
  styleUrl: './crear-cliente.css'
})
export class CrearClienteComponent {

  cliente: Cliente = {
    clienteId: 0,
    nombre: '',
    cedula: '',
    telefono: '',
    correo: ''
  };

  constructor(
    private clienteService: ClientesService,
    private router: Router
  ) { }

  guardar() {
    this.clienteService.createCliente(this.cliente)
      .subscribe(() => {
        this.router.navigate(['/clientes']);
      });
  }

}