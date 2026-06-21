import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

const MODULES = [
  { id: "M01", name: "Gestión de Auxiliares" },
  { id: "M02", name: "Gestión de Estudiantes" },
  { id: "M03", name: "Gestión de Profesores" },
  { id: "M04", name: "Gestión de Apoderados" },
  { id: "M05", name: "Gestión de Roles" },
  { id: "M06", name: "Gestión de Reportes" },
];

export function IGU_35_TAB_1() {
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
        {MODULES.map((m) => (
          <tr key={m.id}>
            <td>{m.name}</td>
            <td className="text-center">
              <Form.Check type="checkbox" id={`igu-35-tab-1-read-${m.id}`} />
            </td>
            <td className="text-center">
              <Form.Check type="checkbox" id={`igu-35-tab-1-write-${m.id}`} />
            </td>
            <td className="text-center">
              <Form.Check type="checkbox" id={`igu-35-tab-1-del-${m.id}`} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
