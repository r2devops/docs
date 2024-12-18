import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import r2doc from '@site/static/img/r2_doc.png';
import r2blog from '@site/static/img/r2_blog.png';
import { useHistory, useLocation } from '@docusaurus/router';

type FeatureItem = {
  title: string;
  img: string;
  href: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Documentation',
    img: r2doc,
    href: 'docs',
  },
  {
    title: 'Blog',
    img: r2blog,
    href: 'blog',
  },
];

function Feature({ title, img, href }: FeatureItem) {
  const history = useHistory();
  const handleClick = () => {
    history.push(href);
  };
  return (
    <button
      onClick={handleClick}
      className={clsx('col col--4 inner-shadow-hover')}
      style={{
        borderRadius: '10px',
        cursor: 'pointer',
        border: 'none',
        padding: '4px',
        background:
          'linear-gradient(to right, rgb(151, 71, 255), #007c93, #00b1d2 )',
      }}
    >
      <div className="home-card">
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
