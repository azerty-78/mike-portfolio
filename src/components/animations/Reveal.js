import { motion, useReducedMotion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
  once = true,
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  if (reduceMotion) {
    const Tag = as === 'li' ? 'li' : 'div';
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants}
    >
      {children}
    </Component>
  );
}
