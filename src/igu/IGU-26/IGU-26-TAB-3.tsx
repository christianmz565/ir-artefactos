import { Button } from "@/components/Button/Button";

export function IGU_26_TAB_3() {
  return (
    <tr>
      <td>2026-06-15 08:00:00</td>
      <td>Pedro Pérez (Apoderado de Juan Pérez)</td>
      <td>Se informa que su hijo(a) registró tardanza el día de hoy.</td>
      <td>WhatsApp</td>
      <td>
        <span className="badge bg-success">Sent</span>
      </td>
      <td>
        <Button size="sm" variant="danger" id="igu-26-tab-3-del-1">
          Eliminar
        </Button>
      </td>
    </tr>
  );
}
