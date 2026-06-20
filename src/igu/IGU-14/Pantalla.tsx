import Container from "react-bootstrap/Container";
import { MOCK_APODERADOS } from "@/mocks/apoderados";
import { InactivationConfirm } from "./InactivationConfirm/InactivationConfirm";

export function Pantalla() {
  const apoderado = MOCK_APODERADOS[0];

  return (
    <Container className="py-4">
      <h1 className="mb-4">Gestionar Apoderado</h1>
      <div style={{ maxWidth: "600px" }}>
        <InactivationConfirm
          apoderado={apoderado}
          onConfirm={(id) =>
            alert(`Acción confirmada para el apoderado ID: ${id}`)
          }
          onCancel={() => alert("Acción cancelada")}
        />
      </div>
    </Container>
  );
}
