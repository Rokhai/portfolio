import React, {useState, useEffect} from 'react';


export const MouseRadialTorch: React.FC = () => {
      const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent): void => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
    return (
        <div
            className='hidden lg:block w-[1000px] h-[1000px] rounded-full pointer-events-none fixed transform -translate-x-1/2 -translate-y-1/2'
            style={{
                opacity: 0.15,
                top: position.y,
                left: position.x,
                background: 'radial-gradient(circle at center, #ff4dbe 0%, rgba(255, 0, 0, 0) 60%)'
            }}
        />
    )
}