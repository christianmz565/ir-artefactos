import { TextInput } from "./TextInput";
import { SelectInput } from "./SelectInput";
import { ActionButton } from "./ActionButton";

const COURSE_OPTIONS = [
  { value: "", label: "All Courses" },
  { value: "CS", label: "Computer Science" },
  { value: "Math", label: "Mathematics" },
  { value: "Physics", label: "Physics" },
];

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filterCourse: string;
  onFilterChange: (course: string) => void;
  onAddStudent: () => void;
}

export function Header({
  searchQuery,
  onSearchChange,
  filterCourse,
  onFilterChange,
  onAddStudent,
}: HeaderProps) {
  return (
    <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-3">
      <h1 className="mb-0">Students Management</h1>
      <div className="d-flex gap-3 align-items-center">
        <TextInput
          placeholder="Search by name..."
          value={searchQuery}
          onChange={onSearchChange}
          id="search-students"
        />
        <SelectInput
          options={COURSE_OPTIONS}
          value={filterCourse}
          onChange={onFilterChange}
          id="filter-course"
        />
        <ActionButton onClick={onAddStudent}>+ Add Student</ActionButton>
      </div>
    </div>
  );
}
