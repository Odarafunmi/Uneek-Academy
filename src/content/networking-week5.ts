import type { Lesson } from '../lib/types';

/** Networking: The Psychology of Connection — Week 5 (fully seeded). */
export const networkingWeek5: Lesson[] = [
  {
    id: 'net-d29',
    month: 3,
    week: 5,
    day: 1,
    dayIndex: 29,
    type: 'reading',
    title: 'Your Network Has Layers (5 · 15 · 50 · 150)',
    duration: '10 min',
    summary:
      'You cannot maintain everyone the same way — and trying is why networking exhausts people. Today: the layered map that makes it manageable.',
    concepts: ['Dunbar layers', 'Maintenance budget', 'Tie strength'],
    tryOn:
      'Draft your layers on paper: 5 (the inner circle), 15 (sympathy group), 50 (close), 150 (meaningful). Names only — no perfection needed. The draft is the win; refine it over weeks.',
    cards: [
      {
        kind: 'hook',
        body: 'There is a hard limit to how many people a human brain can hold in real relationship. Knowing the number — and its layers — turns networking from a swamp into a garden.',
      },
      {
        kind: 'definition',
        title: 'Dunbar layers',
        body: 'Anthropologist Robin Dunbar’s research suggests our relationships sit in layers of roughly 5 (intimate support), 15 (sympathy — you grieve with them), 50 (close), and 150 (meaningful contacts). Each layer needs a different rhythm of contact to stay alive.',
      },
      {
        kind: 'text',
        title: 'The maintenance budget',
        body: 'Time and emotional energy are finite — Dunbar’s whole point. The inner five need weekly contact; the fifteen, monthly; the fifty, a few times a year; the hundred-and-fifty, at least once a year with something real. Miss the rhythm and the tie drifts to the layer below. That is not failure — it is the system working.',
      },
      {
        kind: 'story',
        title: 'The man who tried to keep everyone',
        body: 'A consultant answered every message, attended every gathering, and maintained 400 people “properly”. He was exhausted and shallow everywhere. His colleague kept 5-15-50-150 deliberately and could tell you what mattered in each person’s life. He was called warm. The difference was not effort — it was architecture.',
      },
      {
        kind: 'example',
        title: 'What belongs where',
        items: [
          'The 5: people you call at 2 a.m. — invest freely.',
          'The 15: your sympathy group — monthly real contact.',
          'The 50: the close web — seasonal contact with meaning.',
          'The 150: meaningful contacts — one genuine touch a year keeps them warm.',
        ],
      },
      {
        kind: 'text',
        title: 'Why layers free you from guilt',
        body: 'Most networking guilt is unmanaged expectation: we treat all 200 people like the 5. Layers give you permission to love the five deeply, the fifty warmly, and the hundred and fifty lightly — and to let people move between layers as life actually does.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Get one sheet of paper. Four concentric circles. Fill what you can today — the act of drawing it changes how you see your whole web.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What are Dunbar’s four relationship layers (approximate)?',
        options: [
          '5 support · 15 sympathy · 50 close · 150 meaningful',
          '10 · 25 · 100 · 500',
          '1 · 5 · 10 · 20',
          'Family · friends · colleagues · strangers',
        ],
        answer: 0,
        explanation: 'Each layer has its own maintenance rhythm — the map is the management tool.',
        concept: 'Dunbar layers',
      },
      {
        kind: 'truefalse',
        question: 'If a tie drifts to a lower layer, the networking system has failed.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Drift is the system working — people move between layers as life changes.',
        concept: 'Tie strength',
      },
      {
        kind: 'scenario',
        question: 'You feel guilty for “not keeping up” with two hundred people. What is the lesson’s answer?',
        options: [
          'Manage by layer: invest deeply in the few, lightly in the many — guilt becomes a budget problem with a solution',
          'Try harder to maintain everyone equally',
          'Cut most people out entirely',
          'Guilt means you are a bad networker',
        ],
        answer: 0,
        explanation: 'Unmanaged expectation is the real source of the guilt.',
        concept: 'Maintenance budget',
      },
    ],
    share: {
      hook: 'Love the five deeply. Keep the fifty warm. Touch the hundred and fifty lightly.',
      question: 'Who is in your inner five — and when did you last invest there?',
      posts: {
        reflective:
          'Day 29 of Uneek Academy’s networking course: Dunbar layers — 5-15-50-150, each with its own maintenance rhythm. The guilt I felt about “keeping up” was unmanaged expectation: treating 200 people like 5. Drew my circles today on one sheet of paper. Imperfect draft, immediate relief. Love the five deeply, the fifty warmly, the hundred and fifty lightly. Who is in your five?',
        direct:
          'Networking exhausts people who treat every contact like family. Day 29 of Uneek Academy’s networking course: map your layers — 5-15-50-150 — and give each its rhythm. Weekly for the 5, monthly for the 15, seasonal for the 50, yearly with something real for the 150. Architecture beats effort. My map is on one sheet of paper tonight.',
        story:
          'One consultant maintained 400 people “properly” and was exhausted everywhere. His colleague kept 5-15-50-150 deliberately and could tell you what mattered in each person’s life — everyone called him warm. Day 29 of Uneek Academy’s networking course: the difference was not effort, it was architecture. I drew my circles today. The paper is already kinder than the guilt.',
      },
    },
  },
  {
    id: 'net-d30',
    month: 3,
    week: 5,
    day: 2,
    dayIndex: 30,
    type: 'video',
    video: {
      youtubeId: 't7Xr3AsBEK4',
      title: 'Connected, but alone?',
      by: 'Sherry Turkle · TED2012',
      note: 'MIT’s leading researcher on technology and conversation on what phones are doing to our relationships — and how to choose presence.',
    },
    title: 'Together Alone: Choosing Presence',
    duration: '12 min',
    summary:
      'We are connected to everyone and present with no one. Turkle shows the cost — and the practice that restores real contact.',
    concepts: ['Presence', 'Device habits', 'Attention as care'],
    reflection:
      'Turkle says we expect more from technology and less from each other. Where does a device come between you and someone real this week? Design one device-free zone.',
    tryOn:
      'Make one conversation today device-free — phones out of sight, not just face-down. Say if helpful: “Let me put this away — you have my full attention.” Notice what changes in the first minute.',
    cards: [
      {
        kind: 'hook',
        body: 'The person across from you is telling you something real. The phone on the table is telling you something is more important. Everyone can feel the difference.',
      },
      {
        kind: 'text',
        title: 'What Turkle found',
        body: 'Sherry Turkle spent decades studying people and machines. Her conclusion: we are in relationships with others and with technology, and we are letting technology redesign what a relationship is. We expect more from technology — instant answers, control — and less from each other.',
      },
      {
        kind: 'definition',
        title: 'Presence',
        body: 'The felt experience of having all of someone’s attention for a while. It is increasingly rare, which is exactly why it is increasingly powerful. Presence is the gift that costs nothing and is almost never given.',
      },
      {
        kind: 'story',
        title: 'The dinner rule',
        body: 'A family tried one rule: phones in a basket by the door during dinner. The first week was restless. By the third week the conversations had doubled in length and the teenagers were telling stories nobody had heard before. The content had been there all along. Only the audience had been missing.',
      },
      {
        kind: 'example',
        title: 'The hierarchy of presence',
        items: [
          'Phone in hand while talking — the conversation is a backdrop.',
          'Phone face-down — better, but it still occupies a chair.',
          'Phone in pocket or bag — presence.',
          'Phone away + stated intent (“you have my full attention”) — presence plus honour.',
        ],
      },
      {
        kind: 'text',
        title: 'Attention as care',
        body: 'In a distracted world, attention reads as affection — the warm ties in the Harvard study were built on exactly these minutes. The maintenance problem from yesterday (d29) is largely an attention problem wearing a calendar costume.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Choose your device-free conversation now and decide where the phone will live. If someone asks why, Turkle’s argument is your answer: “I want to be here for this.”',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What is Turkle’s central worry about our devices?',
        options: [
          'We expect more from technology and less from each other',
          'They make us less intelligent',
          'They are too expensive',
          'They will replace all jobs',
        ],
        answer: 0,
        explanation: 'The redesign of relationships toward control and away from presence.',
        concept: 'Device habits',
      },
      {
        kind: 'truefalse',
        question: 'A phone face-down on the table is the gold standard of presence.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'It still occupies a chair — pocket or bag, ideally with stated intent.',
        concept: 'Presence',
      },
      {
        kind: 'scenario',
        question: 'A friend keeps checking their phone while you share something important. What does the lesson suggest for your own practice?',
        options: [
          'Model the change — put yours fully away and say “you have my full attention”',
          'Check yours too, to match the energy',
          'Lecture them about Turkle’s research mid-conversation',
          'Share less with them and say nothing',
        ],
        answer: 0,
        explanation: 'Presence is contagious and it is your practice to start.',
        concept: 'Attention as care',
      },
    ],
    share: {
      hook: 'Attention is the new affection. Presence is the gift nobody gives.',
      question: 'Where does a device come between you and someone real this week?',
      posts: {
        reflective:
          'Day 30 of Uneek Academy’s networking course with Sherry Turkle: we expect more from technology and less from each other. My try-on was one device-free conversation — phone in a bag, “You have my full attention.” The first minute felt strange; the next twenty were the best conversation of my week. Attention is care. Where does your phone sit when you talk to people you love?',
        direct:
          'Your phone is redesigning your relationships. Day 30 of Uneek Academy’s networking course, via Sherry Turkle — connection without presence is the loneliest kind. Prescription: one conversation today with the phone out of sight and the intent stated. “You have my full attention.” It is the rarest gift in 2026 and the cheapest to give.',
        story:
          'A family put phones in a basket by the door at dinner. Week one: restless. Week three: the teenagers were telling stories nobody had heard before. Day 30 of Uneek Academy’s networking course: the content was always there — only the audience was missing. Tonight I put mine in a bag. What changes at your table?',
      },
    },
  },
  {
    id: 'net-d31',
    month: 3,
    week: 5,
    day: 3,
    dayIndex: 31,
    type: 'interactive',
    title: 'Bids and Turning Toward',
    duration: '12 min',
    summary:
      'Relationships are built or lost in tiny moments of reaching out. A marriage researcher found the mechanism — it works in every relationship you have.',
    concepts: ['Bids', 'Turning toward', 'Emotional bank account'],
    exercise:
      'Track the bids in one conversation today — moments someone reaches out (“Look at this”, “I am tired”, a sigh, a joke). Count how many you turned toward. Jot the count below: awareness is the skill.',
    tryOn:
      'Turn toward three bids today — small reaches for attention. A response, a question, a look. Exact move: notice the bid, respond to it before whatever you planned to say.',
    cards: [
      {
        kind: 'hook',
        body: '“Hey, look at that.” It sounds like nothing. A researcher who studied couples for decades says these tiny moments predict relationships better than big romantic gestures ever could.',
      },
      {
        kind: 'definition',
        title: 'A bid',
        body: 'Any attempt to connect: a comment, a question, a sigh, a joke, a look, a meme sent at midnight. Psychologist John Gottman calls them bids for attention or affection — and they are the atoms of every relationship, romantic or otherwise.',
      },
      {
        kind: 'example',
        title: 'The three responses',
        items: [
          'Turning toward: noticing and engaging — “That is beautiful, where was it taken?”',
          'Turning away: ignoring or half-attending — “Hmm.” (the relationship killer in slow motion)',
          'Turning against: irritation — “Can you not? I am busy.” (fast erosion)',
        ],
      },
      {
        kind: 'text',
        title: 'The ratio',
        body: 'Gottman’s long-running studies of couples found stable relationships turn toward bids far more often than they turn away — on the order of five positive responses to every negative one in ordinary time. The same ratio shows up, softer, in friendships and teams: relationships are deposits and withdrawals in an emotional bank account.',
      },
      {
        kind: 'story',
        title: 'The meme that saved a friendship',
        body: 'Two old friends had gone quiet — busy lives, no arguments, just distance. One started sending one meme a week with “saw this and thought of you”. Ten seconds each. Six months later they were talking weekly again. Those memes were bids, and they were turned toward. Nothing grand was required; something small was sufficient.',
      },
      {
        kind: 'text',
        title: 'Where networking meets this',
        body: 'Your web is made of bids too — the follow-up message is a bid, the shared article is a bid, the “how did the talk go?” is a bid. Turning toward is the maintenance mechanism from yesterday’s layers, executed at the scale of seconds. This is the smallest scale of relationship management — and the one that runs everything.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Decide where you will count bids today. The first win is simply noticing them — most people have no idea how often the people around them reach out.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What is a “bid” in relationship research?',
        options: [
          'Any small attempt to connect — a comment, look, question, or meme',
          'A formal request for help',
          'A business proposal',
          'A romantic invitation',
        ],
        answer: 0,
        explanation: 'The atoms of connection — every relationship runs on them.',
        concept: 'Bids',
      },
      {
        kind: 'truefalse',
        question: 'Turning away (“Hmm”) is harmless as long as you are not rude.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Chronic turning away is the slow-motion relationship killer in Gottman’s data.',
        concept: 'Turning toward',
      },
      {
        kind: 'scenario',
        question: 'An old friend has gone quiet — no conflict, just distance. Best repair per the lesson?',
        options: [
          'Small regular bids — one message a week with a reason to smile — turned toward consistently',
          'A long message explaining the friendship’s importance',
          'Waiting for them to reach out first',
          'A formal conversation about the relationship',
        ],
        answer: 0,
        explanation: 'The meme story: small, frequent, warm beats grand and rare.',
        concept: 'Emotional bank account',
      },
    ],
    share: {
      hook: 'Relationships are won or lost in tiny moments of reaching out.',
      question: 'How many bids did you turn toward today?',
      posts: {
        reflective:
          'Day 31 of Uneek Academy’s networking course: Gottman’s bids — every comment, sigh, or meme is a small reach for connection. Turn toward, turn away, or turn against; the ratio predicts the relationship. I counted bids in one conversation today — I had been missing half of them. The fix is seconds long: notice the bid, respond before your planned sentence. How many did you turn toward?',
        direct:
          '“Look at that.” Two words that are actually a bid for connection. Day 31 of Uneek Academy’s networking course — Gottman’s research: stable relationships turn toward bids about five times for every turn away. It runs friendships and teams too. Today: notice the bids, respond to three. It is the smallest skill in the course and maybe the most powerful.',
        story:
          'Two old friends had gone quiet. No fight — just distance. One started sending a weekly meme: “Saw this, thought of you.” Ten seconds. Six months later they talked weekly again. Day 31 of Uneek Academy’s networking course: those memes were bids, and they were turned toward. Nothing grand was required. Something small was sufficient.',
      },
    },
  },
  {
    id: 'net-d32',
    month: 3,
    week: 5,
    day: 4,
    dayIndex: 32,
    type: 'reading',
    title: 'The Maintenance Calendar',
    duration: '10 min',
    summary:
      'Good intentions keep no relationships. Systems do. Today you build the simplest maintenance system that actually survives real life.',
    concepts: ['Maintenance calendar', 'Contact rhythm', 'Systems over willpower'],
    tryOn:
      'Set three recurring reminders right now — one per layer: weekly for a “5” person, monthly for a “15” person, quarterly for a “50” person. Each reminder includes one line of what to ask about.',
    cards: [
      {
        kind: 'hook',
        body: 'You do not have a keeping-in-touch problem. You have a remembering-and-scheduling problem — which is much easier to solve.',
      },
      {
        kind: 'definition',
        title: 'Maintenance calendar',
        body: 'A rhythm of pre-decided contact moments matched to your layers: weekly for the 5, monthly for the 15, seasonal for the 50, yearly-with-substance for the 150. The calendar remembers so your memory does not have to.',
      },
      {
        kind: 'text',
        title: 'Why systems beat willpower',
        body: 'Willpower is a terrible relationship manager — it is busy, tired, and biased toward whatever is loudest today. The people who seem effortlessly thoughtful are running systems: birthday lists, Sunday-night message blocks, quarterly coffees scheduled a year ahead. Thoughtfulness is a design problem.',
      },
      {
        kind: 'example',
        title: 'The minimal system',
        items: [
          'One recurring weekly slot (20 minutes) for touchpoints — messages, comments, check-ins.',
          'Three calendar reminders per layer with a personal detail to ask about.',
          'One line of notes per person (the tiny CRM from d22) so messages write themselves.',
          'A “no-ask” rule: at least half of touches carry no request.',
        ],
      },
      {
        kind: 'story',
        title: 'The quarterly coffee list',
        body: 'A woman kept a list of twelve people she wanted in her life long-term. Once a quarter she booked four coffees — that was the whole system. Fifteen years later those twelve were her career, her crisis line, and her celebration circle. The system ran on forty minutes a quarter.',
      },
      {
        kind: 'text',
        title: 'The no-ask rule',
        body: 'Maintenance collapses when every touch has a request attached — it trains people to duck. Half your touches should be pure deposit: the article, the memory, the compliment, the “saw this and thought of you”. Systems include generosity by design, not by mood.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Build the minimal system now — it takes fifteen minutes. Then run this week’s block once. The first block is the hardest; the rhythm does the rest.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Why do calendars outperform good intentions for relationships?',
        options: [
          'Willpower is busy and biased toward the loudest; systems remember and schedule',
          'Calendars make relationships feel more formal',
          'People like receiving calendar invitations',
          'Good intentions are dishonest',
        ],
        answer: 0,
        explanation: 'Thoughtfulness is a design problem, not a character trait.',
        concept: 'Systems over willpower',
      },
      {
        kind: 'truefalse',
        question: 'Most maintenance touches should include a request so they are efficient.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'The no-ask rule: at least half are pure deposits.',
        concept: 'Contact rhythm',
      },
      {
        kind: 'scenario',
        question: 'You want to keep twelve key relationships alive across a busy year. Best system?',
        options: [
          'A quarterly list — four coffees a quarter, booked in advance, with personal notes',
          'Trying to remember to reach out when you can',
          'A mass message every December',
          'Waiting for them to initiate',
        ],
        answer: 0,
        explanation: 'The quarterly coffee list: forty minutes a quarter, compounding for decades.',
        concept: 'Maintenance calendar',
      },
    ],
    share: {
      hook: 'You do not have a keeping-in-touch problem. You have a scheduling problem.',
      question: 'Which three reminders will you set today?',
      posts: {
        reflective:
          'Day 32 of Uneek Academy’s networking course: the maintenance calendar. Good intentions keep no relationships — systems do. I set three reminders with personal details to ask about, and a weekly 20-minute touchpoint block with a no-ask rule: half my messages will carry zero requests. The quarterly coffee list story — twelve people, forty minutes a quarter, fifteen years of compounding. What is your system?',
        direct:
          'Effortlessly thoughtful people are running systems. Day 32 of Uneek Academy’s networking course — the maintenance calendar: weekly block for touchpoints, reminders per layer, one line of notes per person, and the no-ask rule (half of touches are pure deposits). Fifteen minutes to build. Then the rhythm remembers for you.',
        story:
          'A woman kept a list of twelve people she wanted in her life for the long run. Every quarter: four coffees. That was the whole system. Fifteen years later those twelve were her career, her crisis line, and her celebration circle. Day 32 of Uneek Academy’s networking course: the system ran on forty minutes a quarter. Mine starts tonight.',
      },
    },
  },
  {
    id: 'net-d33',
    month: 3,
    week: 5,
    day: 5,
    dayIndex: 33,
    type: 'reading',
    title: 'Repair and Renegotiate',
    duration: '10 min',
    summary:
      'Every real relationship wobbles. The difference between durable webs and fragile ones is not the absence of damage — it is a repair habit.',
    concepts: ['Repair attempts', 'Apology structure', 'Renegotiation'],
    tryOn:
      'Send one “no-ask” check-in to a lapsed or wobbly tie: “Hey — I have been thinking of you. How are you, really?” If something needs repairing with someone, use the four-part apology this week.',
    cards: [
      {
        kind: 'hook',
        body: 'The strongest networks are not the ones without cracks. They are the ones with a repair habit — cracks included, priced into the design.',
      },
      {
        kind: 'definition',
        title: 'Repair attempt',
        body: 'Any move that stops damage and restores warmth: the joke after the sharp word, the “can we start that again?”, the message after the silence. Gottman’s research found repair attempts — not the absence of conflict — predicted which relationships lasted.',
      },
      {
        kind: 'list',
        title: 'The four-part apology',
        items: [
          'Name the specific act — “I cancelled on you twice.”',
          'Acknowledge the impact — “That left you doing the work alone.”',
          'No “but” — reasons may come later, if ever; the apology stands alone.',
          'Make it right or different — “Next month’s deadline I will block the time in advance.”',
        ],
      },
      {
        kind: 'story',
        title: 'The silence that cost a decade',
        body: 'Two partners in a small business had one bad argument and then eleven months of politeness. The politeness hid a wound that cost them the company. A repair on day three — one honest message — would have saved it. They both later said the same thing: “I thought waiting was the mature option.”',
      },
      {
        kind: 'text',
        title: 'Renegotiation: the ongoing kind',
        body: 'Relationships are living agreements. People move cities, change jobs, have children — the terms must change too. Renegotiating is not failure; it is maintenance at the level of design: “With the new job I cannot do monthly dinners — could we do a standing Sunday call instead?”',
      },
      {
        kind: 'text',
        title: 'When repair is not the answer',
        body: 'Honesty also includes limits: chronic takers, contempt, and harm are not repaired with more giving. Repair requires two people. For the rest, the skill is a warm, firm boundary — say less, mean it, move on. Your web is pruned as well as watered.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Decide now: is there a wobbly tie needing a check-in, or something needing a real apology? Write the message today — the four parts are your script.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What predicts durable relationships in conflict research?',
        options: [
          'The presence of repair attempts, not the absence of conflict',
          'Never disagreeing',
          'Always being the one to apologise',
          'Avoiding difficult topics',
        ],
        answer: 0,
        explanation: 'Cracks happen; repair habits determine the outcome.',
        concept: 'Repair attempts',
      },
      {
        kind: 'truefalse',
        question: 'A good apology includes your reasons after the word “but”.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'No “but” — the apology stands alone; reasons may come later if needed.',
        concept: 'Apology structure',
      },
      {
        kind: 'scenario',
        question: 'A relationship needs to change terms — you moved cities and cannot meet weekly. What fits the lesson?',
        options: [
          'Renegotiate openly: propose the new rhythm that fits both lives',
          'Let it fade without discussion',
          'Keep the old terms and feel guilty',
          'End the friendship',
        ],
        answer: 0,
        explanation: 'Relationships are living agreements — renegotiation is maintenance.',
        concept: 'Renegotiation',
      },
    ],
    share: {
      hook: 'Cracks are included in the design. Repair is the habit that matters.',
      question: 'Is there one relationship in your life waiting for a repair attempt?',
      posts: {
        reflective:
          'Day 33 of Uneek Academy’s networking course: repair attempts predict relationships better than absence of conflict. The four-part apology — name the act, name the impact, no “but”, make it right — is now in my notes app permanently. And the harder lesson: repair needs two people; for chronic takers the skill is a warm firm boundary. Sent one no-ask check-in today. “How are you, really?”',
        direct:
          'Every real relationship wobbles. Day 33 of Uneek Academy’s networking course — the repair habit: four-part apologies (no “but”), renegotiation when life changes terms, boundaries where repair is not the answer. The strongest webs are not crack-free. They are repaired quickly. One check-in sent tonight.',
        story:
          'Two business partners had one bad argument and eleven months of politeness. The politeness hid a wound that cost them the company. Both later said the same thing: “I thought waiting was the mature option.” Day 33 of Uneek Academy’s networking course: a repair on day three would have saved it. Who is your day-three repair today?',
      },
    },
  },
  {
    id: 'net-d34',
    month: 3,
    week: 5,
    day: 6,
    dayIndex: 34,
    type: 'review',
    title: 'Week 5 Review: Relationship Management',
    duration: '10 min',
    summary:
      'Five ideas: Dunbar layers, presence, bids, maintenance systems, and repair.',
    concepts: ['Week 5 synthesis'],
    tryOn:
      'Run the full maintenance stack once this weekend: open your layer map, run your message block, turn toward bids, and send one repair or check-in. This is what mastery looks like on a Saturday.',
    reviewTopics: [
      'Dunbar layers & the maintenance budget',
      'Presence & device habits',
      'Bids & turning toward',
      'Maintenance calendars & the no-ask rule',
      'Repair, apology & boundaries',
    ],
    cards: [
      {
        kind: 'hook',
        body: 'You can now do what most people never learn: manage relationships like they matter — with a map, a rhythm, and a repair habit.',
      },
      {
        kind: 'list',
        title: 'This week’s five concepts',
        items: [
          'Layers — 5-15-50-150 with matching contact rhythms (d29)',
          'Presence — device-free attention as the rarest gift (d30)',
          'Bids — small reaches, turned toward, five-to-one in stable ties (d31)',
          'Maintenance calendar — systems over willpower; the no-ask rule (d32)',
          'Repair — four-part apologies, renegotiation, warm boundaries (d33)',
        ],
      },
      {
        kind: 'text',
        title: 'How the pieces fit',
        body: 'The map tells you who. The rhythm tells you when. Bids and presence tell you how. Repair tells you what to do when it breaks. Together they are the complete art of keeping a web alive — the “relationship management” half of this month.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'One weekend run of the full stack. Everything in this course is technique in service of this: people who stay.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What is the relationship management stack from this week?',
        options: [
          'Map (layers) → rhythm (calendar) → moments (bids/presence) → repair',
          'Collect more contacts → pitch them → follow up yearly',
          'Avoid conflict → be available always → give until exhausted',
          'Message everyone weekly regardless of layer',
        ],
        answer: 0,
        explanation: 'Who, when, how, and what to do when it breaks — the complete art.',
        concept: 'Week 5 synthesis',
      },
      {
        kind: 'truefalse',
        question: 'Turning toward small bids is more predictive of strong relationships than grand gestures.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'The atoms run the relationship.',
        concept: 'Week 5 synthesis',
      },
      {
        kind: 'scenario',
        question: 'A friend hurt you and then apologised with “I am sorry but you were…”. What is missing?',
        options: [
          'The no-“but” rule — impact acknowledged without self-justification',
          'A larger gesture',
          'More time before apologising',
          'Nothing — it counts',
        ],
        answer: 0,
        explanation: 'The four-part apology stands alone; the “but” cancels the landing.',
        concept: 'Week 5 synthesis',
      },
    ],
    share: {
      hook: 'Map the web. Keep the rhythm. Catch the bids. Fix the cracks.',
      question: 'Which part of the management stack will you run first?',
      posts: {
        reflective:
          'Week 5 of Uneek Academy’s networking course, reviewed: Dunbar layers, presence, bids, maintenance calendars, repair. The full relationship-management stack — map, rhythm, moments, repair. Ran it once this weekend: message block done, bids counted, one check-in sent. Week 6: room management — reading and running the rooms you walk into. This course keeps its promises.',
        direct:
          'Week 5 done (Uneek Academy, networking): relationship management. 5-15-50-150 map, device-free presence, turning toward bids, maintenance calendars with a no-ask rule, four-part apologies. The art of people staying. Week 6 is the other half of the month’s title: room management. Bring it on.',
        story:
          'I used to think good networkers were born thoughtful. Week 5 of Uneek Academy’s networking course: they are well-designed. My map is drawn, my reminders are set, my no-ask rule is live, and one repair went out this morning. The reply came in an hour. Week 6: how to read and run any room.',
      },
    },
  },
  {
    id: 'net-d35',
    month: 3,
    week: 5,
    day: 7,
    dayIndex: 35,
    type: 'rest',
    title: 'Rest Day',
    duration: '1 min',
    summary: 'Rest is part of the program, not a break from it.',
    concepts: [],
    cards: [],
    questions: [],
    restMessage:
      'Five weeks — the web is mapped, maintained, and repairable. Today, rest is the work. Go be unreachable for a while; your network will keep. Tick rest and the streak continues.',
    share: {
      hook: 'Rest is a deposit in every relationship you have.',
      posts: { reflective: '', direct: '', story: '' },
    },
  },
];
