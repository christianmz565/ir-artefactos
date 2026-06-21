export type NotificationPlatform = "WhatsApp" | "Email";

export type NotificationStatus = "Sent" | "Failed";

export interface Notification {
  id: number;
  datetime: string;
  targetGuardian: string;
  message: string;
  platform: NotificationPlatform;
  status: NotificationStatus;
}

export type NotificationConfigPlatform = "WhatsApp" | "SMS" | "Email";

export interface NotificationConfig {
  id: number;
  eventType: string;
  messageTemplate: string;
  platform: NotificationConfigPlatform;
  active: boolean;
}
