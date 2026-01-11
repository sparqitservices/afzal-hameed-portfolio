
import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    const handleMouseLeave = () => setIsHidden(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (typeof window === 'undefined') return null;

  return (
    <>
      <div 
        className={`fixed top-0 left-0 w-8 h-8 border border-saffron rounded-full pointer-events-none z-[9999] transition-transform duration-150 ease-out hidden md:block ${isHidden ? 'opacity-0' : 'opacity-100'}`}
        style={{ 
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 1.5 : 1})`,
          backgroundColor: isPointer ? 'rgba(241, 90, 36, 0.1)' : 'transparent'
        }}
      />
      <div 
        className={`fixed top-0 left-0 w-1.5 h-1.5 bg-brandBlue rounded-full pointer-events-none z-[9999] hidden md:block ${isHidden ? 'opacity-0' : 'opacity-100'}`}
        style={{ 
          transform: `translate(${position.x - 3}px, ${position.y - 3}px)`
        }}
      />
    </>
  );
};

export default CustomCursor;
