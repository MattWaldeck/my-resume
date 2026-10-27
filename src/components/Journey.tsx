import { FiDownload } from 'react-icons/fi';
import { certifications, journey, profile } from '../data';

const Journey = () => {
  return (
    <section id="journey" className="scroll-mt-16 border-t border-line bg-card py-24 sm:py-32">
      <div className="wrap grid gap-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div>
            <h2 className="h-section">How I got here</h2>
            <p className="mt-5 max-w-lg leading-relaxed text-muted">
              A degree, a project that made the expo floor, and straight into production commerce.
            </p>
          </div>

          <div className="mt-12">
            {journey.map((step) => (
              <div
                key={step.year + step.title}
                className="reveal grid grid-cols-[72px_1fr] gap-4 border-t border-line py-8 sm:grid-cols-[110px_1fr]"
              >
                <p className="tnum font-display text-2xl font-bold text-rust">{step.year}</p>
                <div>
                  <p className="text-xs text-muted">{step.where}</p>
                  <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="lg:pt-20">
          <div className="bg-paper p-6 sm:p-8 lg:sticky lg:top-24">
            <h3 className="font-display text-xl font-bold">The paper trail</h3>

            <a
              href={profile.cv}
              download="CV_Matthew_Waldeck.pdf"
              className="group mt-5 flex items-center justify-between border-b border-line pb-5"
            >
              <span>
                <span className="block font-semibold">Resume (PDF)</span>
                <span className="text-sm text-muted">Latest version</span>
              </span>
              <FiDownload className="text-lg text-rust transition-transform group-hover:translate-y-0.5" />
            </a>

            <div className="border-b border-line py-5">
              <span className="block font-semibold">{profile.degree}</span>
              <span className="text-sm text-muted">Eduvos · 2021 – 2023</span>
            </div>

            <p className="meta mt-6">Certifications</p>
            <ul className="mt-3">
              {certifications.map((c) => (
                <li key={c} className="border-b border-line/70 py-3 text-sm last:border-0">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Journey;
