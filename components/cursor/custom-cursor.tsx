'use client';

import { useEffect, useRef, useState } from 'react';

const CustomCursor = ({
  isActive,
  text = 'Pogledaj više',
}: {
  isActive: boolean;
  slug?: string;
  text?: string;
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window) {
      window.addEventListener('mousemove', (e) => {
        setCursorPosition({
          x: e.clientX,
          y: e.clientY,
        });
      });
    }
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`cursor ${isActive ? 'active' : ''}`}
      style={{
        left: cursorPosition.x - 64,
        top: cursorPosition.y - 64,
      }}
    >
      <div ref={cursorLabelRef} className='cursorLabel'>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default CustomCursor;
