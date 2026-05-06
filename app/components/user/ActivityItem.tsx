import React from 'react';
import Icon from '../ui/Icon';
import type { ActivityEntry } from '../../types';

interface ActivityItemProps {
  entry: ActivityEntry;
}

const toneFor = (kind: ActivityEntry['kind']) => {
  switch (kind) {
    case 'completed':
      return 'text-primary';
    case 'mastered':
      return 'text-secondary';
    case 'badge':
      return 'text-tertiary';
    case 'streak':
    default:
      return 'text-primary';
  }
};

const ActivityItem: React.FC<ActivityItemProps> = ({ entry }) => {
  const accent = toneFor(entry.kind);
  return (
    <div className="flex items-center gap-4 p-4 hover:bg-surface-container-low transition-colors group">
      <div
        className={`w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center ${accent}`}
      >
        <Icon name={entry.iconName} className="text-xl" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-on-surface truncate">{entry.title}</h4>
        <p className="text-xs text-on-surface-variant">
          {entry.meta}
          {entry.xp !== undefined && (
            <>
              {' '}
              • <span className="text-primary">+{entry.xp} XP</span>
            </>
          )}
          {entry.highlight && (
            <>
              {' '}
              • <span className={accent}>{entry.highlight}</span>
            </>
          )}
        </p>
      </div>
      <Icon
        name="chevron_right"
        className="text-surface-container-highest group-hover:text-on-surface-variant transition-colors"
      />
    </div>
  );
};

export default ActivityItem;
