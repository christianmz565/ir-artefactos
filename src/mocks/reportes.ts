import type { Reporte } from "@/types/reporte";

export const MOCK_REPORTES: Reporte[] = [
  {
    id: 1,
    nombre: "Asistencia Mensual - Mayo",
    periodo: "2026-05",
    estado: "Completed",
    fechaGeneracion: "2026-06-15 14:30:00",
    usuarioSolicitante: "Administrador",
    filtros: {
      grado: "5to Primaria",
      seccion: "A",
      fechaDesde: "2026-05-01",
      fechaHasta: "2026-05-31",
    },
    urlDescarga: "https://s3.amazonaws.com/reportes/reporte-001.pdf",
    formato: "PDF",
  },
  {
    id: 2,
    nombre: "Asistencia Individual - Juan Pérez",
    periodo: "2026-06-01 a 2026-06-10",
    estado: "Generating",
    fechaGeneracion: "2026-06-10 09:15:00",
    usuarioSolicitante: "María Quispe",
    filtros: {
      estudiante: "Juan Pérez García",
      fechaDesde: "2026-06-01",
      fechaHasta: "2026-06-10",
    },
    urlDescarga: "https://s3.amazonaws.com/reportes/reporte-002.xlsx",
    formato: "Excel",
  },
];

export const MOCK_FORMATO_REPORTE_OPTIONS = [
  { value: "PDF", label: "PDF" },
  { value: "Excel", label: "Excel" },
];
