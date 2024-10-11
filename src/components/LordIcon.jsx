import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// Define the lord-icon custom element
defineElement(lottie.loadAnimation);

// eslint-disable-next-line react/prop-types
const LordIcon = ({ src, trigger, size = 32, colors, ...props }) => {
  const iconRef = useRef(null);

  useEffect(() => {
    if (iconRef.current) {
      iconRef.current.src = src;
      iconRef.current.trigger = trigger;
      if (colors) {
        iconRef.current.colors = colors;
      }
    }
  }, [src, trigger, colors]);

  return (
    <lord-icon
      ref={iconRef}
      style={{ width: size, height: size }}
      {...props}
    />
  );
};

export default LordIcon;