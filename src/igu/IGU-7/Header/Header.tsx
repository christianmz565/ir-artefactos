import { AddStudentButton } from "./AddStudentButton";
import { CourseFilterSelect } from "./CourseFilterSelect";
import { SearchInput } from "./SearchInput";

export function Header() {
  return (
    <div className="d-flex justify-content-between mb-4 flex-wrap gap-3 align-items-center">
      <h1 className="mb-0">Gestión de Estudiantes</h1>
      <div className="d-flex gap-3 align-items-center">
        <SearchInput value="" onChange={() => {}} />
        <CourseFilterSelect value="" onChange={() => {}} />
        <AddStudentButton />
      </div>
    </div>
  );
}
