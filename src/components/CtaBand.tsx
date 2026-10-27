import { profile } from '../data';
import Magnetic from './Magnetic';

const CtaBand = () => (
  <section className="relative overflow-hidden bg-night py-16 text-night-fg">
    <div className="grid-bg-night pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_right,transparent,black)]" />
    <div className="wrap relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Hiring, or store feeling slow?</h2>
        <p className="mt-3 max-w-lg text-night-fg/65">
          I'm open to remote or hybrid roles, permanent, part-time or contract, and to freelance Hydrogen migrations, integrations and performance fixes.
        </p>
      </div>
      <Magnetic>
        <a href={`mailto:${profile.email}?subject=Opportunity%20for%20Matthew`} className="btn-accent shrink-0">
          Start a conversation
        </a>
      </Magnetic>
    </div>
  </section>
);

export default CtaBand;
