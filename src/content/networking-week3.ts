import type { Lesson } from '../lib/types';

/** Networking: The Psychology of Connection — Week 3 (fully seeded). */
export const networkingWeek3: Lesson[] = [
  {
    id: 'net-d15',
    month: 2,
    week: 3,
    day: 1,
    dayIndex: 15,
    type: 'reading',
    title: 'The Three-Question Ladder',
    duration: '10 min',
    summary:
      'Starting a conversation is not a talent — it is a ladder of three questions. Today you get the exact rungs.',
    concepts: ['Situational opener', 'Open questions', 'Conversation ladder'],
    tryOn:
      'Run the first two rungs with one person today: situational opener (“What brought you here today?” or “How are you finding this place?”), then one open follow-up (“What has been the best part for you?”).',
    cards: [
      {
        kind: 'hook',
        body: 'Nobody knows what to say at the start of a conversation. The people who seem natural are just holding a ladder.',
      },
      {
        kind: 'definition',
        title: 'The three-question ladder',
        body: 'Rung 1: a situational opener about the shared context. Rung 2: an open follow-up about their experience of it. Rung 3: a deeper open question about their story (“How did you get into that?”). Climb only as high as the conversation invites.',
      },
      {
        kind: 'example',
        title: 'The rungs in the wild',
        body: '“What brought you here today?” (rung 1) — “The workshop, mostly — and the people.” — “What made the workshop worth it for you?” (rung 2) — “It finally explained something in my own team.” — “Oh — how did you get into that line of work?” (rung 3). Each question earns the next. No performance required.',
      },
      {
        kind: 'text',
        title: 'Why open questions work',
        body: 'Closed questions (“Did you come far?”) end in one word and stall. Open questions starting with what, how, why, where invite stories — and people who tell you stories start to like you, because you are the person they got to think out loud with.',
      },
      {
        kind: 'story',
        title: 'The worst opener, the best opener',
        body: 'The worst opener Kola ever used was a rehearsed joke; the table went quiet and he had to survive it. The best was accidental: “Sorry — what is that you are drinking? It looks serious.” The man laughed, explained his tea for two minutes, and they talked for an hour. Context does the work that cleverness cannot.',
      },
      {
        kind: 'text',
        title: 'The safety rails',
        body: 'One rule keeps the ladder honest: each question must be one you would happily answer yourself, asked like you want the answer. Curiosity is the technique. If you are running questions like software, people can feel it — and the ladder is useless without genuine interest.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Write your three rungs now for the place you will be today. Situational opener + open follow-up is enough for almost any room.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What is a situational opener?',
        options: [
          'A question about the shared context you are both standing in',
          'A rehearsed joke',
          'A question about their salary',
          'A statement about your achievements',
        ],
        answer: 0,
        explanation: 'The room itself is the safest topic there is — it is why you are both there.',
        concept: 'Situational opener',
      },
      {
        kind: 'truefalse',
        question: 'Open questions usually begin with what, how, why, or where.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'They invite stories; stories create connection.',
        concept: 'Open questions',
      },
      {
        kind: 'scenario',
        question: 'Your rung-2 question gets a shrug and one word. What now?',
        options: [
          'Climb down gracefully — return to rung 1 with a new angle, or exit kindly',
          'Force rung 3 immediately',
          'Fill the silence with your own stories',
          'Try the rehearsed joke',
        ],
        answer: 0,
        explanation: 'The ladder is an invitation, not a script — match the conversation’s willingness.',
        concept: 'Conversation ladder',
      },
    ],
    share: {
      hook: 'Natural conversationalists are just holding a ladder.',
      question: 'What situational opener fits the place you will be today?',
      posts: {
        reflective:
          'Day 15 of Uneek Academy’s networking course gave me a ladder instead of courage advice: situational opener → open follow-up → story question. “What brought you here?” earns “How did you get into that?” if the conversation invites it. The kicker: ask questions you would answer yourself, like you mean it. Tried rungs 1–2 at lunch. The man explained his tea for two minutes and we talked for an hour. What is your opener?',
        direct:
          'Stop hunting for the perfect opening line. Day 15 of Uneek Academy’s networking course: rungs. 1 — situational (“What brought you here?”). 2 — open follow-up (“What has been the best part?”). 3 — their story (“How did you get into that?”). Climb only as high as invited. Curiosity is the technique; questions are just its shape.',
        story:
          'Kola’s worst opener was a rehearsed joke — the table went silent and he had to live in it. His best was accidental: “What is that you are drinking? It looks serious.” Two minutes later the man was explaining his tea; an hour later they were still talking. Day 15 of Uneek Academy’s networking course: context does what cleverness cannot.',
      },
    },
  },
  {
    id: 'net-d16',
    month: 2,
    week: 3,
    day: 2,
    dayIndex: 16,
    type: 'video',
    video: {
      youtubeId: 'R1vskiVDwl4',
      title: '10 ways to have a better conversation',
      by: 'Celeste Headlee · TEDxCreativeCoast',
      note: 'A radio host’s ten rules for conversations that actually connect — 30M+ views, and rule number nine is worth the whole talk.',
    },
    title: 'Ten Rules, One Conversation',
    duration: '12 min',
    summary:
      'Celeste Headlee has interviewed thousands of people. Her ten rules distill what every good connector does naturally — and what everyone else can learn.',
    concepts: ['Active listening', 'Conversational flow', 'Being present'],
    reflection:
      'Headlee says: enter every conversation assuming you have something to learn. Which rule do you break most? Pick one to practise this week.',
    tryOn:
      'Pick one Headlee rule to run all day (suggestions: “Don’t multitask” or “Use open-ended questions”). At day’s end, note one conversation it changed.',
    cards: [
      {
        kind: 'hook',
        body: 'We listen with the intent to reply, not to understand. A radio host noticed. Then she wrote ten rules that fix most of it.',
      },
      {
        kind: 'list',
        title: 'The ten rules (compressed)',
        items: [
          'Don’t multitask — be in the moment or leave the moment',
          'Don’t pontificate — enter assuming you have something to learn',
          'Use open-ended questions — who, what, when, where, how',
          'Go with the flow — let thoughts come and go without chasing them',
          'If you don’t know, say you don’t know',
          'Don’t equate your experience with theirs — it is not about you',
          'Try not to repeat yourself — it is filler',
          'Stay out of the weeds — nobody cares about the dates and names',
          'Listen — the hardest one on the list',
          'Be brief — short enough to stay interesting, long enough to cover it',
        ],
      },
      {
        kind: 'text',
        title: 'Rule nine deserves its own room',
        body: 'Most of us listen while composing. The other person can feel the difference between attention and loading. Real listening means letting their sentence finish and change you slightly before your sentence begins. It is the single behaviour people remember about a conversation.',
      },
      {
        kind: 'story',
        title: 'The interview that became a friendship',
        body: 'A journalist interviewed a retired teacher for fifteen minutes and asked one open question too many — the teacher cried, then laughed, and said nobody had asked him anything in years. They had lunch every month after that. She had used no technique beyond rule nine and rule two.',
      },
      {
        kind: 'example',
        title: 'Being present in body',
        body: 'Phone away — visibly. Angle toward them. Let silence sit for one beat before answering: it shows the answer was considered, not retrieved. Presence is mostly subtraction.',
      },
      {
        kind: 'text',
        title: 'What the rules are really saying',
        body: 'Ten variations of one instruction: make it about them. That is also the whole art of networking. The most interesting person in any room is the one who finds everyone else interesting — and means it.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Choose your rule now and write it where you will see it. One rule, practised all day, beats ten rules admired once.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'According to Headlee, conversations fail most often because…',
        options: [
          'We listen with the intent to reply rather than to understand',
          'We do not know enough interesting facts',
          'We speak too slowly',
          'We avoid eye contact',
        ],
        answer: 0,
        explanation: 'The loading-for-your-turn feeling is the number one killer of connection.',
        concept: 'Active listening',
      },
      {
        kind: 'truefalse',
        question: 'When someone shares an experience, equating it with your own shows you understand them.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Rule six: don’t equate — it steals the moment; their experience is not yours.',
        concept: 'Conversational flow',
      },
      {
        kind: 'scenario',
        question: 'Mid-conversation you realise you missed their point. What fits Headlee’s rules?',
        options: [
          'Say so plainly and ask them to say it again',
          'Nod and hope',
          'Talk about your similar experience',
          'Change the subject',
        ],
        answer: 0,
        explanation: 'Honesty and attention beat pretending — every time.',
        concept: 'Being present',
      },
    ],
    share: {
      hook: 'We listen with the intent to reply, not to understand.',
      question: 'Which Headlee rule do you break the most?',
      posts: {
        reflective:
          'Day 16 of Uneek Academy’s networking course: Celeste Headlee’s ten rules of conversation, from thousands of interviews. The killer line: we listen with the intent to reply, not to understand. I practised one rule all day — “Don’t multitask” — and my lunch conversation got noticeably better. One rule, many repetitions. Which rule do you break the most?',
        direct:
          'Want better conversations this week? Steal one rule from Celeste Headlee (30M views worth of radio-host wisdom): enter assuming you have something to learn. Or: stop multitasking. Or: be brief. Day 16 of Uneek Academy’s networking course — one rule, practised all day, beats ten admired once.',
        story:
          'A journalist asked one open question too many and a retired teacher cried — then laughed — and said nobody had asked him anything in years. They had lunch every month after that. Day 16 of Uneek Academy’s networking course: no clever technique, just rules two and nine — curiosity and real listening. My rule today: be present or be gone.',
      },
    },
  },
  {
    id: 'net-d17',
    month: 2,
    week: 3,
    day: 3,
    dayIndex: 17,
    type: 'interactive',
    title: 'Listening People Can Feel',
    duration: '12 min',
    summary:
      'There is a difference between hearing words and being felt listening. Today you learn the felt version — with a two-minute drill.',
    concepts: ['Reflective listening', 'Encouragers', 'Presence'],
    exercise:
      'Run the two-minute listener drill in one real conversation today: two minutes of full listening, one paraphrase (“So what I am hearing is…”), one open follow-up. Jot how the person responded below.',
    tryOn:
      'In one conversation, do not plan your next sentence. When they finish, paraphrase once (“So what I am hearing is…”) and ask one follow-up. Watch their face.',
    cards: [
      {
        kind: 'hook',
        body: 'Some people listen and conversations die around them. Some people listen and conversations go deeper than anyone planned. The difference is three small behaviours.',
      },
      {
        kind: 'definition',
        title: 'Reflective listening',
        body: 'Returning what you heard — in their words where possible — before adding anything of your own. “So what I am hearing is the deadline changed and nobody told the team.” It proves attention better than any “mm-hm”.',
      },
      {
        kind: 'example',
        title: 'Encouragers',
        body: 'The quiet fuel of good conversations: “mm-hm”, “go on”, “that makes sense”, a nod, a well-timed silence. They say keep going without stealing the wheel. Monosyllables, major effect.',
      },
      {
        kind: 'story',
        title: 'The advice nobody wanted',
        body: 'A manager heard a problem and immediately solved it — beautifully. The employee left quieter than she came. The next week he tried the drill instead: two minutes, one paraphrase, one question. She solved it herself, out loud, and thanked him for “the best conversation in months”. He had done less and been heard more.',
      },
      {
        kind: 'text',
        title: 'The felt difference',
        body: 'People can feel the difference between attention and loading. Felt listening lowers the other person’s pace and raises their openness — you will see it in slower speech, longer sentences, more eye contact. Those are the signals of trust forming in real time.',
      },
      {
        kind: 'text',
        title: 'The discipline of the empty head',
        body: 'You cannot listen and rehearse at the same time — the working memory simply will not do both. The drill works by giving your brain a job (what are they really saying?) so it cannot take the other one (what will I say next?).',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Choose your conversation for the drill now — a real one, with someone safe. Two minutes. Paraphrase. One question. Then stop and notice what changed.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What does a paraphrase do that “mm-hm” cannot?',
        options: [
          'Proves you were tracking the content, not just making noise',
          'Makes you look smarter',
          'Ends the conversation faster',
          'Shows agreement',
        ],
        answer: 0,
        explanation: 'It returns their meaning — attention made visible.',
        concept: 'Reflective listening',
      },
      {
        kind: 'truefalse',
        question: 'Encouragers like “go on” interrupt the speaker’s flow.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'They fuel it — they keep the wheel with the speaker.',
        concept: 'Encouragers',
      },
      {
        kind: 'scenario',
        question: 'A friend describes a problem and you have the perfect solution. The lesson says…',
        options: [
          'Listen first — paraphrase and ask — and let the solution emerge in its time',
          'Deliver the solution immediately to save time',
          'Tell a story about your similar problem',
          'Change the subject to something lighter',
        ],
        answer: 0,
        explanation: 'The manager’s story: being felt listening beats being helpful quickly.',
        concept: 'Presence',
      },
    ],
    share: {
      hook: 'People can feel the difference between attention and loading.',
      question: 'Who could you run the two-minute listener drill with today?',
      posts: {
        reflective:
          'Day 17 of Uneek Academy’s networking course: the two-minute listener drill. No planning my next sentence — just track meaning, paraphrase (“So what I am hearing is…”), one follow-up. My friend slowed down mid-sentence and went deeper than she planned. Felt listening is a real, observable thing. Try it once today and watch their face change.',
        direct:
          'There is hearing, and there is listening people can feel. Day 17 of Uneek Academy’s networking course: three behaviours — paraphrase, encouragers, empty head (no rehearsing). Two minutes of it beats twenty minutes of clever advice. The drill is in the lesson. Your conversations will not survive it — they will upgrade.',
        story:
          'A manager solved his employee’s problem beautifully. She left quieter than she came. The next week he ran the drill instead: two minutes, one paraphrase, one question. She solved it herself and called it the best conversation in months. Day 17 of Uneek Academy’s networking course: do less, hear more.',
      },
    },
  },
  {
    id: 'net-d18',
    month: 2,
    week: 3,
    day: 4,
    dayIndex: 18,
    type: 'video',
    video: {
      youtubeId: 'eIho2S0ZahI',
      title: 'How to speak so that people want to listen',
      by: 'Julian Treasure · TEDGlobal 2013',
      note: 'One of the most-watched talks ever — the seven sins that make people stop listening, and the four foundations that make them start.',
    },
    title: 'Speak So People Lean In',
    duration: '12 min',
    summary:
      'Networking is not only asking questions — sometimes the room needs your voice. Julian Treasure shows how to make your words land.',
    concepts: ['HAIL foundations', 'Speaking habits', 'Vocal presence'],
    reflection:
      'Treasure’s four foundations spell HAIL: Honesty, Authenticity, Integrity, Love. Which one is your strongest? Which needs work?',
    tryOn:
      'Before one conversation today, run the “so what?” filter: know the one point you want to make. Then say it in a single sentence without hedging. Clarity is a kindness.',
    cards: [
      {
        kind: 'hook',
        body: 'The human voice is the most powerful sound in the world — it is the only one that can start a war or say “I love you”. And yet people stop listening to us all the time.',
      },
      {
        kind: 'definition',
        title: 'The seven deadly sins of speaking',
        body: 'Gossip, judging, negativity, complaining, excuses, exaggeration (embroidery), dogmatism. Each one is a reason people quietly withdraw their attention. Not moralising — mechanics.',
      },
      {
        kind: 'list',
        title: 'HAIL: the four foundations',
        items: [
          'Honesty — be straight and clear in what you say',
          'Authenticity — stand in your own truth, be yourself',
          'Integrity — be your word; do what you say',
          'Love — wish people well; care beats cleverness',
        ],
      },
      {
        kind: 'text',
        title: 'The instrument: how you say it',
        body: 'Register (deep is calm), timbre (warm is trusted), prosody (monotone is wallpaper), pace (slow down for weight), volume (quiet can be the loudest thing in a room). You do not need training — you need one variable at a time.',
      },
      {
        kind: 'story',
        title: 'The quietest room-winner',
        body: 'At a noisy panel, one speaker never raised her voice. When she had a point, she slowed down, dropped her volume half a step, and the room leaned in to hear her. The loudest panellist had the most airtime and the least audience. Presence is not volume.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Run the “so what?” filter before your next real conversation: one point, one sentence. Then say it plainly. If gossip or complaining shows up in your day, notice it — noticing is the first repair.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What does HAIL stand for?',
        options: [
          'Honesty, Authenticity, Integrity, Love',
          'Humour, Attention, Interest, Listening',
          'Haste, Accuracy, Intensity, Length',
          'Head, Arms, Legs — body language',
        ],
        answer: 0,
        explanation: 'Treasure’s four foundations of powerful speaking.',
        concept: 'HAIL foundations',
      },
      {
        kind: 'truefalse',
        question: 'To be heard in a loud room, the best move is always to speak louder.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Slower pace and lower volume often pull more attention — presence beats volume.',
        concept: 'Vocal presence',
      },
      {
        kind: 'scenario',
        question: 'You catch yourself complaining three times before lunch. What is the first repair?',
        options: [
          'Notice it without drama — awareness is the first fix',
          'Promise never to complain again',
          'Criticise others who complain',
          'Speak less all day',
        ],
        answer: 0,
        explanation: 'The sins lose power when seen — Treasure’s own point is awareness first.',
        concept: 'Speaking habits',
      },
    ],
    share: {
      hook: 'Presence is not volume. Clarity is a kindness.',
      question: 'Which foundation of HAIL is your strongest — and which needs work?',
      posts: {
        reflective:
          'Day 18 of Uneek Academy’s networking course with Julian Treasure: the seven sins that make people stop listening (gossip, judging, negativity…) and the four foundations that make them lean in — HAIL: Honesty, Authenticity, Integrity, Love. My try-on: the “so what?” filter — one point, one clean sentence, no hedging. The quiet panellist who slowed down won the room. Which foundation is your strongest?',
        direct:
          'Want people to lean in when you talk? Julian Treasure, 71M views: drop the seven sins (gossip, excuses, dogmatism…), stand on HAIL (Honesty, Authenticity, Integrity, Love), and slow down. Day 18 of Uneek Academy’s networking course. My rule this week: one point, one sentence, said plainly.',
        story:
          'The loudest panellist had the most airtime and the least audience. When she spoke, she dropped her volume half a step, slowed down — and the room leaned in. Day 18 of Uneek Academy’s networking course: presence is not volume. HAIL is the foundation. “So what?” is the filter. What will you say today that deserves to land?',
      },
    },
  },
  {
    id: 'net-d19',
    month: 2,
    week: 3,
    day: 5,
    dayIndex: 19,
    type: 'reading',
    title: 'The Graceful Exit (and the Way Back In)',
    duration: '10 min',
    summary:
      'Every good networker has two scripts: how to leave a conversation well — and how to return to one later. Today, both.',
    concepts: ['Exit lines', 'Conversational close', 'Re-entry'],
    tryOn:
      'Exit one conversation today with a real script: “It was lovely talking with you — I do not want to hold you all evening. Enjoy the rest of the event!” Then actually leave. The exit is the test.',
    cards: [
      {
        kind: 'hook',
        body: 'The hardest thirty seconds in networking is not the hello. It is the exit — and doing it badly turns a good conversation into a trap.',
      },
      {
        kind: 'text',
        title: 'Why exits matter more than entrances',
        body: 'A graceful exit is a gift: it releases both of you while the conversation is still good. Staying too long drains the goodwill you built. The memory of an interaction is heavily weighted by its ending — end well, and the whole thing glows.',
      },
      {
        kind: 'definition',
        title: 'The exit formula',
        body: 'Warmth + reason + forward hook: “It was lovely talking with you (warmth) — I do not want to hold you all evening (reason). Enjoy the rest of the event! (forward)” Variants: the refill exit (“I am going to grab a drink — lovely to meet you”), the host exit (“I promised I would say hello to the host — let us talk again”).',
      },
      {
        kind: 'example',
        title: 'The way back in',
        body: 'Re-entry is easier than entry: “Bisi — hello again! How did the rest of the evening treat you?” You already have shared context. At events, plan one re-entry: return to someone you liked rather than forcing a new approach. Rooms reward returners.',
      },
      {
        kind: 'story',
        title: 'The forty-minute trap',
        body: 'Tunde once stayed in a conversation forty minutes past its natural end because he feared being rude. By the end both were exhausted and the contact felt like an obligation. Compare: the man who said “I promised myself I would meet three new people tonight — it was lovely talking with you” and left at eight minutes. They talked again later with pleasure. Short and warm beats long and sticky.',
      },
      {
        kind: 'text',
        title: 'The honest version',
        body: 'You may use any of these scripts verbatim. They are not lies — they are the true shape of the situation: you are glad you talked, and both of you came to a room full of people. Honesty plus warmth is the entire social technology.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Pick your exit script now and say it once out loud so it sits in your mouth. When you use it, notice: almost nobody is offended. Relief is the usual response.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What are the three parts of the exit formula?',
        options: [
          'Warmth, reason, forward hook',
          'Apology, escape, avoidance',
          'Compliment, promise, leave',
          'Question, answer, goodbye',
        ],
        answer: 0,
        explanation: 'Glad we talked + fair reason + a warm forward wish.',
        concept: 'Exit lines',
      },
      {
        kind: 'truefalse',
        question: 'Staying in a conversation as long as possible is the polite choice.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Endings colour memories — exit while it is still good.',
        concept: 'Conversational close',
      },
      {
        kind: 'scenario',
        question: 'You see someone later in the event you enjoyed earlier. What is the move?',
        options: [
          'Re-enter warmly with shared context: “How did the rest of the evening treat you?”',
          'Pretend not to see them to avoid awkwardness',
          'Restart from scratch with a new introduction',
          'Wave from across the room and leave',
        ],
        answer: 0,
        explanation: 'Re-entry is the easiest approach there is — you already have context.',
        concept: 'Re-entry',
      },
    ],
    share: {
      hook: 'A graceful exit is a gift. End well, and the whole conversation glows.',
      question: 'Which exit script fits you best?',
      posts: {
        reflective:
          'Day 19 of Uneek Academy’s networking course taught me the exit: warmth + reason + forward hook. “It was lovely talking with you — I do not want to hold you all evening.” I used it today and the other person looked visibly relieved. Short and warm beats long and sticky — endings colour the whole memory. Which exit script fits you?',
        direct:
          'The hardest 30 seconds in networking is not the hello — it is the exit. Day 19 of Uneek Academy’s networking course: leave while it is still good, with warmth and a reason. My script: “It was lovely talking with you — I do not want to hold you.” Then re-entry later is easy: shared context beats new introductions every time.',
        story:
          'Tunde stayed forty minutes past the natural end of a conversation, fearing rudeness. Both left drained; the contact felt like an obligation. Another man exited at eight minutes — “It was lovely talking with you” — and they talked again later with pleasure. Day 19 of Uneek Academy’s networking course: short and warm beats long and sticky.',
      },
    },
  },
  {
    id: 'net-d20',
    month: 2,
    week: 3,
    day: 6,
    dayIndex: 20,
    type: 'review',
    title: 'Week 3 Review: Conversation Craft',
    duration: '10 min',
    summary:
      'Five ideas: the question ladder, Headlee’s rules, felt listening, HAIL speaking, and graceful exits.',
    concepts: ['Week 3 synthesis'],
    tryOn:
      'Run a complete conversation today at small scale: open with rung 1, listen with the drill, speak with the “so what?” filter, exit with a script. The whole craft, once.',
    reviewTopics: [
      'The three-question ladder',
      'Headlee’s ten rules',
      'Listening people can feel',
      'HAIL & vocal presence',
      'Graceful exits & re-entry',
    ],
    cards: [
      {
        kind: 'hook',
        body: 'You now own the full arc of a conversation: how it starts, how it deepens, how your voice lands, and how it ends well.',
      },
      {
        kind: 'list',
        title: 'This week’s five concepts',
        items: [
          'Conversation ladder — situational opener → open follow-up → story question (d15)',
          'Headlee’s rules — assume you have something to learn; listen to understand (d16)',
          'Reflective listening — paraphrase + encouragers + empty head (d17)',
          'HAIL & presence — honesty, authenticity, integrity, love; pace beats volume (d18)',
          'Exit formula — warmth + reason + forward hook; re-entry is easy (d19)',
        ],
      },
      {
        kind: 'text',
        title: 'How the pieces fit',
        body: 'The ladder gets you in. Listening keeps them talking. HAIL keeps you worth hearing. The exit keeps the whole thing light enough to repeat. Craft, not charisma — every rung is a repeatable behaviour.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Do one complete conversation this weekend — start, depth, voice, exit — and write one line about which part felt most natural. That is your emerging style.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What holds the whole week together?',
        options: [
          'Conversations are craft — repeatable behaviours at every stage',
          'Charisma cannot be learned',
          'Only the opening matters',
          'Prepared speeches win rooms',
        ],
        answer: 0,
        explanation: 'Start, deepen, land, release — each stage has a learnable script.',
        concept: 'Week 3 synthesis',
      },
      {
        kind: 'truefalse',
        question: 'A graceful exit makes the earlier conversation more memorable in a good way.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Endings colour memories — finish warm and the whole interaction glows.',
        concept: 'Week 3 synthesis',
      },
      {
        kind: 'scenario',
        question: 'You must run a whole conversation at small scale this weekend. Correct order?',
        options: [
          'Open (rung 1) → listen deeply → speak plainly (so what?) → exit with warmth',
          'Speak about your work → ask questions → leave quickly',
          'Wait for them to carry it → agree → stay till the end',
          'Open with a joke → impress → exit without words',
        ],
        answer: 0,
        explanation: 'The full arc, in order, once — that is the practice.',
        concept: 'Week 3 synthesis',
      },
    ],
    share: {
      hook: 'Start with a rung. Deepen with attention. Land with honesty. Leave with warmth.',
      question: 'Which part of the conversation arc feels most natural to you?',
      posts: {
        reflective:
          'Week 3 of Uneek Academy’s networking course, reviewed: the question ladder, Headlee’s ten rules, felt listening, HAIL speaking, graceful exits. Conversation as craft — start, deepen, land, release — every stage a repeatable behaviour. Ran one complete conversation this weekend; the listening stage felt most natural. Week 4: turning contacts into relationships. Which stage is yours?',
        direct:
          'Week 3 done (Uneek Academy, networking): conversation craft. Openers, listening, voice, exits — all learnable scripts, zero charisma required. The best line of the week: “We listen with the intent to reply, not to understand.” Next week: follow-up — how contacts become relationships. This is where networks actually start.',
        story:
          'The ladder gets you in; listening keeps them talking; honesty keeps you worth hearing; the exit keeps it light. Week 3 of Uneek Academy’s networking course in one sentence. I ran the full arc at a birthday party — eight minutes, one warm exit, one easy re-entry later. Craft, not charisma. Week 4: the 72-hour follow-up.',
      },
    },
  },
  {
    id: 'net-d21',
    month: 2,
    week: 3,
    day: 7,
    dayIndex: 21,
    type: 'rest',
    title: 'Rest Day',
    duration: '1 min',
    summary: 'Rest is part of the program, not a break from it.',
    concepts: [],
    cards: [],
    questions: [],
    restMessage:
      'Three weeks in — the craft is in your hands now. Today, rest is the work. Good conversations come from unhurried people. Tick rest and the streak continues.',
    share: {
      hook: 'The best conversations happen between people with nowhere to be.',
      posts: { reflective: '', direct: '', story: '' },
    },
  },
];
