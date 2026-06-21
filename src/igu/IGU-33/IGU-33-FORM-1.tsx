import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { IGU_33_BTN_1 } from "./IGU-33-BTN-1";
import { IGU_33_BTN_2 } from "./IGU-33-BTN-2";
import { IGU_33_INP_1 } from "./IGU-33-INP-1";
import { IGU_33_INP_2 } from "./IGU-33-INP-2";
import { IGU_33_INP_3 } from "./IGU-33-INP-3";
import { IGU_33_INP_4 } from "./IGU-33-INP-4";
import { IGU_33_INP_5 } from "./IGU-33-INP-5";
import { IGU_33_INP_6 } from "./IGU-33-INP-6";
import { IGU_33_INP_7 } from "./IGU-33-INP-7";
import { IGU_33_MDL_1 } from "./IGU-33-MDL-1";
import { IGU_33_SELECT_1 } from "./IGU-33-SELECT-1";

export function IGU_33_FORM_1() {
  return (
    <Form>
      <Row className="mb-3">
        <Col md={6}>
          <IGU_33_INP_1 />
        </Col>
        <Col md={6}>
          <IGU_33_INP_2 />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <IGU_33_SELECT_1 />
        </Col>
        <Col md={6}>
          <IGU_33_INP_3 />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <IGU_33_INP_4 />
        </Col>
        <Col md={6}>
          <IGU_33_INP_5 />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <IGU_33_INP_6 />
        </Col>
        <Col md={6}>
          <IGU_33_INP_7 />
        </Col>
      </Row>

      <IGU_33_MDL_1 />

      <div className="d-flex gap-2">
        <IGU_33_BTN_1 />
        <IGU_33_BTN_2 />
      </div>
    </Form>
  );
}
