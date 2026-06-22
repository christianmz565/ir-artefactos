import { Button } from "@/components/Button/Button";

export function IGU_26_TAB_3_BTN_1({ id }: { id: string }) {
  return (
    <Button size="sm" variant="danger" id={`igu-26-tab-3-btn-1-del-${id}`}>
      Eliminar
    </Button>
  );
}
