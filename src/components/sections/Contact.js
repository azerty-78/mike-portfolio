import { useState } from 'react';
import { ArrowUpRight, Download, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../../data';
import { useLanguage } from '../../i18n/LanguageContext';
import Reveal from '../animations/Reveal';
import Button from '../ui/Button';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function validate(form, errorsCopy) {
  const errors = {};
  if (!form.name.trim()) errors.name = errorsCopy.name;
  if (!form.email.trim()) {
    errors.email = errorsCopy.emailRequired;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = errorsCopy.emailInvalid;
  }
  if (!form.subject.trim()) errors.subject = errorsCopy.subject;
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = errorsCopy.message;
  }
  return errors;
}

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(form, t.contact.errors);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    const body = [
      `${t.contact.mailNameLabel}: ${form.name}`,
      `${t.contact.mailEmailLabel}: ${form.email}`,
      '',
      form.message,
    ].join('\n');
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus('success');
  };

  const fieldClass =
    'w-full rounded-[var(--radius)] border border-mist/10 bg-transparent px-4 py-3 text-sm text-mist outline-none transition-colors placeholder:text-mist-muted/60 focus:border-signal';

  return (
    <section id="contact" className="section-pad relative">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">{t.contact.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display text-display-lg text-mist text-balance">
                {t.contact.titleLine1}
                <span className="mt-2 block text-signal">{t.contact.titleLine2}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-mist-muted md:text-lg">
                {t.contact.text}
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <ul className="mt-10 space-y-5">
                <li>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="group inline-flex items-center gap-3 text-mist transition-colors hover:text-signal"
                  >
                    <Mail size={16} className="text-signal" />
                    {personalInfo.email}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.phoneHref}
                    className="group inline-flex items-center gap-3 text-mist transition-colors hover:text-signal"
                  >
                    <Phone size={16} className="text-signal" />
                    {personalInfo.phone}
                  </a>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.18}>
              <Button
                href={personalInfo.cvUrl}
                download={personalInfo.cvFileName}
                className="mt-8"
              >
                {t.contact.downloadCv}
                <Download size={16} />
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-[var(--radius-lg)] border border-mist/10 bg-paper p-6 shadow-sm md:p-8"
              noValidate
            >
              <div className="grid gap-5">
                <label className="block">
                  <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-mist-muted">
                    {t.contact.name}
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    className={fieldClass}
                    placeholder={t.contact.namePlaceholder}
                    autoComplete="name"
                  />
                  {errors.name ? (
                    <span className="mt-2 block text-xs text-ember">{errors.name}</span>
                  ) : null}
                </label>

                <label className="block">
                  <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-mist-muted">
                    {t.contact.email}
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    className={fieldClass}
                    placeholder={t.contact.emailPlaceholder}
                    autoComplete="email"
                  />
                  {errors.email ? (
                    <span className="mt-2 block text-xs text-ember">{errors.email}</span>
                  ) : null}
                </label>

                <label className="block">
                  <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-mist-muted">
                    {t.contact.subject}
                  </span>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    className={fieldClass}
                    placeholder={t.contact.subjectPlaceholder}
                  />
                  {errors.subject ? (
                    <span className="mt-2 block text-xs text-ember">{errors.subject}</span>
                  ) : null}
                </label>

                <label className="block">
                  <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-mist-muted">
                    {t.contact.message}
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                    className={`${fieldClass} resize-y`}
                    placeholder={t.contact.messagePlaceholder}
                  />
                  {errors.message ? (
                    <span className="mt-2 block text-xs text-ember">{errors.message}</span>
                  ) : null}
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" disabled={status === 'loading'} className="w-full sm:w-auto">
                  {status === 'loading' ? t.contact.sending : t.contact.send}
                  <ArrowUpRight size={16} />
                </Button>
                <p className="text-xs text-mist-muted">{t.contact.mailtoHint}</p>
              </div>

              {status === 'success' ? (
                <p className="mt-4 rounded-[var(--radius)] border border-signal/30 bg-signal/10 px-4 py-3 text-sm text-signal">
                  {t.contact.success}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
