import Link from '@docusaurus/Link';
import styles from '../../pages/index.module.css';
import { CSSProperties } from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  type?: 'primary' | 'secondary' | 'outline';
  customStyles?: CSSProperties;
}

export default function Button({
  href,
  children,
  type = 'primary',
  customStyles,
}: ButtonProps): JSX.Element {
  return (
    <div style={customStyles} className={styles.button}>
      <Link
        style={{ width: '100%' }}
        className={`button button--${type} button--lg`}
        to={href}
      >
        {children}
      </Link>
    </div>
  );
}
