export type DocumentType = "DNI" | "CE" | "PAS";

export type AuxiliarEstado = "Activo" | "Inactivo";

export interface Auxiliar {
  id: number;
  nombres: string;
  apellidos: string;
  tipoDocumento: DocumentType;
  numeroDocumento: string;
  correo: string;
  telefono: string;
  estado: AuxiliarEstado;
  modulos: string[];
}
