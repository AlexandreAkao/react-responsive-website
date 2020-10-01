import React from 'react';
import './styles.css';

const STYLES = [
  'btn--primary',
  'btn--outline'
];

const SIZES = [
  'btn--medium',
  'btn--large',
  'btn--mobile',
  'btn--wide'
];

const COLORS = [
  'primary',
  'blue',
  'red',
  'green'
]

function Button({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES[0];

  const checkButtonColor = COLORS.includes(buttonColor)
    ? buttonColor
    : COLORS[0];

  return (
    <button 
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
    >
      { children }
    </button>
  )
}

export default Button;
