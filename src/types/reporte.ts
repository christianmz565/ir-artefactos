export type FormatoReporte = "PDF" | "Excel";
export type EstadoReporte = "Completed" | "Generating" | "Failed";

export interface Reporte {
  id: number;
  nombre: string;
  periodo: string;
  estado: EstadoReporte;
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
