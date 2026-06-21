import Card from "react-bootstrap/Card";
import type { Auxiliar } from "@/types/auxiliar";
import { IGU_4_BTN_1 } from "./IGU-4-BTN-1";
import { IGU_4_BTN_2 } from "./IGU-4-BTN-2";

export function IGU_4_MDL_1({ auxiliar }: { auxiliar: Auxiliar }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Inactivar Auxiliar</Card.Title>
        <p className="mb-3">
          ¿Está seguro que desea inactivar al auxiliar{" "}
          <strong>{`${auxiliar.firstName} ${auxiliar.lastName}`}</strong> con
          documento{" "}
          <strong>{`${auxiliar.documentType} - ${auxiliar.documentNumber}`}</strong>
          ?
        </p>
        <p className="text-muted">
          El registro pasará al estado <strong>Inactivo</strong> y sus
          credenciales serán deshabilitadas. El historial de asistencia generado
          previamente se conservará.
        </p>
        <div className="d-flex mt-3 gap-2">
          <IGU_4_BTN_1 />
          <IGU_4_BTN_2 />
        </div>
      </Card.Body>
    </Card>
  );
}
