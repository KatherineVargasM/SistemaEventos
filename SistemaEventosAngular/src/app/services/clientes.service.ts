import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private apiUrl = 'https://localhost:7115/cliente';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  getClienteById(id:number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/${id}`);
  }

  createCliente(cliente:Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl,cliente);
  }

  updateCliente(cliente:Cliente): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${cliente.clienteId}`,cliente);
  }

  deleteCliente(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}