import React from 'react';
import { Icon } from 'react-feather';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: Icon;
  iconPosition?: 'start' | 'end';
  iconColor?: 'red' | 'green' | 'grey';
  iconFill?: boolean;
  buttonStyle?: 'regular' | 'action' | 'alert' | 'flush';
}

export function Button({
  label = 'Okay',
  icon = void 0,
  iconPosition = 'start',
  iconColor = void 0,
  iconFill = false,
  buttonStyle = 'regular',
  ...rest
}: ButtonProps) {
  const StartIcon = iconPosition === 'start' ? icon : null;
  const EndIcon = iconPosition === 'end' ? icon : null;

  // Tailwind class names for different button styles
  const baseClass =
    'flex items-center gap-2 font-mono text-sm font-normal border-0 transition duration-300 ease-in-out outline-none';
  const buttonStyleClasses = {
    regular: 'bg-[#ececf1] text-[#101010] rounded-full px-6 py-3',
    action:
      'bg-white text-black shadow-md hover:bg-[#f8f82b] hover:shadow-lg hover:px-7 hover:py-3',
    alert: 'bg-red-600 text-[#ececf1] hover:bg-red-600',
    flush: 'bg-transparent text-black',
  };

  // Icon color classes
  const iconColorClasses = {
    red: 'text-red-600',
    green: 'text-green-600',
    grey: 'text-gray-500',
  };

  const iconClasses = iconColor ? iconColorClasses[iconColor] : '';
  const iconFillClass = iconFill ? 'fill-current' : '';

  return (
    <button
      className={`${baseClass} ${buttonStyleClasses[buttonStyle]} ${iconClasses} ${iconFillClass} ${
        rest.disabled
          ? 'cursor-not-allowed opacity-50'
          : 'hover:bg-gray-200 active:transform active:translate-y-1'
      }`}
      {...rest}
    >
      {StartIcon && (
        <span className={`icon icon-start ${iconClasses} ${iconFillClass}`}>
          <StartIcon />
        </span>
      )}
      <span className="label">{label}</span>
      {EndIcon && (
        <span className={`icon icon-end ${iconClasses} ${iconFillClass}`}>
          <EndIcon />
        </span>
      )}
    </button>
  );
}
