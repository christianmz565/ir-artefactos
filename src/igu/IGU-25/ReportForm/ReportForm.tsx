import { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ProgressBar from "react-bootstrap/ProgressBar";
import { EstudianteField } from "./EstudianteField";
import { FechaDesdeField } from "./FechaDesdeField";
import { FechaHastaField } from "./FechaHastaField";
import { FormatoField } from "./FormatoField";
import { GenerateButton } from "./GenerateButton";
import { GradoField } from "./GradoField";
import { SeccionField } from "./SeccionField";

export function ReportForm() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [formato, setFormato] = useState("PDF");

  const handleGenerar = () => {
    setLoading(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return p + 10;
      });
    }, 200);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Configurar Reporte</Card.Title>
        <Form>
          <div className="row">
            <div className="col-md-6">
              <FechaDesdeField />
            </div>
            <div className="col-md-6">
              <FechaHastaField />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <GradoField value="" onChange={() => {}} />
            </div>
            <div className="col-md-6">
              <SeccionField value="" onChange={() => {}} />
            </div>
          </div>
          <EstudianteField value="" onChange={() => {}} />
          <FormatoField value={formato} onChange={setFormato} />
          {loading && (
            <ProgressBar
              now={progress}
              label={`${progress}%`}
              className="mb-3"
            />
          )}
          <GenerateButton loading={loading} onClick={handleGenerar} />
        </Form>
      </Card.Body>
    </Card>
  );
}
