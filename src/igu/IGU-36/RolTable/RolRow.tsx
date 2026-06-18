import { Button } from "@/components/Button/Button";
import type { Rol } from "@/types/rol";

interface RolRowProps {
  rol: Rol;
  onView?: () => void;
  onEdit?: () => void;
  onInactivate?: () => void;
}

export function RolRow({ rol, onView, onEdit, onInactivate }: RolRowProps) {
  return (
    <tr>
      <td>{rol.id}</td>
      <td>{rol.nombre}</td>
      <td>{rol.permisos.join(", ")}</td>
      <td>{rol.estado}</td>
      <td>
        <div className="d-flex gap-1">
          <Button
            size="sm"
            variant="info"
            onClick={onView}
            id={`view-rol-${rol.id}`}
          >
            Ver
          </Button>
          <Button size="sm" onClick={onEdit} id={`edit-rol-${rol.id}`}>
            Editar
          </Button>
          <Button
            size="sm"
            variant="danger"
            onClick={onInactivate}
            id={`inactivate-rol-${rol.id}`}
            disabled={rol.estado === "Inactivo"}
          >
            Inactivar
          </Button>
        </div>
      </td>
    </tr>
  );
}
