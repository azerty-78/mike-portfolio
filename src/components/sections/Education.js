import { certifications, education } from '../../data';
import { useLanguage } from '../../i18n/LanguageContext';
import Reveal from '../animations/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="formation" className="section-pad relative">
      <div className="site-container">
        <SectionHeading eyebrow={t.education.eyebrow} title={t.education.title} />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                {t.education.formation}
              </p>
              <ul className="mt-6 space-y-4">
                {education.map((item) => {
                  const degree = t.education.degrees[item.id];
                  return (
                    <li
                      key={item.id}
                      className="rounded-[var(--radius-lg)] border border-mist/10 bg-paper p-5 shadow-sm md:p-6"
                    >
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-mist-muted">
                        {item.period}
                      </p>
                      <h3 className="mt-3 font-display text-xl text-mist md:text-2xl">
                        {degree.title}
                      </h3>
                      <p className="mt-2 text-sm text-signal">{degree.detail}</p>
                      <p className="mt-2 text-sm text-mist-muted">{item.school}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <div className="space-y-10">
            <Reveal delay={0.08}>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                  {t.education.certCompleted}
                </p>
                <ul className="mt-6 space-y-4">
                  {certifications.completed.map((cert) => (
                    <li
                      key={cert.id}
                      className="flex items-start justify-between gap-4 rounded-[var(--radius)] border border-mist/10 bg-paper px-5 py-4 shadow-sm transition-colors hover:border-signal/30"
                    >
                      <div>
                        <h3 className="font-display text-lg text-mist">{cert.title}</h3>
                        <p className="mt-1 text-sm text-mist-muted">{cert.issuer}</p>
                      </div>
                      <span className="mt-1 shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-leaf">
                        {t.education.obtained}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                  {t.education.certInProgress}
                </p>
                <ul className="mt-6 space-y-4">
                  {certifications.inProgress.map((cert) => (
                    <li
                      key={cert.id}
                      className="flex items-start justify-between gap-4 border-b border-dashed border-mist/15 py-4"
                    >
                      <div>
                        <h3 className="font-display text-lg text-mist">{cert.title}</h3>
                        <p className="mt-1 text-sm text-mist-muted">{t.education.inProgress}</p>
                      </div>
                      <span className="mt-1 shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
                        {t.education.inProgress}
                      </span>
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
