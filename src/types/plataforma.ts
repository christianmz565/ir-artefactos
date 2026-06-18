export type PlataformaEstado = "Activa" | "Inactiva";

export interface Plataforma {
  id: number;
  nombre: string;
  url: string;
  api_key: string;
  estado: PlataformaEstado;
}
