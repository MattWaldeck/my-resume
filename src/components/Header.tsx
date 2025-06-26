import { useState } from 'react';
import { Link } from 'react-scroll';
import {
  BsHouse,
  BsPerson,
  BsPen,
  BsFileEarmarkText,
  BsServer,
  BsEnvelope,
} from 'react-icons/bs';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { to: 'hero', icon: <BsHouse />, text: 'Home' },
  { to: 'about', icon: <BsPerson />, text: 'About' },
  { to: 'skills', icon: <BsPen />, text: 'Skills' },
  { to: 'resume', icon: <BsFileEarmarkText />, text: 'Resume' },
  { to: 'services', icon: <BsServer />, text: 'Services' },
  { to: 'contact', icon: <BsEnvelope />, text: 'Contact' },
];

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="fixed right-4 top-4 z-[9999] lg:hidden bg-custom-blue text-white p-2 rounded-full"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      <header
        id="header"
        className={`fixed top-0 bottom-0 z-[9997] transition-all duration-500 p-4 bg-white border-r border-gray-200 
                   ${
                     isMobileMenuOpen ? 'left-0 w-[90px]' : '-left-[300px]'
                   } lg:left-0 lg:w-[100px]`}
      >
        <nav id="navbar" className="h-full">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  activeClass="active"
                  className="group relative flex items-center p-3 mb-2 cursor-pointer"
                  onClick={() => isMobileMenuOpen && setMobileMenuOpen(false)}
                >
                  <div
                    className="icon-circle flex items-center justify-center text-custom-dark-gray bg-[#f2f3f5] h-14 w-14 rounded-full transition-all duration-300
                               group-[.active]:bg-custom-blue group-[.active]:text-white
                               group-hover:bg-custom-blue group-hover:text-white"
                  >
                    <i className="text-xl">{link.icon}</i>
                  </div>
                  <span
                    className="absolute left-full ml-4 px-3 py-1.5 bg-custom-blue text-white rounded-md text-sm whitespace-nowrap opacity-0 
                               transition-opacity duration-300 pointer-events-none 
                               lg:group-hover:opacity-100"
                  >
                    {link.text}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
