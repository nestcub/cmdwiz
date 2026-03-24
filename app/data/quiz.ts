export interface QuizQuestion {
  id: string;
  question: string;
  code?: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: 'What does the "ls -l" command do in Linux?',
    options: [
      'Lists files with detailed information',
      'Creates a new file',
      'Deletes a file',
      'Changes directory permissions'
    ],
    correct: 0,
    explanation: 'The "ls -l" command lists files and directories with detailed information including permissions, ownership, size, and modification date.'
  },
  {
    id: '2',
    question: 'Which Git command would you use to create a new branch?',
    options: [
      'git new branch-name',
      'git branch branch-name',
      'git create branch-name',
      'git make branch-name'
    ],
    correct: 1,
    explanation: 'The "git branch branch-name" command creates a new branch with the specified name.'
  },
  {
    id: '3',
    question: 'What does this Docker command do?',
    code: 'docker run -d -p 8080:80 nginx',
    options: [
      'Starts nginx container in foreground on port 8080',
      'Starts nginx container in background, maps port 8080 to 80',
      'Stops nginx container on port 8080',
      'Downloads nginx image without running it'
    ],
    correct: 1,
    explanation: 'This command runs nginx container in detached mode (-d) and maps host port 8080 to container port 80.'
  },
  {
    id: '4',
    question: 'What file permission does "chmod 644" set?',
    options: [
      'Read, write, execute for everyone',
      'Read and write for owner, read for group and others',
      'Execute only for owner',
      'No permissions for anyone'
    ],
    correct: 1,
    explanation: 'chmod 644 gives read and write permissions to the owner, and read-only permissions to group and others.'
  },
  {
    id: '5',
    question: 'Which command shows active network connections?',
    options: [
      'ping localhost',
      'ifconfig',
      'netstat -an',
      'traceroute'
    ],
    correct: 2,
    explanation: 'netstat -an displays all active network connections and listening ports with numerical addresses.'
  }
];