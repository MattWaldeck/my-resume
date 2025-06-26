import { BiChevronRight } from 'react-icons/bi';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section id="about" className="about py-16">
      <div className="container mx-auto px-4">
        <SectionTitle>About</SectionTitle>

        <p className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          Full-stack focused BSc Information Technology graduate with strong
          proficiency in modern front-end and back-end frameworks, cloud
          platforms and database systems. Passionate about solving real-world
          problems through clean code, intuitive interfaces, and cloud-enabled
          architecture.
        </p>

        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="lg:col-span-1 flex justify-center">
            <img
              src="/assets/img/ProfilePic2.jpg"
              className="w-full h-auto max-w-sm rounded-lg shadow-lg"
              alt="Matthew Waldeck"
            />
          </div>
          <div className="lg:col-span-2 content">
            <h3 className="text-2xl font-bold text-custom-slate">
              Full-Stack Developer & Software Engineer.
            </h3>

            <p className="italic mt-4">
              Experienced in building scalable, user-centric web and mobile
              applications. Eager to contribute to innovative, growth-driven
              development teams.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <BiChevronRight className="text-custom-blue text-xl" />{' '}
                    <strong>Birthday:</strong> <span>29 April 1999</span>
                  </li>
                  <li className="flex items-center">
                    <BiChevronRight className="text-custom-blue text-xl" />{' '}
                    <strong>Phone:</strong> <span>0789213169</span>
                  </li>
                  <li className="flex items-center">
                    <BiChevronRight className="text-custom-blue text-xl" />{' '}
                    <strong>City:</strong> <span>Cape Town, South Africa</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <BiChevronRight className="text-custom-blue text-xl" />{' '}
                    <strong>Age:</strong> <span>26</span>
                  </li>
                  <li className="flex items-center">
                    <BiChevronRight className="text-custom-blue text-xl" />{' '}
                    <strong>Degree:</strong> <span>BSc IT</span>
                  </li>
                  <li className="flex items-center">
                    <BiChevronRight className="text-custom-blue text-xl" />{' '}
                    <strong>Email:</strong> <span>Waldeck.mk@gmail.com</span>
                  </li>
                  <li className="flex items-center">
                    <BiChevronRight className="text-custom-blue text-xl" />{' '}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
