import type { Reporte } from "../types/reporte";

export const MOCK_REPORTES: Reporte[] = [
  {
    id: 1,
    nombre: "Asistencia General 1er Trimestre",
    periodo: "Trimestral",
    fechaGeneracion: "2024-04-15T10:30:00Z",
    usuarioSolicitante: "Admin Principal",
    urlDescarga: "https://example.com/reports/1.pdf",
    estado: "Completado",
  },
  {
    id: 2,
    nombre: "Reporte Mensual Abril",
    periodo: "Mensual",
    fechaGeneracion: "2024-05-01T09:15:00Z",
    usuarioSolicitante: "Admin Secundario",
    estado: "Generando",
  },
  {
    id: 3,
    nombre: "Faltas Semanales",
    periodo: "Semanal",
    fechaGeneracion: "2024-05-10T14:45:00Z",
    usuarioSolicitante: "Admin Principal",
    urlDescarga: "https://example.com/reports/3.pdf",
    estado: "Completado",
  },
];
