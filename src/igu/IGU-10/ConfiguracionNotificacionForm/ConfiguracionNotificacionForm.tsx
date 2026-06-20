import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "@/components/Button/Button";
import { Select } from "@/components/Select/Select";
import type {
  ConfiguracionNotificacion,
  PlataformaEnvio,
} from "@/types/notificacion";

interface Props {
  initialData?: ConfiguracionNotificacion;
  onSubmit?: (data: Partial<ConfiguracionNotificacion>) => void;
  onCancel?: () => void;
}

export function ConfiguracionNotificacionForm({
  initialData,
  onSubmit,
  onCancel,
}: Props) {
  const [plataforma, setPlataforma] = useState<string>(
    initialData?.plataforma || "WhatsApp",
  );
  const [plantilla, setPlantilla] = useState(
    initialData?.plantillaMensaje || "",
  );
  const [activa, setActiva] = useState(initialData?.activa ?? true);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.({
          plataforma: plataforma as PlataformaEnvio,
          plantillaMensaje: plantilla,
          activa,
        });
      }}
    >
      <Select
        label="Plataforma de Envío"
        id="plataforma"
        value={plataforma}
        onChange={setPlataforma}
        options={[
          { label: "WhatsApp", value: "WhatsApp" },
          { label: "SMS", value: "SMS" },
          { label: "Email", value: "Email" },
        ]}
      />

      <Form.Group className="mt-3" controlId="plantillaMensaje">
        <Form.Label>Plantilla de Mensaje</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          value={plantilla}
          onChange={(e) => setPlantilla(e.target.value)}
          placeholder="Ingrese la plantilla. Use {{variables}}."
        />
        <Form.Text className="text-muted">
          Variables disponibles: {"{{nombreEstudiante}}"}, {"{{fecha}}"},{" "}
          {"{{hora}}"}.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mt-3 mb-4" controlId="estadoActiva">
        <Form.Check
          type="switch"
          label="Notificación Activa"
          checked={activa}
          onChange={(e) => setActiva(e.target.checked)}
        />
      </Form.Group>

      <div className="d-flex gap-2">
        <Button type="submit" variant="primary">
          Guardar Cambios
        </Button>
        <Button variant="secondary" onClick={onCancel}>
          Cancelar
        </Button>
      </div>
    </Form>
  );
}
