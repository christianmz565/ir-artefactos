import type { Auxiliar } from "@/types/auxiliar";
import { IGU_2_ALT_1 } from "./IGU-2-ALT-1";
import { IGU_2_TAB_3 } from "./IGU-2-TAB-3";

export function IGU_2_TAB_2({ auxiliares }: { auxiliares: Auxiliar[] }) {
  return (
    <tbody>
      {auxiliares.length === 0 ? (
        <IGU_2_ALT_1 />
      ) : (
        auxiliares.map((a) => <IGU_2_TAB_3 key={a.id} auxiliar={a} />)
      )}
    </tbody>
  );
}
