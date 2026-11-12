import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data';
import { useLanguage } from '../../i18n/LanguageContext';
import Reveal from '../animations/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { GitHubIcon } from '../ui/BrandIcons';

function ProjectVisual({ project, t }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${t.projects.projectLabel} ${project.number}`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.03]"
      />
    );
  }

  return (
    <div className="relative flex h-full min-h-[240px] flex-col justify-between overflow-hidden rounded-[var(--radius-lg)] bg-paper p-6 shadow-sm md:min-h-[320px] md:p-8">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute -right-10 top-10 h-40 w-40 rounded-full border border-signal/25"
        aria-hidden
      />
      <div className="relative z-10 flex items-start justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-mist-muted">
          {t.projects.previewSlot}
        </span>
        <span className="font-mono text-xs text-signal">{project.number}</span>
      </div>
      <div className="relative z-10">
        <p className="font-display text-4xl tracking-tight text-mist/20 md:text-6xl">
          {project.number}
        </p>
        <p className="mt-3 max-w-xs text-sm text-mist-muted">{t.projects.previewHint}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projets" className="section-pad relative bg-ink-50">
      <div className="site-container">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => {
            const content = t.projects.items[project.id];
            const reverse = index % 2 === 1;
            return (
              <Reveal key={project.id} delay={0.04 * index}>
                <article
                  className={`group grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12 ${
                    reverse ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="overflow-hidden rounded-[var(--radius-lg)] border border-mist/10">
                    <ProjectVisual project={project} t={t} />
                  </div>

                  <div className="flex flex-col justify-center border-t border-mist/10 pt-6 lg:border-t-0 lg:pt-0">
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
                      {t.projects.projectLabel} {project.number}
                    </p>
                    <h3 className="mt-4 font-display text-display-md text-mist">{content.title}</h3>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-mist-muted">
                      {content.description}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="chip border border-mist/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-mist-soft"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap items-center gap-4 opacity-100 transition-opacity duration-300 lg:opacity-70 lg:group-hover:opacity-100">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-mist transition-colors hover:text-signal"
                        >
                          {t.projects.viewProject}
                          <ArrowUpRight size={14} />
                        </a>
                      ) : (
                        <span className="font-mono text-xs uppercase tracking-[0.16em] text-mist-muted">
                          {t.projects.linkSoon}
                        </span>
                      )}

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-mist-muted transition-colors hover:text-signal"
                          aria-label={`GitHub — ${content.title}`}
                        >
                          <GitHubIcon size={14} />
                          {t.projects.code}
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
