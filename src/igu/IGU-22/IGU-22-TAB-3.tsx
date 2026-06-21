import { Button } from "@/components/Button/Button";

export function IGU_22_TAB_3() {
  return (
    <tr>
      <td>2026-06-15</td>
      <td>Juan Pérez García</td>
      <td>07:45:00</td>
      <td>Entrada</td>
      <td>
        <span className="badge bg-success">Presente</span>
      </td>
      <td>
        <div className="d-flex gap-1">
          <Button size="sm" variant="info" id="igu-22-tab-3-view-1">
            Ver
          </Button>
          <Button size="sm" variant="danger" id="igu-22-tab-3-inact-1">
            Inactivar
          </Button>
        </div>
      </td>
    </tr>
  );
}
