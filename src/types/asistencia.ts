export type AsistenciaTipo = "Entry" | "Exit";

export type AsistenciaEstado = "Present" | "Late" | "Absent";

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
