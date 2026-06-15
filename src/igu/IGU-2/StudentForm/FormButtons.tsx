import { Button } from "@/components/BTN-DEFAULT/BTN-DEFAULT";

interface FormButtonsProps {
  onCancel?: () => void;
  onSave?: () => void;
}

export function FormButtons({ onCancel, onSave }: FormButtonsProps) {
  return (
    <div className="d-flex mt-3 gap-2">
      <Button type="submit" onClick={onSave} id="save-student">
        Guardar
      </Button>
      <Button variant="secondary" onClick={onCancel} id="cancel-create">
        Cancelar
      </Button>
    </div>
  );
}
