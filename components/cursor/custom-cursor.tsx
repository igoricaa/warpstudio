'use client';

import { useCallback, useEffect, useRef } from 'react';

const CustomCursor = ({
  isActive,
  text = 'Pogledaj više',
}: {
  isActive: boolean;
  text?: string;
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 64}px, ${e.clientY - 64}px, 0) ${isActive ? 'scale(1)' : 'scale(0)'}`;
      }
    },
    [isActive]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div
      ref={cursorRef}
      className={`cursor ${isActive ? 'active' : ''}`}
      style={{
        top: 0,
        left: 0,
        transform: 'translate3d(0, 0, 0) scale(0)',
      }}
    >
      <div className='cursorLabel'>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default CustomCursor;
