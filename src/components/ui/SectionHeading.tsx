import React from 'react';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  description,
  align = 'left',
  className = '',
}) => {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  const descAlign = align === 'center' ? 'mx-auto' : '';

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
      {description && (
        <p className={`section-desc ${descAlign}`}>
          {description}
        </p>
      )}
    </div>
  );
};
