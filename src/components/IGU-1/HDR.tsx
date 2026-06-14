import { Input } from "../INP";
import { Select } from "../SEL";
import { Button } from "../BTN";

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
        <Input
          placeholder="Search by name..."
          value={searchQuery}
          onChange={onSearchChange}
          id="search-students"
        />
        <Select
          options={COURSE_OPTIONS}
          value={filterCourse}
          onChange={onFilterChange}
          id="filter-course"
        />
        <Button onClick={onAddStudent}>+ Add Student</Button>
      </div>
    </div>
  );
}
