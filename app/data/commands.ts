export interface Command {
  id: string;
  command: string;
  description: string;
  example: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const commands: Command[] = [
  {
    id: '1',
    command: 'ls -la',
    description: 'List all files and directories in the current location with detailed information, including hidden files.',
    example: 'ls -la /home/user',
    category: 'Linux',
    difficulty: 'beginner'
  },
  {
    id: '2',
    command: 'git status',
    description: 'Show the working tree status, displaying changes that are staged, unstaged, or untracked.',
    example: 'git status',
    category: 'Git',
    difficulty: 'beginner'
  },
  {
    id: '3',
    command: 'docker ps -a',
    description: 'List all containers, both running and stopped, with their status and basic information.',
    example: 'docker ps -a',
    category: 'Docker',
    difficulty: 'intermediate'
  },
  {
    id: '4',
    command: 'chmod 755 filename',
    description: 'Change file permissions to allow owner full access (read, write, execute) and others read and execute access.',
    example: 'chmod 755 script.sh',
    category: 'Linux',
    difficulty: 'intermediate'
  },
  {
    id: '5',
    command: 'netstat -tuln',
    description: 'Display all listening ports and established connections, showing TCP and UDP protocols with numerical addresses.',
    example: 'netstat -tuln',
    category: 'Network',
    difficulty: 'advanced'
  }
];