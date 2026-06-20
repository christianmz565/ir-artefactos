import { Button } from "@/components/Button/Button";

export function IGU_40_TAB_3() {
  return (
    <tr>
      <td>1</td>
      <td>WhatsApp Business</td>
      <td>https://graph.facebook.com/v17.0</td>
      <td>EAAB...</td>
      <td>
        <span className="badge bg-success">Active</span>
      </td>
      <td>
        <div className="d-flex gap-1">
          <Button size="sm" variant="info" id="igu-40-tab-3-view-1">
            Ver
          </Button>
          <Button size="sm" id="igu-40-tab-3-edit-1">
            Editar
          </Button>
          <Button size="sm" variant="danger" id="igu-40-tab-3-inact-1">
            Inactivar
          </Button>
        </div>
      </td>
    </tr>
  );
}
