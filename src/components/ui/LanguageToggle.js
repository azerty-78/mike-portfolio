import { useLanguage } from '../../i18n/LanguageContext';

export default function LanguageToggle({ className = '' }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className={`lang-toggle ${className}`} role="group" aria-label={t.common.language}>
      <button
        type="button"
        className={lang === 'fr' ? 'is-active' : 'hover:text-mist'}
        onClick={() => setLang('fr')}
        aria-pressed={lang === 'fr'}
      >
        FR
      </button>
      <button
        type="button"
        className={lang === 'en' ? 'is-active' : 'hover:text-mist'}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  );
}
