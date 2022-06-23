import React from 'react';

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick?: () => void;
  onDoubleClick?: () => void;
  radius: string;
  width: string;
}

const Button: React.FC<Props> = ({
  border,
  color,
  children,
  height,
  onClick,
  onDoubleClick,
  radius,
  width,
}) => {
  return (
    <button
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
