import { Select } from "@/components/SELECT/SELECT";
import { MOCK_FORM_COURSE_OPTIONS } from "@/mocks/students";

interface CourseSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function CourseSelect({ value, onChange }: CourseSelectProps) {
  return (
    <Select
      label="Curso"
      options={MOCK_FORM_COURSE_OPTIONS}
      value={value}
      onChange={onChange}
      id="student-course"
    />
  );
}
