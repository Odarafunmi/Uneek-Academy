import type { Lesson } from '../lib/types';

/** Networking: The Psychology of Connection — Week 4 (fully seeded). */
export const networkingWeek4: Lesson[] = [
  {
    id: 'net-d22',
    month: 2,
    week: 4,
    day: 1,
    dayIndex: 22,
    type: 'reading',
    title: 'The 72-Hour Follow-Up',
    duration: '10 min',
    summary:
      'Contacts die of neglect in about a week. The fix is one small message within three days — and it is much easier than you fear.',
    concepts: ['Follow-up', 'Recency effect', 'Contact notes'],
    tryOn:
      'Send one follow-up within 72 hours of your last new conversation — or revive a recent one. Exact words: “Hi [name] — we met at [place]. I really enjoyed talking about [topic]. Would love to stay in touch.”',
    cards: [
      {
        kind: 'hook',
        body: 'The fortune is not in the meeting. It is in the follow-up — where most networks quietly die of politeness.',
      },
      {
        kind: 'text',
        title: 'Why 72 hours',
        body: 'Memory and warmth both decay fast. Within three days you are still “the person from Tuesday”; within three weeks you are “someone I think I met”. The follow-up is not pressure — it is simply arriving while the door is still open.',
      },
      {
        kind: 'definition',
        title: 'The follow-up formula',
        body: 'Context + enjoyed detail + light forward: “Hi Bisi — we met at the design meetup. I really enjoyed your point about team rituals. Would love to stay in touch.” No ask. No pitch. Three sentences that convert a moment into a thread.',
      },
      {
        kind: 'story',
        title: 'The two pockets',
        body: 'A recruiter kept two pockets of business cards on her desk: “followed up” and “did not”. She once found a six-month-old card in the second pocket, messaged honestly — “this got buried, and I am sorry; our conversation stayed with me” — and the reply came in ten minutes. Delay is survivable. Silence is terminal.',
      },
      {
        kind: 'example',
        title: 'Contact notes: the tiny CRM',
        body: 'One line per person after you meet: “Bisi — design lead, moving to Abuja, loves chess, daughter starting university.” Thirty seconds. Next contact writes itself: “How is the Abuja plan?” Thoughtfulness is a note-taking habit — we said it on names day, and it compounds here.',
      },
      {
        kind: 'text',
        title: 'The ask question',
        body: 'Following up without an ask feels pointless to some people — that instinct is the collecting mindset returning. A thread with no transaction is exactly what a relationship is. You are not delaying the ask; you are removing the need for one.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Find the person for your follow-up now — recent is best. Send the three-sentence message today. If nobody is recent, use the honest revival line from the story above.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Why does the lesson say follow up within 72 hours?',
        options: [
          'Memory and warmth decay fast — arrive while the door is open',
          'It is a business standard',
          'People expect it after exactly three days',
          'Old contacts are worthless',
        ],
        answer: 0,
        explanation: '“Still the person from Tuesday” beats “someone I think I met”.',
        concept: 'Recency effect',
      },
      {
        kind: 'truefalse',
        question: 'A follow-up message should include your pitch so it justifies the message.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Context + enjoyed detail + light forward. No ask — the thread is the point.',
        concept: 'Follow-up',
      },
      {
        kind: 'scenario',
        question: 'You find a four-month-old unanswered contact. What is true according to the lesson?',
        options: [
          'An honest revival message still works — delay is survivable, silence is terminal',
          'It is too late forever',
          'Wait for them to message first',
          'Pretend no time has passed',
        ],
        answer: 0,
        explanation: 'The recruiter’s story: “this got buried and I am sorry” got a reply in ten minutes.',
        concept: 'Contact notes',
      },
    ],
    share: {
      hook: 'The fortune is in the follow-up — where most networks die of politeness.',
      question: 'Who is one person you should follow up with this week?',
      posts: {
        reflective:
          'Day 22 of Uneek Academy’s networking course: the 72-hour rule. Contacts die of neglect — memory and warmth decay fast. The formula: context + one enjoyed detail + light forward, no ask. Plus a one-line contact note per person so the next message writes itself. Sent mine today: “We met at the meetup — really enjoyed your point about team rituals. Would love to stay in touch.” Who is yours?',
        direct:
          'Meetings are easy. Follow-ups are where networks actually form. Day 22 of Uneek Academy’s networking course — one three-sentence message within 72 hours: “We met at X — loved your point about Y — would love to stay in touch.” No pitch, no ask. And a one-line note per person so you never start from zero again.',
        story:
          'A recruiter found a six-month-old card in her “did not follow up” pocket and messaged honestly: “This got buried and I am sorry — our conversation stayed with me.” Reply in ten minutes. Day 22 of Uneek Academy’s networking course: delay is survivable; silence is terminal. My follow-up went out tonight. Who is in your second pocket?',
      },
    },
  },
  {
    id: 'net-d23',
    month: 2,
    week: 4,
    day: 2,
    dayIndex: 23,
    type: 'video',
    video: {
      youtubeId: '-vZXgApsPCQ',
      title: 'What I learned from 100 days of rejection',
      by: 'Jia Jiang · TED2017',
      note: 'The man who sought rejection every day for 100 days — and found the magic word that turns a “no” into a “yes”. 10M+ views.',
    },
    title: 'Ask Like It Cannot Hurt You',
    duration: '12 min',
    summary:
      'Asking is the engine of networking — intros, advice, opportunities. Jia Jiang’s experiment shows the fear is far larger than the pain, and teaches the moves.',
    concepts: ['Rejection resilience', 'Asking', 'The word “why”'],
    reflection:
      'Jiang found that after a “no”, asking “why” often converts it — and that naming the doubt before asking builds trust. What small ask have you been avoiding?',
    tryOn:
      'Make one small ask today that could plausibly be refused — a discount, a seat swap, a tiny favour. If you get a “no”, ask “why?” kindly. Either way: do not run.',
    cards: [
      {
        kind: 'hook',
        body: 'For 100 days, Jia Jiang asked for ridiculous things on purpose — a burger refill, one hundred dollars from a stranger, Olympic doughnuts. What he learned is the master key of networking.',
      },
      {
        kind: 'text',
        title: 'The experiment',
        body: 'Jiang’s fear of rejection was running his life — an investor’s “no” nearly ended his company. So he prescribed himself exposure: one deliberately refusable request per day. The pain shrank. The world did not.',
      },
      {
        kind: 'definition',
        title: 'The magic word: “why”',
        body: 'When someone says no, most people flee. Jiang stayed engaged: “I understand — may I ask why?” A Krispy Kreme “no” became Olympic ring doughnuts because he asked why and kept talking. No is often not a door; it is a wall with a hinge.',
      },
      {
        kind: 'example',
        title: 'Name the doubt first',
        body: 'Jiang found that mentioning the doubt people already have — “This might sound strange, but…” — before asking raised his yes rate. It shows you see their side, which is trust. The pattern behind it is perspective-taking: the same tool that expands your range in any room.',
      },
      {
        kind: 'story',
        title: 'The security guard',
        body: 'Day one: borrow one hundred dollars from a stranger. The security guard said no — but asked why. Jiang, instead of running, explained the experiment. The guard laughed, offered genuine encouragement, and became part of the story. The worst case kept looking smaller than the fear projected it.',
      },
      {
        kind: 'text',
        title: 'What networking asks of you',
        body: 'Intros. Advice. The coffee invite. The follow-up that might be ignored. Every relationship advances through asks — small, honest, refusable. Rejection resilience is not thick skin; it is accurate arithmetic: the cost of a “no” is seconds, the value of a “yes” compounds for years.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Choose your small ask now. Script it in one sentence. Name any doubt first if needed. Then send it — and whatever the answer, do not run.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What was the key discovery of Jiang’s 100 days?',
        options: [
          'Fear of rejection shrinks with exposure, and “why” converts many noes',
          'People say yes to ridiculous requests',
          'Rejection is painless for everyone',
          'You should ask for everything you want daily',
        ],
        answer: 0,
        explanation: 'Exposure deflated the fear; staying engaged kept the door open.',
        concept: 'Rejection resilience',
      },
      {
        kind: 'truefalse',
        question: 'When someone says no, the graceful move is to leave immediately.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Stay engaged and ask why kindly — no is often a hinge.',
        concept: 'The word “why”',
      },
      {
        kind: 'scenario',
        question: 'You want to ask for an introduction but feel pushy. What fits the lesson?',
        options: [
          'Name the doubt first — “This might be a lot to ask…” — then make the small, refusable ask',
          'Wait until it does not feel pushy',
          'Hint until they offer',
          'Ask three times in a row',
        ],
        answer: 0,
        explanation: 'Naming the doubt builds trust and enlarges the yes.',
        concept: 'Asking',
      },
    ],
    share: {
      hook: 'The cost of a “no” is seconds. The value of a “yes” compounds for years.',
      question: 'What small ask have you been avoiding?',
      posts: {
        reflective:
          'Day 23 of Uneek Academy’s networking course: Jia Jiang sought rejection 100 days in a row and deflated his fear. Two tools I am stealing: after a “no”, ask “why” kindly (his Krispy Kreme no became Olympic doughnuts); and name the doubt before asking — “This might sound strange, but…” Today I made one small refusable ask and did not run. What ask have you been avoiding?',
        direct:
          'Networking runs on asks — intros, advice, the coffee invite — so rejection resilience is core skill, not thick skin. Day 23 of Uneek Academy’s networking course, via Jia Jiang (100 days of rejection): the fear is always bigger than the pain; “why” converts many noes; naming the doubt first builds trust. One small ask today. That is the prescription.',
        story:
          'Day one of Jiang’s experiment: borrow $100 from a stranger. The security guard said no — then asked why — and ended up cheering him on. Day 23 of Uneek Academy’s networking course: the worst case keeps looking smaller than the fear projects. My ask today was tiny and terrifying and fine. What is yours?',
      },
    },
  },
  {
    id: 'net-d24',
    month: 2,
    week: 4,
    day: 3,
    dayIndex: 24,
    type: 'interactive',
    title: 'The Informational Interview',
    duration: '12 min',
    summary:
      'The highest-yield networking format ever invented: twenty minutes, one person, questions instead of requests. Today you learn the script.',
    concepts: ['Informational interview', 'Advice asking', 'Curiosity'],
    exercise:
      'Request one informational chat this week using the exact script: “Hi [name] — I admire your path in [field]. Would you have 20 minutes for a call or coffee? I would love to hear how you got into it. No agenda beyond that.” Send it today. Jot the reply below.',
    tryOn:
      'Prepare three questions for your informational interview: “How did you get into this work?”, “What do most people misunderstand about it?”, “What would you do in my position?” Then send the request.',
    cards: [
      {
        kind: 'hook',
        body: 'Ask someone for a job and they guard the gate. Ask someone for their story and they open the door — and often hold it open further than you asked.',
      },
      {
        kind: 'definition',
        title: 'Informational interview',
        body: 'A short conversation whose only purpose is to learn from someone’s experience. No job ask, no pitch. Twenty minutes, three questions, genuine curiosity. It is the networking format with the best ratio of warmth to risk.',
      },
      {
        kind: 'example',
        title: 'The three questions',
        items: [
          '“How did you get into this work?” — everyone’s favourite topic: their own path.',
          '“What do most people misunderstand about it?” — flattery plus real information.',
          '“What would you do if you were me?” — the advice-ask; people invest in those they advise.',
        ],
      },
      {
        kind: 'text',
        title: 'The Franklin effect',
        body: 'Benjamin Franklin observed that people who do you a small favour come to like you more, not less. Asking for advice is a favour of attention — it signals respect, and the other person’s brain justifies the help by deciding you are worth helping. Asking, done well, is a gift.',
      },
      {
        kind: 'story',
        title: 'The twenty minutes that changed a career',
        body: 'A graduate asked a senior designer for twenty minutes and one honest question: “What would you do if you were me?” The designer sketched a plan on a napkin — including an opening at her own firm that had not been posted. Not because the graduate asked for a job. Because the graduate asked for her story.',
      },
      {
        kind: 'text',
        title: 'The manners that make it work',
        body: 'Keep to twenty minutes. Arrive prepared. Never pitch. Send thanks the same day. And if a genuine opportunity appears in the conversation, you may ask about it — once — with their permission. The format is generous first; the returns arrive on their own schedule.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Pick your person now — someone whose path genuinely interests you. The script is in the exercise. Sending it today is the win, whatever they answer.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What is the purpose of an informational interview?',
        options: [
          'To learn from someone’s experience — with no job ask',
          'To ask for a job indirectly',
          'To pitch your services',
          'To collect a contact',
        ],
        answer: 0,
        explanation: 'Learning is the purpose; opportunities, if they come, are a by-product.',
        concept: 'Informational interview',
      },
      {
        kind: 'truefalse',
        question: 'The Franklin effect says people dislike you more after doing you a favour.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'The opposite: doing you a favour makes them like you more — asking for advice is a gift.',
        concept: 'Advice asking',
      },
      {
        kind: 'scenario',
        question: 'Mid-interview the person mentions an opening on their team. What fits the lesson?',
        options: [
          'With their permission, ask about it once — then return to learning',
          'Pitch yourself immediately for the full remaining time',
          'Pretend you did not hear it',
          'Email your CV to them afterwards unprompted',
        ],
        answer: 0,
        explanation: 'Genuine openings may be explored — once, politely, with permission.',
        concept: 'Curiosity',
      },
    ],
    share: {
      hook: 'Ask for a job and they guard the gate. Ask for their story and they open the door.',
      question: 'Who is one person whose path genuinely fascinates you?',
      posts: {
        reflective:
          'Day 24 of Uneek Academy’s networking course: the informational interview — 20 minutes, three questions (“How did you get into this?”, “What do people misunderstand?”, “What would you do in my position?”). Plus the Franklin effect: asking for advice makes people like you more, not less. I sent one request today — “No agenda beyond that.” The request itself was the win. Whose story would you ask for?',
        direct:
          'Highest-yield format in networking: the informational interview. Day 24 of Uneek Academy’s networking course — twenty minutes, genuine curiosity, no pitch. “Would you have 20 minutes for a call? I’d love to hear how you got into it.” People who give you advice invest in you. Asking, done well, is a gift. Who is on your list?',
        story:
          'A graduate asked a senior designer one honest question: “What would you do if you were me?” She sketched a plan on a napkin — including an unposted opening at her own firm. He never asked for a job. He asked for her story. Day 24 of Uneek Academy’s networking course: the twenty-minute conversation that opens more doors than any application.',
      },
    },
  },
  {
    id: 'net-d25',
    month: 2,
    week: 4,
    day: 4,
    dayIndex: 25,
    type: 'reading',
    title: 'Give First: The Art of Useful Help',
    duration: '10 min',
    summary:
      'The most magnetic people in any network are givers — but naive giving burns out. Today: how to give like a strategist, not a martyr.',
    concepts: ['Reciprocity', 'Giving', 'Social capital'],
    tryOn:
      'Make one small useful gesture today with zero expectation: share an article relevant to someone’s stated interest, make a permissioned introduction, or send a genuine compliment to someone’s boss. Tiny, specific, free.',
    cards: [
      {
        kind: 'hook',
        body: 'Organisational psychologist Adam Grant sorted professionals into givers, takers, and matchers. The best networks belonged to the givers — but so did the worst outcomes. The difference is a style of giving.',
      },
      {
        kind: 'definition',
        title: 'Reciprocity',
        body: 'The deep social rule that help creates obligation to return help. Cialdini made it famous as a persuasion principle — but as a relationship principle it runs even deeper: generous people become the people others want to be indebted to.',
      },
      {
        kind: 'text',
        title: 'Five-minute favours',
        body: 'The sustainable giver’s unit is the five-minute favour: help that costs you almost nothing but is genuinely useful to them — an introduction with permission, a relevant article, a name of someone helpful, a public word of credit. Small, specific, frequent.',
      },
      {
        kind: 'story',
        title: 'The giver who burned out, and the one who did not',
        body: 'One man said yes to every request and ended up resentful and behind on his own work — the martyr’s giving. His colleague gave the same amount of help but in tiny units, and only within her circle of trust; people called her generous, and she still had her evenings. Same instinct, different architecture.',
      },
      {
        kind: 'example',
        title: 'What to give (it is not money)',
        body: 'Information (most underrated currency). Introductions (with both sides’ permission). Attention (a genuine audience for someone’s work). Credit (saying who helped). Encouragement (the word someone needed). None cost more than minutes.',
      },
      {
        kind: 'text',
        title: 'The strategy that is not cynicism',
        body: 'Giving first is not a trick — it is how trust economies actually work. The only guardrail you need: give where reciprocity is possible and your boundaries are intact. Chronic takers get warm politeness and small favours — and never your five-minute help again.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Choose your five-minute favour now and schedule it. The test of a real gift: you would be content if nothing came back.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What distinguishes successful givers from burned-out givers?',
        options: [
          'They give in small, specific units and keep boundaries',
          'They give more than everyone else',
          'They never expect anything back at all',
          'They only give to powerful people',
        ],
        answer: 0,
        explanation: 'Five-minute favours plus fences — generosity without architecture becomes martyrdom.',
        concept: 'Giving',
      },
      {
        kind: 'truefalse',
        question: 'Reciprocity means help creates a pull to return help — one reason givers attract allies.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'It is one of the deepest rules in social life.',
        concept: 'Reciprocity',
      },
      {
        kind: 'scenario',
        question: 'A colleague you barely know keeps asking for big time-consuming favours. What fits the lesson?',
        options: [
          'Politely decline — boundaries protect your ability to give at all',
          'Say yes and resent it later',
          'Give a small useful alternative within your limits',
          'Both of the last two — decline and offer a small alternative if genuine',
        ],
        answer: 3,
        explanation: 'Warm no, small yes where honest — the giver’s architecture.',
        concept: 'Social capital',
      },
    ],
    share: {
      hook: 'Give first — but build your giving like a strategist, not a martyr.',
      question: 'What five-minute favour could you do today for someone?',
      posts: {
        reflective:
          'Day 25 of Uneek Academy’s networking course: givers build the best networks (Adam Grant) — and the worst ones too. The difference is architecture: five-minute favours, specific and small; boundaries intact; credit freely given. My favour today: a permissioned introduction between two people who needed each other. Cost: minutes. The rule: give where you would be content if nothing came back. What is your five-minute favour?',
        direct:
          'The most magnetic people in any room are givers — the sustainable kind. Day 25 of Uneek Academy’s networking course: five-minute favours (an intro, an article, a word of credit), given within your boundaries. Reciprocity does the rest. Give first, give small, keep your fences. That is the whole strategy.',
        story:
          'Two givers, same instinct, opposite outcomes. One said yes to everything and ended resentful; one gave in tiny units with fences around her evenings — and everyone called her generous. Day 25 of Uneek Academy’s networking course: generosity needs architecture. Today I sent one small useful thing and expected nothing. It felt suspiciously good.',
      },
    },
  },
  {
    id: 'net-d26',
    month: 2,
    week: 4,
    day: 5,
    dayIndex: 26,
    type: 'reading',
    title: 'Digital Networking Without Cringe',
    duration: '10 min',
    summary:
      'Your online presence is a room you are already in. Today: how to be warm there too — comments over connections, generosity over broadcasting.',
    concepts: ['Digital presence', 'Comment culture', 'DM etiquette'],
    tryOn:
      'Leave two genuine comments today on work by people you admire — specific, substantive, no ask. And rewrite one connection request with context: “We met at X — enjoyed talking about Y.”',
    cards: [
      {
        kind: 'hook',
        body: 'Most people treat the internet as a broadcast tower. The people who network well online treat it as a room — same warmth, same curiosity, smaller font.',
      },
      {
        kind: 'definition',
        title: 'Comment culture',
        body: 'Showing up in other people’s comment sections with real attention — the digital equivalent of the warm follow-up. Specific praise, a thoughtful addition, a good question. It compounds exactly like offline micro-connection.',
      },
      {
        kind: 'example',
        title: 'The cringe ladder (climb down it)',
        items: [
          'Cold “I’d like to add you to my network” with no context — the cringe summit.',
          'Pitch in the first message — instant mute.',
          'Generic “Great post!” — noise.',
          'Specific comment on their actual work — warmth.',
          'Conversation that continues naturally — a real tie.',
        ],
      },
      {
        kind: 'text',
        title: 'DM etiquette',
        body: 'First message: who you are in one line, why you are writing in one line, and the smallest possible ask (or none). Never open with a request that takes more than a minute to answer. Time-limit yourself: “Two minutes of your time, no more.” Then honour it.',
      },
      {
        kind: 'story',
        title: 'The two-year comment',
        body: 'A developer commented thoughtfully on a writer’s essays for two years — never asked for anything. When the writer launched a company, she messaged him first: “You have been one of my most thoughtful readers. I have something you might want to see.” Slow generosity, fastest trust.',
      },
      {
        kind: 'text',
        title: 'Presence, not performance',
        body: 'Post your real work and real questions at whatever frequency is sustainable — completeness beats frequency. And keep the ratio warm: for every broadcast, several genuine interactions. The feed is full of towers; be a room.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Choose your two people for real comments now. Specific, substantive, zero ask. Digital warmth counts exactly the same as offline warmth — the research on weak ties does not care about the medium.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What is the digital equivalent of a warm follow-up?',
        options: [
          'A specific, genuine comment on someone’s actual work',
          'A connection request with no context',
          'A pitch in the first DM',
          'A daily broadcast of your achievements',
        ],
        answer: 0,
        explanation: 'Comment culture = attention, which is the currency everywhere.',
        concept: 'Comment culture',
      },
      {
        kind: 'truefalse',
        question: '“I’d like to add you to my network” is an effective connection request.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Context or nothing — “We met at X, enjoyed talking about Y”.',
        concept: 'Digital presence',
      },
      {
        kind: 'scenario',
        question: 'You want to DM someone senior whose work you admire. Best approach?',
        options: [
          'One line of who you are, one line of genuine appreciation, smallest possible ask — or none',
          'Your full CV and a meeting request',
          'A series of messages until they reply',
          'A voice note introducing yourself at length',
        ],
        answer: 0,
        explanation: 'Make it small enough to answer in a minute — and be content if they do not.',
        concept: 'DM etiquette',
      },
    ],
    share: {
      hook: 'The feed is full of broadcast towers. Be a room.',
      question: 'Whose work could you comment on today — specific and genuine?',
      posts: {
        reflective:
          'Day 26 of Uneek Academy’s networking course: online warmth is just offline warmth at smaller font. Comment culture — specific, substantive attention on people’s real work — compounds exactly like weak-tie chats. The cringe ladder is real: cold invites and DM pitches at the top, genuine comments and natural conversations at the bottom. Left two real comments today. Zero asks. Who would you comment on?',
        direct:
          'Digital networking without cringe, in one rule: treat the internet like a room, not a tower. Day 26 of Uneek Academy’s networking course — comments over connections, context in every request, smallest possible ask in DMs. Two genuine comments today beat fifty cold invites. Same warmth rules as everywhere else.',
        story:
          'A developer commented thoughtfully on a writer’s essays for two years and never asked for anything. When she launched her company, she messaged him first: “I have something you might want to see.” Day 26 of Uneek Academy’s networking course: slow generosity, fastest trust. My two comments went out today. No ask attached.',
      },
    },
  },
  {
    id: 'net-d27',
    month: 2,
    week: 4,
    day: 6,
    dayIndex: 27,
    type: 'review',
    title: 'Week 4 Review: Contact to Connection',
    duration: '10 min',
    summary:
      'Five ideas: the 72-hour follow-up, asking without flinching, informational interviews, giving first, and digital warmth.',
    concepts: ['Week 4 synthesis'],
    tryOn:
      'Run the conversion sequence on one contact this week: follow up (d22), make one small ask or request a chat (d23–24), give one five-minute favour (d25). Contact becomes relationship.',
    reviewTopics: [
      '72-hour follow-up & contact notes',
      'Rejection resilience & asking',
      'Informational interviews',
      'Giving first (five-minute favours)',
      'Digital warmth & DM etiquette',
    ],
    cards: [
      {
        kind: 'hook',
        body: 'The course’s middle milestone: you now know how a contact becomes a relationship — the conversion that most people never learn.',
      },
      {
        kind: 'list',
        title: 'This week’s five concepts',
        items: [
          'Follow-up — three sentences within 72 hours; silence is terminal, delay survivable (d22)',
          'Asking — exposure deflates fear; “why” converts; name the doubt first (d23)',
          'Informational interviews — story over job ask; the Franklin effect (d24)',
          'Five-minute favours — give first, small and specific, with fences (d25)',
          'Digital rooms — comments over connections; context in every request (d26)',
        ],
      },
      {
        kind: 'text',
        title: 'How the pieces fit',
        body: 'Follow-up opens the thread. Asking advances it. Learning together deepens it. Giving sustains it. Digital presence keeps it alive between meetings. That is the entire machinery of a growing network — and you have now touched every part.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Pick one contact and run the full conversion this weekend. One thread, honestly maintained, is worth a hundred neglected ones.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What converts a contact into a relationship?',
        options: [
          'A sequence of small honest touches — follow-up, asks, learning, giving',
          'Waiting for them to reach out',
          'A single strong pitch',
          'A large contact list',
        ],
        answer: 0,
        explanation: 'Relationships are maintained by sequences, not moments.',
        concept: 'Week 4 synthesis',
      },
      {
        kind: 'truefalse',
        question: 'Giving first means saying yes to every request you receive.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Five-minute favours with fences — the architecture matters.',
        concept: 'Week 4 synthesis',
      },
      {
        kind: 'scenario',
        question: 'You have met someone interesting and want to convert it. First move?',
        options: [
          'The 72-hour follow-up: context + enjoyed detail + light forward',
          'A request for a meeting about opportunities',
          'A connection request with no context',
          'Nothing — if they are interested they will reach out',
        ],
        answer: 0,
        explanation: 'Always the three-sentence thread first.',
        concept: 'Week 4 synthesis',
      },
    ],
    share: {
      hook: 'A contact is a moment. A relationship is a sequence.',
      question: 'Which contact will you convert this week?',
      posts: {
        reflective:
          'Week 4 of Uneek Academy’s networking course, reviewed: follow up in 72 hours; ask like it cannot hurt you (Jia Jiang); take twenty minutes for story not jobs; give five-minute favours with fences; keep the internet a room not a tower. Contacts become relationships through small honest sequences. Ran the full conversion on one contact this weekend. Week 5: managing relationships over time.',
        direct:
          'Week 4 done (Uneek Academy, networking): the conversion chapter. Contacts → relationships via follow-up, honest asks, learning conversations, and small giving. The whole machinery, in five lessons. Week 5 is relationship management — how to keep the web alive without drowning in it.',
        story:
          'I had a pocket full of “nice to meet you” contacts and no idea why they went nowhere. Week 4 of Uneek Academy’s networking course: they died of politeness. Three-sentence follow-ups, tiny asks, twenty-minute stories, five-minute favours. This week I converted one. It took eleven minutes total. Week 5: the maintenance calendar.',
      },
    },
  },
  {
    id: 'net-d28',
    month: 2,
    week: 4,
    day: 7,
    dayIndex: 28,
    type: 'rest',
    title: 'Rest Day',
    duration: '1 min',
    summary: 'Rest is part of the program, not a break from it.',
    concepts: [],
    cards: [],
    questions: [],
    restMessage:
      'Four weeks — you are halfway, and the conversion machinery is yours. Today, rest is the work. Unhurried people make the best contacts. Tick rest and the streak continues.',
    share: {
      hook: 'Halfway. The art now needs its architecture.',
      posts: { reflective: '', direct: '', story: '' },
    },
  },
];
