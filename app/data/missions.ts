import type { Mission } from '../types';

export const missions: Mission[] = [
  {
    id: 'log-observer',
    title: 'Log Observer',
    objective:
      'You need to see the last 10 lines of a log file in real-time as new entries arrive.',
    filePath: '/var/log/syslog',
    expectedCommand: 'tail -f /var/log/syslog',
    suggestionPills: ['tail -f', 'tail -n', 'grep -i'],
    options: [
      { letter: 'A', text: 'cat /var/log/syslog', correct: false },
      { letter: 'B', text: 'tail -f /var/log/syslog', correct: true },
      { letter: 'C', text: 'grep /var/log/syslog', correct: false },
    ],
    successExplanation:
      'The -f flag stands for "follow," allowing you to see new lines appended to the file in real-time.',
    xpReward: 450,
  },
  {
    id: 'rewind-commit',
    title: 'Rewind Commit',
    objective:
      'You want to undo the last commit but keep the changes in your working directory.',
    expectedCommand: 'git reset --soft HEAD~1',
    suggestionPills: ['git reset', 'git revert', 'git checkout'],
    options: [
      { letter: 'A', text: 'git revert HEAD', correct: false },
      { letter: 'B', text: 'git reset --hard HEAD~1', correct: false },
      { letter: 'C', text: 'git reset --soft HEAD~1', correct: true },
    ],
    successExplanation:
      '--soft moves HEAD back one commit but leaves the index and working tree intact, so your changes survive.',
    xpReward: 350,
  },
  {
    id: 'open-port-scan',
    title: 'Open Port Scan',
    objective:
      'List every TCP and UDP port currently in LISTEN state without resolving names.',
    expectedCommand: 'netstat -tuln',
    suggestionPills: ['netstat', 'ss -tuln', 'lsof -i'],
    options: [
      { letter: 'A', text: 'ping localhost', correct: false },
      { letter: 'B', text: 'netstat -tuln', correct: true },
      { letter: 'C', text: 'traceroute 8.8.8.8', correct: false },
    ],
    successExplanation:
      '-t and -u select TCP/UDP, -l filters listening sockets, -n skips DNS — making the output fast and unambiguous.',
    xpReward: 400,
  },
];

export const getMissionById = (id: string) => missions.find((m) => m.id === id);
