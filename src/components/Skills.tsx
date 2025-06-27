import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';

interface SkillBarProps {
  skill: string;
  value: string;
}

const SkillBar = ({ skill, value }: SkillBarProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [width, setWidth] = useState('0%');

  useEffect(() => {
    if (inView) {
      setWidth(value);
    }
  }, [inView, value]);

  return (
    <div className="progress mb-4" ref={ref}>
      <span className="skill block font-semibold uppercase mb-2">
        {skill} <i className="val float-right font-normal">{value}</i>
      </span>
      <div className="progress-bar-wrap bg-gray-200 h-2.5 rounded-sm">
        <div
          className="progress-bar bg-custom-blue h-full rounded-sm"
          style={{ width: width, transition: 'width 0.9s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    { name: 'JavaScript / TypeScript', value: '85%' },
    { name: 'React / Next.js / Remix', value: '80%' },
    { name: 'Node.js', value: '85%' },
    { name: 'Java / Springboot', value: '80%' },
    { name: 'Python', value: '65%' },
    { name: 'SQL / MongoDB', value: '85%' },
    { name: 'Shopify (Hydrogen, Liquid)', value: '90%' },
    { name: 'Vue.js / Angular', value: '70%' },
    { name: 'Azure DevOps', value: '65%' },
    { name: 'Figma', value: '85%' },
  ];

  const half = Math.ceil(skillsData.length / 2);
  const firstHalf = skillsData.slice(0, half);
  const secondHalf = skillsData.slice(half);

  return (
    <section id="skills" className="skills py-16">
      <div className="container mx-auto px-4">
        <SectionTitle>Skills</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-8">
          <div>
            {firstHalf.map((skill) => (
              <SkillBar
                key={skill.name}
                skill={skill.name}
                value={skill.value}
              />
            ))}
          </div>
          <div>
            {secondHalf.map((skill) => (
              <SkillBar
                key={skill.name}
                skill={skill.name}
                value={skill.value}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
