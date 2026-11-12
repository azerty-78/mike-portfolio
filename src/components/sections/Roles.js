import { Code2, Database, Layout, Layers, Plug, Workflow } from 'lucide-react';
import { roles } from '../../data';
import { useLanguage } from '../../i18n/LanguageContext';
import Reveal from '../animations/Reveal';
import SectionHeading from '../ui/SectionHeading';

const roleIcons = {
  fullstack: Layers,
  backend: Database,
  frontend: Layout,
  web: Code2,
  business: Workflow,
  api: Plug,
};

export default function Roles() {
  const { t } = useLanguage();

  return (
    <section id="postes" className="section-pad relative bg-ink-50">
      <div className="site-container">
        <SectionHeading
          eyebrow={t.roles.eyebrow}
          title={t.roles.title}
          description={t.roles.description}
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {roles.map((role, index) => {
            const content = t.roles.items[role.id];
            const Icon = roleIcons[role.id] || Code2;
            return (
              <Reveal key={role.id} delay={0.05 * index}>
                <article className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-mist/10 bg-paper p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-signal/35 hover:shadow-md">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius)] bg-signal/10 text-signal transition-colors group-hover:bg-signal group-hover:text-ink">
                    <Icon size={18} />
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist-muted">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-xl text-mist md:text-2xl">{content.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist-muted">{content.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
