"use client";
import { ChangeEvent } from "react";
import { CustomInputStyles } from "./customInput.styles";
import { CustomInputProps } from "./customInput.model";


export const CustomInput = ({
  value = "",
  placeholder = "",
  icon,
  iconPosition = "left",
  onChange,
  className = "",
}: CustomInputProps) => {
  const hasIcon = Boolean(icon);

  return (
    <div
      className={`customInput ${hasIcon ? "hasIcon" : ""} icon--${iconPosition} ${className}`}
    >
      {icon && <div className="customInput__icon">{icon}</div>}

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange?.(e.target.value)
        }
      />

      <style jsx>{CustomInputStyles}</style>
    </div>
  );
};
