import type { Guardian } from "@/types/apoderado";
import { IGU_32_ALT_1 } from "./IGU-32-ALT-1";
import { IGU_32_TAB_3 } from "./IGU-32-TAB-3";

export function IGU_32_TAB_2({ guardians }: { guardians: Guardian[] }) {
  if (guardians.length === 0) {
    return <IGU_32_ALT_1 />;
  }
  return (
    <tbody>
      {guardians.map((g) => (
        <IGU_32_TAB_3 key={g.id} guardian={g} />
      ))}
    </tbody>
  );
}
