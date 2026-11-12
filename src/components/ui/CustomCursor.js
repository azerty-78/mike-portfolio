import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    setEnabled(finePointer && !reduceMotion);
  }, [reduceMotion]);

  useEffect(() => {
    if (!enabled) return undefined;

    const move = (event) => setPosition({ x: event.clientX, y: event.clientY });
    const over = (event) => {
      const target = event.target;
      const interactive = target.closest('a, button, input, textarea, [data-cursor="hover"]');
      setHovering(Boolean(interactive));
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerover', over);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', over);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden mix-blend-difference lg:block"
      animate={{
        x: position.x - (hovering ? 18 : 6),
        y: position.y - (hovering ? 18 : 6),
        width: hovering ? 36 : 12,
        height: hovering ? 36 : 12,
      }}
      transition={{ type: 'spring', stiffness: 420, damping: 28, mass: 0.35 }}
    >
      <div className="h-full w-full rounded-full bg-mist" />
    </motion.div>
  );
}
