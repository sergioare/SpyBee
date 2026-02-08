import { ChipProps } from "./chip.model";
import { ChipStyles } from "./chip.styles";

export const ChipComponent = ({
  title,
  status = "default",
  fullWidth,
  size = "small",
}: ChipProps) => {
  const cssVariables = {
    "--width": fullWidth ? "100%" : "fit-content",
    "--shrink": fullWidth ? "1" : "0",
  } as React.CSSProperties;

  const getTitle = () => {
    switch (status) {
      case "active":
        return "Activo";
      case "inactive":
        return "Inactivo";
      case "small":
        return "Pequeño";
      case "advanced":
        return "Avanzado";
      case "premium":
        return "Premium";
      case "pending_payment":
        return "Pendiente";
      case "suspended":
        return "Suspendido";
      case "big":
        return "Premium";
      default:
        return "";
    }
  };

  return (
    <>
      <div
        style={cssVariables}
        className={`chip chip--status--${status} chip--${size}`}
      >
        {title ?? getTitle()}
      </div>
      <style jsx>{ChipStyles}</style>
    </>
  );
};
