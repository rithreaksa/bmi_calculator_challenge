import React from "react";

const originalStyle = {
  position: "fixed",
  top: "25%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const CenteredContainer = ({
  cornerRadius = 0,
  color,
  padding = 0,
  style,
  children,
}) => {
  return (
    <div
      style={{
        ...style,
        borderRadius: cornerRadius + "px",
        backgroundColor: color,
        padding: padding + "px",
        ...originalStyle,
      }}
    >
      {children}
    </div>
  );
};

export default CenteredContainer;
