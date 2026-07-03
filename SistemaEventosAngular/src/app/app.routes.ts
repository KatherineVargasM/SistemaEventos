import { Routes } from '@angular/router';
import { ListaEventosComponent } from './eventos/lista-eventos/lista-eventos';
import { CrearReservacionComponent } from './reservaciones/crear-reservacion/crear-reservacion';

export const routes: Routes = [
  { path: 'eventos', component: ListaEventosComponent },
  { path: 'reservar', component: CrearReservacionComponent },
  { path: '', redirectTo: '/eventos', pathMatch: 'full' }
];