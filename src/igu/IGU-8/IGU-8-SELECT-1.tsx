import { Select } from "@/components/Select/Select";
import { MOCK_FORM_COURSE_OPTIONS } from "@/mocks/students";

export function IGU_8_SELECT_1() {
  return (
    <Select
      label="Curso"
      options={MOCK_FORM_COURSE_OPTIONS}
      value="CS"
      id="igu-8-select-1"
    />
  );
}
