import Table from "react-bootstrap/Table";
import { MOCK_GUARDIANS } from "@/mocks/apoderados";
import { IGU_32_TAB_1 } from "./IGU-32-TAB-1";
import { IGU_32_TAB_2 } from "./IGU-32-TAB-2";

export function IGU_32_TAB_4() {
  return (
    <Table striped bordered hover responsive>
      <IGU_32_TAB_1 />
      <IGU_32_TAB_2 guardians={MOCK_GUARDIANS} />
    </Table>
  );
}
