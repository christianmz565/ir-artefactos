import { Button } from "@/components/Button/Button";

interface FormButtonsProps {
  onCancel?: () => void;
  onSave?: () => void;
}

export function FormButtons({ onCancel, onSave }: FormButtonsProps) {
  return (
    <div className="d-flex mt-3 gap-2">
      <Button type="submit" onClick={onSave} id="save-rol">
        Guardar
      </Button>
      <Button variant="secondary" onClick={onCancel} id="cancel-edit-rol">
        Cancelar
      </Button>
    </div>
  );
}
