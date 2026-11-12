import {
  Braces,
  Boxes,
  Code2,
  Database,
  GitBranch,
  Layers,
  Network,
  Terminal,
  Workflow,
} from 'lucide-react';
import { skillCategories } from '../../data';
import { useLanguage } from '../../i18n/LanguageContext';
import Reveal from '../animations/Reveal';
import SectionHeading from '../ui/SectionHeading';

const icons = {
  languages: Code2,
  frameworks: Layers,
  api: Network,
  databases: Database,
  tools: Terminal,
  methods: Workflow,
};

const techGlyphs = {
  Python: Terminal,
  JavaScript: Braces,
  PHP: Code2,
  Django: Layers,
  Flask: Layers,
  React: Boxes,
  'Node.js': Boxes,
  'REST API': Network,
  MySQL: Database,
  PostgreSQL: Database,
  MongoDB: Database,
  Docker: Boxes,
  Git: GitBranch,
  'Visual Studio Code': Terminal,
  Eclipse: Terminal,
  Agile: Workflow,
  Scrum: Workflow,
  Kanban: Workflow,
  'Unit Testing': Workflow,
  'Integration Testing': Workflow,
};

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="competences" className="section-pad relative">
      <div className="site-container">
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          description={t.skills.description}
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {skillCategories.map((category, catIndex) => {
            const Icon = icons[category.id] || Code2;
            return (
              <Reveal key={category.id} delay={0.04 * catIndex}>
                <div className="h-full rounded-[var(--radius-lg)] border border-mist/10 bg-paper p-6 shadow-sm md:p-7">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-signal/10 text-signal">
                      <Icon size={16} />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist-muted">
                        {t.skills.categoryLabel}
                      </p>
                      <h3 className="mt-1 font-display text-xl text-mist">
                        {t.skills.categories[category.id]}
                      </h3>
                    </div>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-2.5">
                    {category.items.map((item) => {
                      const Glyph = techGlyphs[item] || Code2;
                      return (
                        <li key={item}>
                          <span
                            data-cursor="hover"
                            className="chip group inline-flex items-center gap-2 border border-mist/10 bg-ink px-3.5 py-2 text-sm text-mist transition-all duration-300 hover:border-signal/50 hover:text-signal"
                          >
                            <Glyph
                              size={13}
                              className="text-mist-muted transition-colors group-hover:text-signal"
                            />
                            {item}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
