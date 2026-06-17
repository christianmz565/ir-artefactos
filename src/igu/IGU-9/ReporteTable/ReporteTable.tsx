import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import { Button } from "@/components/Button/Button";
import type { Reporte } from "@/types/reporte";

interface ReporteTableProps {
  reportes: Reporte[];
  onVerDetalle?: (id: number) => void;
  onDescargar?: (url: string) => void;
  onEliminar?: (id: number) => void;
}

export function ReporteTable({
  reportes,
  onVerDetalle,
  onDescargar,
  onEliminar,
}: ReporteTableProps) {
  if (reportes.length === 0) {
    return <p className="text-muted">No hay reportes generados.</p>;
  }

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Periodo</th>
          <th>Fecha Generación</th>
          <th>Solicitante</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {reportes.map((reporte) => (
          <tr key={reporte.id}>
            <td>{reporte.id}</td>
            <td>{reporte.nombre}</td>
            <td>{reporte.periodo}</td>
            <td>{new Date(reporte.fechaGeneracion).toLocaleString()}</td>
            <td>{reporte.usuarioSolicitante}</td>
            <td>
              <Badge
                bg={
                  reporte.estado === "Completado"
                    ? "success"
                    : reporte.estado === "Generando"
                      ? "warning"
                      : "danger"
                }
              >
                {reporte.estado}
              </Badge>
            </td>
            <td>
              <div className="d-flex gap-2">
                <Button size="sm" onClick={() => onVerDetalle?.(reporte.id)}>
                  Ver
                </Button>
                {reporte.urlDescarga && reporte.estado === "Completado" && (
                  <Button
                    size="sm"
                    variant="info"
                    onClick={() => onDescargar?.(reporte.urlDescarga!)}
                  >
                    Descargar
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => onEliminar?.(reporte.id)}
                >
                  Eliminar
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
