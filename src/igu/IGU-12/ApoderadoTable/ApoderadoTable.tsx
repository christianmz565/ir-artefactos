import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import { Button } from "@/components/Button/Button";
import type { Apoderado } from "@/types/apoderado";

interface Props {
  apoderados: Apoderado[];
  onVerDetalle?: (id: number) => void;
  onEditar?: (id: number) => void;
  onEliminar?: (id: number) => void;
}

export function ApoderadoTable({
  apoderados,
  onVerDetalle,
  onEditar,
  onEliminar,
}: Props) {
  if (apoderados.length === 0) {
    return <p className="text-muted">No hay apoderados registrados.</p>;
  }

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombres y Apellidos</th>
          <th>Documento</th>
          <th>Parentesco</th>
          <th>Contacto</th>
          <th>Estudiantes</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {apoderados.map((ap) => (
          <tr key={ap.id}>
            <td>{ap.id}</td>
            <td>
              {ap.nombres} {ap.apellidos}
            </td>
            <td>
              {ap.tipoDocumento}: {ap.numeroDocumento}
            </td>
            <td>{ap.parentesco}</td>
            <td>
              <div>{ap.correo}</div>
              <small className="text-muted">{ap.telefono}</small>
            </td>
            <td>{ap.estudiantesAsociados.length} asociados</td>
            <td>
              <Badge bg={ap.estado === "Activo" ? "success" : "secondary"}>
                {ap.estado}
              </Badge>
            </td>
            <td>
              <div className="d-flex gap-2">
                <Button
                  size="sm"
                  variant="info"
                  onClick={() => onVerDetalle?.(ap.id)}
                >
                  Ver
                </Button>
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => onEditar?.(ap.id)}
                >
                  Editar
                </Button>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => onEliminar?.(ap.id)}
                >
                  {ap.estado === "Activo" ? "Inactivar" : "Eliminar"}
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
