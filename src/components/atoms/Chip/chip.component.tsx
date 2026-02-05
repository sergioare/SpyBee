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

  return (
    <>
      <div
        style={cssVariables}
        className={`chip chip--status--${status} chip--${size}`}
      >
        {title}
      </div>
      <style jsx>{ChipStyles}</style>
    </>
  );
};
