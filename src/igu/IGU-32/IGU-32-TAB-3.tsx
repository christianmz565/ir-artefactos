import { Button } from "@/components/Button/Button";
import type { Guardian } from "@/types/apoderado";

export function IGU_32_TAB_3({ guardian }: { guardian: Guardian }) {
  const isActive = guardian.status === "Active";
  return (
    <tr>
      <td>{guardian.id}</td>
      <td>
        {guardian.firstName} {guardian.lastName}
      </td>
      <td>
        {guardian.documentType}: {guardian.documentNumber}
      </td>
      <td>{guardian.relationship}</td>
      <td>
        <div>{guardian.email}</div>
        <small className="text-muted">{guardian.phone}</small>
      </td>
      <td>{guardian.associatedStudents.length} asociados</td>
      <td>
        <span className={`badge bg-${isActive ? "success" : "secondary"}`}>
          {guardian.status}
        </span>
      </td>
      <td>
        <div className="d-flex gap-2">
          <Button
            size="sm"
            variant="info"
            id={`igu-32-tab-3-view-${guardian.id}`}
          >
            Ver
          </Button>
          <Button
            size="sm"
            variant="primary"
            id={`igu-32-tab-3-edit-${guardian.id}`}
          >
            Editar
          </Button>
          <Button
            size="sm"
            variant="danger"
            id={`igu-32-tab-3-del-${guardian.id}`}
          >
            {isActive ? "Inactivar" : "Eliminar"}
          </Button>
        </div>
      </td>
    </tr>
  );
}
