export type NotificacionPlataforma = "WhatsApp" | "Email";

export type NotificacionEstado = "Enviado" | "Fallido";

export interface Notificacion {
  id: number;
  fechaHora: string;
  apoderadoDestino: string;
  mensaje: string;
  plataforma: NotificacionPlataforma;
  estado: NotificacionEstado;
}
