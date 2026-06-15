import { Button } from "@/components/BTN-DEFAULT/BTN-DEFAULT";

interface FormButtonsProps {
  onCancel?: () => void;
  onUpdate?: () => void;
}

export function FormButtons({ onCancel, onUpdate }: FormButtonsProps) {
  return (
    <div className="d-flex mt-3 gap-2">
      <Button type="submit" onClick={onUpdate} id="update-student">
        Actualizar
      </Button>
      <Button variant="secondary" onClick={onCancel} id="cancel-edit">
        Cancelar
      </Button>
    </div>
  );
}
