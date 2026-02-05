type IconPosition = "left" | "right";

type CustomInputProps = {
  value?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  onChange?: (value: string) => void;
  className?: string;
};

export type { CustomInputProps };