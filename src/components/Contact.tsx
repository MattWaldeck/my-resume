import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FiBriefcase, FiCopy, FiGlobe, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { availability, profile } from '../data';
import { copyText } from '../lib/ui';
import HoverLetters from './HoverLetters';
import Magnetic from './Magnetic';

const connectors = [
  { label: 'Email', href: `mailto:${profile.email}`, icon: FiMail, tint: 'text-[#d9534f]' },
  { label: 'WhatsApp', href: profile.whatsapp, icon: FaWhatsapp, tint: 'text-[#25d366]' },
  { label: 'LinkedIn', href: profile.linkedin, icon: FaLinkedin, tint: 'text-[#0a66c2]' },
  { label: 'GitHub', href: profile.github, icon: FaGithub, tint: 'text-term' },
];

const Contact = () => {
  return (
    <section id="contact" className="relative scroll-mt-16 overflow-hidden bg-night py-24 text-night-fg sm:py-32">
      <div className="grid-bg-night pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />

      <div className="wrap relative grid gap-14 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="wipe font-display text-6xl font-bold tracking-[-0.04em] sm:text-8xl">
            <HoverLetters text="Let's talk." />
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-night-fg/65">
            Hiring for a remote or hybrid role, or need a storefront that has to perform? I'm open to permanent,
            part-time and contract work. Send me a message.
          </p>

          <p className="mt-8 text-lg font-semibold">{profile.email}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Magnetic>
              <a href={`mailto:${profile.email}`} className="btn-accent">
                <FiMail /> Email me
              </a>
            </Magnetic>
            <button
              type="button"
              onClick={() => copyText(profile.email, 'Email copied')}
              className="btn border-2 border-night-fg/80 text-night-fg hover:bg-night-fg hover:text-night"
            >
              <FiCopy /> Copy email
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4">
            {connectors.map(({ label, href, icon: Icon, tint }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-sm font-medium"
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-night-fg text-base transition-transform group-hover:-translate-y-0.5 ${tint}`}
                >
                  <Icon />
                </span>
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-px self-end bg-white/10">
          {[
            { icon: FiMapPin, label: 'Based in', value: profile.location },
            { icon: FiPhone, label: 'Call', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
            { icon: FiBriefcase, label: 'Currently', value: profile.current },
            { icon: FiGlobe, label: 'Languages', value: profile.languages },
          ].map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-4 bg-night p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 text-white/60">
                <Icon />
              </span>
              <div>
                <p className="text-xs font-medium text-night-fg/50">{label}</p>
                {href ? (
                  <a href={href} className="mt-1 block hover:text-accent">
                    {value}
                  </a>
                ) : (
                  <p className="mt-1">{value}</p>
                )}
              </div>
            </div>
          ))}
          <div className="flex items-center gap-3 bg-night p-5 text-sm text-night-fg/60">
            <span className="h-2 w-2 rounded-full bg-[#4caf50] shadow-[0_0_0_4px_rgba(76,175,80,0.2)]" />
            {availability.short}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
