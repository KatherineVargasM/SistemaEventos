import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservacion } from '../interfaces/reservacion';

@Injectable({ providedIn: 'root' })
export class ReservacionesService {
  private apiUrl = 'https://localhost:7115/reservacion';

  constructor(private http: HttpClient) {}

  getReservaciones(): Observable<Reservacion[]> {
    return this.http.get<Reservacion[]>(this.apiUrl);
  }

  createReservacion(reservacion: Reservacion): Observable<Reservacion> {
    return this.http.post<Reservacion>(this.apiUrl, reservacion);
  }

  deleteReservacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}