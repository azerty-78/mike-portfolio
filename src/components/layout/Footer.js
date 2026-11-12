import { ArrowUp, Mail } from 'lucide-react';
import { personalInfo } from '../../data';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Footer() {
  const { lang, t } = useLanguage();
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-mist/5 bg-ink-50">
      <div className="site-container flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl text-mist">{personalInfo.shortName}</p>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-mist-muted">
            {personalInfo.location[lang]}
          </p>
          <div className="mt-5 flex items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 rounded-[var(--radius)] text-sm text-mist-muted transition-colors hover:text-signal"
              aria-label={t.footer.email}
            >
              <Mail size={16} />
              {t.footer.email}
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between gap-6 md:flex-col md:items-end">
          <p className="font-mono text-xs text-mist-muted">
            © {year} {personalInfo.shortName}
          </p>
          <button
            type="button"
            onClick={scrollTop}
            className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-mist/10 px-4 py-2 text-sm text-mist transition-colors hover:border-signal hover:text-signal"
            aria-label={t.footer.backToTop}
          >
            {t.footer.top}
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
