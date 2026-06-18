import type { Notificacion } from "@/types/notificacion";

export const MOCK_NOTIFICACIONES: Notificacion[] = [
  {
    id: 1,
    fechaHora: "2026-06-15 08:00:00",
    apoderadoDestino: "Pedro Pérez (Apoderado de Juan Pérez)",
    mensaje: "Se informa que su hijo(a) registró tardanza el día de hoy.",
    plataforma: "WhatsApp",
    estado: "Enviado",
  },
  {
    id: 2,
    fechaHora: "2026-06-15 08:05:00",
    apoderadoDestino: "Laura López (Apoderada de Ana López)",
    mensaje:
      "Se informa que su hijo(a) registró falta justificada el día de hoy.",
    plataforma: "Email",
    estado: "Enviado",
  },
  {
    id: 3,
    fechaHora: "2026-06-14 16:00:00",
    apoderadoDestino: "Carlos Rodríguez (Apoderado de Carlos Jr.)",
    mensaje: "Recordatorio: La reunión de padres será mañana a las 10:00 AM.",
    plataforma: "WhatsApp",
    estado: "Fallido",
  },
];

export const MOCK_PLATAFORMA_OPTIONS = [
  { value: "WhatsApp", label: "WhatsApp" },
  { value: "Email", label: "Email" },
];

export const MOCK_ESTADO_NOTIFICACION_OPTIONS = [
  { value: "Enviado", label: "Enviado" },
  { value: "Fallido", label: "Fallido" },
];
