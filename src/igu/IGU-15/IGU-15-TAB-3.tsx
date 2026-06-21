import { Button } from "@/components/Button/Button";

export function IGU_15_TAB_3() {
  return (
    <tr>
      <td>1</td>
      <td>Roberto Mendoza Taco</td>
      <td>Matemáticas, Computación</td>
      <td>Secundaria - 4A, Secundaria - 4B</td>
      <td>
        <span className="badge bg-success">Active</span>
      </td>
      <td>
        <div className="d-flex gap-1">
          <Button size="sm" variant="info" id="igu-15-tab-3-view-1">
            Ver
          </Button>
          <Button size="sm" id="igu-15-tab-3-edit-1">
            Editar
          </Button>
          <Button size="sm" variant="danger" id="igu-15-tab-3-inact-1">
            Inactivar
          </Button>
        </div>
      </td>
    </tr>
  );
}
