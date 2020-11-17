import React from "react";

const Card = ({
  cornerRadius = 8,
  color = "lightGrey",
  padding = 8,
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
      }}
    >
      {children}
    </div>
  );
};

export default Card;
