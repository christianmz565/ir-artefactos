import { Button } from "@/components/Button/Button";

interface GenerateButtonProps {
  loading: boolean;
  onClick: () => void;
}

export function GenerateButton({ loading, onClick }: GenerateButtonProps) {
  return (
    <Button
      variant="primary"
      onClick={onClick}
      disabled={loading}
      id="btn-generar-reporte"
    >
      {loading ? "Generando..." : "Generar Reporte"}
    </Button>
  );
}
