import type { Role } from "@/types/rol";

export const MOCK_ROLES: Role[] = [
  {
    id: 1,
    name: "Administrador",
    description: "Acceso total al sistema",
    permissions: [
      {
        moduleId: "M01",
        moduleName: "Gestión de Auxiliares",
        read: true,
        write: true,
        delete: true,
      },
      {
        moduleId: "M02",
        moduleName: "Gestión de Estudiantes",
        read: true,
        write: true,
        delete: true,
      },
    ],
    isDefault: true,
    status: "Active",
  },
  {
    id: 2,
    name: "Docente",
    description: "Registrar asistencia y enviar notificaciones",
    permissions: [
      {
        moduleId: "M02",
        moduleName: "Gestión de Estudiantes",
        read: true,
        write: true,
        delete: false,
      },
    ],
    isDefault: false,
    status: "Active",
  },
  {
    id: 3,
    name: "Auxiliar",
    description: "Registrar asistencia y consultar información",
    permissions: [
      {
        moduleId: "M02",
        moduleName: "Gestión de Estudiantes",
        read: true,
        write: true,
        delete: false,
      },
    ],
    isDefault: false,
    status: "Active",
  },
  {
    id: 4,
    name: "Apoderado",
    description: "Consulta de información de su estudiante",
    permissions: [
      {
        moduleId: "M02",
        moduleName: "Gestión de Estudiantes",
        read: true,
        write: false,
        delete: false,
      },
    ],
    isDefault: false,
    status: "Inactive",
  },
];
