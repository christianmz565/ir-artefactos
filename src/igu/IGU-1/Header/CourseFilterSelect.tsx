import { Select } from "@/components/SELECT/SELECT";
import { MOCK_COURSE_OPTIONS } from "@/mocks/students";

interface CourseFilterSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function CourseFilterSelect({
  value,
  onChange,
}: CourseFilterSelectProps) {
  return (
    <Select
      options={MOCK_COURSE_OPTIONS}
      value={value}
      onChange={onChange}
      id="filter-course"
    />
  );
}
