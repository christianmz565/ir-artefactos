import { Button } from "@/components/Button/Button";
import type { Plataforma } from "@/types/plataforma";

interface PlataformaRowProps {
  plataforma: Plataforma;
  onView?: () => void;
  onEdit?: () => void;
  onInactivate?: () => void;
}

export function PlataformaRow({
  plataforma,
  onView,
  onEdit,
  onInactivate,
}: PlataformaRowProps) {
  return (
    <tr>
      <td>{plataforma.id}</td>
      <td>{plataforma.nombre}</td>
      <td>{plataforma.url}</td>
      <td>{plataforma.api_key}</td>
      <td>{plataforma.estado}</td>
      <td>
        <div className="d-flex gap-1">
          <Button
            size="sm"
            variant="info"
            onClick={onView}
            id={`view-plataforma-${plataforma.id}`}
          >
            Ver
          </Button>
          <Button
            size="sm"
            onClick={onEdit}
            id={`edit-plataforma-${plataforma.id}`}
          >
            Editar
          </Button>
          <Button
            size="sm"
            variant="danger"
            onClick={onInactivate}
            id={`inactivate-plataforma-${plataforma.id}`}
            disabled={plataforma.estado === "Inactiva"}
          >
            Inactivar
          </Button>
        </div>
      </td>
    </tr>
  );
}
