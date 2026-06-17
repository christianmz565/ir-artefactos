import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import type { PermisoModulo } from "@/types/rol";

interface Props {
  permisos: PermisoModulo[];
  onChange: (
    moduloId: string,
    tipo: "leer" | "escribir" | "eliminar",
    valor: boolean,
  ) => void;
}

export function PermissionsMatrix({ permisos, onChange }: Props) {
  return (
    <Table bordered hover>
      <thead className="bg-light">
        <tr>
          <th>Módulo</th>
          <th className="text-center">Leer</th>
          <th className="text-center">Escribir</th>
          <th className="text-center">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {permisos.map((p) => (
          <tr key={p.moduloId}>
            <td>{p.moduloNombre}</td>
            <td className="text-center">
              <Form.Check
                type="checkbox"
                checked={p.leer}
                onChange={(e) => onChange(p.moduloId, "leer", e.target.checked)}
                aria-label={`Leer ${p.moduloNombre}`}
              />
            </td>
            <td className="text-center">
              <Form.Check
                type="checkbox"
                checked={p.escribir}
                onChange={(e) =>
                  onChange(p.moduloId, "escribir", e.target.checked)
                }
                aria-label={`Escribir ${p.moduloNombre}`}
              />
            </td>
            <td className="text-center">
              <Form.Check
                type="checkbox"
                checked={p.eliminar}
                onChange={(e) =>
                  onChange(p.moduloId, "eliminar", e.target.checked)
                }
                aria-label={`Eliminar ${p.moduloNombre}`}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
