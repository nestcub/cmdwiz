
CmdWiz is a mobile-first web app and interactive learning platform that helps developers master command-line tools through a swipe-based interface. Users discover commands one at a time through cards, where each swipe reveals a new command along with its explanation, syntax, and real-world usage. The experience is designed to be fast, engaging, and habit-forming, similar to swipe-based apps, but focused on building practical CLI proficiency.
The platform supports both learning and testing modes. In learning mode, users explore commands with explanations and can access official documentation links for deeper understanding. In test mode, users are given real-world scenarios and must choose or type the correct command, with intelligent feedback on their answers.
Core Features to Design


Swipe-Based Learning Interface


Full-screen card UI

Command displayed prominently

Expandable sections for explanation, syntax, and example usage

Swipe gestures:


Right = Learned

Left = Skip


Gamification Layer


XP points for interactions (learning, correct answers, challenges)

Daily streak tracking

Levels (e.g., Beginner → Intermediate → CLI Expert)

Achievement badges

Progress indicators integrated into UI


Command Collections (Learning Paths)


Organized topics like Git, Linux, Docker, etc.

Progress bars per collection

Structured “learn in sequence” experience


Personal Command Library


Save/bookmark commands

Create custom collections

Tag and organize saved commands

Easy access from profile/dashboard


Real-World Use Case Mode (Learn + Test)


Scenario-based learning:


Example: “You want to undo the last commit but keep changes”

Two interaction types:


Multiple choice selection

Input-based command typing

Feedback system:


Evaluate correctness

Provide suggestions or improvements


Reverse Learning Mode


Show output or scenario

User must guess the correct command

Reveal answer with explanation


CLI Challenges / Daily Missions


Daily tasks or problems

Examples:


Fix a broken command

Complete a real-world CLI workflow

Reward system tied to gamification (XP, streaks, badges)


Documentation Integration


Each command includes a link to official documentation

Accessible within learn mode

Option to open in-app or external view
Core Screens to Design


Swipe Learning Screen (primary interface)

Command Detail View (expanded info + documentation link)

Test / Use Case Mode Screen

Reverse Learning Screen

Daily Challenges Screen

Collections / Learning Paths Screen

Profile & Progress Dashboard

Saved Commands Library
Design Style



Make CLI learning feel fast, intuitive, and engaging

Encourage daily usage through gamification and challenges

Reduce friction between learning and practical application

Provide a balance of exploration, testing, and retention

Support both beginners and intermediate developers


As per current html code design , here are 3 major modules which need to be implemented for this nextjs app

Learn:
- swipe card learning mode [ swipe right to learn, left to skip ]
- Test mode [ objective/real world usecase + type command/select options to answer the questions]
- collections [ learn from a fixed set of modules , each module could have a constant card swipe based learning interface ]

Vault:
- Saved commands

User:
- profile page
