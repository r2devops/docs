import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

interface TooltipControlProps {
  title: string;
  children: React.ReactNode;
}

export default function TooltipControl({ title, children }: TooltipControlProps): JSX.Element {
  return (
    <Tippy
      content={title}
      theme="light"
      placement="top"
      delay={[0, 0]} // [show, hide] delay in ms
      arrow={true}
    >
      <span 
        style={{ 
          cursor: 'help',
          transition: 'opacity 0.2s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.75'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
      >
        {children}
      </span>
    </Tippy>
  );
} 