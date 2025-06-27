import {
  BiBriefcase,
  BiCard,
  BiBarChart,
  BiTachometer,
  BiLayer,
  BiArch,
} from 'react-icons/bi';
import SectionTitle from './SectionTitle';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const ServiceCard = ({ icon, title, children }: ServiceCardProps) => (
  <div className="text-center p-8 transition-all ease-in-out duration-300 bg-white shadow-lg hover:shadow-2xl rounded-lg">
    <div className="flex justify-center items-center mb-4">
      <i className="text-4xl text-[#0563bb]">{icon}</i>
    </div>
    <h4 className="font-bold text-xl my-3">{title}</h4>
    <p className="text-gray-600">{children}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="services py-16">
      <div className="container mx-auto px-4">
        <div className="section-title text-center">
          <SectionTitle>Services</SectionTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <ServiceCard icon={<BiBriefcase />} title="Web Development">
            Creating dynamic and responsive websites tailored to meet your
            specific business needs.
          </ServiceCard>
          <ServiceCard icon={<BiCard />} title="Mobile App Development">
            Turning your ideas into sleek and intuitive mobile applications for
            Android and iOS.
          </ServiceCard>
          <ServiceCard icon={<BiTachometer />} title="Backend Development">
            Building robust and scalable backend systems that power your web and
            mobile applications.
          </ServiceCard>
          <ServiceCard icon={<BiLayer />} title="Full-stack Development">
            Handling both frontend and backend aspects of application
            development from start to finish.
          </ServiceCard>
          <ServiceCard icon={<BiBarChart />} title="Database Management">
            Designing, implementing, and maintaining databases to efficiently
            store and manage your data.
          </ServiceCard>
          <ServiceCard icon={<BiArch />} title="API Integration">
            Facilitating seamless integration of third-party APIs to enhance
            functionality.
          </ServiceCard>
        </div>
      </div>
    </section>
  );
};

export default Services;
