import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { MOCK_STUDENTS } from "@/mocks/students";
import { IGU_7_TAB_1 } from "./IGU-7-TAB-1";
import { IGU_7_TAB_2 } from "./IGU-7-TAB-2";

export function IGU_7_TAB_4() {
  return (
    <Card>
      <Table className="mb-0" hover>
        <IGU_7_TAB_1 />
        <IGU_7_TAB_2 students={MOCK_STUDENTS} />
      </Table>
    </Card>
  );
}
