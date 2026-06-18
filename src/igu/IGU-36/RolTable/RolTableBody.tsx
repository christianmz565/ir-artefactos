import type { Rol } from "@/types/rol";
import { EmptyState } from "./EmptyState";
import { RolRow } from "./RolRow";

interface RolTableBodyProps {
  roles: Rol[];
}

export function RolTableBody({ roles }: RolTableBodyProps) {
  return (
    <tbody>
      {roles.length === 0 ? (
        <EmptyState />
      ) : (
        roles.map((r) => <RolRow key={r.id} rol={r} />)
      )}
    </tbody>
  );
}
