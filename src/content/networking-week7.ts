import type { Lesson } from '../lib/types';

/** Networking: The Psychology of Connection — Week 7 (fully seeded). */
export const networkingWeek7: Lesson[] = [
  {
    id: 'net-d43',
    month: 4,
    week: 7,
    day: 1,
    dayIndex: 43,
    type: 'reading',
    title: 'Status and the Room’s Hidden Ladder',
    duration: '10 min',
    summary:
      'Every room has a quiet ranking system. Seeing it clearly — without worshipping it — is what separates people who navigate rooms from people who are navigated by them.',
    concepts: ['Status', 'Power', 'Range of behaviour'],
    tryOn:
      'Read the ladder in one room today without climbing it: who do people turn to when they speak? Who gets interrupted? Then do one anti-ladder act — ask a low-status person’s opinion and thank them by name.',
    cards: [
      {
        kind: 'hook',
        body: 'There is a ladder in every room that nobody acknowledges. You can spend your life pretending it is not there — or learn to see it and stay yourself.',
      },
      {
        kind: 'definition',
        title: 'Status (the honest kind)',
        body: 'The room’s estimate of how much attention and deference each person is owed. It is partly earned (experience), partly performed (voice, dress, name-dropping), and partly assigned (title, gender, accent). Watching how it moves is a superpower; worshipping it is a trap.',
      },
      {
        kind: 'text',
        title: 'Power changes your range',
        body: 'Social psychologist Adam Galinsky finds that power widens your “range of acceptable behaviour” — what you can say without punishment. Low power narrows it, which creates a double bind: stay silent and go unnoticed; speak up and get dismissed. The whole of next lesson is how to widen your range honestly.',
      },
      {
        kind: 'example',
        title: 'Ladder signals (for reading, not gaming)',
        items: [
          'Who gets interrupted — and who finishes sentences?',
          'Whose jokes land? (status is funny or not)',
          'Who does the room look at when someone new speaks?',
          'Who can leave early without comment?',
        ],
      },
      {
        kind: 'story',
        title: 'The intern’s question',
        body: 'In a boardroom of senior figures, an intern asked the one question everyone was avoiding: “Do we actually know what customers want here?” The room went quiet — then the chair said: “That is the real question, isn’t it.” Status moved visibly, in one minute, toward the person who asked the true question. Ladders can be climbed by usefulness.',
      },
      {
        kind: 'text',
        title: 'Anti-ladder moves (generosity as status)',
        body: 'You can opt out of the game without losing: name other people’s contributions, ask the quiet for their view, credit loudly, ask beginner questions without shame. Paradoxically this raises you — rooms trust the person who is not competing. Generosity is the only status game that pays everyone.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Choose your room and your anti-ladder act now. Read the ladder first — the act only works if it is informed.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What is “status” in the lesson’s sense?',
        options: [
          'The room’s estimate of how much attention and deference someone is owed',
          'A person’s job title only',
          'How wealthy someone is',
          'How loudly someone speaks',
        ],
        answer: 0,
        explanation: 'Partly earned, partly performed, partly assigned — read it, do not worship it.',
        concept: 'Status',
      },
      {
        kind: 'truefalse',
        question: 'Low-power people face a double bind: silence hides them and speaking up risks punishment.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Galinsky’s low-power double bind — tomorrow’s lesson widens the range.',
        concept: 'Range of behaviour',
      },
      {
        kind: 'scenario',
        question: 'You notice a junior person’s good idea being credited to a senior. What is the anti-ladder move?',
        options: [
          'Name it out loud: “That was Bisi’s point earlier — Bisi, say more?”',
          'Stay silent; the ladder is not your problem',
          'Repeat the idea yourself so it lands',
          'Tell Bise privately afterwards only',
        ],
        answer: 0,
        explanation: 'Crediting loudly is generosity — and rooms remember who does it.',
        concept: 'Power',
      },
    ],
    share: {
      hook: 'See the ladder. Do not worship it. Climb it with usefulness.',
      question: 'Where does the hidden ladder show up in your rooms?',
      posts: {
        reflective:
          'Day 43 of Uneek Academy’s networking course: every room has a hidden ladder — attention and deference quietly allocated. Read it (who gets interrupted, whose jokes land) without playing it. Galinsky’s double bind for low power is real. The anti-ladder moves are better: credit loudly, ask the quiet, name contributions. Today I named a junior colleague’s idea back to her in the meeting. The room noticed. Did you?',
        direct:
          'There is a ladder in every room nobody acknowledges. Day 43 of Uneek Academy’s networking course — read it clearly, stay yourself. Status is attention allocated; power widens your range to speak. The move that pays everyone: generous status. “That was Bisi’s point — Bisi, say more?” Try the anti-ladder act today.',
        story:
          'In a boardroom of senior figures, an intern asked the question everyone avoided: “Do we actually know what customers want here?” The chair went quiet, then said: “That is the real question.” Day 43 of Uneek Academy’s networking course: ladders can be climbed by usefulness. My anti-ladder act today was crediting a quiet colleague out loud. The room remembered.',
      },
    },
  },
  {
    id: 'net-d44',
    month: 4,
    week: 7,
    day: 2,
    dayIndex: 44,
    type: 'video',
    video: {
      youtubeId: 'MEDgtjpycYg',
      title: 'How to speak up for yourself',
      by: 'Adam Galinsky · TEDxNewYork',
      note: 'The research behind the range of acceptable behaviour — and five tools for widening it without getting punished. 7M+ views.',
    },
    title: 'Widen Your Range',
    duration: '12 min',
    summary:
      'Speaking up is the master skill of high-stakes rooms — the ask, the correction, the boundary. Galinsky hands over the research-backed tools.',
    concepts: ['Range of acceptable behaviour', 'Perspective-taking', 'Advocacy'],
    reflection:
      'Galinsky’s tools: advocate for others (the mama-bear effect), take perspective, signal flexibility, gain allies, ask for advice. Which one could you use this week in a real situation?',
    tryOn:
      'Use perspective-taking before one real ask this week: write one line about what the other person wants first (“They need the team to deliver on time…”). Then make your ask with their goal named in it.',
    cards: [
      {
        kind: 'hook',
        body: 'You know you should speak up. The question the research answers is not whether — it is how, without getting punished for it.',
      },
      {
        kind: 'definition',
        title: 'The range of acceptable behaviour',
        body: 'Each of us has a range of things we can say in a context without penalty. Power widens the range; powerlessness narrows it. Galinsky’s finding: the range is not fixed — it can be widened deliberately by how you act.',
      },
      {
        kind: 'list',
        title: 'Five tools that widen the range',
        items: [
          'Advocate for others first — the “mama bear effect”: asking for someone else unlocks your own voice.',
          'Take their perspective — name their goal before your ask; people fund what they recognise.',
          'Signal flexibility — offer two good options instead of one demand.',
          'Gain allies — a supporter in the room doubles your effective range.',
          'Ask for advice — it flatters, it informs, and it recruits the advisor to your side.',
        ],
      },
      {
        kind: 'story',
        title: 'The counteroffer that backfired',
        body: 'Galinsky coached his twin brother into a “perfect” counteroffer for a film distribution deal — and it was so assertive the company withdrew everything. Speaking up has a dial, not a switch. The lesson was not “be quiet” — it was “calibrate”. Range widened carelessly collapses.',
      },
      {
        kind: 'example',
        title: 'The calibrated ask',
        body: '“I know the budget is tight this quarter [their reality]. Two options: I could take the lead on X, or split it with Bisi — either way it lands on time [flexibility]. What would you choose?” Same assertiveness, wider range — because it was built with their perspective inside it.',
      },
      {
        kind: 'text',
        title: 'Where networking shows up',
        body: 'Every follow-up is a small speak-up. Every ask for advice widens your range with that person. The network you are building is literally a web of widened ranges — people with whom you can say more, ask more, and be more honest than with strangers.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Pick the real ask this week and run perspective-taking on it first. One line about their goal. Then send it — calibrated, flexible, on the record.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What is the “mama bear effect”?',
        options: [
          'Advocating for others unlocks your own voice and assertiveness',
          'Mothers negotiate better than fathers',
          'Protecting your team lowers your status',
          'Aggression gets results in negotiations',
        ],
        answer: 0,
        explanation: 'Speak for someone else first — your own range follows.',
        concept: 'Advocacy',
      },
      {
        kind: 'truefalse',
        question: 'Your range of acceptable behaviour is fixed by personality.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'It is dynamic — context and tools widen or narrow it.',
        concept: 'Range of acceptable behaviour',
      },
      {
        kind: 'scenario',
        question: 'You need a deadline extension and fear looking unreliable. Best calibrated ask?',
        options: [
          'Name their reality first, offer two options: “If I take X off the plate, the deadline lands — or I deliver in two parts. Which works?”',
          'Demand the extension with confidence',
          'Apologise repeatedly and ask softly',
          'Say nothing and miss the deadline',
        ],
        answer: 0,
        explanation: 'Perspective + flexibility = assertiveness that survives the room.',
        concept: 'Perspective-taking',
      },
    ],
    share: {
      hook: 'Speaking up has a dial, not a switch. Calibrate the range.',
      question: 'Which of Galinsky’s five tools could you use this week?',
      posts: {
        reflective:
          'Day 44 of Uneek Academy’s networking course: Adam Galinsky’s range of acceptable behaviour — power widens it, but so do five tools: advocate for others, take perspective, signal flexibility, gain allies, ask advice. The twin-brother counteroffer story: assertiveness has a dial. I ran perspective-taking on a real ask today — named their goal first. The reply was a yes. Which tool is yours?',
        direct:
          'How to speak up without getting punished — Day 44 of Uneek Academy’s networking course, via Adam Galinsky. The range of acceptable behaviour is not fixed: advocate for someone else first (mama-bear effect), take their perspective, offer options, bring an ally, ask for advice. My version this week: their goal first, my ask second. It landed.',
        story:
          'Galinsky built his twin a “perfect” counteroffer — so assertive the company withdrew the whole deal. Day 44 of Uneek Academy’s networking course: speaking up has a dial. The calibrated ask names their reality, offers two options, and stays firm. My ask went out today in that shape. The answer came back in an hour: yes.',
      },
    },
  },
  {
    id: 'net-d45',
    month: 4,
    week: 7,
    day: 3,
    dayIndex: 45,
    type: 'interactive',
    title: 'When Networking Goes Wrong',
    duration: '12 min',
    summary:
      'Not everyone deserves your five-minute favours. Takers, energy vampires, and awkward collisions need scripts — today you get them.',
    concepts: ['Takers', 'Boundaries', 'Graceful disengagement'],
    exercise:
      'Identify one relationship in your web that costs more than it gives. Write a boundary script for it — warm, firm, specific — and use it this week if needed. Jot what happened below.',
    tryOn:
      'Practise the boundary script out loud once today: “I cannot take that on right now — but I can [small genuine alternative].” And the disengage line: “It was good to see you — I am going to say hello to a few people.”',
    cards: [
      {
        kind: 'hook',
        body: 'Networking advice usually skips the part where people take advantage of you. This lesson does not skip it.',
      },
      {
        kind: 'definition',
        title: 'Takers',
        body: 'In Adam Grant’s framework, people who extract value and rarely return it. Research on teams shows one taker can spoil a group’s willingness to help — the “bad apple” effect. Your network needs fences as much as it needs watering.',
      },
      {
        kind: 'example',
        title: 'The three scripts',
        items: [
          'The boundary: “I cannot take that on right now — but I can [small genuine alternative].”',
          'The disengage: “It was good to see you — I am going to say hello to a few people.”',
          'The slow-fade: warm when you meet, never committed to projects — for the chronically extracting.',
        ],
      },
      {
        kind: 'story',
        title: 'The favour that became a job',
        body: 'One designer kept saying yes to a contact’s “tiny” requests — which grew into unpaid work and midnight messages. When she finally used the boundary script, the contact pushed back twice, then vanished. She mourned the contact briefly and then noticed: her Tuesdays had returned. The fence had been the friendship’s true test.',
      },
      {
        kind: 'text',
        title: 'Boundaries are relationship information',
        body: 'Good relationships survive your boundaries — they may even deepen, because the terms become honest. Only takers need you boundaryless. A warm no is a filter as much as a fence: who stays after a no is who was actually there.',
      },
      {
        kind: 'text',
        title: 'The awkward collision',
        body: 'You will also meet people you simply dislike or clash with. The professional minimum: civility, brevity, no campaigns. Not every tie is meant to be warm — the web allows neutral threads. Save warmth for those who match it.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Write your two scripts now and say them out loud once. Boundaries rehearsed are boundaries usable.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What does the “bad apple” research show?',
        options: [
          'One taker can spoil a whole group’s willingness to help',
          'Takers eventually reform',
          'Teams ignore takers easily',
          'Takers are the most successful networkers',
        ],
        answer: 0,
        explanation: 'Which is why fences matter as much as watering.',
        concept: 'Takers',
      },
      {
        kind: 'truefalse',
        question: 'If a contact reacts badly to a reasonable boundary, the boundary was wrong.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Who stays after a no is who was actually there.',
        concept: 'Boundaries',
      },
      {
        kind: 'scenario',
        question: 'A contact’s “tiny” requests have grown into unpaid work at midnight. Best move?',
        options: [
          'The boundary script — warm, firm, with a small genuine alternative — and hold it',
          'Keep saying yes and hope it stops',
          'Ghost them abruptly without a word',
          'Agree publicly and delay privately forever',
        ],
        answer: 0,
        explanation: 'Warm no, small yes where honest; the pushback twice and vanish is the test result.',
        concept: 'Graceful disengagement',
      },
    ],
    share: {
      hook: 'Your web needs fences as much as it needs water.',
      question: 'Which relationship in your web costs more than it gives?',
      posts: {
        reflective:
          'Day 45 of Uneek Academy’s networking course — the skipped chapter: takers. One bad apple spoils a group’s generosity (Grant’s research). Scripts: “I cannot take that on right now — but I can…” / “It was good to see you — I am going to say hello to a few people.” Used the first one this week. The pushback tested the fence; my Tuesdays came back. Boundaries are relationship information.',
        direct:
          'Networking advice usually skips the part where people take advantage. Day 45 of Uneek Academy’s networking course does not. Takers exist; fences are part of the craft. Warm no, small genuine alternative, disengage line ready. Who stays after a no is who was actually there. Rehearse your scripts today.',
        story:
          'A contact’s “tiny” requests grew into unpaid work and midnight messages. When she finally said “I cannot take that on right now”, he pushed back twice and vanished. Her Tuesdays returned. Day 45 of Uneek Academy’s networking course: the fence was the friendship’s true test. Not every tie needs warmth — some need only civility and brevity.',
      },
    },
  },
  {
    id: 'net-d46',
    month: 4,
    week: 7,
    day: 4,
    dayIndex: 46,
    type: 'video',
    video: {
      youtubeId: 'RcGyVTAoXEU',
      title: 'How to make stress your friend',
      by: 'Kelly McGonigal · TEDGlobal 2013',
      note: '37M+ views on the science of stress — including the finding that matters most for networking: under stress, humans are wired to connect.',
    },
    title: 'Stress, and the Urge to Connect',
    duration: '12 min',
    summary:
      'Big rooms, hard asks, high stakes — the stress response is part of the deal. McGonigal shows the hidden side of stress biology: the tend-and-befriend impulse.',
    concepts: ['Stress response', 'Tend-and-befriend', 'Reframing'],
    reflection:
      'McGonigal’s reframe: stress is your body mobilising energy — and the urge under it is to connect. What if the nerves before your next big room were read as readiness? Try the reframe once.',
    tryOn:
      'Before one stressful social moment this week, say the reframe out loud: “This is my body getting me ready — and the urge is to reach out, not to hide.” Then reach out to one ally at the event.',
    cards: [
      {
        kind: 'hook',
        body: 'Stress before a big room feels like danger. Your body is actually handing you a social tool — if you know the biology.',
      },
      {
        kind: 'text',
        title: 'The study that changed the story',
        body: 'A tracking study of 30,000 adults found: high stress raised the risk of dying — but only for people who also believed stress was harmful. Those who experienced high stress without the fear belief had among the lowest mortality in the study. Beliefs about stress shaped outcomes.',
      },
      {
        kind: 'definition',
        title: 'Tend-and-befriend',
        body: 'Under stress, humans release oxytocin as well as adrenaline — the urge is not only fight-or-flight but to connect, protect, and reach out. The nervous system’s stress plan is social.',
      },
      {
        kind: 'story',
        title: 'The shaking hands at the gala',
        body: 'A fundraiser’s hands shook before her first donor gala. She remembered the reframe — “this is my body getting me ready” — and turned to the person beside her with shaking hands and an honest: “First big event — slightly terrified.” He laughed warmly: “Me too. Let us be terrified together.” They entered the room as allies. The stress had delivered exactly the connection it prepared.',
      },
      {
        kind: 'example',
        title: 'The reframe in the wild',
        items: [
          'Before the mixer: “This energy is readiness.”',
          'Before the ask: “My heart is loud because this matters — loud is fuel.”',
          'At the edge of the room: “The urge is to reach out — one ally is enough.”',
          'After: “I survived and connected — file that under did-not-die.”',
        ],
      },
      {
        kind: 'text',
        title: 'Where this fits the course',
        body: 'Every bravery day in weeks 1–2 was built on exposure. This is the body-level version: change your relationship with the activation itself. The calmest networkers are not un-stressed; they are stress-literate.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Choose your stressful social moment this week and write your reframe line. Say it out loud once before the moment — the voice helps.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What did the 30,000-adult study find about stress?',
        options: [
          'High stress was deadly mainly for those who believed stress was harmful',
          'Stress is always deadly regardless of belief',
          'Stress has no health effects',
          'Only physical stress matters',
        ],
        answer: 0,
        explanation: 'The belief about stress shaped the outcome — hence the reframe.',
        concept: 'Reframing',
      },
      {
        kind: 'truefalse',
        question: 'Tend-and-befriend means stress pushes humans to connect and protect, not only fight or flee.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'The stress system is social at its core — reach out is a stress response.',
        concept: 'Tend-and-befriend',
      },
      {
        kind: 'scenario',
        question: 'Your hands shake before entering a big event. What does the lesson teach?',
        options: [
          'Reframe (“this is my body getting me ready”) and reach out to one person — even honestly',
          'Hide the shaking and avoid speaking to anyone',
          'Leave and try again another day',
          'Take a deep breath and pretend you feel nothing',
        ],
        answer: 0,
        explanation: 'The fundraiser story: honest shaking hands became an alliance in ten seconds.',
        concept: 'Stress response',
      },
    ],
    share: {
      hook: 'Under stress, the human urge is to reach out — not only to hide.',
      question: 'What stressful social moment could you reframe this week?',
      posts: {
        reflective:
          'Day 46 of Uneek Academy’s networking course with Kelly McGonigal: stress is your body mobilising readiness — and the biology pushes toward connection (tend-and-befriend), not just escape. The 30,000-adult study: the belief that stress is harmful was the killer. Reframed before a hard room today — “this is my body getting me ready” — and reached for one ally. Hands still shook. Room went fine.',
        direct:
          'Nervous before the big room? Good — that is readiness with a bad label. Day 46 of Uneek Academy’s networking course, via Kelly McGonigal (37M views): stress says reach out (oxytocin is in the mix), and the fear of stress itself is the real risk. Reframe once, find one ally, enter. The calm ones are just stress-literate.',
        story:
          'Her hands shook before the first donor gala. “First big event — slightly terrified,” she said to the man beside her. He laughed: “Me too. Let us be terrified together.” Day 46 of Uneek Academy’s networking course: the stress response delivered exactly the connection it prepared for. What is your next gala — and who will you be terrified with?',
      },
    },
  },
  {
    id: 'net-d47',
    month: 4,
    week: 7,
    day: 5,
    dayIndex: 47,
    type: 'reading',
    title: 'Cross-Cultural Rooms',
    duration: '10 min',
    summary:
      'Global networks fail on translation, not intention. Today: the dimensions that differ across cultures — and the humility that covers the gap.',
    concepts: ['High-context & low-context', 'Cultural humility', 'Adaptation'],
    tryOn:
      'Learn two norms of someone else’s culture this week — from a colleague, a friend, a source you trust — and ask one genuine question about them: “What is considered respectful where you are from?” Curiosity is the universal courtesy.',
    cards: [
      {
        kind: 'hook',
        body: 'The same sentence — direct or indirect, warm or efficient — can build a bridge in one culture and burn one in another. Intention is not translation.',
      },
      {
        kind: 'definition',
        title: 'High-context & low-context',
        body: 'Anthropologist Edward T. Hall’s distinction: low-context cultures (e.g., US, Germany, Netherlands) say things plainly; high-context cultures (e.g., Japan, Nigeria’s Yoruba etiquette, Arab cultures) layer meaning in context, tone, and relationship. Neither is better; each is legible to itself.',
      },
      {
        kind: 'example',
        title: 'Where it bites in networking',
        items: [
          'The direct ask: efficient in Amsterdam, abrasive in Tokyo — soften with context and relationship first.',
          'The polite “maybe”: a real no in high-context settings — read the music, not only the words.',
          'Silence: rudeness in some rooms, respect in others.',
          'Names and titles: first-name fastness reads friendly in one place and presumptuous in another.',
        ],
      },
      {
        kind: 'story',
        title: 'The deal that needed tea',
        body: 'An engineer flew in, opened her laptop in the first meeting, and began with the agenda — efficiency itself. The meeting went politely nowhere for three visits. On the fourth, she closed the laptop and asked about the host’s family and the region’s history. The deal began over tea. Nothing about her proposal had been wrong; the sequence had been.',
      },
      {
        kind: 'definition',
        title: 'Cultural humility',
        body: 'Not knowing another culture “correctly” — that is a stereotype in a nice hat — but holding your own norms lightly, asking instead of assuming, and repairing gracefully when you misstep. “Please tell me if I am doing this wrong” travels well everywhere.',
      },
      {
        kind: 'text',
        title: 'The universal floor',
        body: 'Under every cultural style, the fundamentals from this course hold: warmth is judged first, attention is care, names land, curiosity invites. Cultural skill is not a new code to master — it is the fundamentals, applied with a lighter grip.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Choose who to learn from this week and write your question now. One genuine question beats a etiquette guide read twice.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What does “high-context” communication rely on?',
        options: [
          'Meaning layered in tone, relationship, and situation — not only words',
          'Very long emails',
          'Written contracts only',
          'Speaking loudly',
        ],
        answer: 0,
        explanation: 'Hall’s dimension — read the music, not only the lyrics.',
        concept: 'High-context & low-context',
      },
      {
        kind: 'truefalse',
        question: 'Cultural humility means learning the correct rules of every culture.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'It means holding norms lightly, asking, and repairing — stereotypes in a nice hat are still stereotypes.',
        concept: 'Cultural humility',
      },
      {
        kind: 'scenario',
        question: 'A colleague from a high-context culture says “maybe, we will see” to your proposal. Best reading?',
        options: [
          'Likely a soft no or a need for more relationship/context — do not push for a hard answer now',
          'A definite yes to be confirmed later',
          'They did not understand the proposal',
          'They are being dishonest',
        ],
        answer: 0,
        explanation: 'Read the music; bring warmth and patience rather than pressure.',
        concept: 'Adaptation',
      },
    ],
    share: {
      hook: 'Intention is not translation. Warmth travels; assumptions do not.',
      question: 'Whose cultural norms could you learn about this week?',
      posts: {
        reflective:
          'Day 47 of Uneek Academy’s networking course: cross-cultural rooms. Hall’s high- vs low-context — the direct ask that builds a bridge in one culture burns one in another. The engineer who closed her laptop and asked about the family: nothing was wrong with her proposal, only the sequence. Cultural humility = hold your norms lightly, ask, repair. My question this week: “What is considered respectful where you are from?”',
        direct:
          'Global networks fail on translation, not intention. Day 47 of Uneek Academy’s networking course — high-context vs low-context, the polite “maybe” that means no, silence that means respect. The floor holds everywhere: warmth, attention, names, curiosity. Plus one line that travels well: “Please tell me if I am doing this wrong.”',
        story:
          'She opened her laptop in meeting one and began with the agenda. Three visits of polite nothing. On the fourth she closed it and asked about the host’s family. The deal began over tea. Day 47 of Uneek Academy’s networking course: the proposal was never wrong; the sequence was. Two questions about someone else’s norms — that is this week’s homework.',
      },
    },
  },
  {
    id: 'net-d48',
    month: 4,
    week: 7,
    day: 6,
    dayIndex: 48,
    type: 'review',
    title: 'Week 7 Review: Difficult Rooms',
    duration: '10 min',
    summary:
      'Five ideas: the hidden ladder, widening your range, boundaries for takers, stress as social fuel, and cross-cultural humility.',
    concepts: ['Week 7 synthesis'],
    tryOn:
      'Take one hard room this week with the full toolkit: read the ladder, reframe the nerves, widen your range with perspective, hold your fences, and stay humble across differences.',
    reviewTopics: [
      'Status & the hidden ladder',
      'The range of acceptable behaviour',
      'Takers & boundaries',
      'Stress reframing & tend-and-befriend',
      'Cross-cultural rooms',
    ],
    cards: [
      {
        kind: 'hook',
        body: 'The hardest rooms are where networks are actually decided — and you now hold tools for all of them.',
      },
      {
        kind: 'list',
        title: 'This week’s five concepts',
        items: [
          'The ladder — read attention allocation; climb with usefulness (d43)',
          'Your range — perspective, flexibility, allies, advice, advocacy (d44)',
          'Fences — warm nos against takers; who stays after a no (d45)',
          'Stress — readiness with a bad label; reach out under pressure (d46)',
          'Humility — context over assumptions; ask and repair (d47)',
        ],
      },
      {
        kind: 'text',
        title: 'How the pieces fit',
        body: 'The ladder tells you where you stand. The range tells you what you can say. Fences tell you who stays. Stress fuel tells you how to enter. Humility tells you how to be across difference. Next week: you assemble all of it into mastery.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'One hard room, full toolkit. Write one line afterwards: which tool carried the day?',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What carries you through the hardest rooms?',
        options: [
          'A stack of tools: ladder-reading, range-widening, fences, stress literacy, humility',
          'Natural confidence',
          'Having the most impressive credentials',
          'Avoiding hard rooms entirely',
        ],
        answer: 0,
        explanation: 'Skills stack — the stack is this week’s review.',
        concept: 'Week 7 synthesis',
      },
      {
        kind: 'truefalse',
        question: 'Nerves before a big room mean you are not ready.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Readiness with a bad label — reframe and reach out.',
        concept: 'Week 7 synthesis',
      },
      {
        kind: 'scenario',
        question: 'A cross-cultural negotiation stalls politely. Best next move?',
        options: [
          'Slow down, invest in relationship and context, ask humble questions',
          'Push for a clear answer today',
          'Assume bad faith',
          'Send a more detailed contract',
        ],
        answer: 0,
        explanation: 'Sequence before content — humility covers the gap.',
        concept: 'Week 7 synthesis',
      },
    ],
    share: {
      hook: 'The hardest rooms decide the biggest outcomes. Bring the whole toolkit.',
      question: 'Which tool carried you through a hard room this week?',
      posts: {
        reflective:
          'Week 7 of Uneek Academy’s networking course, reviewed: the hidden ladder, Galinsky’s range tools, fences for takers, stress reframing (tend-and-befriend), cross-cultural humility. The hardest rooms are where networks are decided — and tools beat talent there. Ran the full stack in one difficult meeting: read the ladder, reframed the nerves, offered options. It carried the day. Week 8: mastery and the capstone.',
        direct:
          'Week 7 done (Uneek Academy, networking): difficult rooms. Read the ladder, widen your range, fence the takers, reframe the nerves, hold your norms lightly. The advanced module of a surprisingly deep course. One week left — and it ends with a map and a plan, not a certificate.',
        story:
          'I used to think hard rooms sorted people by confidence. Week 7 of Uneek Academy’s networking course sorted that myth: they sort people by toolkit. Ladder, range, fences, stress literacy, humility. This week I used all five in one room. The room went differently. Week 8: assembling the mastery.',
      },
    },
  },
  {
    id: 'net-d49',
    month: 4,
    week: 7,
    day: 7,
    dayIndex: 49,
    type: 'rest',
    title: 'Rest Day',
    duration: '1 min',
    summary: 'Rest is part of the program, not a break from it.',
    concepts: [],
    cards: [],
    questions: [],
    restMessage:
      'Seven weeks — one week to mastery. Today, rest is the work. The calm you are learning to hold starts with days exactly like this. Tick rest and the streak continues.',
    share: {
      hook: 'One week left. The map is coming.',
      posts: { reflective: '', direct: '', story: '' },
    },
  },
];
