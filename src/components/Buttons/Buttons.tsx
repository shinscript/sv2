"use client";

import React from "react";

interface ButtonProps {
  label: string;
  className: string;
  onClick: () => void;
}

const Buttons: React.FC<ButtonProps> = ({ label, className, onClick }) => {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Buttons;
