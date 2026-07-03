import { Evento } from './evento';
import { Cliente } from './cliente';

export interface Reservacion {
  reservacionId: number;
  eventoId: number;
  evento?: Evento;
  clienteId: number;
  cliente?: Cliente;
  fechaReservacion: Date;
  estado: string;
}