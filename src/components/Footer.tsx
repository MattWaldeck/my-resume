import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { navLinks, profile } from '../data';
import HoverLetters from './HoverLetters';

const Footer = () => {
  return (
    <footer className="bg-paper pb-24 pt-16 md:pb-12">
      <div className="wrap">
        <p className="wipe font-display text-[15vw] font-bold leading-[0.9] tracking-tighter sm:text-[12vw] lg:text-[150px]">
          <HoverLetters text={profile.name} />
        </p>

        <div className="mt-12 grid gap-10 border-t border-line pt-10 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-semibold">Full-stack developer · {profile.city}</p>
            <p className="mt-2 max-w-[240px] leading-relaxed text-muted">{profile.current}. Open to remote & hybrid roles: permanent, part-time or contract.</p>
          </div>

          <div>
            <p className="font-semibold">Sections</p>
            <ul className="mt-3 space-y-2 text-muted">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="hover:text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold">Elsewhere</p>
            <ul className="mt-3 space-y-2 text-muted">
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ink">
                  <FaLinkedin className="text-[#0a66c2]" /> LinkedIn
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ink">
                  <FaGithub /> GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">Contact</p>
            <ul className="mt-3 space-y-2 text-muted">
              <li>
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-ink">
                  <FiMail className="text-[#d9534f]" /> Email
                </a>
              </li>
              <li>
                <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ink">
                  <FaWhatsapp className="text-[#25d366]" /> WhatsApp
                </a>
              </li>
              <li>
                <a href={profile.cv} download="CV_Matthew_Waldeck.pdf" className="hover:text-ink">
                  Resume
                </a>
              </li>
              <li>
                <a href="#top" className="hover:text-ink">
                  Back to top ↑
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-xs text-muted">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
};

export default Footer;
