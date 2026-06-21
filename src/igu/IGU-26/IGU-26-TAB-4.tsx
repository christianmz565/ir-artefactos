import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { IGU_26_TAB_1 } from "./IGU-26-TAB-1";
import { IGU_26_TAB_2 } from "./IGU-26-TAB-2";

export function IGU_26_TAB_4() {
  return (
    <Card>
      <Table className="mb-0" hover>
        <IGU_26_TAB_1 />
        <IGU_26_TAB_2 />
      </Table>
    </Card>
  );
}
