import type { Lesson } from '../lib/types';

/** Networking: The Psychology of Connection — Week 6 (fully seeded). */
export const networkingWeek6: Lesson[] = [
  {
    id: 'net-d36',
    month: 3,
    week: 6,
    day: 1,
    dayIndex: 36,
    type: 'reading',
    title: 'Reading the Room in 60 Seconds',
    duration: '10 min',
    summary:
      'Before you approach anything, read it. Rooms have geometry, moods, and doors — and you can learn to see all three in a minute.',
    concepts: ['F-formations', 'Proxemics', 'Room mood'],
    tryOn:
      'At your next gathering — or even a busy café — spend 60 seconds reading before acting: Where are the open triangles? What is the room’s energy? Who looks approachable? Then move once, informed.',
    cards: [
      {
        kind: 'hook',
        body: 'The people who navigate rooms effortlessly are not psychic. They are reading a map you have not been taught to see — and it takes sixty seconds.',
      },
      {
        kind: 'definition',
        title: 'F-formations',
        body: 'When people converse, their bodies form shapes — most often an open circle or a “psycle” with a gap. A closed pair-backs shape says “private”. A circle with a wedge of space says “approachable”. Reading the shape beats reading the minds.',
      },
      {
        kind: 'definition',
        title: 'Proxemics',
        body: 'Edward T. Hall’s map of social distance: intimate (close), personal (friends), social (acquaintances — about a conversation’s length), public (across the room). Approach at social distance first; closeness is earned and culture-dependent.',
      },
      {
        kind: 'example',
        title: 'The 60-second scan',
        items: [
          'Geometry: which groups have open wedges? (approachable)',
          'Energy: fast-laughing (playful) or quiet-focused (serious)? Match it.',
          'Edges: who is alone and scanning? (often grateful to be approached)',
          'Anchors: who do you already know? They are your bridges in.',
        ],
      },
      {
        kind: 'story',
        title: 'The wrong circle',
        body: 'A young analyst once walked straight into a closed triangle of executives mid-negotiation, announced himself, and felt the temperature drop to zero for ten seconds that lasted a week. The content of his greeting was fine; the geometry was wrong. A sixty-second scan would have cost him nothing and saved him everything.',
      },
      {
        kind: 'text',
        title: 'Mood is contagious — plan for it',
        body: 'Emotions spread through rooms faster than conversation (psychologists call it emotional contagion). A tense room does not need your brilliance; it needs your warmth. A playful room does not need your formality. Matching the room is not pretending — it is translation.',
      },
      {
        kind: 'text',
        title: 'The introvert’s reading advantage',
        body: 'People who process before acting are usually the best readers of rooms — if they act on what they see instead of retreating because of it. Your scan is data, not warning. Read, then choose your one move.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Choose your room now — a café counts. Run the four-part scan once today. No approach required; the win is the reading.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What does an open wedge in a group’s body shape signal?',
        options: [
          'The group is approachable',
          'The group is private',
          'The group is angry',
          'The group is about to leave',
        ],
        answer: 0,
        explanation: 'F-formation geometry beats mind-reading every time.',
        concept: 'F-formations',
      },
      {
        kind: 'truefalse',
        question: 'You should always approach at close personal distance to seem warm.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Social distance first — closeness is earned, and norms are culture-dependent.',
        concept: 'Proxemics',
      },
      {
        kind: 'scenario',
        question: 'The room you enter is tense and quiet. What does the lesson suggest?',
        options: [
          'Bring warmth and calm, not brilliance — match and gently lift the energy',
          'Match the tension with seriousness and ambition',
          'Leave immediately',
          'Tell jokes loudly to fix the mood',
        ],
        answer: 0,
        explanation: 'Emotional contagion is real — translate to what the room needs.',
        concept: 'Room mood',
      },
    ],
    share: {
      hook: 'Rooms have geometry. Read the map before you move.',
      question: 'What did your 60-second scan show you today?',
      posts: {
        reflective:
          'Day 36 of Uneek Academy’s networking course: read the room in 60 seconds — F-formations (open wedges = approachable, closed shapes = private), proxemics (social distance first), mood (contagion is real), anchors (known faces are bridges). Ran the scan at a café today before ordering. The room looked completely different. The analyst’s wrong-circle story will stay with me. Read first, move once.',
        direct:
          'Room navigation is a map skill, not a charisma skill. Day 36 of Uneek Academy’s networking course: geometry (open vs closed groups), distance (social first), energy (match then lift), anchors (your bridges in). Sixty seconds of scanning beats an hour of blind approaches. Try the scan today — no approach required.',
        story:
          'A young analyst walked into a closed triangle of executives mid-negotiation and introduced himself. Ten seconds that lasted a week. Day 36 of Uneek Academy’s networking course: the greeting was fine, the geometry was wrong. The 60-second scan — wedges, energy, edges, anchors — would have cost him nothing. I ran mine at lunch. Rooms look different when you can read them.',
      },
    },
  },
  {
    id: 'net-d37',
    month: 3,
    week: 6,
    day: 2,
    dayIndex: 37,
    type: 'video',
    video: {
      youtubeId: 'H0_yKBitO8M',
      title: 'Build a tower, build a team',
      by: 'Tom Wujec · TED',
      note: 'The marshmallow challenge — a simple exercise that reveals how teams really behave under tiny amounts of pressure.',
    },
    title: 'What Rooms Reveal Under Pressure',
    duration: '12 min',
    summary:
      'Groups behave in predictable ways when a task appears. Wujec’s marshmallow challenge shows status, iteration, and why the best rooms let everyone build.',
    concepts: ['Group dynamics', 'Status', 'Iteration'],
    reflection:
      'Wujec found that many teams do worse than children — because they spend the time on status and plan instead of testing. Where does “planning instead of testing” show up in your groups?',
    tryOn:
      'In one group today — meeting, class, family — notice the turn-taking: who speaks, who is asked, who is quiet. Ask one quiet person one question. That single move changes a room.',
    cards: [
      {
        kind: 'hook',
        body: 'Give a team twenty minutes, tape, string, spaghetti, and a marshmallow. Sounds like a game. It is actually an X-ray of how groups behave.',
      },
      {
        kind: 'text',
        title: 'The challenge',
        body: 'Build the tallest freestanding structure with the marshmallow on top. Wujec has run it thousands of times with business students, CEOs, lawyers, architects. A striking finding recurs: many adult teams do worse than kindergarten children.',
      },
      {
        kind: 'definition',
        title: 'Why children win',
        body: 'Children do not spend the time on status — who leads, who impresses. They start building immediately, test, fail, and rebuild. Adults spend most of the time on planning and positioning, then discover at the end that the marshmallow is heavy and the tower falls.',
      },
      {
        kind: 'example',
        title: 'What the game shows about rooms',
        items: [
          'Status consumes attention — every minute spent on positioning is a minute not spent testing.',
          'Iteration beats planning under uncertainty — small tests, early.',
          'Specialists who prototype together beat stars who divide the work.',
          'The final reveal — the marshmallow on top — is lighter when it is tested early.',
        ],
      },
      {
        kind: 'story',
        title: 'The CEO tower',
        body: 'One executive team produced a confident plan and a tall tower with seconds to spare — which collapsed the moment the marshmallow landed. The architects in the same room had failed quietly and rebuilt five times. The executives were optimising for looking competent. The builders were optimising for standing.',
      },
      {
        kind: 'text',
        title: 'Your role in any room',
        body: 'You can be the person who shortens the status game: ask the quietest person’s opinion early (“What are you seeing?”), suggest one small test instead of one big debate, and thank people by name. Rooms improve with anyone who turns down the status and turns up the building.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Choose your group today and your one quiet-person question. “What are you seeing?” is enough.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Why do many adult teams do worse than children in the marshmallow challenge?',
        options: [
          'They spend the time on status and planning instead of testing',
          'They lack fine motor skills',
          'Children are better at building',
          'Adults do not follow instructions',
        ],
        answer: 0,
        explanation: 'Positioning consumes the clock; iteration wins.',
        concept: 'Group dynamics',
      },
      {
        kind: 'truefalse',
        question: 'Under uncertainty, one big careful plan beats several small tests.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Prototypes reveal what plans cannot — the marshmallow is always heavier than assumed.',
        concept: 'Iteration',
      },
      {
        kind: 'scenario',
        question: 'In a meeting, two senior people dominate and a quiet colleague says nothing. The lesson’s move?',
        options: [
          'Ask them directly and warmly: “What are you seeing?” — then thank them by name',
          'Wait for them to speak up on their own',
          'Side-chat them privately later only',
          'Mirror the senior people’s energy',
        ],
        answer: 0,
        explanation: 'Anyone can turn down the status and turn up the building.',
        concept: 'Status',
      },
    ],
    share: {
      hook: 'Every minute spent on status is a minute not spent building.',
      question: 'Where does “planning instead of testing” show up in your groups?',
      posts: {
        reflective:
          'Day 37 of Uneek Academy’s networking course: the marshmallow challenge — many adult teams lose to kindergarteners because the clock goes to status and planning instead of testing. Tom Wujec’s X-ray of group behaviour. My move in today’s meeting: asked the quietest person “What are you seeing?” — and thanked him by name. The room changed. Turn down the status, turn up the building.',
        direct:
          'Groups are X-rayed by tiny tasks. Day 37 of Uneek Academy’s networking course, via Tom Wujec: iterate early, include the quiet, and stop optimising for looking competent. One practice from the lesson worth everything: ask the quietest person one question. “What are you seeing?” Rooms improve instantly.',
        story:
          'The executive team built a confident tower that collapsed the second the marshmallow landed. The architects next to them had failed five times quietly and won. Day 37 of Uneek Academy’s networking course: the executives were optimising for looking competent; the builders were optimising for standing. Which is your room optimising for?',
      },
    },
  },
  {
    id: 'net-d38',
    month: 3,
    week: 6,
    day: 3,
    dayIndex: 38,
    type: 'interactive',
    title: 'Working the Room: The Introvert’s Route',
    duration: '12 min',
    summary:
      '“Working the room” sounds like a salesman’s phrase. Done right it is a calm, bounded circuit — and introverts are better at it than they think.',
    concepts: ['Working a room', 'Trios', 'Anchor points'],
    exercise:
      'At your next gathering — or a busy social space — run the full circuit: arrive early or late (quieter), greet one anchor, join one trio, use one exit script, take one breath break. Jot how it went below.',
    tryOn:
      'The trio strategy: join groups of three (the easiest geometry to enter — nobody’s pair is interrupted), listen first, then use one rung from the ladder. Exit with a script. Repeat once if energy allows.',
    cards: [
      {
        kind: 'hook',
        body: 'The phrase “work the room” implies speed and volume. The actual skill is a slow, bounded loop: enter, connect, release, rest. Introverts invented the version that works.',
      },
      {
        kind: 'definition',
        title: 'The circuit',
        body: 'Arrive at a chosen time (early = smaller room; late = livelier but crowded). Find one anchor — a face you know or a person at the edge. Join one trio. Hold one real conversation. Exit warmly. Break alone for two minutes. Repeat if — and only if — your energy budget allows.',
      },
      {
        kind: 'example',
        title: 'Why trios',
        items: [
          'Pairs are closed (back-shapes) — interrupting a pair is the wrong-circle error of d36.',
          'Trios usually hold a wedge of space and an active-but-open conversation.',
          'Larger circles are harder to join and easier to hide in — save them for later.',
          'In a trio, listening first is natural — the introvert’s home format.',
        ],
      },
      {
        kind: 'story',
        title: 'Three conversations and home by nine',
        body: 'A designer gave herself a rule: three real conversations, one break, home by nine. She arrived at seven, spoke with a trio about craft for twenty minutes, took a phone-break outside, joined another group, and left glowing. Her colleague “did the whole room” for three hours and could not remember one name. Bounded beats marathon.',
      },
      {
        kind: 'text',
        title: 'The breath break is part of the skill',
        body: 'Step outside. Look at the sky. Call nobody. Two minutes alone restores the attention quality that makes your conversations good. Slipping out to the balcony is not antisocial — it is equipment maintenance.',
      },
      {
        kind: 'text',
        title: 'Entry and exit lines (the full set)',
        body: 'Entry: “Mind if I join you?” “Hi — I do not think we have met.” Trio entry: listen, nod, and ask a rung-1 question when a gap comes. Exit: the d19 formula. You now hold every line the circuit needs — nothing else is improvised.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Choose your gathering and set your personal quota now — like the designer’s “three and home”. The quota is what makes the room feel finite. Finite rooms are approachable.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Why are trios the easiest groups to join?',
        options: [
          'They usually hold open space and an active conversation without closing like pairs',
          'They are the quietest groups',
          'Three people cannot say no',
          'They always include an extrovert',
        ],
        answer: 0,
        explanation: 'Geometry again — pairs close; trios keep a wedge open.',
        concept: 'Trios',
      },
      {
        kind: 'truefalse',
        question: 'Taking a two-minute break alone during an event is antisocial behaviour.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'It is equipment maintenance — attention quality depends on it.',
        concept: 'Anchor points',
      },
      {
        kind: 'scenario',
        question: 'You have had two good conversations and your energy is dropping. What fits the circuit?',
        options: [
          'Exit warmly and leave — bounded beats marathon; the quota is met',
          'Push through for at least two more hours',
          'Stay but stand silently at the edge',
          'Switch to the biggest group to hide in',
        ],
        answer: 0,
        explanation: 'Three and home — the designer’s rule. Finite rooms are approachable.',
        concept: 'Working a room',
      },
    ],
    share: {
      hook: 'Working the room is a slow loop: enter, connect, release, rest.',
      question: 'What is your personal quota for the next gathering?',
      posts: {
        reflective:
          'Day 38 of Uneek Academy’s networking course: the introvert’s circuit — anchor, trio, one real conversation, warm exit, breath break, repeat only if energy allows. The trio strategy is geometry doing the work: pairs close, trios hold a wedge. My quota: three conversations and home. Bounded beats marathon — the designer who did the whole room remembered no names. What is your quota?',
        direct:
          'You do not “work the room”. You run a circuit: anchor → trio → conversation → exit → breath break. Day 38 of Uneek Academy’s networking course — the introvert’s version, which is the version that actually works. Three real conversations beats three hours of hovering. Set your quota before the next gathering. Finite rooms are approachable.',
        story:
          'A designer gave herself a rule: three real conversations, one break, home by nine. She left glowing and could tell you every name. Her colleague “did the whole room” for three hours and remembered nothing. Day 38 of Uneek Academy’s networking course: bounded beats marathon. My circuit runs at the next event — trio strategy and all.',
      },
    },
  },
  {
    id: 'net-d39',
    month: 3,
    week: 6,
    day: 4,
    dayIndex: 39,
    type: 'video',
    video: {
      youtubeId: 'Ks-_Mh1QhMc',
      title: 'Your body language may shape who you are',
      by: 'Amy Cuddy · TED2012',
      note: 'One of the most-watched talks ever on presence and nonverbal power — with an honest note: some hormone claims are debated, the presence practice stands.',
    },
    title: 'Presence You Can Borrow',
    duration: '12 min',
    summary:
      'Before you speak in any room, your body has already introduced you. Cuddy’s research on presence — and how to settle your own nerves first.',
    concepts: ['Presence', 'Body language', 'Power posing (with limits)'],
    reflection:
      'Cuddy’s honest core: “fake it till you become it” — act as the person who belongs, and the belonging follows. Where could you borrow confidence for two minutes before entering?',
    tryOn:
      'Before one room today, take two minutes alone: stand tall, breathe low and slow, drop your shoulders. Then enter. The practice is settling your physiology — the science of big claims aside, calm bodies make warm faces.',
    cards: [
      {
        kind: 'hook',
        body: 'Your body introduces you before your mouth opens. The good news: you can rehearse the introduction.',
      },
      {
        kind: 'text',
        title: 'What Cuddy studies',
        body: 'Amy Cuddy researches how nonverbal expressions of power and confidence shape how others see us — and how we see ourselves. Her central claim: we can nudge our own confidence by changing posture and presence practices before high-stakes moments.',
      },
      {
        kind: 'definition',
        title: 'Presence (Cuddy’s version)',
        body: 'Showing up as your best self in stressful moments — grounded, open, attentive. Not dominance. Not loudness. The visible form of the calm attention we have been building all course.',
      },
      {
        kind: 'text',
        title: 'Honest limits',
        body: 'Some of the talk’s hormone claims did not replicate cleanly in later research — science works that way, and honesty matters in this course. What stands is the practice effect: posture and breathing reliably change how settled you feel, and settled people are read as warmer and more credible.',
      },
      {
        kind: 'example',
        title: 'The two-minute settle',
        items: [
          'Feet planted, weight even — the body’s “I am staying” signal.',
          'Shoulders down, jaw unclenched — threat off.',
          'Breath low and slow — three long exhales; exhales calm the alarm.',
          'A private moment before a public one — bathrooms and balconies are legitimate presence studios.',
        ],
      },
      {
        kind: 'story',
        title: 'The interview corridor',
        body: 'A candidate spent the two minutes before her interview in the restroom with her phone away, shoulders back, breathing slow. She walked in and the panel felt it — “you seemed so calm”. Her answers were the same answers she had always had. The corridor made the difference.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Pick your room and your two minutes. The settle is free, private, and works before speeches, mixers, and difficult conversations alike.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What is the lesson’s honest position on Cuddy’s research?',
        options: [
          'Some hormone claims are debated, but the presence practices reliably help',
          'Every claim is proven beyond doubt',
          'The whole talk has been debunked',
          'Body language does not matter at all',
        ],
        answer: 0,
        explanation: 'We teach evidence with its edges — the practice effect stands.',
        concept: 'Power posing (with limits)',
      },
      {
        kind: 'truefalse',
        question: 'Presence means dominating the room with confidence displays.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'It means grounded, open, attentive — calm attention made visible.',
        concept: 'Presence',
      },
      {
        kind: 'scenario',
        question: 'You have a high-stakes room in ten minutes and feel the alarm rising. Best move?',
        options: [
          'Two-minute settle: feet planted, shoulders down, three long exhales',
          'Scroll your phone to distract yourself',
          'Rehearse your achievements out loud',
          'Have a quick coffee and rush in',
        ],
        answer: 0,
        explanation: 'Exhales and posture settle physiology — settled faces are read as warm and credible.',
        concept: 'Body language',
      },
    ],
    share: {
      hook: 'Your body introduces you before your mouth opens.',
      question: 'Where could you borrow two minutes of calm before entering?',
      posts: {
        reflective:
          'Day 39 of Uneek Academy’s networking course: presence — Amy Cuddy’s research with honest edges (some hormone claims are debated; the settle practice stands). Feet planted, shoulders down, three long exhales — then enter. Tried it before a hard conversation: same answers I always had, different room. Settled people are read as warm and credible. Where will you run your two-minute settle?',
        direct:
          'Presence is a practice, not a personality. Day 39 of Uneek Academy’s networking course, via Amy Cuddy: your body introduces you first. Two minutes alone before the room — planted feet, dropped shoulders, slow exhals — changes how settled you feel, and how settled you look. The science has edges; the practice works.',
        story:
          'She spent the two minutes before her interview in the corridor, phone away, breathing slow. The panel said she seemed “so calm”. Her answers were the same answers she always had — the corridor made the difference. Day 39 of Uneek Academy’s networking course: borrow presence before you need it. It is free and it is yours.',
      },
    },
  },
  {
    id: 'net-d40',
    month: 3,
    week: 6,
    day: 5,
    dayIndex: 40,
    type: 'reading',
    title: 'Managing Rooms You Run',
    duration: '10 min',
    summary:
      'One day you will host the meeting, the dinner, the event. Room management at the top of the room is a learnable art — and a generous one.',
    concepts: ['Hosting', 'Introduction brokering', 'Psychological safety'],
    tryOn:
      'Broker one introduction this week — with both sides’ permission: “Bisi, meet Chidi — you both care about design systems. Chidi, Bisi just told me about X.” Or host one small thing: a dinner, a walk, a call.',
    cards: [
      {
        kind: 'hook',
        body: 'The highest-status move in any room is making other people feel important in it. Hosting is networking turned outward.',
      },
      {
        kind: 'definition',
        title: 'Introduction brokering',
        body: 'Connecting two people who should know each other — with both sides’ permission and one line of why: “You both care about design systems.” Done well, it is the single most useful favour in a network. Done badly (no permission, no context), it is spam.',
      },
      {
        kind: 'text',
        title: 'The host’s three duties',
        body: 'One: shape the geometry — seat people who should talk near each other; open conversations and step back. Two: protect turn-taking — draw out quiet voices, trim monologues with grace. Three: name contributions — people glow when their idea is attributed to them out loud.',
      },
      {
        kind: 'definition',
        title: 'Psychological safety',
        body: 'Amy Edmondson’s term for a group where people feel safe to speak up, ask, and admit mistakes without humiliation. It predicts how well teams learn and perform — and hosts build it in small acts: thanking questions, admitting their own errors first.',
      },
      {
        kind: 'story',
        title: 'The dinner that ran itself',
        body: 'A host sat two quiet guests beside each other with one planted question — “You both just changed careers, I think?” — and then let the table go. That corner talked for two hours. The host did almost nothing: a placement, a question, and the wisdom to leave. That is the whole art, really.',
      },
      {
        kind: 'example',
        title: 'Turn-taking science (why the quiet voice matters)',
        items: [
          'Research on group intelligence found smart groups share airtime more evenly and read each other better — not groups with the smartest individual.',
          'As host, the quiet voice is not a gap in the conversation; it is the room’s unused intelligence.',
          'One question per quiet person changes a meeting’s output measurably.',
          'Naming contributions (“as Amara said”) distributes status — the host’s currency.',
        ],
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Choose your introduction or your host moment now. Both-sides permission, one line of why, then step back. That is the full technique.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What makes a good brokered introduction?',
        options: [
          'Both sides’ permission plus one line of why they should meet',
          'Adding both people to a group chat without asking',
          'Listing both people’s achievements',
          'Introducing people whenever you can, regardless of fit',
        ],
        answer: 0,
        explanation: 'Permission + context = useful. Without both, it is spam.',
        concept: 'Introduction brokering',
      },
      {
        kind: 'truefalse',
        question: 'The smartest groups are the ones with the smartest individual member.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Group intelligence tracks shared airtime and social sensitivity — turn-taking matters.',
        concept: 'Psychological safety',
      },
      {
        kind: 'scenario',
        question: 'You are hosting a dinner and one guest has said almost nothing. Best host move?',
        options: [
          'Ask them one warm question tied to their experience — then let the table take it',
          'Fill the silence yourself to keep energy up',
          'Note privately that they are quiet and ignore it',
          'Ask them to “speak up more”',
        ],
        answer: 0,
        explanation: 'The quiet voice is the room’s unused intelligence — one question unlocks it.',
        concept: 'Hosting',
      },
    ],
    share: {
      hook: 'The highest-status move in any room is making other people feel important in it.',
      question: 'Whose introduction could you broker this week?',
      posts: {
        reflective:
          'Day 40 of Uneek Academy’s networking course: managing rooms you run. Host duties — shape geometry, protect turn-taking, name contributions. Edmondson’s psychological safety: rooms where people can speak without fear learn better. And group intelligence tracks shared airtime, not the smartest head. My try-on: one permissioned introduction with one line of why. The dinner that ran itself — a placement and a question. That is the art.',
        direct:
          'One day you will run the room. Day 40 of Uneek Academy’s networking course: host like a gardener — seat for connection, draw out quiet voices, name contributions out loud. Broker one introduction this week (permission + why). Smart groups share airtime; make yours one of them.',
        story:
          'The host sat two quiet guests beside each other with one planted question — “You both just changed careers?” — then left the table alone. That corner talked for two hours. Day 40 of Uneek Academy’s networking course: a placement, a question, and the wisdom to step back. Hosting is networking turned outward. Who will you connect this week?',
      },
    },
  },
  {
    id: 'net-d41',
    month: 3,
    week: 6,
    day: 6,
    dayIndex: 41,
    type: 'review',
    title: 'Week 6 Review: Room Management',
    duration: '10 min',
    summary:
      'Five ideas: reading rooms, group dynamics under pressure, the introvert circuit, borrowed presence, and hosting.',
    concepts: ['Week 6 synthesis'],
    tryOn:
      'Run one complete room cycle this weekend: scan for 60 seconds, run the circuit (or host), settle first, and broker one introduction. The room is now a place you know how to be.',
    reviewTopics: [
      'F-formations, proxemics & room mood',
      'Group dynamics: status & iteration',
      'The working-the-room circuit',
      'Presence & the two-minute settle',
      'Hosting, brokering & psychological safety',
    ],
    cards: [
      {
        kind: 'hook',
        body: 'The “room management” half of this month is done: you can read a room, survive it, run it, and make it kinder for everyone in it.',
      },
      {
        kind: 'list',
        title: 'This week’s five concepts',
        items: [
          'Room reading — geometry, distance, mood, anchors in sixty seconds (d36)',
          'Group dynamics — status eats the clock; iteration wins; ask the quiet (d37)',
          'The circuit — anchor, trio, conversation, exit, breath break (d38)',
          'Presence — settle your physiology before your physiology settles you (d39)',
          'Hosting — brokering, turn-taking, psychological safety, named credit (d40)',
        ],
      },
      {
        kind: 'text',
        title: 'How the pieces fit',
        body: 'Read the room (d36), enter it on purpose (d38), settle yourself (d39), improve the group you join (d37), and eventually run it with generosity (d40). Room mastery is five stacked skills — and you have now practised all of them.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'One full room cycle this weekend. Write one line afterwards about what you noticed — noticing is the trait of people who keep improving.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What is the through-line of room management?',
        options: [
          'Read, enter, settle, improve, host — generosity at every layer',
          'Speak as much as possible so people notice you',
          'Stay near people you already know',
          'Arrive late, leave early, say nothing',
        ],
        answer: 0,
        explanation: 'Five stacked skills, each practised this week.',
        concept: 'Week 6 synthesis',
      },
      {
        kind: 'truefalse',
        question: 'The best rooms share airtime more evenly — hosts protect turn-taking.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Group intelligence research: shared airtime and social sensitivity beat star power.',
        concept: 'Week 6 synthesis',
      },
      {
        kind: 'scenario',
        question: 'You must enter a room of strangers this weekend. Correct sequence?',
        options: [
          '60-second scan → two-minute settle → trio + anchor → warm exit → breath break',
          'Enter fast, find the loudest group, stay till the end',
          'Wait by the door until someone approaches',
          'Skip the scan — it makes you self-conscious',
        ],
        answer: 0,
        explanation: 'The full circuit, in order.',
        concept: 'Week 6 synthesis',
      },
    ],
    share: {
      hook: 'Read the room. Enter on purpose. Improve the group. Host generously.',
      question: 'Which room skill will you practise this weekend?',
      posts: {
        reflective:
          'Week 6 of Uneek Academy’s networking course, reviewed: read rooms (geometry, distance, mood), beat status with iteration and quiet questions, run the introvert circuit, settle before you enter, and host like a gardener. The complete room-management stack. Ran one full cycle this weekend — the 60-second scan alone changed everything. Week 7: difficult rooms, status, and speaking up. Two weeks to mastery.',
        direct:
          'Week 6 done (Uneek Academy, networking): room management. Read it, survive it, run it, make it kinder. F-formations to psychological safety in five lessons. The line of the week: “The highest-status move in any room is making other people feel important in it.” Week 7: high-stakes rooms and difficult people.',
        story:
          'I used to enter rooms hoping to survive them. After Week 6 of Uneek Academy’s networking course I scan, settle, join a trio, ask the quiet person, and leave warm. This weekend I brokered my first introduction — permission, context, step back. It felt like a superpower that everyone is allowed to have. Week 7: status and speaking up.',
      },
    },
  },
  {
    id: 'net-d42',
    month: 3,
    week: 6,
    day: 7,
    dayIndex: 42,
    type: 'rest',
    title: 'Rest Day',
    duration: '1 min',
    summary: 'Rest is part of the program, not a break from it.',
    concepts: [],
    cards: [],
    questions: [],
    restMessage:
      'Six weeks — rooms no longer own you; you know how to be in them. Today, rest is the work. The calmest person in any room got there through days like this. Tick rest and the streak continues.',
    share: {
      hook: 'The calmest person in any room practised being calm.',
      posts: { reflective: '', direct: '', story: '' },
    },
  },
];
