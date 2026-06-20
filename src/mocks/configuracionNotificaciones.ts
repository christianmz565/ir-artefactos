import type { NotificationConfig } from "../types/notificacion";

export const MOCK_NOTIFICATION_CONFIGS: NotificationConfig[] = [
  {
    id: 1,
    eventType: "Falta Injustificada",
    messageTemplate:
      "Estimado apoderado, le informamos que el estudiante {{nombreEstudiante}} tiene una falta injustificada el día {{fecha}}.",
    platform: "WhatsApp",
    active: true,
  },
  {
    id: 2,
    eventType: "Llegada Tarde",
    messageTemplate:
      "Le informamos que el estudiante {{nombreEstudiante}} registró su entrada a las {{horaEntrada}}.",
    platform: "SMS",
    active: true,
  },
  {
    id: 3,
    eventType: "Reunión de Apoderados",
    messageTemplate:
      "Se cita a reunión general de apoderados para el día {{fecha}} a las {{hora}}.",
    platform: "Email",
    active: false,
  },
];
