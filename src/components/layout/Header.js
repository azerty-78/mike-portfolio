import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { personalInfo } from '../../data';
import { useLanguage } from '../../i18n/LanguageContext';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrolled } from '../../hooks/useScrollProgress';
import Button from '../ui/Button';
import LanguageToggle from '../ui/LanguageToggle';

export default function Header() {
  const scrolled = useScrolled(20);
  const { t } = useLanguage();
  const sectionIds = useMemo(() => personalInfo.navIds, []);
  const activeId = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  const navLinks = personalInfo.navIds.map((id) => ({
    id,
    label: t.nav[id],
  }));

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-mist/5 bg-ink/85 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="site-container flex h-[var(--header-h)] items-center justify-between gap-4">
        <a
          href="#accueil"
          className="font-display text-lg font-medium tracking-tight text-mist transition-colors hover:text-signal"
          onClick={(e) => {
            e.preventDefault();
            handleNav('accueil');
          }}
        >
          {personalInfo.monogram}
          <span className="ml-2 hidden text-sm text-mist-muted sm:inline">
            {personalInfo.shortName}
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label={t.nav.mainNav}>
          {navLinks.map((link) => {
            const active = activeId === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.id);
                }}
                className={`relative px-2.5 py-2 font-sans text-[12px] transition-colors ${
                  active ? 'text-mist' : 'text-mist-muted hover:text-mist'
                }`}
              >
                {link.label}
                {active ? (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-signal"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle className="hidden sm:inline-flex" />

          <Button
            href={personalInfo.cvUrl}
            download={personalInfo.cvFileName}
            variant="ghost"
            className="hidden !px-3 !py-2 lg:inline-flex"
          >
            <Download size={14} />
            {t.nav.downloadCv}
          </Button>

          <Button
            href="#contact"
            className="hidden !px-4 !py-2.5 md:inline-flex"
            onClick={(e) => {
              e.preventDefault();
              handleNav('contact');
            }}
          >
            {t.nav.letsTalk}
          </Button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius)] border border-mist/10 text-mist xl:hidden"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="border-t border-mist/5 bg-ink xl:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="site-container flex flex-col gap-1 py-6" aria-label={t.nav.mobileNav}>
              <div className="mb-4">
                <LanguageToggle />
              </div>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.id);
                  }}
                  className={`flex items-center justify-between border-b border-mist/5 py-4 font-display text-2xl ${
                    activeId === link.id ? 'text-signal' : 'text-mist'
                  }`}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index }}
                >
                  {link.label}
                  <span className="font-mono text-xs text-mist-muted">0{index + 1}</span>
                </motion.a>
              ))}
              <Button
                href={personalInfo.cvUrl}
                download={personalInfo.cvFileName}
                variant="ghost"
                className="mt-6 w-full"
              >
                <Download size={16} />
                {t.nav.downloadCv}
              </Button>
              <Button
                href="#contact"
                className="mt-3 w-full"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('contact');
                }}
              >
                {t.nav.contactMe}
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
