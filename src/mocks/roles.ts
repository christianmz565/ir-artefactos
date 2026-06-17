import type { Rol } from "../types/rol";

export const MOCK_ROLES: Rol[] = [
  {
    id: 1,
    nombre: "Administrador de Sistema",
    descripcion: "Acceso total a todos los módulos y configuraciones.",
    esPredeterminado: true,
    permisos: [
      {
        moduloId: "M01",
        moduloNombre: "Gestión de Auxiliares",
        leer: true,
        escribir: true,
        eliminar: true,
      },
      {
        moduloId: "M02",
        moduloNombre: "Gestión de Estudiantes",
        leer: true,
        escribir: true,
        eliminar: true,
      },
      {
        moduloId: "M03",
        moduloNombre: "Gestión de Profesores",
        leer: true,
        escribir: true,
        eliminar: true,
      },
      {
        moduloId: "M04",
        moduloNombre: "Gestión de Apoderados",
        leer: true,
        escribir: true,
        eliminar: true,
      },
      {
        moduloId: "M05",
        moduloNombre: "Gestión de Roles",
        leer: true,
        escribir: true,
        eliminar: true,
      },
      {
        moduloId: "M06",
        moduloNombre: "Gestión de Reportes",
        leer: true,
        escribir: true,
        eliminar: true,
      },
    ],
  },
  {
    id: 2,
    nombre: "Auxiliar de Ingreso",
    descripcion: "Permite registrar asistencia y ver reportes básicos.",
    esPredeterminado: true,
    permisos: [
      {
        moduloId: "M02",
        moduloNombre: "Gestión de Estudiantes",
        leer: true,
        escribir: false,
        eliminar: false,
      },
      {
        moduloId: "M06",
        moduloNombre: "Gestión de Reportes",
        leer: true,
        escribir: false,
        eliminar: false,
      },
    ],
  },
  {
    id: 3,
    nombre: "Docente",
    descripcion:
      "Visualización de la información de sus estudiantes y reportes de su clase.",
    esPredeterminado: false,
    permisos: [
      {
        moduloId: "M02",
        moduloNombre: "Gestión de Estudiantes",
        leer: true,
        escribir: true,
        eliminar: false,
      },
      {
        moduloId: "M04",
        moduloNombre: "Gestión de Apoderados",
        leer: true,
        escribir: false,
        eliminar: false,
      },
    ],
  },
];
