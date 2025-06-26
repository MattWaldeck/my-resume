interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <div className="text-center" data-aos="fade-up">
      <h2 className="text-3xl font-bold uppercase my-5 pb-5 relative font-raleway text-custom-dark-gray">
        {children}

        <div className="absolute block w-[120px] h-[1px] bg-custom-light-gray bottom-[1px] left-1/2 -translate-x-1/2"></div>
        <div className="absolute block w-[40px] h-[3px] bg-custom-blue bottom-0 left-1/2 -translate-x-1/2"></div>
      </h2>
    </div>
  );
};

export default SectionTitle;
