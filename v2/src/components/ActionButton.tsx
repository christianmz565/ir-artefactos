import Button from "react-bootstrap/Button";

interface ActionButtonProps {
  children: React.ReactNode;
  variant?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  size?: "sm" | "lg";
}

export function ActionButton({
  children,
  variant = "primary",
  onClick,
  type = "button",
  disabled,
  size,
}: ActionButtonProps) {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      type={type}
      disabled={disabled}
      size={size}
    >
      {children}
    </Button>
  );
}
