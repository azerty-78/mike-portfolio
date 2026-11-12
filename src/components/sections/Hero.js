import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { personalInfo } from '../../data';
import { useLanguage } from '../../i18n/LanguageContext';
import Button from '../ui/Button';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { lang, t } = useLanguage();

  return (
    <section
      id="accueil"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-[calc(var(--header-h)+1.5rem)]"
    >
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute right-[-10%] top-[18%] h-[42vw] w-[42vw] max-h-[520px] max-w-[520px] rounded-full border border-mist/[0.06]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[4%] top-[28%] h-[28vw] w-[28vw] max-h-[340px] max-w-[340px] rounded-full border border-signal/25"
        aria-hidden
      />

      <div className="site-container relative z-10 grid items-end gap-12 pb-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12 lg:pb-20">
        <div>
          <motion.p
            className="eyebrow mb-6 inline-flex items-center gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block h-1.5 w-1.5 animate-pulse-soft rounded-full bg-signal" />
            {t.hero.tagline}
          </motion.p>

          <h1 className="font-display text-display-xl text-mist">
            {t.hero.headline.map((line, index) => (
              <motion.span
                key={`${lang}-${line.text}`}
                className={`block ${line.accent ? 'text-signal' : ''}`}
                initial={reduceMotion ? false : { opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.12 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line.text}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-8 max-w-xl text-base leading-relaxed text-mist-muted md:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {t.hero.intro}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.62 }}
          >
            <Button href="#projets">
              {t.hero.ctaProjects}
              <ArrowUpRight size={16} />
            </Button>
            <Button href="#contact" variant="ghost">
              {t.hero.ctaContact}
            </Button>
            <Button
              href={personalInfo.cvUrl}
              download={personalInfo.cvFileName}
              variant="ghost"
            >
              {t.hero.ctaCv}
              <Download size={16} />
            </Button>
          </motion.div>
        </div>

        <motion.aside
          className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          aria-label={t.hero.identityLabel}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] border border-mist/10 bg-ink-50">
            <img
              src={personalInfo.portrait}
              alt={personalInfo.portraitAlt[lang]}
              className="h-full w-full rounded-[var(--radius-lg)] object-cover object-[center_12%]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#E8B4B8]">
                {t.hero.identityLabel}
              </p>
              <p className="mt-2 font-display text-xl text-[#F5F0EB] md:text-2xl">
                {personalInfo.shortName}
              </p>
              <p className="mt-1 text-sm text-[#F5F0EB]/80">{t.hero.role}</p>
            </div>

            <motion.div
              className="pointer-events-none absolute -right-5 top-10 h-24 w-24 rounded-[var(--radius)] border border-signal/40"
              animate={reduceMotion ? undefined : { rotate: [0, 8, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.aside>
      </div>

      <div className="site-container relative z-10 mt-auto border-t border-mist/5 py-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-mist-muted">
            <span>{personalInfo.location[lang]}</span>
            <span className="inline-flex items-center gap-2 text-signal">
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-signal" />
              {t.hero.availability}
            </span>
          </div>

          <a
            href="#apropos"
            className="inline-flex items-center gap-3 text-sm text-mist-muted transition-colors hover:text-signal"
          >
            {t.hero.scroll}
            <span className="relative flex h-8 w-5 items-start justify-center overflow-hidden rounded-full border border-mist/20 pt-1.5">
              <span className="h-1.5 w-1 animate-scroll-pulse rounded-full bg-signal" />
            </span>
            <ArrowDown size={14} className="opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
}
