import React from 'react';
import styles from './FixDurationBadge.module.css';
import TooltipControl from './TooltipControl/TooltipControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faClock, faHourglassHalf, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const durationConfig = {
  Quick: {
    colorClass: styles.quick,
    icon: faBolt,
    label: 'Quick',
    description: 'Less than 1 hour to fix',
  },
  Medium: {
    colorClass: styles.medium,
    icon: faClock,
    label: 'Medium',
    description: '1-4 hours to fix',
  },
  Long: {
    colorClass: styles.long,
    icon: faHourglassHalf,
    label: 'Long',
    description: '1-2 days to fix',
  },
  Extended: {
    colorClass: styles.extended,
    icon: faCalendarAlt,
    label: 'Extended',
    description: 'More than 2 days to fix',
  },
};

export default function FixDurationBadge({ duration, info }: { duration: keyof typeof durationConfig, info: string }) {
  const config = durationConfig[duration] || durationConfig.Quick;
  const tooltipText = `${config.description} (${info})`;
  return (
    <TooltipControl title={tooltipText}>
      <span className={`${styles.badge} ${config.colorClass}`}>
        <FontAwesomeIcon icon={config.icon} style={{ marginRight: 4 }} />
        {config.label}
      </span>
    </TooltipControl>
  );
} 