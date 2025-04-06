
import React from 'react';
import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  const titleRef = useAnimateOnScroll<HTMLDivElement>();
  
  return (
    <div
      ref={titleRef}
      className={`mb-12 ${
        align === 'center' ? 'text-center mx-auto' : 
        align === 'right' ? 'text-right ml-auto' : ''
      } ${className}`}
      style={{ maxWidth: align === 'center' ? '800px' : 'none' }}
    >
      {subtitle && (
        <p className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">
          {subtitle}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
