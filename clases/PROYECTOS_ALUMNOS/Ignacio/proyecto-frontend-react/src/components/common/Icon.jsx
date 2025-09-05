import React from 'react';

export default function Icon({ 
  name, 
  size = 'medium', 
  color, 
  style = {}, 
  className = '',
  onClick 
}) {
  const sizeClass = size === 'small' ? 'small' : 
                   size === 'large' ? 'large' : 
                   size === 'xl' ? 'xl' : 'medium';

  const iconStyle = {
    color: color || 'inherit',
    cursor: onClick ? 'pointer' : 'default',
    ...style
  };

  return (
    <span 
      className={`material-icons ${sizeClass} ${className}`}
      style={iconStyle}
      onClick={onClick}
    >
      {name}
    </span>
  );
}