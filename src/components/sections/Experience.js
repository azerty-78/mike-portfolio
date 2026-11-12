import { experiences } from '../../data';
import { useLanguage } from '../../i18n/LanguageContext';
import Reveal from '../animations/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experiences" className="section-pad relative">
      <div className="site-container">
        <SectionHeading
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          description={t.experience.description}
        />

        <div className="relative">
          <div
            className="absolute bottom-0 left-[11px] top-3 w-px bg-gradient-to-b from-signal via-mist/15 to-transparent md:left-[15px]"
            aria-hidden
          />

          <ol className="space-y-10 md:space-y-14">
            {experiences.map((job, index) => {
              const content = t.experience.jobs[job.id];
              return (
                <Reveal key={job.id} delay={0.05 * index} as="li">
                  <article className="grid gap-6 md:grid-cols-[32px_1fr] md:gap-8">
                    <div className="relative z-10 flex justify-start pt-1.5">
                      <span
                        className={`mt-1 h-3 w-3 rounded-full border ${
                          job.status === 'current'
                            ? 'border-signal bg-signal shadow-[0_0_0_4px_rgba(122,31,43,0.18)]'
                            : 'border-mist/30 bg-paper'
                        }`}
                      />
                    </div>

                    <div className="border-b border-mist/10 pb-10 md:grid md:grid-cols-[1fr_1.2fr] md:gap-10 md:pb-14">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist-muted">
                          {content.period}
                          {job.status === 'current' ? (
                            <span className="ml-3 text-signal">{t.experience.current}</span>
                          ) : null}
                        </p>
                        <h3 className="mt-3 font-display text-2xl text-mist md:text-3xl">
                          {content.role}
                        </h3>
                        <p className="mt-2 text-sm text-mist-muted md:text-base">{job.company}</p>
                      </div>

                      <ul className="mt-4 space-y-3 md:mt-0">
                        {content.responsibilities.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm leading-relaxed text-mist-soft md:text-base"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 bg-signal" aria-hidden />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
