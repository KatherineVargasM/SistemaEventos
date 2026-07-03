import { Routes } from '@angular/router';

import { EventosComponent } from './eventos/eventos';
import { CrearEventoComponent } from './eventos/crear-evento/crear-evento';
import { EditarEventoComponent } from './eventos/editar-evento/editar-evento';
import { DetallesEventoComponent } from './eventos/detalles-evento/detalles-evento';
import { EliminarEventoComponent } from './eventos/eliminar-evento/eliminar-evento';

import { ClientesComponent } from './clientes/clientes';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente';
import { DetallesClienteComponent } from './clientes/detalles-cliente/detalles-cliente';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente';

import { ReservacionesComponent } from './reservaciones/reservaciones';
import { CrearReservacionComponent } from './reservaciones/crear-reservacion/crear-reservacion';
import { EditarReservacionComponent } from './reservaciones/editar-reservacion/editar-reservacion';
import { DetallesReservacionComponent } from './reservaciones/detalles-reservacion/detalles-reservacion';
import { EliminarReservacionComponent } from './reservaciones/eliminar-reservacion/eliminar-reservacion';

export const routes: Routes = [

  { path:'', redirectTo:'/eventos', pathMatch:'full' },
  { path:'eventos', component:EventosComponent },
  { path:'eventos/crear', component:CrearEventoComponent },
  { path:'eventos/detalles/:eventoid', component:DetallesEventoComponent },
  { path:'eventos/editar/:eventoid', component:EditarEventoComponent },
  { path:'eventos/eliminar/:eventoid', component:EliminarEventoComponent },
  { path:'clientes', component:ClientesComponent },
  { path:'clientes/crear', component:CrearClienteComponent },
  { path:'clientes/detalles/:clienteid', component:DetallesClienteComponent },
  { path:'clientes/editar/:clienteid', component:EditarClienteComponent },
  { path:'clientes/eliminar/:clienteid', component:EliminarClienteComponent },
  { path:'reservaciones', component:ReservacionesComponent },
  { path:'reservaciones/crear', component:CrearReservacionComponent },
  { path:'reservaciones/detalles/:reservacionid', component:DetallesReservacionComponent },
  { path:'reservaciones/editar/:reservacionid', component:EditarReservacionComponent },
  { path:'reservaciones/eliminar/:reservacionid', component:EliminarReservacionComponent }

];