interface SectionHeadProps {
  title: React.ReactNode;
  children?: React.ReactNode;
}

// Two-column section intro: big title on the left, supporting copy on the right.
const SectionHead = ({ title, children }: SectionHeadProps) => (
  <div className="reveal grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end">
    <h2 className="h-section">{title}</h2>
    {children && <p className="max-w-md leading-relaxed text-muted md:justify-self-end">{children}</p>}
  </div>
);

export default SectionHead;
