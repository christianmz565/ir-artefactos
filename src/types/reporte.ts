export type TipoReporte =
  | "Semanal"
  | "Mensual"
  | "Trimestral"
  | "Semestral"
  | "Anual";
export type EstadoReporte = "Generando" | "Completado" | "Error";

export interface Reporte {
  id: number;
  nombre: string;
  periodo: TipoReporte;
  fechaGeneracion: string;
  usuarioSolicitante: string;
  urlDescarga?: string;
  estado: EstadoReporte;
}
