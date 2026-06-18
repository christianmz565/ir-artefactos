import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { ApiKeyInput } from "./ApiKeyInput";
import { FormButtons } from "./FormButtons";
import { NombreInput } from "./NombreInput";
import { UrlInput } from "./UrlInput";

export function PlataformaForm() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Registrar Nueva Plataforma</Card.Title>
        <Form>
          <NombreInput value="" onChange={() => {}} />
          <UrlInput value="" onChange={() => {}} />
          <ApiKeyInput value="" onChange={() => {}} />
          <FormButtons />
        </Form>
      </Card.Body>
    </Card>
  );
}
