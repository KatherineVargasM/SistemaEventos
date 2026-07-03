import { Routes } from '@angular/router';
import { ListaEventosComponent } from './eventos/lista-eventos/lista-eventos';
import { ReservacionesComponent } from './reservaciones/crear-reservacion/crear-reservacion'; // Importa la clase correcta
import { ClientesComponent } from './clientes/clientes';
import { DetallesEventoComponent } from './eventos/detalles-evento/detalles-evento';
import { EditarEventoComponent } from './eventos/editar-evento/editar-evento';

export const routes: Routes = [
  { path: 'eventos', component: ListaEventosComponent },
  { path: 'eventos/detalles/:eventoid', component: DetallesEventoComponent },
  { path: 'eventos/editar/:eventoid', component: EditarEventoComponent },
  { path: 'reservar', component: ReservacionesComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'reservaciones', component: ReservacionesComponent },
  { path: '', redirectTo: '/eventos', pathMatch: 'full' }
];