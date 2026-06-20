import Container from "react-bootstrap/Container";
import { MOCK_APODERADOS } from "@/mocks/apoderados";
import { ApoderadoTable } from "./ApoderadoTable/ApoderadoTable";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Consultar Apoderados</h1>
      <ApoderadoTable
        apoderados={MOCK_APODERADOS}
        onVerDetalle={(id) => alert(`Ver detalle apoderado ${id}`)}
        onEditar={(id) => alert(`Editar apoderado ${id}`)}
        onEliminar={(id) => alert(`Inactivar/Eliminar apoderado ${id}`)}
      />
    </Container>
  );
}
