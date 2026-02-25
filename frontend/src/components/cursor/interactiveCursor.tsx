import { useEffect, useRef } from 'react';
import { createAnimatable } from 'animejs';

const InteractiveCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const animatableRef = useRef<any>(null);

    useEffect(() => {
        if (!cursorRef.current) return;

        animatableRef.current = createAnimatable(cursorRef.current, {
            x: 500, // 500ms duration
            y: 500, // 500ms duration
            ease: 'out(3)',
        });

        const onMouseMove = (e: MouseEvent) => {
            if (animatableRef.current) {
                animatableRef.current.x(e.clientX - 10);
                animatableRef.current.y(e.clientY - 10);
            }
        };

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            style={{
                width: '30px',
                height: '30px',
                border: '2px solid rgba(17, 17, 17, 0.7)',
                borderRadius: '50%',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 9999,
                pointerEvents: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxSizing: 'border-box'
            }}
        >
            <div style={{
                width: '4px',
                height: '4px',
                backgroundColor: 'red',
                borderRadius: '50%'
            }} />
        </div>
    );
};

export default InteractiveCursor;