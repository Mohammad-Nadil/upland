import React from "react";

const Dots = ({className}) => {
  return (
    <svg
    className={`${className}`}
      width="16"
      height="6"
      viewBox="0 0 16 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3" cy="3" r="3" fill="#FF6231" />
      <circle cx="13" cy="3" r="3" fill="#FF6231" />
    </svg>
  );
};

export default Dots;