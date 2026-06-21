import { Button } from "@/components/Button/Button";

export function IGU_36_TAB_3() {
  return (
    <tr>
      <td>1</td>
      <td>Administrador</td>
      <td>Gestión de Auxiliares, Gestión de Estudiantes</td>
      <td>Active</td>
      <td>
        <div className="d-flex gap-1">
          <Button size="sm" variant="info" id="igu-36-tab-3-view-1">
            Ver
          </Button>
          <Button size="sm" id="igu-36-tab-3-edit-1">
            Editar
          </Button>
          <Button size="sm" variant="danger" id="igu-36-tab-3-inact-1">
            Inactivar
          </Button>
        </div>
      </td>
    </tr>
  );
}
