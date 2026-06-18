import Container from "react-bootstrap/Container";
import { AdvancedFilters } from "./AdvancedFilters/AdvancedFilters";
import { AttendanceTable } from "./AttendanceTable/AttendanceTable";
import { Header } from "./Header/Header";

export function Pantalla() {
  return (
    <Container className="py-4">
      <Header />
      <AdvancedFilters />
      <AttendanceTable />
    </Container>
  );
}
