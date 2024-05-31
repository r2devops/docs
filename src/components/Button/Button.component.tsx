import Link from '@docusaurus/Link';
import styles from '../../pages/index.module.css';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  type?: 'primary' | 'secondary' | 'outline';
}

export default function Button({
  href,
  children,
  type = 'primary',
}: ButtonProps): JSX.Element {
  return (
    <div className={styles.button}>
      <Link className={`button button--${type} button--lg`} to={href}>
        {children}
      </Link>
    </div>
  );
}
