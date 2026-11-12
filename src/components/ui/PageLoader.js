import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { personalInfo } from '../../data';
import { useLanguage } from '../../i18n/LanguageContext';

export default function PageLoader() {
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();
  const [visible, setVisible] = useState(!reduceMotion);

  useEffect(() => {
    if (reduceMotion) {
      setVisible(false);
      return undefined;
    }

    const timer = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center">
            <motion.p
              className="font-display text-4xl tracking-tight text-mist md:text-5xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {personalInfo.monogram}
            </motion.p>
            <motion.div
              className="mx-auto mt-6 h-px w-24 origin-left bg-signal"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.p
              className="mt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-mist-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              {t.loader.label}
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
