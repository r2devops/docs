import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import r2doc from '@site/static/img/r2_doc.png';
import r2blog from '@site/static/img/r2_blog.png';
import { useHistory, useLocation } from '@docusaurus/router';
import { useColorMode } from '@docusaurus/theme-common';

type FeatureItem = {
  title: string;
  img: string;
  href: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'R2Devops Documentation',
    img: r2doc,
    href: 'docs/intro',
    description: (
      <>
        Discover advanced CI/CD strategies with our R2Devops guides. Unlock
        powerful features like the analysis dashboard, pipeline editor, and
        CI/CD templates marketplace to streamline DevOps and boost security and
        maintainability
      </>
    ),
  },
  {
    title: 'R2Devops Blog',
    img: r2blog,
    href: 'blog/',
    description: (
      <>
        Your go-to resource for CI/CD, DevOps, maintainability, and security.
        Access expert articles and tutorials to optimize your pipeline, use
        advanced tools, and stay ahead in software development. Perfect for
        beginners and pros alike
      </>
    ),
  },
];

function Feature({ title, img, href, description }: FeatureItem) {
  const history = useHistory();
  const handleClick = () => {
    history.push(href);
  };
  const { colorMode, setColorMode } = useColorMode();
  return (
    <button
      onClick={handleClick}
      className={clsx('col col--4 inner-shadow-hover')}
      style={{
        color: colorMode === 'light' ? '#262626' : '#F5F5F5',
        borderRadius: '10px',
        cursor: 'pointer',
        border: 'none',
        padding: '4px',
        background:
          'linear-gradient(to right, rgb(151, 71, 255), #007c93, #00b1d2 )',
      }}
    >
      <div
        style={{
          backgroundColor: colorMode === 'light' ? '#F5F5F5' : '#262626',
          paddingTop: '20px',
          paddingBottom: '20px',
          borderRadius: '10px',
          height: '100%',
        }}
      >
        <div className="text--center">
          <Heading as="h2" style={{}}>
            {title}
          </Heading>

          <img
            style={{
              maxWidth: '750px',
              marginTop: '-40px',
              marginBottom: '15px',
            }}
            className={styles.featureSvg}
            src={img}
          />
        </div>
        <div className="text--center padding-horiz--lg">
          <p style={{ margin: 0 }}>{description}</p>
        </div>
      </div>
    </button>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div
          className="row"
          style={{
            justifyContent: 'center',
            gap: '3rem',
            marginLeft: '10px',
            marginRight: '10px',
          }}
        >
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
