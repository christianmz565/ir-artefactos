import type { Rol } from "@/types/rol";

export const MOCK_ROLES: Rol[] = [
  {
    id: 1,
    nombre: "Administrador",
    permisos: [
      "Gestionar usuarios",
      "Gestionar roles",
      "Gestionar configuración",
      "Ver reportes",
    ],
    estado: "Activo",
  },
  {
    id: 2,
    nombre: "Docente",
    permisos: ["Registrar asistencia", "Ver reportes", "Enviar notificaciones"],
    estado: "Activo",
  },
  {
    id: 3,
    nombre: "Auxiliar",
    permisos: [
      "Registrar asistencia",
      "Ver información de estudiantes",
      "Enviar notificaciones",
    ],
    estado: "Activo",
  },
  {
    id: 4,
    nombre: "Apoderado",
    permisos: [
      "Ver información de estudiante",
      "Ver reportes de asistencia",
      "Recibir notificaciones",
    ],
    estado: "Inactivo",
  },
];

export const MOCK_PERMISO_OPTIONS = [
  { value: "Gestionar usuarios", label: "Gestionar usuarios" },
  { value: "Gestionar roles", label: "Gestionar roles" },
  { value: "Gestionar configuración", label: "Gestionar configuración" },
  { value: "Ver reportes", label: "Ver reportes" },
  { value: "Registrar asistencia", label: "Registrar asistencia" },
  { value: "Enviar notificaciones", label: "Enviar notificaciones" },
  {
    value: "Ver información de estudiantes",
    label: "Ver información de estudiantes",
  },
  { value: "Ver reportes de asistencia", label: "Ver reportes de asistencia" },
  { value: "Recibir notificaciones", label: "Recibir notificaciones" },
];
