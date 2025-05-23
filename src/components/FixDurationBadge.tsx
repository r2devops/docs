import React from 'react';
import styles from './FixDurationBadge.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faClock, faHourglassHalf, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const durationConfig = {
  Quick: {
    colorClass: styles.quick,
    icon: faBolt,
    label: 'Quick',
  },
  Medium: {
    colorClass: styles.medium,
    icon: faClock,
    label: 'Medium',
  },
  Long: {
    colorClass: styles.long,
    icon: faHourglassHalf,
    label: 'Long',
  },
  Extended: {
    colorClass: styles.extended,
    icon: faCalendarAlt,
    label: 'Extended',
  },
};

export default function FixDurationBadge({ duration, info }: { duration: keyof typeof durationConfig, info: string }) {
  const config = durationConfig[duration] || durationConfig.Quick;
  return (
    <span className={`${styles.badge} ${config.colorClass}`} title={info}>
      <FontAwesomeIcon icon={config.icon} style={{ marginRight: 4 }} />
      {config.label}
    </span>
  );
} 