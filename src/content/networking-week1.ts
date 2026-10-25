import type { Lesson } from '../lib/types';

/**
 * Networking: The Psychology of Connection — Week 1 (fully seeded).
 * Story-first, research-backed, and written for timid networkers: every
 * try-on is small, low-stakes, and comes with exact words to say.
 */
export const networkingWeek1: Lesson[] = [
  {
    id: 'net-d01',
    month: 1,
    week: 1,
    day: 1,
    dayIndex: 1,
    type: 'reading',
    title: 'Why Networking Feels Fake (It Doesn’t Have To)',
    duration: '10 min',
    summary:
      'Most people feel slightly dirty at the word “networking”. Today: why — and the reframe that turns it back into something human.',
    concepts: ['Networking aversion', 'Promotion mindset', 'Connection vs collecting'],
    tryOn:
      'Greet one person you already see regularly — a guard, a barista, a colleague — with: \"Good morning — how is your day going?\" Then actually wait for the answer. That is networking. Nothing else required today.',
    cards: [
      {
        kind: 'hook',
        body: 'Networking has a reputation problem — and the people who hate it are usually the people who would be best at it.',
      },
      {
        kind: 'story',
        title: 'Tunde and the name card',
        body: 'Tunde stood outside the conference hall holding his stack of name cards like a man holding a parking ticket. Inside, people were laughing in clusters. He lasted eleven minutes, spoke to no one, and left. “I am not a networking person,” he told his sister. But Tunde is the friend who remembers birthdays, who checks on people after tough weeks. He is, in fact, an excellent networker — trapped outside a room by a word.',
      },
      {
        kind: 'text',
        title: 'Why the word disgusts us',
        body: 'Research on professionals found that many experienced networking as distasteful — even dirty — and that the people who felt this way did it less, and benefited less. But here is the twist: the discomfort was not about relationships. It was about mixing instrumental goals with human contact. Asking feels like using. So we avoid the whole thing.',
      },
      {
        kind: 'definition',
        title: 'Promotion mindset',
        body: 'Approaching people as a chance to learn and discover, rather than as a chore to survive. Studies of networking at a large law firm linked this mindset to actually enjoying — and benefiting from — building relationships.',
      },
      {
        kind: 'example',
        title: 'Collecting vs connecting',
        body: 'Collecting: “How can this person help me?” Connecting: “Who is this person, actually?” Both people can feel the difference within seconds. Collectors scan the room over your shoulder. Connectors stay with you. Be the second one — it is also the strategy that works.',
      },
      {
        kind: 'text',
        title: 'The definition we will use all course',
        body: 'Networking is building a web of real relationships — people who know you, trust you, and would take your call — while you do the same for them. Not contacts. Not transactions. A web. Everything else in this course is just technique in service of that.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Choose the person for today’s try-on now: the security guard, the woman at the kiosk, the colleague whose name you do not know yet. Deciding early doubles your odds. “Good morning — how is your day going?” is all you need.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Why do many people avoid networking?',
        options: [
          'It mixes instrumental goals with human contact, which feels like using people',
          'They are bad at talking',
          'It does not work',
          'It is only for salespeople',
        ],
        answer: 0,
        explanation:
          'The aversion is about the feeling of being transactional — not about relationships, which most people actually enjoy.',
        concept: 'Networking aversion',
      },
      {
        kind: 'truefalse',
        question: 'A promotion mindset means pretending networking is fun until you believe it.',
        options: ['True', 'False'],
        answer: 1,
        explanation:
          'It means genuinely approaching people as a chance to learn and discover — the enjoyment follows the focus.',
        concept: 'Promotion mindset',
      },
      {
        kind: 'scenario',
        question: 'Tunde is warm with friends but freezes at mixers. What fits him best?',
        options: [
          'Treat networking as the same relating he already does, in new places',
          'Force himself to collect 20 business cards',
          'Avoid rooms forever',
          'Wait until he becomes extroverted',
        ],
        answer: 0,
        explanation: 'He already knows how to connect — the work is transferring it, not becoming someone else.',
        concept: 'Connection vs collecting',
      },
    ],
    share: {
      hook: 'Networking is just relating, in places you do not usually relate.',
      question: 'Who is one person you see regularly but have never really asked about their day?',
      posts: {
        reflective:
          'Day 1 of Uneek Academy’s networking course started by taking my side: networking feels fake to most warm people. Research on professionals found the same disgust — and that it made them do less of what actually works. The reframe: connecting, not collecting. “Who is this person, actually?” beats “How can they help me?” within seconds of meeting. My try-on today: “Good morning — how is your day going?” to someone I see regularly. That is it. That is the whole scary thing. Who is one person you see regularly but have never really asked about their day?',
        direct:
          'Hate networking? Good sign — it means you care about being genuine. Day 1 of Uneek Academy’s networking course: the aversion comes from feeling transactional, not from disliking people. Fix = promotion mindset + connection over collecting. Today’s try-on was one sentence to someone familiar: “Good morning — how is your day going?” Then waiting for the answer. Networking is just relating, in places you do not usually relate. Who is one person you see regularly but have never asked about their day?',
        story:
          'Tunde stood outside the conference hall for eleven minutes and left without speaking to anyone. “I’m not a networking person.” But Tunde remembers every birthday and checks on friends after hard weeks — he is an excellent networker who got trapped by a word. Day 1 of Uneek Academy’s networking course uncaged him: networking is connecting, not collecting. His try-on: one greeting, fully answered. “Good morning — how is your day going?” Who have you walked past this week?',
      },
    },
  },
  {
    id: 'net-d02',
    month: 1,
    week: 1,
    day: 2,
    dayIndex: 2,
    type: 'video',
    video: {
      youtubeId: '8KkKuTCFvzI',
      title: 'What makes a good life? Lessons from the longest study on happiness',
      by: 'Robert Waldinger · TED',
      note: '85 years of data on what actually keeps people happy and healthy — the single best argument for taking this course seriously.',
    },
    title: 'The 75-Year Answer: Relationships Win',
    duration: '12 min',
    summary:
      'The Harvard Study of Adult Development followed people across their entire lives. The headline result is the foundation of everything in this course.',
    concepts: ['Social connection', 'Relationship quality', 'Long-term evidence'],
    reflection:
      'Waldinger says the good life is built on warm relationships — not achievement. Which one relationship in your life already gives you that warmth? Send them one line today: “Was just thinking of you — hope you are well.”',
    tryOn:
      'Send one “thinking of you” message to someone who fits Waldinger’s description — a person who makes you feel more open. Exact words: “Was just thinking of you — hope you are well.”',
    cards: [
      {
        kind: 'hook',
        body: 'If you could run one 85-year experiment on what makes a good life, what would you measure? Harvard did it. The answer fits in one word.',
      },
      {
        kind: 'text',
        title: 'The study',
        body: 'The Harvard Study of Adult Development tracked hundreds of people from young adulthood into old age — Harvard students and people from across Boston — through war, career, illness, and ordinary Tuesdays. They measured everything: cholesterol, jobs, hobbies, marriage, mood. Then they looked at who was flourishing at eighty.',
      },
      {
        kind: 'definition',
        title: 'The headline finding',
        body: 'Good relationships keep us happier and healthier. Period. Not money. Not fame. Not cholesterol. People who were most satisfied in their relationships at fifty were the healthiest at eighty.',
      },
      {
        kind: 'story',
        title: 'Two men, two retirements',
        body: 'One man retired to his recliner and his routine shrank to the size of a room. Another joined a club, kept up his weak ties, argued with people about politics every week. Same town, same age, same health. Years later the second man’s world was still wide. Loneliness, the study found, was as toxic as smoking or alcoholism. The recliner was the risk factor.',
      },
      {
        kind: 'text',
        title: 'The quality question',
        body: 'It is not the number of friends — it is the warmth. Couples who lived in high-conflict relationships were the unhealthiest of all; couples who argued but felt secure were fine. Conflict is not the poison. Contempt and loneliness are. This is why this course teaches maintenance and repair — not collecting.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Name one person who makes you feel “more open and more inclusive” — Waldinger’s phrase for the voices worth turning toward. Send them one line today. Relationship health is built out of exactly this kind of small deposit.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What did the Harvard study find predicted health at eighty best?',
        options: [
          'Relationship satisfaction at fifty',
          'Cholesterol levels',
          'Career achievement',
          'Number of social media contacts',
        ],
        answer: 0,
        explanation: 'Warm relationships beat the medical and status markers people usually bet on.',
        concept: 'Social connection',
      },
      {
        kind: 'truefalse',
        question: 'Having many friends matters more than the warmth of those relationships.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Quality, not quantity — high-conflict closeness was actively harmful.',
        concept: 'Relationship quality',
      },
      {
        kind: 'scenario',
        question: 'A friend says networking is pointless careerism. What is the strongest reply?',
        options: [
          'Long-term health and happiness research says relationships are the whole point — careers are a side effect',
          'You need contacts to get jobs',
          'Everyone famous networks',
          'It is good for your brand',
        ],
        answer: 0,
        explanation: 'The deepest case for networking is not career capital — it is a good life.',
        concept: 'Long-term evidence',
      },
    ],
    share: {
      hook: 'The longest study on happiness found one thing. It was not achievement.',
      question: 'Who is one person who makes you feel more open and more inclusive?',
      posts: {
        reflective:
          '85 years of data, one headline: good relationships keep us happier and healthier — more than money, fame, or cholesterol. That is Day 2 of Uneek Academy’s networking course, and it reframes everything: networking is not careerism, it is health. Relationship quality at fifty predicted health at eighty better than bloodwork did. My try-on: one “thinking of you” message to someone who makes me feel more open. “Was just thinking of you — hope you are well.” Who is one person who does that for you?',
        direct:
          'The Harvard study followed people for 85 years to find what makes a good life. Not achievement. Relationships. Day 2 of Uneek Academy’s networking course. Loneliness turned out to be as toxic as smoking; warmth turned out to be protective. So I sent one “thinking of you” text today — the smallest possible investment in the only asset that matters. Who makes you feel more open and more inclusive? Message them this week.',
        story:
          'Two men retired in the same town. One shrank into a recliner; one kept his weekly arguments at the club. Years later, one world was wide and one was the size of a room. Day 2 of Uneek Academy’s networking course explains why — the Harvard Study of Adult Development found relationships are the whole ballgame. My try-on: “Was just thinking of you — hope you are well.” Sent. Who is on your list?',
      },
    },
  },
  {
    id: 'net-d03',
    month: 1,
    week: 1,
    day: 3,
    dayIndex: 3,
    type: 'interactive',
    title: 'Warmth First: The Two-Second Verdict',
    duration: '12 min',
    summary:
      'People judge two things about you in seconds — and almost everyone tries to prove the wrong one first.',
    concepts: ['Warmth', 'Competence', 'First impressions'],
    exercise:
      'In your next two conversations today, lead with warmth before competence: one genuine question before any statement about your work. Notice how the room softens. Jot what happened below.',
    tryOn:
      'Use the warmth-first sequence: smile, greet, ask one human question (“How did you get into this work?”), and only then mention what you do. Watch the difference in their face.',
    cards: [
      {
        kind: 'hook',
        body: 'Before people decide whether you are impressive, they decide whether you are safe. Most people arrive at rooms trying to prove impressiveness.',
      },
      {
        kind: 'definition',
        title: 'Warmth and competence',
        body: 'Social psychologists find that people judge others along two tracks: warmth (are you friendly, trustworthy?) and competence (are you capable?). Warmth is judged first — and weighs more in how people treat you afterwards.',
      },
      {
        kind: 'story',
        title: 'The two introductions',
        body: 'At the same event, Amara met two people. The first opened with his job title and biggest client. The second asked what brought her there, listened for a full minute, and said “that is fascinating” like he meant it. Amara could not remember the first man’s name. She still texts the second one. Competence got him nowhere; warmth got him remembered.',
      },
      {
        kind: 'example',
        title: 'Warmth signals that cost nothing',
        body: 'Eye contact for a beat longer than usual. Using their name once. Asking a follow-up question — the universal proof of listening. Putting the phone away visibly. None of this is charisma. It is attention, which is the rarest commodity in any room.',
      },
      {
        kind: 'text',
        title: 'The order matters',
        body: 'Leading with competence reads as status-seeking: people mentally place you in the “wants something” category. Leading with warmth reads as safety: people relax, and relaxed people talk. You can be impressive all evening — after people feel safe with you, not before.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Script your warmth-first opener now: “Hi, I am [name] — what brought you here today?” Then genuinely listen. The question is not a tactic; the listening is the point.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Which do people judge first — and weigh more heavily?',
        options: [
          'Warmth — are you safe and friendly',
          'Competence — are you impressive',
          'Status — are you important',
          'Appearance — are you polished',
        ],
        answer: 0,
        explanation: 'Warmth is the first filter; competence matters after you pass it.',
        concept: 'Warmth',
      },
      {
        kind: 'truefalse',
        question: 'Opening with your job title and biggest client is a reliable way to be remembered.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'It reads as status-seeking and gets forgotten; attention and questions get remembered.',
        concept: 'Competence',
      },
      {
        kind: 'scenario',
        question: 'You enter a conversation and want to make a good impression. Best move?',
        options: [
          'Ask one genuine question and listen for the full answer',
          'Mention your most impressive project early',
          'Name-drop someone they might know',
          'Agree with everything they say',
        ],
        answer: 0,
        explanation: 'Attention is the warmest signal there is — and the rarest.',
        concept: 'First impressions',
      },
    ],
    share: {
      hook: 'People decide if you are safe before they decide if you are impressive.',
      question: 'What is your warmth-first opener going to be?',
      posts: {
        reflective:
          'Day 3 of Uneek Academy’s networking course: people judge warmth before competence — and weigh it more. So I tried leading with a question instead of my job title. Two conversations, one change: the room softened in both. Amara’s story in the lesson stuck: she forgot the man who opened with his biggest client and still texts the man who listened for a minute. Attention is the warmest signal there is. My opener now: “What brought you here today?” What is yours?',
        direct:
          'Warmth first. Competence second. Day 3 of Uneek Academy’s networking course explains why: the first judgment people make about you is whether you are safe, not whether you are impressive. Opening with credentials reads as wanting something. Opening with a real question reads as safety. Tried it twice today — the difference in people’s faces was instant. What is your warmth-first opener?',
        story:
          'Two introductions at one event. First man: job title, biggest client — forgotten by dessert. Second man: asked Amara what brought her, listened a full minute — they still text. Day 3 of Uneek Academy’s networking course is about the two-second verdict, and the verdict is warmth. My try-on: one genuine question before anything about my work. It works on bosses, neighbours, everyone.',
      },
    },
  },
  {
    id: 'net-d04',
    month: 1,
    week: 1,
    day: 4,
    dayIndex: 4,
    type: 'video',
    video: {
      youtubeId: 'iCvmsMzlF7o',
      title: 'The power of vulnerability',
      by: 'Brené Brown · TEDxHouston',
      note: 'The talk that turned vulnerability from a weakness into the doorway of every real relationship — 50M+ views for a reason.',
    },
    title: 'Let Yourself Be Seen',
    duration: '12 min',
    summary:
      'Connection requires courage — not the courage of performing well, but the courage of being imperfect out loud.',
    concepts: ['Vulnerability', 'Belonging', 'Worthiness'],
    reflection:
      'Brown says vulnerability is the birthplace of connection. Where do you perform perfection instead of letting yourself be seen? Try one small honest admission this week: “I am still figuring that out, actually.”',
    tryOn:
      'Admit one small thing honestly in conversation this week — “I am still figuring that out, actually” or “That is new to me — how does it work?” Watch what honesty invites back.',
    cards: [
      {
        kind: 'hook',
        body: 'The people who connect easily are not the people who never look foolish. They are the people who risk looking foolish first.',
      },
      {
        kind: 'text',
        title: 'What Brené Brown found',
        body: 'Brown studied shame and belonging for years, interviewing thousands of people. She expected to find that the people who felt loved and worthy were the ones with the best stories, the best looks, the best achievements. Instead she found one behaviour in common: the courage to be imperfect.',
      },
      {
        kind: 'definition',
        title: 'Vulnerability (the real meaning)',
        body: 'Not weakness — uncertainty, risk, and emotional exposure. Saying “I do not know”. Asking for help. Trying first. Sending the message before it is perfect. It is the entry fee for every genuine relationship.',
      },
      {
        kind: 'story',
        title: 'The honest answer',
        body: 'In a room of executives, someone asked a new manager how her quarter was going. Everyone else had said “great, busy, blessed.” She said: “Honestly? Struggling. I am learning to ask for help.” Two senior people stayed behind after to offer support — one admitted he had struggled for a year before telling anyone. Her small crack let the whole room out of the performance.',
      },
      {
        kind: 'text',
        title: 'Why it works in networking',
        body: 'Polished people attract audiences. Honest people attract allies. A small admission signals trust — you are treating them as safe. And trust, remember, is what people actually judge first. Perfection is a wall with nice lighting.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Pick your one honest sentence for this week and decide where you will use it. Vulnerability is a practice, not a personality — start with the small exposures.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What did Brown find the people who felt loved and worthy had in common?',
        options: [
          'The courage to be imperfect',
          'The best achievements',
          'The most charming personalities',
          'The fewest problems',
        ],
        answer: 0,
        explanation: 'Worthiness was about letting themselves be seen, not about performing well.',
        concept: 'Vulnerability',
      },
      {
        kind: 'truefalse',
        question: 'In networking, vulnerability means sharing your deepest secrets with strangers.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'It means graduated honesty — small, real admissions that signal trust and invite reciprocity.',
        concept: 'Belonging',
      },
      {
        kind: 'scenario',
        question: 'Everyone at the table is saying their year is “amazing”. You are struggling. What does the lesson suggest?',
        options: [
          'A small honest admission — “Honestly? Still figuring it out” — and watch allies appear',
          'Match their energy and say amazing too',
          'Describe your problems in detail',
          'Say nothing and leave early',
        ],
        answer: 0,
        explanation: 'One crack of honesty dissolves the performance for everyone — that is how belonging starts.',
        concept: 'Worthiness',
      },
    ],
    share: {
      hook: 'Perfection is a wall with nice lighting. Let yourself be seen.',
      question: 'Where do you perform perfection instead of letting yourself be seen?',
      posts: {
        reflective:
          'Day 4 of Uneek Academy’s networking course took me to Brené Brown: vulnerability is not weakness — it is uncertainty, risk, and emotional exposure. The people who feel worthy are not the polished ones; they are the ones who risk being imperfect first. My try-on this week: one honest admission — “I am still figuring that out, actually.” Polished people attract audiences; honest people attract allies. Where do you perform perfection instead of letting yourself be seen?',
        direct:
          'Networking tip that sounds wrong: be the least polished person in the conversation. Day 4 of Uneek Academy’s networking course, via Brené Brown — connection requires emotional exposure, not a perfect image. Small honesty signals trust and invites it back. “I am still figuring that out.” Try it once this week and watch the other person exhale.',
        story:
          'At a table of executives, everyone said their year was “great, busy, blessed.” One new manager said: “Honestly? Struggling. I am learning to ask for help.” Two senior people stayed behind to help. Day 4 of Uneek Academy’s networking course calls this the doorway: one small crack of honesty dissolves the whole performance. What is one thing you could admit out loud this week?',
      },
    },
  },
  {
    id: 'net-d05',
    month: 1,
    week: 1,
    day: 5,
    dayIndex: 5,
    type: 'reading',
    title: 'Small Talk Is Big: The Power of Weak Ties',
    duration: '10 min',
    summary:
      'The chats you think do not count — the barista, the colleague in the lift — quietly run your wellbeing and your opportunities.',
    concepts: ['Weak ties', 'Small talk', 'Everyday connection'],
    tryOn:
      'Have one micro-chat with a weak tie today — someone you recognise but do not know. The barista, the neighbour, the person whose desk is near yours. One question, real interest: “Busy day for you?”',
    cards: [
      {
        kind: 'hook',
        body: 'There is a whole category of people you see almost daily and know almost nothing about. Research says they are some of the most valuable people in your life.',
      },
      {
        kind: 'definition',
        title: 'Weak ties',
        body: 'Acquaintances — people on the edges of your world. In 1973, sociologist Mark Granovetter showed they are disproportionately valuable for opportunities, because they carry information your close circle does not have.',
      },
      {
        kind: 'story',
        title: 'The job that came from a nod',
        body: 'A woman nodded to the same man at the coffee shop every morning for two years. One day she mentioned she was leaving her job. “What do you do?” he asked. It turned out his company needed exactly her skill — a role never advertised. Her best friends could not have helped; they all knew the same people she knew. The near-stranger bridged a world.',
      },
      {
        kind: 'text',
        title: 'The happiness finding',
        body: 'A 2014 study tracked people’s daily interactions and wellbeing. Days with more weak-tie interactions — classmates, neighbours, shop staff — were happier days, with more belonging. Even minimal contact counts: a second study found people who chatted with their barista left happier than those who just got coffee efficiently.',
      },
      {
        kind: 'text',
        title: 'Small talk is the doorway, not the destination',
        body: 'People who call small talk pointless are describing its content and missing its function. It is not about the weather. It is a continuous low-stakes signal: I see you, I am safe, I am open. Big talk — real connection — almost always rides in on small talk first.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Notice three weak ties you will see today. Pick one for the try-on. The only goal is one genuine question and a real listen — no follow-up plan required.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Why are weak ties disproportionately valuable for opportunities?',
        options: [
          'They carry information outside your close circle',
          'They are more loyal than close friends',
          'They have more free time to help',
          'They are easier to impress',
        ],
        answer: 0,
        explanation: 'Granovetter’s core insight: bridges between worlds carry news your own world cannot.',
        concept: 'Weak ties',
      },
      {
        kind: 'truefalse',
        question: 'Small talk is mostly pointless filler that serious people skip.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Its function is signalling safety and openness — big talk rides in on it.',
        concept: 'Small talk',
      },
      {
        kind: 'scenario',
        question: 'Your days feel flat and disconnected. Which habit has research support?',
        options: [
          'More small daily interactions with acquaintances',
          'Waiting for deep conversations with close friends',
          'Reducing casual contact to save energy',
          'Networking only at big events',
        ],
        answer: 0,
        explanation: 'Weak-tie interactions predicted daily happiness and belonging — they are nutrition, not noise.',
        concept: 'Everyday connection',
      },
    ],
    share: {
      hook: 'Your opportunities live in your weak ties. So does more of your happiness.',
      question: 'Who is one weak tie you could have a real micro-chat with today?',
      posts: {
        reflective:
          'Day 5 of Uneek Academy’s networking course made me rethink the people at the edge of my world. Granovetter (1973): weak ties carry opportunities your close circle structurally cannot. Sandstrom & Dunn (2014): days with more acquaintance interactions are happier days — even chatting with a barista beats pure efficiency. Small talk is not the destination; it is the doorway. My try-on: one micro-chat with someone I recognise but do not know. Who is at the edge of your world?',
        direct:
          'The most valuable people in your network are the ones you barely know. Day 5 of Uneek Academy’s networking course: weak ties bring opportunities (Granovetter) and daily belonging (Sandstrom & Dunn). Even barista-level chats beat efficiency for happiness. Today: one micro-chat with a weak tie. “Busy day for you?” Then actually listen.',
        story:
          'She nodded at the same man at the coffee shop for two years. One day she mentioned she was leaving her job — and his company needed exactly her skill, in a role never advertised. Her best friends could not have helped; they knew everyone she knew. Day 5 of Uneek Academy’s networking course: the near-stranger is a bridge. My try-on: one real micro-chat. Who is yours?',
      },
    },
  },
  {
    id: 'net-d06',
    month: 1,
    week: 1,
    day: 6,
    dayIndex: 6,
    type: 'review',
    title: 'Week 1 Review: Why Connection Works',
    duration: '10 min',
    summary:
      'Five ideas: networking is relating, relationships win long-term, warmth first, honesty as the doorway, and weak ties as daily nutrition.',
    concepts: ['Week 1 synthesis'],
    tryOn:
      'Teach the headline to someone today: “Warm relationships are the best predictor of a good life — so networking is health, not careerism.” Say it in your own words — teaching locks it in.',
    reviewTopics: [
      'Networking aversion & promotion mindset',
      'Warmth before competence',
      'Vulnerability as the doorway',
      'Weak ties & small talk',
      'Relationships as the long-term answer',
    ],
    cards: [
      {
        kind: 'hook',
        body: 'You now have the scientific case for something people do at weddings: relating to other humans, on purpose.',
      },
      {
        kind: 'list',
        title: 'This week’s five concepts',
        items: [
          'Networking aversion — the disgust at feeling transactional; cured by connection over collecting (d1)',
          'Relationship quality — 85 years of evidence that warm ties run a good life (d2)',
          'Warmth first — people judge safety before impressiveness; lead with attention (d3)',
          'Vulnerability — small honesty is the doorway to real belonging (d4)',
          'Weak ties — acquaintances carry opportunities and daily belonging (d5)',
        ],
      },
      {
        kind: 'text',
        title: 'How the pieces fit',
        body: 'Warmth opens doors (d3). Honesty keeps them open (d4). Weak ties keep the world wide (d5). And all of it compounds into the thing the longest study says actually matters (d2). The aversion you may still feel (d1) is just the old transactional definition leaving the building.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Say the headline out loud to someone today — a friend, a sibling, a voice note to yourself. If you can teach it, you own it.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Which idea ties the whole week together?',
        options: [
          'Networking is relating on purpose — and relationships are the point',
          'You need a large contact list to succeed',
          'Impress people first, connect later',
          'Small talk is a waste of time',
        ],
        answer: 0,
        explanation: 'Relating on purpose, with warmth and honesty — that is the week in one line.',
        concept: 'Week 1 synthesis',
      },
      {
        kind: 'truefalse',
        question: 'The spotlight effect means a warm greeting will be scrutinised and judged.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Nobody is watching that closely — micro-chats feel risky and land as ordinary kindness.',
        concept: 'Week 1 synthesis',
      },
      {
        kind: 'scenario',
        question: 'A colleague says networking is fake and refuses to try. Which first step fits this week?',
        options: [
          'One micro-chat with a familiar weak tie — barista, guard, neighbour',
          'A big event with 50 business cards',
          'A complete contact-list rebuild',
          'Waiting until they feel confident',
        ],
        answer: 0,
        explanation: 'Start where warmth is cheapest and safest — the people already in your week.',
        concept: 'Week 1 synthesis',
      },
    ],
    share: {
      hook: 'Warmth opens doors. Honesty keeps them open. Weak ties keep the world wide.',
      question: 'Which of the five ideas will you practise this weekend?',
      posts: {
        reflective:
          'Week 1 review of Uneek Academy’s networking course. Five ideas: networking is relating (not collecting); relationships win over 85 years of data; warmth before competence; small honesty is the doorway; weak ties are daily nutrition. The whole picture: warmth opens doors, honesty keeps them open, weak ties keep the world wide. Week 2 is courage — starting conversations with strangers. Which idea are you practising first?',
        direct:
          'One week in, the science of networking fits in a sentence: relate on purpose, warmly, honestly — and keep the edges of your world alive. Week 1 of Uneek Academy’s networking course, done. The long game is a good life, not a contact list. Next week: actually starting conversations. With strangers. Tired and weirdly excited.',
        story:
          'A week ago “networking” felt like a sales word. Now it fits in one sentence: warm relationships are the point — everything else is technique. Week 1 of Uneek Academy’s networking course, reviewed. Five concepts, five tiny try-ons, zero fake smiles. Weekend plan: teach the headline to one person. Then week 2: the stranger-danger week.',
      },
    },
  },
  {
    id: 'net-d07',
    month: 1,
    week: 1,
    day: 7,
    dayIndex: 7,
    type: 'rest',
    title: 'Rest Day',
    duration: '1 min',
    summary: 'Rest is part of the program, not a break from it.',
    concepts: [],
    cards: [],
    questions: [],
    restMessage:
      'One week of real momentum. Today, rest is the work. Let the ideas settle — connection grows in unhurried people. Tick rest and the streak continues.',
    share: {
      hook: 'Rest is where connection settles into who you are.',
      posts: { reflective: '', direct: '', story: '' },
    },
  },
];
