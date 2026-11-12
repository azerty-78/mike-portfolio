import {
  Braces,
  Boxes,
  Code2,
  Database,
  GitBranch,
  Layers,
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
  databases: Database,
  tools: Terminal,
  methods: Workflow,
};

const techGlyphs = {
  C: Braces,
  JavaScript: Braces,
  PHP: Code2,
  Python: Terminal,
  React: Boxes,
  'Node.js': Boxes,
  Django: Layers,
  Flask: Layers,
  MySQL: Database,
  PostgreSQL: Database,
  MongoDB: Database,
  Git: GitBranch,
  Docker: Boxes,
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
    <section id="competences" className="section-pad relative bg-ink-50">
      <div className="site-container">
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          description={t.skills.description}
        />

        <div className="space-y-10 md:space-y-14">
          {skillCategories.map((category, catIndex) => {
            const Icon = icons[category.id] || Code2;
            return (
              <Reveal key={category.id} delay={0.04 * catIndex}>
                <div className="grid gap-6 border-t border-mist/10 pt-8 lg:grid-cols-[240px_1fr]">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-signal">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist-muted">
                        {t.skills.categoryLabel}
                      </p>
                      <h3 className="mt-2 font-display text-xl text-mist md:text-2xl">
                        {t.skills.categories[category.id]}
                      </h3>
                    </div>
                  </div>

                  <ul className="flex flex-wrap gap-3">
                    {category.items.map((item) => {
                      const Glyph = techGlyphs[item] || Code2;
                      return (
                        <li key={item}>
                          <span
                            data-cursor="hover"
                            className="chip group inline-flex items-center gap-2 border border-mist/10 bg-paper px-4 py-2.5 text-sm text-mist shadow-sm transition-all duration-300 hover:border-signal/50 hover:text-signal"
                          >
                            <Glyph
                              size={14}
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
