import type { ActivityEntry } from '../types';

export const activity: ActivityEntry[] = [
  {
    id: '1',
    kind: 'completed',
    iconName: 'check_circle',
    title: "Completed 'Advanced Piping'",
    meta: '2 hours ago',
    xp: 150,
  },
  {
    id: '2',
    kind: 'mastered',
    iconName: 'code_blocks',
    title: 'Mastered command: rsync',
    meta: 'Yesterday',
    highlight: 'Level Up',
  },
  {
    id: '3',
    kind: 'badge',
    iconName: 'military_tech',
    title: "Earned 'Pattern Seeker' badge",
    meta: '3 days ago',
    highlight: 'New badge',
  },
  {
    id: '4',
    kind: 'streak',
    iconName: 'local_fire_department',
    title: '7-day streak achieved',
    meta: 'Last week',
    xp: 200,
  },
];
