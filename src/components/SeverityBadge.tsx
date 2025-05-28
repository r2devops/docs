import React from 'react';
import styles from './SeverityBadge.module.css';
import TooltipControl from './TooltipControl/TooltipControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faExclamationCircle, faInfoCircle, faCheckCircle, faBug } from '@fortawesome/free-solid-svg-icons';

const severityConfig = {
  Critical: {
    colorClass: styles.critical,
    icon: faExclamationTriangle,
    label: 'Critical',
    description: 'Severe impact requiring immediate attention',
  },
  High: {
    colorClass: styles.high,
    icon: faExclamationCircle,
    label: 'High',
    description: 'Significant impact requiring prompt attention',
  },
  Medium: {
    colorClass: styles.medium,
    icon: faInfoCircle,
    label: 'Medium',
    description: 'Moderate impact requiring attention',
  },
  Low: {
    colorClass: styles.low,
    icon: faCheckCircle,
    label: 'Low',
    description: 'Minor impact with low urgency',
  },
  Info: {
    colorClass: styles.info,
    icon: faBug,
    label: 'Info',
    description: 'Informational issue with minimal impact',
  },
};

export default function SeverityBadge({ severity }: { severity: keyof typeof severityConfig }) {
  const config = severityConfig[severity] || severityConfig.Info;
  return (
    <TooltipControl title={config.description}>
      <span className={`${styles.badge} ${config.colorClass}`}> 
        <FontAwesomeIcon icon={config.icon} style={{ marginRight: 4 }} />
        {config.label}
      </span>
    </TooltipControl>
  );
} 