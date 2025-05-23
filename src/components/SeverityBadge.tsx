import React from 'react';
import styles from './SeverityBadge.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faExclamationCircle, faInfoCircle, faCheckCircle, faBug } from '@fortawesome/free-solid-svg-icons';

const severityConfig = {
  Critical: {
    colorClass: styles.critical,
    icon: faExclamationTriangle,
    label: 'Critical',
  },
  High: {
    colorClass: styles.high,
    icon: faExclamationCircle,
    label: 'High',
  },
  Medium: {
    colorClass: styles.medium,
    icon: faInfoCircle,
    label: 'Medium',
  },
  Low: {
    colorClass: styles.low,
    icon: faCheckCircle,
    label: 'Low',
  },
  Info: {
    colorClass: styles.info,
    icon: faBug,
    label: 'Info',
  },
};

export default function SeverityBadge({ severity }: { severity: keyof typeof severityConfig }) {
  const config = severityConfig[severity] || severityConfig.Info;
  return (
    <span className={`${styles.badge} ${config.colorClass}`}> 
      <FontAwesomeIcon icon={config.icon} style={{ marginRight: 4 }} />
      {config.label}
    </span>
  );
} 