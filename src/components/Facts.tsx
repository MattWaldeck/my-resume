import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { BsJournalRichtext, BsAward, BsReceipt } from 'react-icons/bs';
import { BiHeadphone } from 'react-icons/bi';
import SectionTitle from './SectionTitle';

interface FactItemProps {
  icon: React.ReactNode;
  end: number;
  duration: number;
  text: string;
}

const FactItem = ({ icon, end, duration, text }: FactItemProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="text-center p-6">
      <div className="flex justify-center items-center mb-4">
        <i className="text-5xl text-custom-blue">{icon}</i>
      </div>
      <span className="text-4xl font-bold block">
        {inView ? <CountUp end={end} duration={duration} /> : 0}
      </span>
      <p className="mt-2 text-sm text-gray-600">{text}</p>
    </div>
  );
};

const Facts = () => {
  return (
    <section id="facts" className="facts py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle>Facts</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          <FactItem
            icon={<BsJournalRichtext />}
            end={17}
            duration={2}
            text="Projects"
          />

          <FactItem icon={<BsAward />} end={2} duration={2} text="Awards" />

          <FactItem
            icon={<BsReceipt />}
            end={7}
            duration={2}
            text="Certifications"
          />
        </div>
      </div>
    </section>
  );
};

export default Facts;
