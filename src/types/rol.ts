export interface PermisoModulo {
  moduloId: string;
  moduloNombre: string;
  leer: boolean;
  escribir: boolean;
  eliminar: boolean;
}

export interface Rol {
  id: number;
  nombre: string;
  descripcion: string;
  permisos: PermisoModulo[];
  esPredeterminado: boolean;
}
