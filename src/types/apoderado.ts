export type TipoDocumento = "DNI" | "CE" | "PAS";
export type EstadoApoderado = "Activo" | "Inactivo";

export interface Apoderado {
  id: number;
  nombres: string;
  apellidos: string;
  tipoDocumento: TipoDocumento;
  numeroDocumento: string;
  parentesco: string;
  direccion: string;
  correo: string;
  telefono: string;
  estado: EstadoApoderado;
  estudiantesAsociados: number[]; // IDs of students
}
