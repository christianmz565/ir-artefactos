import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { Select } from "@/components/Select/Select";
import type { Apoderado, TipoDocumento } from "@/types/apoderado";

interface Props {
  estudiantesDisponibles: { id: number; nombre: string }[];
  initialData?: Apoderado;
  onSubmit?: (data: Partial<Apoderado>) => void;
  onCancel?: () => void;
}

export function ApoderadoForm({
  estudiantesDisponibles,
  initialData,
  onSubmit,
  onCancel,
}: Props) {
  const [nombres, setNombres] = useState(initialData?.nombres || "");
  const [apellidos, setApellidos] = useState(initialData?.apellidos || "");
  const [tipoDocumento, setTipoDocumento] = useState<string>(
    initialData?.tipoDocumento || "DNI",
  );
  const [numeroDocumento, setNumeroDocumento] = useState(
    initialData?.numeroDocumento || "",
  );
  const [parentesco, setParentesco] = useState(initialData?.parentesco || "");
  const [direccion, setDireccion] = useState(initialData?.direccion || "");
  const [correo, setCorreo] = useState(initialData?.correo || "");
  const [telefono, setTelefono] = useState(initialData?.telefono || "");
  const [estudiantes, setEstudiantes] = useState<number[]>(
    initialData?.estudiantesAsociados || [],
  );

  const handleStudentToggle = (id: number) => {
    setEstudiantes((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id],
    );
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.({
          nombres,
          apellidos,
          tipoDocumento: tipoDocumento as TipoDocumento,
          numeroDocumento,
          parentesco,
          direccion,
          correo,
          telefono,
          estado: initialData?.estado || "Activo",
          estudiantesAsociados: estudiantes,
        });
      }}
    >
      <Row className="mb-3">
        <Col md={6}>
          <Input label="Nombres" value={nombres} onChange={setNombres} />
        </Col>
        <Col md={6}>
          <Input label="Apellidos" value={apellidos} onChange={setApellidos} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Select
            label="Tipo de Documento"
            value={tipoDocumento}
            onChange={setTipoDocumento}
            options={[
              { label: "DNI", value: "DNI" },
              { label: "Carnet de Extranjería", value: "CE" },
              { label: "Pasaporte", value: "PAS" },
            ]}
          />
        </Col>
        <Col md={6}>
          <Input
            label="Número de Documento"
            value={numeroDocumento}
            onChange={setNumeroDocumento}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Input
            label="Parentesco"
            value={parentesco}
            onChange={setParentesco}
            placeholder="Ej. Padre, Madre, Tío"
          />
        </Col>
        <Col md={6}>
          <Input label="Teléfono" value={telefono} onChange={setTelefono} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Input
            label="Correo Electrónico"
            value={correo}
            onChange={setCorreo}
          />
        </Col>
        <Col md={6}>
          <Input label="Dirección" value={direccion} onChange={setDireccion} />
        </Col>
      </Row>

      <Form.Group className="mb-4">
        <Form.Label>
          Estudiantes Asociados (Seleccionar al menos uno)
        </Form.Label>
        <div
          className="border p-3 rounded"
          style={{ maxHeight: "150px", overflowY: "auto" }}
        >
          {estudiantesDisponibles.map((est) => (
            <Form.Check
              key={est.id}
              type="checkbox"
              id={`student-${est.id}`}
              label={est.nombre}
              checked={estudiantes.includes(est.id)}
              onChange={() => handleStudentToggle(est.id)}
            />
          ))}
        </div>
      </Form.Group>

      <div className="d-flex gap-2">
        <Button
          type="submit"
          variant="primary"
          disabled={estudiantes.length === 0}
        >
          {initialData ? "Actualizar Apoderado" : "Guardar Apoderado"}
        </Button>
        <Button variant="secondary" onClick={onCancel}>
          Cancelar
        </Button>
      </div>
    </Form>
  );
}
