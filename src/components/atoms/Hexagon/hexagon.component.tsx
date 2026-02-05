"use client";
import { theme } from "@/utils/ThemeProvider";

import React from "react";
import { HexagonStyles } from "./hexagon.styles";

const { colors } = theme;

type HexagonProps = {
  children: React.ReactNode;
  size?: number;
  color?: string;
  textColor?: string;
  className?: string;
};

export const Hexagon = ({
  children,
  size = 40,
  color = colors.hexagon[100],
  textColor = colors.primary[600],
  className = "",
}: HexagonProps) => {
  const cssVariables = {
    "--hex-size": `${size}px`,
    "--hex-bg": color,
    "--hex-color": textColor,
  } as React.CSSProperties;

  return (
    <span style={cssVariables} className={`hexagon ${className}`}>
      {children}
      <style jsx>{HexagonStyles}</style>
    </span>
  );
};