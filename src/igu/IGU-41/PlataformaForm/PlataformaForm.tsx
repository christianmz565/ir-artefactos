import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { MOCK_PLATAFORMAS } from "@/mocks/plataformas";
import { ApiKeyInput } from "../../IGU-39/PlataformaForm/ApiKeyInput";
import { FormButtons } from "../../IGU-39/PlataformaForm/FormButtons";
import { NombreInput } from "../../IGU-39/PlataformaForm/NombreInput";
import { UrlInput } from "../../IGU-39/PlataformaForm/UrlInput";

export function PlataformaForm() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Editar Plataforma</Card.Title>
        <Form>
          <NombreInput value={MOCK_PLATAFORMAS[0].nombre} onChange={() => {}} />
          <UrlInput value={MOCK_PLATAFORMAS[0].url} onChange={() => {}} />
          <ApiKeyInput
            value={MOCK_PLATAFORMAS[0].api_key}
            onChange={() => {}}
          />
          <FormButtons />
        </Form>
      </Card.Body>
    </Card>
  );
}
