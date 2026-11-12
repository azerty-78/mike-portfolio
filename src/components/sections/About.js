import { useLanguage } from '../../i18n/LanguageContext';
import Reveal from '../animations/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="apropos" className="section-pad relative">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} className="mb-0" />

          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-mist-soft md:text-xl md:leading-relaxed">
                {t.about.text}
              </p>
            </Reveal>

            <div className="mt-12 grid gap-3 sm:grid-cols-2">
              {t.about.highlights.map((item, index) => (
                <Reveal key={item.label} delay={0.06 * index}>
                  <article className="group h-full rounded-[var(--radius-lg)] border border-mist/10 bg-paper p-6 shadow-sm transition-colors duration-300 hover:border-signal/30 md:p-7">
                    <p className="font-mono text-[11px] tracking-[0.18em] text-signal">
                      {item.label}
                    </p>
                    <h3 className="mt-4 font-display text-xl text-mist">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist-muted">{item.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
