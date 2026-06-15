import BootstrapButton from "react-bootstrap/Button";

interface ButtonProps {
  children: React.ReactNode;
  variant?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  size?: "sm" | "lg";
  id?: string;
}

export function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  disabled,
  size,
  id,
}: ButtonProps) {
  return (
    <BootstrapButton
      variant={variant}
      onClick={onClick}
      type={type}
      disabled={disabled}
      size={size}
      id={id}
    >
      {children}
    </BootstrapButton>
  );
}
