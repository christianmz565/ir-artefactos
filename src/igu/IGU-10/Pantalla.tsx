import Container from "react-bootstrap/Container";
import { MOCK_CONFIGURACION_NOTIFICACIONES } from "@/mocks/configuracionNotificaciones";
import { ConfiguracionNotificacionForm } from "./ConfiguracionNotificacionForm/ConfiguracionNotificacionForm";

export function Pantalla() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Editar Configuración de Notificación</h1>
      <ConfiguracionNotificacionForm
        initialData={MOCK_CONFIGURACION_NOTIFICACIONES[0]}
        onSubmit={(data) => alert(`Datos guardados: ${JSON.stringify(data)}`)}
        onCancel={() => alert("Edición cancelada")}
      />
    </Container>
  );
}
