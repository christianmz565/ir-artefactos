import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import type { PermisoModulo, Rol } from "@/types/rol";
import { PermissionsMatrix } from "./PermissionsMatrix";

const MODULOS_SISTEMA = [
  { id: "M01", nombre: "Gestión de Auxiliares" },
  { id: "M02", nombre: "Gestión de Estudiantes" },
  { id: "M03", nombre: "Gestión de Profesores" },
  { id: "M04", nombre: "Gestión de Apoderados" },
  { id: "M05", nombre: "Gestión de Roles" },
  { id: "M06", nombre: "Gestión de Reportes" },
];

const defaultPermisos: PermisoModulo[] = MODULOS_SISTEMA.map((m) => ({
  moduloId: m.id,
  moduloNombre: m.nombre,
  leer: false,
  escribir: false,
  eliminar: false,
}));

interface Props {
  initialData?: Rol;
  onSubmit?: (data: Partial<Rol>) => void;
  onCancel?: () => void;
}

export function RoleForm({ initialData, onSubmit, onCancel }: Props) {
  const [nombre, setNombre] = useState(initialData?.nombre || "");
  const [descripcion, setDescripcion] = useState(
    initialData?.descripcion || "",
  );
  const [permisos, setPermisos] = useState<PermisoModulo[]>(
    initialData?.permisos || defaultPermisos,
  );

  const handlePermissionChange = (
    moduloId: string,
    tipo: "leer" | "escribir" | "eliminar",
    valor: boolean,
  ) => {
    setPermisos((prev) =>
      prev.map((p) => (p.moduloId === moduloId ? { ...p, [tipo]: valor } : p)),
    );
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.({
          nombre,
          descripcion,
          permisos,
          esPredeterminado: initialData?.esPredeterminado ?? false,
        });
      }}
    >
      <div className="mb-3">
        <Input
          label="Nombre del Rol"
          value={nombre}
          onChange={setNombre}
          placeholder="Ej. Administrador Secundario"
        />
      </div>

      <Form.Group className="mb-4">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Propósito del rol"
        />
      </Form.Group>

      <div className="mb-4">
        <h5 className="mb-3">Matriz de Permisos</h5>
        <PermissionsMatrix
          permisos={permisos}
          onChange={handlePermissionChange}
        />
      </div>

      <div className="d-flex gap-2">
        <Button type="submit" variant="primary" disabled={!nombre}>
          {initialData ? "Actualizar Rol" : "Guardar Rol"}
        </Button>
        <Button variant="secondary" onClick={onCancel}>
          Cancelar
        </Button>
      </div>
    </Form>
  );
}
