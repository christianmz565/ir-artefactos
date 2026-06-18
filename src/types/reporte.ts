export type FormatoReporte = "PDF" | "Excel";

export interface Reporte {
  id: number;
  fechaGeneracion: string;
  usuarioSolicitante: string;
  filtros: {
    grado?: string;
    seccion?: string;
    estudiante?: string;
    fechaDesde?: string;
    fechaHasta?: string;
  };
  urlDescarga: string;
  formato: FormatoReporte;
}
