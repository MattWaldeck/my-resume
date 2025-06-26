import { ReactTyped } from 'react-typed';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
      style={{
        backgroundImage: `url('public/assets/img/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div
        className="container relative z-10 mx-auto text-center px-4"
        data-aos="zoom-in"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Matthew Waldeck
        </h1>
        <p className="mt-4 text-xl md:text-3xl text-white">
          I'm a{' '}
          <ReactTyped
            strings={[
              'Full-Stack Developer',
              'Software Engineer',
              'Web Developer',
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop
            className="text-gray-300"
          />
        </p>
        <div className="social-links mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/matthew-waldeck-a77884255/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-lg text-white hover:text-custom-blue"
          >
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/MattWaldeck"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-lg text-white hover:text-custom-blue"
          >
            <FaGithub /> <span>GitHub</span>
          </a>
          <a
            href="mailto:waldeck.mk@gmail.com"
            className="flex items-center space-x-2 text-lg text-white hover:text-custom-blue"
          >
            <FaEnvelope /> <span>Email</span>
          </a>
          <a
            href="/assets/documents/CV%202025-%20Latest%20Update.pdf"
            download
            className="flex items-center space-x-2 text-lg text-white border border-white px-4 py-2 rounded-full hover:bg-custom-blue hover:border-custom-blue transition"
          >
            <FaDownload /> <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
