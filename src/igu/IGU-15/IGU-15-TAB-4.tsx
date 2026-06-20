import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { IGU_15_TAB_1 } from "./IGU-15-TAB-1";
import { IGU_15_TAB_2 } from "./IGU-15-TAB-2";

export function IGU_15_TAB_4() {
  return (
    <Card>
      <Table className="mb-0" hover>
        <IGU_15_TAB_1 />
        <IGU_15_TAB_2 />
      </Table>
    </Card>
  );
}
