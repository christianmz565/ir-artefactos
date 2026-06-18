export type RolEstado = "Activo" | "Inactivo";

export interface Rol {
  id: number;
  nombre: string;
  permisos: string[];
  estado: RolEstado;
}
