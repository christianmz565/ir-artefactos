import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { MOCK_ROLES } from "@/mocks/roles";
import { FormButtons } from "./FormButtons";
import { NombreInput } from "./NombreInput";
import { PermisosSelect } from "./PermisosSelect";

export function RolForm() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Editar Rol</Card.Title>
        <Form>
          <NombreInput value={MOCK_ROLES[0].nombre} onChange={() => {}} />
          <PermisosSelect
            value={MOCK_ROLES[0].permisos.join(", ")}
            onChange={() => {}}
          />
          <FormButtons />
        </Form>
      </Card.Body>
    </Card>
  );
}
