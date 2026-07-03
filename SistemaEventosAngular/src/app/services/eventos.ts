import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../interfaces/evento';

@Injectable({ providedIn: 'root' })
export class EventosService {
  private apiUrl = 'https://localhost:7115/evento';

  constructor(private http: HttpClient) {}

  getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.apiUrl);
  }

  deleteEvento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getEventoById(id: number): Observable<Evento> {
  return this.http.get<Evento>(`${this.apiUrl}/${id}`);
  
  }

  updateEvento(evento: Evento): Observable<void> {
     return this.http.put<void>(`${this.apiUrl}/${evento.eventoId}`, evento);
  }
  createEvento(evento: Evento): Observable<Evento> {
  return this.http.post<Evento>(this.apiUrl, evento);
}
}
