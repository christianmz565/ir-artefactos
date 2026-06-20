import type { ConfiguracionNotificacion } from "../types/notificacion";

export const MOCK_CONFIGURACION_NOTIFICACIONES: ConfiguracionNotificacion[] = [
  {
    id: 1,
    tipoEvento: "Falta Injustificada",
    plantillaMensaje:
      "Estimado apoderado, le informamos que el estudiante {{nombreEstudiante}} tiene una falta injustificada el día {{fecha}}.",
    plataforma: "WhatsApp",
    activa: true,
  },
  {
    id: 2,
    tipoEvento: "Llegada Tarde",
    plantillaMensaje:
      "Le informamos que el estudiante {{nombreEstudiante}} registró su entrada a las {{horaEntrada}}.",
    plataforma: "SMS",
    activa: true,
  },
  {
    id: 3,
    tipoEvento: "Reunión de Apoderados",
    plantillaMensaje:
      "Se cita a reunión general de apoderados para el día {{fecha}} a las {{hora}}.",
    plataforma: "Email",
    activa: false,
  },
];
