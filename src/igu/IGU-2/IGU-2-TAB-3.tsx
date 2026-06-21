import { Button } from "@/components/Button/Button";
import type { Auxiliar } from "@/types/auxiliar";

export function IGU_2_TAB_3({ auxiliar }: { auxiliar: Auxiliar }) {
  return (
    <tr>
      <td>{auxiliar.id}</td>
      <td>{`${auxiliar.firstName} ${auxiliar.lastName}`}</td>
      <td>{`${auxiliar.documentType} - ${auxiliar.documentNumber}`}</td>
      <td>{auxiliar.email}</td>
      <td>{auxiliar.phone}</td>
      <td>{auxiliar.status}</td>
      <td>
        <div className="d-flex gap-1">
          <Button
            size="sm"
            variant="info"
            id={`igu-2-tab-3-view-${auxiliar.id}`}
          >
            Ver
          </Button>
          <Button size="sm" id={`igu-2-tab-3-edit-${auxiliar.id}`}>
            Editar
          </Button>
          <Button
            size="sm"
            variant="danger"
            id={`igu-2-tab-3-inact-${auxiliar.id}`}
            disabled={auxiliar.status === "Inactive"}
          >
            Inactivar
          </Button>
        </div>
      </td>
    </tr>
  );
}
