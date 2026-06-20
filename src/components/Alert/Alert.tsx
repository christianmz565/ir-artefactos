import BootstrapAlert from "react-bootstrap/Alert";

interface AlertProps {
  variant?: "success" | "danger";
  message?: string;
  id?: string;
}

export function Alert({ variant = "success", message, id }: AlertProps) {
  return (
    <BootstrapAlert variant={variant} id={id}>
      {message}
    </BootstrapAlert>
  );
}
