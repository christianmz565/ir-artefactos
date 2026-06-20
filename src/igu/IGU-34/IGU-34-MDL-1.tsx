import Card from "react-bootstrap/Card";
import type { Guardian } from "@/types/apoderado";
import { IGU_34_BTN_1 } from "./IGU-34-BTN-1";
import { IGU_34_BTN_2 } from "./IGU-34-BTN-2";

export function IGU_34_MDL_1({ guardian }: { guardian: Guardian }) {
  const isActive = guardian.status === "Active";
  const actionText = isActive ? "inactivar" : "eliminar";

  return (
    <Card className="border-danger">
      <Card.Body>
        <Card.Title className="text-danger">
          Confirmar {isActive ? "Inactivación" : "Eliminación"}
        </Card.Title>
        <Card.Text>
          ¿Está seguro que desea {actionText} al apoderado{" "}
          <strong>
            {guardian.firstName} {guardian.lastName}
          </strong>
          ?
        </Card.Text>
        <div className="d-flex gap-2 mt-4">
          <IGU_34_BTN_1 />
          <IGU_34_BTN_2 />
        </div>
      </Card.Body>
    </Card>
  );
}
