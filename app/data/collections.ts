import type { Collection } from '../types';

export const collections: Collection[] = [
  {
    id: 'linux-basics',
    title: 'Linux Basics',
    description: 'Foundational Linux commands every developer should know.',
    iconName: 'terminal',
    commandIds: ['ls-la', 'chmod-755', 'tail-follow', 'grep-recursive'],
  },
  {
    id: 'git-essentials',
    title: 'Git Essentials',
    description: 'Version control workflows from commit to safe force-push.',
    iconName: 'commit',
    commandIds: ['git-commit', 'git-force-with-lease'],
  },
  {
    id: 'docker-deep',
    title: 'Docker Deep Dive',
    description: 'Run, prune, and orchestrate containers like a pro.',
    iconName: 'deployed_code',
    commandIds: ['docker-run', 'docker-volume-prune'],
  },
  {
    id: 'network-tools',
    title: 'Network Tools',
    description: 'Diagnose connectivity and inspect listening services.',
    iconName: 'lan',
    commandIds: ['netstat-tuln'],
  },
  {
    id: 'kubernetes-intro',
    title: 'Kubernetes Intro',
    description: 'Inspect and operate clusters with kubectl.',
    iconName: 'hub',
    commandIds: ['kubectl-pods'],
  },
];

export const getCollectionById = (id: string) =>
  collections.find((c) => c.id === id);
