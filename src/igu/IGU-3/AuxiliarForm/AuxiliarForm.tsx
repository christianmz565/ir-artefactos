import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { ApellidosInput } from "../../IGU-1/AuxiliarForm/ApellidosInput";
import { CorreoInput } from "../../IGU-1/AuxiliarForm/CorreoInput";
import { DocumentoInput } from "../../IGU-1/AuxiliarForm/DocumentoInput";
import { FormButtons } from "../../IGU-1/AuxiliarForm/FormButtons";
import { ModulosSelect } from "../../IGU-1/AuxiliarForm/ModulosSelect";
import { NombresInput } from "../../IGU-1/AuxiliarForm/NombresInput";
import { TelefonoInput } from "../../IGU-1/AuxiliarForm/TelefonoInput";

export function AuxiliarForm() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Editar Auxiliar</Card.Title>
        <Form>
          <NombresInput value="María" onChange={() => {}} />
          <ApellidosInput value="Quispe Mamani" onChange={() => {}} />
          <DocumentoInput
            tipo="DNI"
            numero="45678901"
            onTipoChange={() => {}}
            onNumeroChange={() => {}}
          />
          <CorreoInput value="maria.quispe@edu.pe" onChange={() => {}} />
          <TelefonoInput value="987654321" onChange={() => {}} />
          <ModulosSelect value="Primaria - 3A" onChange={() => {}} />
          <FormButtons />
        </Form>
      </Card.Body>
    </Card>
  );
}
