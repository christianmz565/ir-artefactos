import type { Plataforma } from "@/types/plataforma";

export const MOCK_PLATAFORMAS: Plataforma[] = [
  {
    id: 1,
    nombre: "WhatsApp Business",
    url: "https://graph.facebook.com/v17.0",
    api_key: "whatsapp_api_key_xxxx",
    estado: "Activa",
  },
  {
    id: 2,
    nombre: "Telegram",
    url: "https://api.telegram.org",
    api_key: "telegram_bot_token_xxxx",
    estado: "Activa",
  },
  {
    id: 3,
    nombre: "Email SMTP",
    url: "smtp://mail.edu.pe:587",
    api_key: "smtp_credentials_xxxx",
    estado: "Inactiva",
  },
];
