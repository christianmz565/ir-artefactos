import { Button } from "@/components/Button/Button";
import type { Auxiliar } from "@/types/auxiliar";

interface AuxiliarRowProps {
  auxiliar: Auxiliar;
  onView?: () => void;
  onEdit?: () => void;
  onInactivate?: () => void;
}

export function AuxiliarRow({
  auxiliar,
  onView,
  onEdit,
  onInactivate,
}: AuxiliarRowProps) {
  return (
    <tr>
      <td>{auxiliar.id}</td>
      <td>{`${auxiliar.nombres} ${auxiliar.apellidos}`}</td>
      <td>{`${auxiliar.tipoDocumento} - ${auxiliar.numeroDocumento}`}</td>
      <td>{auxiliar.correo}</td>
      <td>{auxiliar.telefono}</td>
      <td>{auxiliar.estado}</td>
      <td>
        <div className="d-flex gap-1">
          <Button
            size="sm"
            variant="info"
            onClick={onView}
            id={`view-auxiliar-${auxiliar.id}`}
          >
            Ver
          </Button>
          <Button
            size="sm"
            onClick={onEdit}
            id={`edit-auxiliar-${auxiliar.id}`}
          >
            Editar
          </Button>
          <Button
            size="sm"
            variant="danger"
            onClick={onInactivate}
            id={`inactivate-auxiliar-${auxiliar.id}`}
            disabled={auxiliar.estado === "Inactivo"}
          >
            Inactivar
          </Button>
        </div>
      </td>
    </tr>
  );
}
