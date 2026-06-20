import type { Notificacion } from "@/types/notificacion";
import { EmptyState } from "./EmptyState";
import { NotificationRow } from "./NotificationRow";

interface NotificationTableBodyProps {
  notifications: Notificacion[];
}

export function NotificationTableBody({
  notifications,
}: NotificationTableBodyProps) {
  return (
    <tbody>
      {notifications.length === 0 ? (
        <EmptyState />
      ) : (
        notifications.map((n) => (
          <NotificationRow key={n.id} notificacion={n} />
        ))
      )}
    </tbody>
  );
}
