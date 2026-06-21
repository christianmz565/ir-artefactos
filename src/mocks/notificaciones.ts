import type { Notification } from "@/types/notificacion";

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    datetime: "2026-06-15 08:00:00",
    targetGuardian: "Pedro Pérez (Apoderado de Juan Pérez)",
    message: "Se informa que su hijo(a) registró tardanza el día de hoy.",
    platform: "WhatsApp",
    status: "Sent",
  },
  {
    id: 2,
    datetime: "2026-06-15 08:05:00",
    targetGuardian: "Laura López (Apoderada de Ana López)",
    message:
      "Se informa que su hijo(a) registró falta justificada el día de hoy.",
    platform: "Email",
    status: "Sent",
  },
  {
    id: 3,
    datetime: "2026-06-14 16:00:00",
    targetGuardian: "Carlos Rodríguez (Apoderado de Carlos Jr.)",
    message: "Recordatorio: La reunión de padres será mañana a las 10:00 AM.",
    platform: "WhatsApp",
    status: "Failed",
  },
];

export const MOCK_PLATFORM_OPTIONS = [
  { value: "WhatsApp", label: "WhatsApp" },
  { value: "Email", label: "Email" },
];

export const MOCK_NOTIFICATION_STATUS_OPTIONS = [
  { value: "Sent", label: "Enviado" },
  { value: "Failed", label: "Fallido" },
];
