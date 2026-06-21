import Card from "react-bootstrap/Card";
import { IGU_22_INP_1 } from "./IGU-22-INP-1";
import { IGU_22_INP_2 } from "./IGU-22-INP-2";
import { IGU_22_SELECT_1 } from "./IGU-22-SELECT-1";
import { IGU_22_SELECT_2 } from "./IGU-22-SELECT-2";
import { IGU_22_SELECT_3 } from "./IGU-22-SELECT-3";
import { IGU_22_SELECT_4 } from "./IGU-22-SELECT-4";

export function IGU_22_FORM_1() {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Filtros avanzados</Card.Title>
        <div className="d-flex gap-3 align-items-end flex-wrap">
          <IGU_22_INP_1 />
          <IGU_22_INP_2 />
          <IGU_22_SELECT_1 />
          <IGU_22_SELECT_2 />
          <IGU_22_SELECT_3 />
          <IGU_22_SELECT_4 />
        </div>
      </Card.Body>
    </Card>
  );
}
