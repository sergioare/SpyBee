import React from "react";
import { CircleChartStyles } from "./circleChart.styles";

const CircleChartComponent = ({ value }: { value: number }) => {
  const rotation = (360 / 100) * value;

  const cssVariables = {
    "--value": `${value}%`,
    "--rotation": `${rotation}deg`,
  } as React.CSSProperties;

  return (
    <div className="circle__chart" style={cssVariables}>
      <div className="circle__chart__track">
        <div className="circle__chart__edge circle__chart__edge--start" />
        <div className="circle__chart__edge-container">
          <div className="circle__chart__edge circle__chart__edge--end" />
        </div>
        <div className="circle__chart__inner-circle">
          <span className="circle__chart__number">{value}</span>
        </div>
      </div>

      <style jsx>{CircleChartStyles}</style>
    </div>
  );
};

export default CircleChartComponent;
