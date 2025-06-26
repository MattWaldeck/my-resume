import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-gray-100 py-8 text-center text-[#45505b] lg:ml-[100px]"
    >
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold font-raleway">Matthew Waldeck</h3>
        <p className="italic my-4">
          Ready to leverage my experience and creativity to make a positive
          impact in the world of technology.
        </p>
        <div className="social-links flex justify-center space-x-4 my-8">
          <a
            href="https://www.linkedin.com/in/matthew-waldeck-a77884255/"
            className="text-2xl bg-[#0563bb] text-white w-9 h-9 inline-flex items-center justify-center rounded-full transition-colors hover:bg-[#0678e3]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/MattWaldeck"
            className="text-2xl bg-[#0563bb] text-white w-9 h-9 inline-flex items-center justify-center rounded-full transition-colors hover:bg-[#0678e3]"
          >
            <FaGithub />
          </a>
        </div>
        <div className="copyright">
          &copy; Copyright{' '}
          <strong>
            <span>MyResume</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
