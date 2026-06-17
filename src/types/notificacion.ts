export type PlataformaEnvio = "SMS" | "WhatsApp" | "Email";

export interface ConfiguracionNotificacion {
  id: number;
  tipoEvento: string;
  plantillaMensaje: string;
  plataforma: PlataformaEnvio;
  activa: boolean;
}
