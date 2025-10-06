import { useEffect, useState } from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.classList.contains('cursor-pointer')
      );
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
  
      <div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={`transition-all duration-150 ${isClicking ? 'scale-75' : 'scale-100'}`}>
          <div className={`rounded-full bg-foreground ${isPointer ? 'w-1.5 h-1.5' : 'w-1 h-1'}`} />
        </div>
      </div>


      <div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={`transition-all duration-200 ${isPointer ? 'scale-125' : 'scale-100'} ${isClicking ? 'scale-75' : ''}`}>
          <div className="relative w-7 h-7">
            <div className={`absolute inset-0 border border-foreground/50 rounded-full`} />
            <div className="absolute inset-0 flex items-center justify-center text-foreground/70 font-mono text-[10px] font-bold">
              {isPointer ? '{ }' : '</>'}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
