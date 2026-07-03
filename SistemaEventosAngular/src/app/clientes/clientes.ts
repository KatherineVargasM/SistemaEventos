import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from '../interfaces/cliente';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css'
})
export class ClientesComponent implements OnInit {
  clientes$!: Observable<Cliente[]>;

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.clientes$ = this.clientesService.getClientes();
  }

  eliminarCliente(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
      this.clientesService.deleteCliente(id).subscribe(() => {
        this.clientes$ = this.clientesService.getClientes();
      });
    }
  }
}