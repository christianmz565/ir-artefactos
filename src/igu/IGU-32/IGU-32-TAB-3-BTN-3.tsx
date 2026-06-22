import { Button } from "@/components/Button/Button";

export function IGU_32_TAB_3_BTN_3({
  id,
  isActive,
}: {
  id: string;
  isActive: boolean;
}) {
  return (
    <Button
      size="sm"
      variant="danger"
      id={`igu-32-tab-3-btn-3-${isActive ? "inact" : "del"}-${id}`}
    >
      {isActive ? "Inactivar" : "Eliminar"}
    </Button>
  );
}
