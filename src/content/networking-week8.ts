import type { Lesson } from '../lib/types';

/** Networking: The Psychology of Connection — Week 8 (fully seeded) — capstone week. */
export const networkingWeek8: Lesson[] = [
  {
    id: 'net-d50',
    month: 4,
    week: 8,
    day: 1,
    dayIndex: 50,
    type: 'reading',
    title: 'The Network Audit',
    duration: '10 min',
    summary:
      'You cannot improve a web you cannot see. Today: the audit that shows your clusters, your gaps, and the one move that changes everything.',
    concepts: ['Network audit', 'Structural holes', 'Network diversity'],
    tryOn:
      'Draw the audit view: three columns — Where my time goes (clusters), Who brings new worlds (bridges), What is missing (gaps). Thirty honest minutes. The map is the capstone’s raw material.',
    cards: [
      {
        kind: 'hook',
        body: 'Your network has a shape — and the shape has consequences. For the first time in this course, you are going to look at yours like a researcher.',
      },
      {
        kind: 'definition',
        title: 'Structural holes',
        body: 'Sociologist Ronald Burt’s term for gaps between clusters — people who bridge holes between separate worlds get earlier information, broader options, and more creative combinations. Bridges are the most valuable position in any network.',
      },
      {
        kind: 'text',
        title: 'The three questions of the audit',
        body: 'One: where does my time go? (Draw your clusters — work, family, faith, hobby, alumni, online.) Two: who bridges my worlds? (The people who appear in two or more clusters.) Three: what is missing? (Whole worlds you have no window into.)',
      },
      {
        kind: 'example',
        title: 'Common audit findings',
        items: [
          'One giant cluster — comfort, but redundancy: everyone knows what you know.',
          'Zero bridges — rich rooms, no corridors; you hear everything late.',
          'No gap-bridgers — you are the only bridge, which means no new world can reach you.',
          'Missing worlds — an industry, an age group, a discipline you have never touched.',
        ],
      },
      {
        kind: 'story',
        title: 'The two identical networks',
        body: 'Two product managers had the same number of contacts and the same seniority. One had a dense cluster of colleagues; the other had colleagues plus a designer circle, a former-teacher thread, and a running club. When roles changed, the first found only more of the same. The second heard about an opening from the running club — a world her work cluster could not reach. Diversity was the difference that counted.',
      },
      {
        kind: 'text',
        title: 'Diversity is a design choice',
        body: 'Networks drift toward sameness — birds of a feather. Deliberate diversity (of field, age, background, viewpoint) is the anti-drift move, and it compounds: each new world carries options no old world contains. The audit’s honest answer to “what is missing” is your growth edge.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Do the three-column audit now — rough is fine. Perfection is procrastination in a nice outfit; the map gets refined over the 30-day plan at the end of the week.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What is a structural hole?',
        options: [
          'A gap between clusters that a bridging person can span',
          'A missing contact in your phone',
          'A flaw in someone’s character',
          'An empty seat at an event',
        ],
        answer: 0,
        explanation: 'Bridging holes makes you the corridor for information and options.',
        concept: 'Structural holes',
      },
      {
        kind: 'truefalse',
        question: 'A dense cluster of similar contacts is the strongest possible network.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Redundancy — everyone knows what you know. Diversity and bridges carry options.',
        concept: 'Network diversity',
      },
      {
        kind: 'scenario',
        question: 'Your audit shows one giant work cluster and no bridges. First corrective move?',
        options: [
          'Join or re-activate one world outside work — and look for the person who overlaps two worlds',
          'Add more colleagues on social media',
          'Message everyone in the cluster more often',
          'Wait for a new job to change things',
        ],
        answer: 0,
        explanation: 'Anti-drift is deliberate — one new world plus one bridge changes the shape.',
        concept: 'Network audit',
      },
    ],
    share: {
      hook: 'Your network has a shape. For once, look at it.',
      question: 'What did your audit show — and what is missing?',
      posts: {
        reflective:
          'Day 50 of Uneek Academy’s networking course: the network audit. Clusters, bridges, gaps — Burt’s structural holes made visible. My shape showed one giant work cluster and almost no bridges to new worlds. The two-PM story: same contact count, different diversity, completely different futures. Thirty minutes of honest drawing. The 30-day plan on day 55 will fix what the map shows. Did you draw yours?',
        direct:
          'You cannot improve a web you cannot see. Day 50 of Uneek Academy’s networking course — the audit: where your time goes, who bridges worlds, what is missing. Structural holes are where opportunities live. Thirty minutes, three columns, no perfection. The map is the raw material for Friday’s capstone.',
        story:
          'Two product managers, same contacts, same seniority. One had a dense work cluster; the other had work plus designers, an old teacher, and a running club. When roles changed, the second heard about her next chapter at a running session. Day 50 of Uneek Academy’s networking course: diversity was the difference that counted. I drew my shape today. It was uncomfortable and useful.',
      },
    },
  },
  {
    id: 'net-d51',
    month: 4,
    week: 8,
    day: 2,
    dayIndex: 51,
    type: 'reading',
    title: 'Your Personal Board of Advisors',
    duration: '10 min',
    summary:
      'Behind every well-navigated life there is an informal circle of people who advise, sponsor, challenge, and cheer. Today you design yours.',
    concepts: ['Developmental network', 'Mentors', 'Sponsors'],
    tryOn:
      'Draft your board on paper: 4–6 seats — the Mentor (wisdom), the Sponsor (advocates for you in rooms you are not in), the Peer (same stage, honest), the Connector (knows everyone), the Challenger (asks the hard question), the Anchor (believes in you). Names or “to find” — both are progress.',
    cards: [
      {
        kind: 'hook',
        body: 'The phrase “personal board of advisors” sounds corporate. It is actually the oldest technology in the world: people who think about your life alongside you.',
      },
      {
        kind: 'definition',
        title: 'Developmental network',
        body: 'Researchers Herminia Ibarra and others find careers are shaped less by one mentor and more by a web of developmental relationships — several people playing different roles. Design the web; do not hunt for a unicorn.',
      },
      {
        kind: 'example',
        title: 'The six seats',
        items: [
          'The Mentor — pattern recognition; has walked the road.',
          'The Sponsor — says your name in rooms you are not in yet. (Sponsorship, not advice — it is rarer and stronger.)',
          'The Peer — same stage; trades honest notes.',
          'The Connector — introduces as a reflex; loves doing it.',
          'The Challenger — asks the question you avoid; growth’s uncomfortable friend.',
          'The Anchor — believes in you before the evidence. Everyone needs one.',
        ],
      },
      {
        kind: 'story',
        title: 'The mentor she asked wrong',
        body: 'A junior analyst asked a director to “be my mentor” and got a polite panic. The next month she tried the better version: one specific question by message — “How would you think about this choice?” The director answered warmly, then again, then suggested a monthly chat. Mentorship grew from advice-asking — the Franklin effect at career scale.',
      },
      {
        kind: 'text',
        title: 'How to fill a seat',
        body: 'Never open with “will you be my mentor?” — it asks for a role nobody can picture. Open with one specific question or request for perspective (d24’s informational interview). Let roles accumulate through repeated small exchanges. Sponsors you earn by being visibly reliable in shared work — sponsorship is granted, not requested.',
      },
      {
        kind: 'text',
        title: 'The board reviews you too',
        body: 'Once a year, look at your seats: Who filled which role? Who moved on? What is empty? The web is living; the design is ongoing. And you hold seats on other people’s boards — that is the reciprocity of the whole system.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Draw the board now. Six seats, names or “to find”. For any empty seat, write one person you could ask one question of this month.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What does research say about career development?',
        options: [
          'A web of developmental relationships matters more than one perfect mentor',
          'Everyone needs exactly one lifelong mentor',
          'Mentors matter only in the first job',
          'Advisors should be chosen by seniority alone',
        ],
        answer: 0,
        explanation: 'Ibarra’s developmental networks — design the web, not the unicorn.',
        concept: 'Developmental network',
      },
      {
        kind: 'truefalse',
        question: 'The best way to get a mentor is to ask “will you be my mentor?”.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Open with one specific question — roles grow from repeated small exchanges.',
        concept: 'Mentors',
      },
      {
        kind: 'scenario',
        question: 'You want someone to advocate for you in rooms you are not in. What is that seat?',
        options: [
          'The Sponsor — earned by visible reliability in shared work, not requested directly',
          'The Mentor — ask for advice weekly',
          'The Connector — ask for introductions',
          'The Anchor — ask for encouragement',
        ],
        answer: 0,
        explanation: 'Sponsorship is granted; you earn it by being reliably excellent where they can see.',
        concept: 'Sponsors',
      },
    ],
    share: {
      hook: 'Do not hunt for a unicorn. Design the web.',
      question: 'Which seat on your board is empty — and who could fill it?',
      posts: {
        reflective:
          'Day 51 of Uneek Academy’s networking course: your personal board of advisors — Mentor, Sponsor, Peer, Connector, Challenger, Anchor. Ibarra’s point: careers run on developmental networks, not one perfect mentor. The analyst who asked “will you be my mentor?” got panic; the one who asked one specific question got a monthly chat. Drew my board tonight — two seats empty, one question each planned. Which seat is yours?',
        direct:
          'Everyone needs a personal board: Mentor, Sponsor, Peer, Connector, Challenger, Anchor. Day 51 of Uneek Academy’s networking course — design it, do not hunt a unicorn. Never open with “be my mentor”; open with one specific question. Sponsors are earned by visible reliability. My board is drawn. Yours?',
        story:
          'A junior analyst asked a director to “be my mentor” — polite panic. Next month she sent one specific question instead: “How would you think about this choice?” Warm answer. Then another. Then a monthly chat. Day 51 of Uneek Academy’s networking course: mentorship grows from advice-asking. Six seats, drawn on paper tonight. The Franklin effect at career scale.',
      },
    },
  },
  {
    id: 'net-d52',
    month: 4,
    week: 8,
    day: 3,
    dayIndex: 52,
    type: 'interactive',
    title: 'Generosity Systems: Be the Hub',
    duration: '12 min',
    summary:
      'The endgame of networking is not what your web gives you — it is who you become inside it. Today: the connector’s operating system.',
    concepts: ['Double opt-in intros', 'Connector habits', 'Generosity at scale'],
    exercise:
      'Make one real introduction this week — double opt-in (ask both sides first), one line of why, then step back. And add one connector habit to your maintenance block: e.g., a monthly “who should meet?” review. Jot the outcome below.',
    tryOn:
      'Run the double opt-in sequence today: ask A’s permission, ask B’s permission, then connect with one line of shared context. Exact words: “A — meet B. You both [shared thing]. I will leave you two to it!”',
    cards: [
      {
        kind: 'hook',
        body: 'There is a version of you that everyone wants in their network: the person who makes other people’s worlds bigger. That version is built from three habits.',
      },
      {
        kind: 'definition',
        title: 'Double opt-in introductions',
        body: 'The connector’s golden rule: ask both parties before connecting. “Would you like an introduction to Bisi? She works on exactly your problem.” Both sides arrive warm instead of ambushed. One line of why, then step back.',
      },
      {
        kind: 'example',
        title: 'The three connector habits',
        items: [
          'Remember out loud: keep the one-line notes (d22) and actually use them — “How is the Abuja plan?”',
          'Broker with consent: one double opt-in intro a month beats ten forced ones.',
          'Credit generously: name people’s contributions in every room (d40’s host currency).',
        ],
      },
      {
        kind: 'story',
        title: 'The woman everyone called first',
        body: 'In one industry there was a woman everyone called before changing jobs — not because she had power, but because she knew everyone and shared freely: names, context, encouragement. She never asked for a cut of anything. Decades in, her “payment” was a life where every door opened twice as fast — and a funeral that would have been standing-room-only. She had built the only wealth that compounds socially.',
      },
      {
        kind: 'text',
        title: 'Generosity at scale is a system',
        body: 'Mood-based generosity is a burst; system-based generosity is a climate. One intro a month. One credit per room. One remembered detail per contact. The maintenance block from d32 simply gets a new standing item: “who should meet whom?”',
      },
      {
        kind: 'text',
        title: 'The mastery definition',
        body: 'A master networker is not the most connected person in the room. They are the person who makes the room more connected. That is the identity this course has been building since day one: not collecting — connecting. Including connecting people to each other.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Pick your introduction pair and run the double opt-in sequence today. Then add the monthly habit to your calendar. That is mastery practised, not admired.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What is the double opt-in introduction?',
        options: [
          'Ask both parties first, connect with one line of why, then step back',
          'Add both people to a group chat and let them sort it out',
          'Introduce without asking to save time',
          'Introduce only when both can help you',
        ],
        answer: 0,
        explanation: 'Consent plus context — the golden rule of brokering.',
        concept: 'Double opt-in intros',
      },
      {
        kind: 'truefalse',
        question: 'A master networker is the person who knows the most people in the room.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'They are the person who makes the room more connected.',
        concept: 'Connector habits',
      },
      {
        kind: 'scenario',
        question: 'You want to be more generous with your network but forget under pressure. Best fix?',
        options: [
          'System-ise it: a monthly “who should meet?” item in the maintenance block',
          'Try to remember to be generous',
          'Give only when asked',
          'Wait until you have more to give',
        ],
        answer: 0,
        explanation: 'Climate beats burst — generosity as standing item.',
        concept: 'Generosity at scale',
      },
    ],
    share: {
      hook: 'A master networker makes the room more connected.',
      question: 'Whose world could you enlarge with one introduction this week?',
      posts: {
        reflective:
          'Day 52 of Uneek Academy’s networking course: generosity systems — double opt-in intros (both sides’ permission, one line of why), remembered details used out loud, credit in every room. The woman everyone called first never asked for a cut; she built the only wealth that compounds socially. My intro went out today and the monthly “who should meet?” is now in my calendar. Mastery is who you become inside the web.',
        direct:
          'The endgame of networking is not what the web gives you — it is who you become in it. Day 52 of Uneek Academy’s networking course: one double opt-in intro a month, one credit per room, one remembered detail per contact. Systems beat moods. Be the person who makes rooms more connected.',
        story:
          'In one industry, everyone called her before changing jobs — not for power, for light. Names, context, encouragement, freely shared. Day 52 of Uneek Academy’s networking course: she never asked for a cut, and every door opened twice as fast for decades. I made my first double opt-in introduction today. “You both care about the same impossible problem. I will leave you two to it.”',
      },
    },
  },
  {
    id: 'net-d53',
    month: 4,
    week: 8,
    day: 4,
    dayIndex: 53,
    type: 'video',
    video: {
      youtubeId: 'LqeAiz691-s',
      title: 'The happy secret to better work',
      by: 'Shawn Achor · TEDxBloomington',
      note: 'The happiness researcher’s case that positive social connection fuels performance — the capstone’s final fuel: joy as a networking strategy.',
    },
    title: 'The Positive Spiral',
    duration: '12 min',
    summary:
      'Burnout is the failure mode of givers and networkers. Achor’s research shows the antidote is not less connection — it is lighter, grateful, joyful connection.',
    concepts: ['Positive spiral', 'Social support', 'Gratitude practice'],
    reflection:
      'Achor’s finding: social support is the greatest predictor of happiness during stress. Which connection most reliably lifts you? Send them one line of gratitude today.',
    tryOn:
      'Run Achor’s two-minute drill tonight: one line of gratitude sent to a different person each day this week (a new message daily), plus one thing that went well today and why it happened.',
    cards: [
      {
        kind: 'hook',
        body: 'You have spent seven weeks learning to connect deliberately. The final lesson: connect joyfully — or the whole system runs out of fuel.',
      },
      {
        kind: 'text',
        title: 'Achor’s core finding',
        body: 'Psychologist Shawn Achor’s research on thousands of professionals found our brains scan the world for the negative first — and that the practice of scanning for good (gratitude, small wins, social connection) rewires performance, not just mood. Happiness, he argues, inspires success more than success inspires happiness.',
      },
      {
        kind: 'definition',
        title: 'Social support',
        body: 'Achor’s studies found the greatest predictor of long-term happiness during stress is social support — not solitude, not toughness. The tend-and-befriend finding from d46, at career scale: your web is literally health infrastructure.',
      },
      {
        kind: 'example',
        title: 'The two-minute drill',
        items: [
          'One gratitude message daily — to a different person each day for a week.',
          'Three things that went well today, with one line on why.',
          'Two minutes of mindful breathing (the settle from d39).',
          'One small act of kindness — a five-minute favour from d25.',
          'Ten minutes of exercise (the body is part of the network too).',
        ],
      },
      {
        kind: 'story',
        title: 'The thanks that changed the quarter',
        body: 'A team manager started one habit: every Friday, one specific thank-you message to a colleague, naming the exact thing they did. Her team’s surveys rose for three quarters. She called it “the most productive two minutes of my week”. Gratitude is not soft — it is the cheapest performance technology in any organisation.',
      },
      {
        kind: 'text',
        title: 'Joy as strategy, not decoration',
        body: 'The giving, the rooms, the follow-ups — all of it is sustainable only inside a positive spiral. People who enjoy their networks get better outcomes from them, because enjoyment is visible and visibility invites. The tired networker and the resentful giver fail the same way: the fuel ran out. Gratitude refills it daily.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Start the drill tonight — first gratitude message and one “went well” line. Seven days of this is the capstone’s human fuel.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What does Achor’s research say about happiness and success?',
        options: [
          'Happiness inspires success more than success inspires happiness',
          'Success must come first, then happiness follows',
          'They are unrelated',
          'Happiness is genetic and unchangeable',
        ],
        answer: 0,
        explanation: 'The positive spiral runs forward: fuel first, results follow.',
        concept: 'Positive spiral',
      },
      {
        kind: 'truefalse',
        question: 'Social support is the greatest predictor of happiness during stress.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Your web is health infrastructure — d46’s biology at life scale.',
        concept: 'Social support',
      },
      {
        kind: 'scenario',
        question: 'Seven weeks of networking practice is starting to feel like obligation. Best refill?',
        options: [
          'The two-minute drill — gratitude messages and small wins — and reconnect with the people you genuinely enjoy',
          'Push through; discipline is the point',
          'Take a month off everything',
          'Message more people faster',
        ],
        answer: 0,
        explanation: 'Joy is the fuel system, not decoration.',
        concept: 'Gratitude practice',
      },
    ],
    share: {
      hook: 'Happiness inspires success. Joy is the fuel, not the decoration.',
      question: 'Who most reliably lifts you — and when did you last tell them?',
      posts: {
        reflective:
          'Day 53 of Uneek Academy’s networking course with Shawn Achor: joy is the fuel system of a network life. Happiness inspires success (not the reverse); social support is the greatest predictor of happiness under stress. Started the two-minute drill: tonight’s gratitude message + one “went well” line. The manager’s Friday thank-yous moved her team’s numbers for three quarters. Gratitude is performance technology. What is your refill?',
        direct:
          'Burnout is the failure mode of givers. Day 53 of Uneek Academy’s networking course — the refill: Achor’s two-minute drill. One gratitude message a day to a different person for a week; one small win and its cause. Happiness inspires success. Your web is health infrastructure — treat it like the asset it is.',
        story:
          'A manager sent one specific thank-you every Friday — naming exactly what the person did. Her team’s surveys rose for three quarters straight. Two minutes a week. Day 53 of Uneek Academy’s networking course: gratitude is the cheapest performance technology in any room. My first message went out tonight. Who gets yours this week?',
      },
    },
  },
  {
    id: 'net-d54',
    month: 4,
    week: 8,
    day: 5,
    dayIndex: 54,
    type: 'reading',
    title: 'Capstone: The Network Map and the 30-Day Plan',
    duration: '15 min',
    summary:
      'This is the day the course becomes yours: one map, one plan, one identity. The predictable outcome is written in your own hand.',
    concepts: ['Capstone', 'Network plan', 'Deliberate practice'],
    tryOn:
      'Complete the capstone today — all three parts on one page: (1) the map (layers + clusters + board), (2) the 30-day plan (four weekly blocks), (3) the identity sentence (“I am someone who…”). Then photograph it. That is your outcome.',
    cards: [
      {
        kind: 'hook',
        body: 'Eight weeks ago, networking was a word that made you flinch. Today you build the thing everyone talks about and nobody shows you: a working network, designed on purpose.',
      },
      {
        kind: 'list',
        title: 'Part one: the map (from d29 + d50 + d51)',
        items: [
          'Layers: 5 · 15 · 50 · 150 — the names you know.',
          'Clusters & bridges: where your time goes, who spans worlds (audit, d50).',
          'The board: six seats — filled and to-find (d51).',
          'One gap you will bridge this quarter: the missing world.',
        ],
      },
      {
        kind: 'list',
        title: 'Part two: the 30-day plan (the systems, running)',
        items: [
          'Week 1: maintenance block live — three touches (one per layer), zero asks.',
          'Week 2: two micro-approaches + one follow-up within 72 hours (d8, d22).',
          'Week 3: one informational interview or coffee invite (d24) + one double opt-in intro (d52).',
          'Week 4: one hard-room application (the full d36–d47 stack) + one repair or check-in (d33).',
          'Daily: the gratitude line (d53) — the fuel.',
        ],
      },
      {
        kind: 'definition',
        title: 'Part three: the identity sentence',
        body: 'Skills stick when they become identity. Write yours in this exact shape: “I am someone who [connects people / asks real questions / shows up warmly] — on purpose, in small daily acts.” Put it where you will see it. The predictability of your outcome comes from this sentence practised, not the course completed.',
      },
      {
        kind: 'story',
        title: 'The map on the fridge',
        body: 'A learner did the capstone on a Sunday and put the map on her fridge, mostly as a joke. Her daughter asked about it. Three months later the map had names crossed out (people contacted), arrows added (introductions made), and a small sticky note: “the running club world — bridged”. The course had ended. The network had not.',
      },
      {
        kind: 'text',
        title: 'The promised outcome — written plainly',
        body: 'If you run the plan, you will: start conversations without dread; follow up while the door is open; maintain your circles without drowning; ask and give help with clean hands; read and work and run rooms; hold your ground in hard ones; and design relationships across difference. That is mastery in networking — not a feeling, a set of behaviours you now own.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Do the three parts now. One page. Photograph it. Then start week one of the plan tomorrow — the capstone is not the end of the program; it is the first day of the rest of your web.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What are the three parts of the capstone?',
        options: [
          'The map, the 30-day plan, the identity sentence',
          'The essay, the exam, the certificate',
          'The contacts, the pitches, the follow-ups',
          'The goals, the vision board, the affirmations',
        ],
        answer: 0,
        explanation: 'See it, schedule it, become it.',
        concept: 'Capstone',
      },
      {
        kind: 'truefalse',
        question: 'The course outcome is guaranteed by completing the lessons.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'The outcome comes from the plan practised — the identity sentence, daily.',
        concept: 'Network plan',
      },
      {
        kind: 'scenario',
        question: 'Someone finishes the course and stops everything. What does the lesson predict?',
        options: [
          'Skills fade without practice — the 30-day plan and maintenance block are the point',
          'The knowledge will hold itself',
          'They will be different forever',
          'Nothing changes either way',
        ],
        answer: 0,
        explanation: 'Deliberate practice beats completion — the map on the fridge story.',
        concept: 'Deliberate practice',
      },
    ],
    share: {
      hook: 'The course ends. The network begins.',
      question: 'What is your identity sentence?',
      posts: {
        reflective:
          'Day 54 of Uneek Academy’s networking course — the capstone. One page: the map (layers, clusters, board), the 30-day plan (maintenance block, micro-approaches, one informational interview, one hard room, one repair), and my identity sentence: “I am someone who connects people on purpose, in small daily acts.” Eight weeks ago networking made me flinch. Today it is a system in my hands. The course ends. The network begins.',
        direct:
          'Capstone day. Uneek Academy’s networking course, complete: 56 days, 13 TED lessons, and a page that matters more than all of it — map, 30-day plan, identity sentence. I am someone who connects people on purpose, in small daily acts. The predictable outcome is in the practising, not the finishing. Plan starts tomorrow.',
        story:
          'A learner put her network map on the fridge as a joke. Three months later it had crossed-out names (contacted), arrows (introductions), and a sticky note: “the running club world — bridged”. Day 54 of Uneek Academy’s networking course: the course had ended; the network had not. My map is photographed tonight. Where will yours live?',
      },
    },
  },
  {
    id: 'net-d55',
    month: 4,
    week: 8,
    day: 6,
    dayIndex: 55,
    type: 'review',
    title: 'Final Review: Mastery in Networking',
    duration: '12 min',
    summary:
      'The five pillars of the whole course — and the proof that you can now do what you could not do eight weeks ago.',
    concepts: ['Course synthesis'],
    tryOn:
      'Teach the whole course to someone in five minutes — the five pillars. If you can teach it, you own it. Then run day one of your 30-day plan.',
    reviewTopics: [
      'Connect: warmth, honesty, weak ties',
      'Start: approaches, conversations, names',
      'Convert: follow-up, asks, giving',
      'Keep: layers, presence, bids, repair',
      'Lead: rooms, ranges, generosity systems',
    ],
    cards: [
      {
        kind: 'hook',
        body: 'Fifty-five days ago this was a syllabus. Now it is a set of things you have actually done — here is the whole map of what you own.',
      },
      {
        kind: 'list',
        title: 'The five pillars',
        items: [
          'Connect — relationships are the point (Waldinger); warmth first; honesty opens doors; weak ties run the world (weeks 1–2).',
          'Start — the ladder, the rules, felt listening, HAIL, graceful exits (week 3).',
          'Convert — 72-hour follow-ups, asking without flinching, story over job, five-minute favours, digital rooms (week 4).',
          'Keep — Dunbar layers, presence, bids, calendars, repair (week 5).',
          'Lead — read rooms, beat status with usefulness, widen ranges, fence takers, stress-literate, cross-cultural, generous hubs (weeks 6–7).',
        ],
      },
      {
        kind: 'text',
        title: 'The proof you can point to',
        body: 'You have greeted strangers, run follow-ups, asked refusable asks, taken twenty-minute coffees, turned toward bids, sent repairs, read rooms, settled your nerves, brokered introductions, and built a map. That is not course completion. That is a demonstrated skill set — mastery means you can repeat it on demand.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Five-minute teach-back to someone real, then day one of the 30-day plan. The rest of your network life is repetitions of what you now know.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What is the definition of mastery used at the end of this course?',
        options: [
          'A demonstrated set of behaviours you can repeat on demand',
          'Finishing every lesson',
          'Knowing all the research',
          'Being the most connected person in the room',
        ],
        answer: 0,
        explanation: 'Mastery is repetition-ready behaviour — which is why the plan is the point.',
        concept: 'Course synthesis',
      },
      {
        kind: 'truefalse',
        question: 'The five pillars are Connect, Start, Convert, Keep, and Lead.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'The whole architecture of the eight weeks.',
        concept: 'Course synthesis',
      },
      {
        kind: 'scenario',
        question: 'A friend asks what you actually learned. Best answer?',
        options: [
          'Teach them the five pillars in five minutes with one story from each',
          'List the research citations',
          'Say it is hard to explain',
          'Send them the course link and say nothing',
        ],
        answer: 0,
        explanation: 'The teach-back is the final test — and the best recruiting pitch for a life of this.',
        concept: 'Course synthesis',
      },
    ],
    share: {
      hook: 'Mastery is behaviour you can repeat on demand. You have the set.',
      question: 'Which pillar will you teach someone this week?',
      posts: {
        reflective:
          'Final review of Uneek Academy’s networking course. Five pillars: Connect, Start, Convert, Keep, Lead — 56 days from “networking feels fake” to a demonstrated set of behaviours. I taught the five-minute version to a friend tonight; she asked for the course link. The 30-day plan starts tomorrow: maintenance block, two micro-approaches, one coffee, one hard room, one repair. Mastery is repetitions from here.',
        direct:
          'Uneek Academy’s networking course — COMPLETE. 56 days. Five pillars: Connect, Start, Convert, Keep, Lead. Not a certificate; a skill set I have already practised — follow-ups, asks, rooms, repairs, intros, the map. The line I am keeping: “A master networker makes the room more connected.” Plan starts tomorrow.',
        story:
          'Eight weeks ago I stood outside rooms like Tunde with his name cards. Tonight I taught the whole course to my sister in five minutes — she recognised every story because I had lived them all. Uneek Academy’s networking course, done. The map is on the fridge. The 30-day plan starts tomorrow. The course ends; the network begins.',
      },
    },
  },
  {
    id: 'net-d56',
    month: 4,
    week: 8,
    day: 7,
    dayIndex: 56,
    type: 'rest',
    title: 'Rest Day — and a Beginning',
    duration: '1 min',
    summary: 'Rest is part of the program, not a break from it — and today it is also the first day of the rest of your network.',
    concepts: [],
    cards: [],
    questions: [],
    restMessage:
      'You finished. Eight weeks, fifty-six days, from “networking feels fake” to mastery you can demonstrate. Rest today — tomorrow, week one of your 30-day plan begins. The course ends; the network begins. Be proud, slowly.',
    share: {
      hook: 'The course ends. The network begins.',
      posts: { reflective: '', direct: '', story: '' },
    },
  },
];
