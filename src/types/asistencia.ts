export type AsistenciaTipo = "Entrada" | "Salida";

export type AsistenciaEstado = "Presente" | "Tardanza" | "Falta";

export interface Asistencia {
  id: number;
  estudianteId: number;
  estudianteNombre: string;
  fecha: string;
  hora: string;
  tipo: AsistenciaTipo;
  estado: AsistenciaEstado;
  dispositivo: string;
  responsableNombre: string;
  justificacion?: string;
}

export interface AsistenciaFilters {
  fechaDesde: string;
  fechaHasta: string;
  grado: string;
  seccion: string;
}
