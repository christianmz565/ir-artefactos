import Table from "react-bootstrap/Table";
import { MOCK_REPORTES } from "@/mocks/reportes";
import { IGU_29_TAB_1 } from "./IGU-29-TAB-1";
import { IGU_29_TAB_2 } from "./IGU-29-TAB-2";

export function IGU_29_TAB_4() {
  return (
    <Table striped bordered hover responsive>
      <IGU_29_TAB_1 />
      <IGU_29_TAB_2 reportes={MOCK_REPORTES} />
    </Table>
  );
}
