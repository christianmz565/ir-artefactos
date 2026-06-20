import Container from "react-bootstrap/Container";
import { RoleForm } from "./RoleForm/RoleForm";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Registrar Rol de Sistema</h1>
      <RoleForm
        onSubmit={(data) =>
          alert(`Rol Registrado:\n${JSON.stringify(data, null, 2)}`)
        }
        onCancel={() => alert("Registro cancelado")}
      />
    </Container>
  );
}
