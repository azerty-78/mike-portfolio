import Reveal from '../animations/Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const alignment =
    align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <div className={`mb-12 md:mb-16 flex flex-col max-w-3xl ${alignment} ${className}`}>
      {eyebrow ? (
        <Reveal>
          <p className="eyebrow mb-4">{eyebrow}</p>
        </Reveal>
      ) : null}
      <Reveal delay={0.08}>
        <h2 className="section-title text-balance">{title}</h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.14}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-muted md:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
