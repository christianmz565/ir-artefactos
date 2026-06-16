import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { ApellidosInput } from "./ApellidosInput";
import { CorreoInput } from "./CorreoInput";
import { DocumentoInput } from "./DocumentoInput";
import { FormButtons } from "./FormButtons";
import { ModulosSelect } from "./ModulosSelect";
import { NombresInput } from "./NombresInput";
import { TelefonoInput } from "./TelefonoInput";

export function AuxiliarForm() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Registrar Nuevo Auxiliar</Card.Title>
        <Form>
          <NombresInput value="" onChange={() => {}} />
          <ApellidosInput value="" onChange={() => {}} />
          <DocumentoInput
            tipo="DNI"
            numero=""
            onTipoChange={() => {}}
            onNumeroChange={() => {}}
          />
          <CorreoInput value="" onChange={() => {}} />
          <TelefonoInput value="" onChange={() => {}} />
          <ModulosSelect value="" onChange={() => {}} />
          <FormButtons />
        </Form>
      </Card.Body>
    </Card>
  );
}
