export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type CommandCategory =
  | 'Linux'
  | 'Git'
  | 'Docker'
  | 'Network'
  | 'Bash'
  | 'Kubernetes';

export interface Recipe {
  label: string;
  code: string;
  explanation: string;
}

export interface Command {
  id: string;
  name: string;
  command: string;
  description: string;
  syntax: string;
  commonUse: string;
  category: CommandCategory;
  tags: string[];
  recipes: Recipe[];
  docLink: string;
  executionTime: string;
  difficulty: Difficulty;
  xpReward: number;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  iconName: string;
  commandIds: string[];
}

export interface MissionOption {
  letter: 'A' | 'B' | 'C' | 'D';
  text: string;
  correct: boolean;
}

export interface Mission {
  id: string;
  title: string;
  objective: string;
  filePath?: string;
  expectedCommand: string;
  suggestionPills: string[];
  options: MissionOption[];
  successExplanation: string;
  xpReward: number;
}

export type ActivityKind = 'completed' | 'mastered' | 'badge' | 'streak';

export interface ActivityEntry {
  id: string;
  kind: ActivityKind;
  iconName: string;
  title: string;
  meta: string;
  xp?: number;
  highlight?: string;
}

export interface UserProfile {
  background: string;
  selectedPacks: string[];
}
