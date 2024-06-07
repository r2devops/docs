import Link from '@docusaurus/Link';
import styles from '../../pages/index.module.css';
import { CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

interface Props {
  licenses: number[];
  selfManagedOnly: boolean;
}

export default function ReleaseLabels({
  licenses,
  selfManagedOnly,
}: Props): JSX.Element {
  const licensesList = ['Free', 'Small Business', 'Enterprise'];
  const installationTypes = ['SaaS', 'Self-Managed'];
  return (
    <div style={{ marginBottom: '2rem' }}>
      {installationTypes.map((installType) => (
        <div key={installType}>
          <h4>{installType}</h4>
          <div
            style={{
              display: 'flex',
              gap: '0.2rem',
              marginTop: '-0.5rem',
              marginBottom: '0.6rem',
            }}
          >
            {licensesList.map((licence, index) => (
              <div
                key={licence}
                className={clsx(
                  'release-label ',
                  licenses.includes(index)
                    ? installType === 'SaaS' && selfManagedOnly
                      ? ''
                      : 'release-label-activated'
                    : '',
                )}
                style={{
                  color: licenses.includes(index)
                    ? installType === 'SaaS' && selfManagedOnly
                      ? undefined
                      : '#F5F5F5'
                    : undefined,
                }}
              >
                {licenses.includes(index) ? (
                  installType === 'SaaS' && selfManagedOnly ? (
                    <FontAwesomeIcon icon={faX} size="sm" />
                  ) : (
                    <FontAwesomeIcon icon={faCheck} size="sm" />
                  )
                ) : (
                  <FontAwesomeIcon icon={faX} size="sm" />
                )}
                <span style={{ marginLeft: '0.3rem' }}>{licence}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
