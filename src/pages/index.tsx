import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import r2devopsDashboard from '@site/static/img/r2devops_dashboard.png';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useColorMode } from '@docusaurus/theme-common';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode, setColorMode } = useColorMode();
  return (
    <header
      className={clsx(styles.heroBanner)}
      style={{
        borderBottom:
          colorMode === 'dark' ? '1px solid #242526' : '2px solid #eaecef',
      }}
    >
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ color: '#00b1d2' }}>
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        {/* <img style={{maxWidth: "750px"}} className={styles.featureSvg} src={r2devopsDashboard} /> */}
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={"docs/intro"}
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
