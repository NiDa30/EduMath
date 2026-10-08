import React, { useMemo } from 'react';
import katex from 'katex';

interface MathRendererProps {
  latex?: string;
  block?: boolean;
  className?: string;
}

export const MathRenderer: React.FC<MathRendererProps> = ({ 
  latex = '', 
  block = false, 
  className = '' 
}) => {
  const html = useMemo(() => {
    if (!latex) return '';
    try {
      return katex.renderToString(latex, {
        displayMode: block,
        throwOnError: false,
        strict: false
      });
    } catch (e) {
      return `<span class="text-rose-600 font-mono text-xs">[Lỗi công thức: ${latex}]</span>`;
    }
  }, [latex, block]);

  if (!latex) return null;

  return (
    <span 
      className={`katex-math-render ${block ? 'block my-2 overflow-x-auto py-1' : 'inline-block'} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
