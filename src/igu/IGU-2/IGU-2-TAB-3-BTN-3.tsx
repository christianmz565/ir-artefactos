import { Button } from "@/components/Button/Button";

export function IGU_2_TAB_3_BTN_3({
  id,
  disabled,
}: {
  id: string;
  disabled?: boolean;
}) {
  return (
    <Button
      size="sm"
      variant="danger"
      id={`igu-2-tab-3-btn-3-inact-${id}`}
      disabled={disabled}
    >
      Inactivar
    </Button>
  );
}
