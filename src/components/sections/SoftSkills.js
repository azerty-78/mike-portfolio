import { useLanguage } from '../../i18n/LanguageContext';
import Reveal from '../animations/Reveal';

export default function SoftSkills() {
  const { t } = useLanguage();

  return (
    <section id="soft-skills" className="relative border-y border-mist/5 bg-ink-50 py-16 md:py-20">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <div>
              <p className="eyebrow">{t.softSkills.eyebrow}</p>
              <h2 className="mt-4 font-display text-display-md text-mist">{t.softSkills.title}</h2>
            </div>
          </Reveal>

          <div className="grid gap-10 md:grid-cols-2">
            <Reveal delay={0.06}>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist-muted">
                  {t.softSkills.softLabel}
                </p>
                <ul className="mt-5 space-y-3">
                  {t.softSkills.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-mist">
                      <span className="h-px w-6 bg-signal" aria-hidden />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist-muted">
                  {t.softSkills.languagesLabel}
                </p>
                <ul className="mt-5 space-y-5">
                  {t.softSkills.languages.map((langItem) => (
                    <li key={langItem.name}>
                      <p className="font-display text-xl text-mist">{langItem.name}</p>
                      <p className="mt-1 text-sm text-mist-muted">{langItem.level}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
