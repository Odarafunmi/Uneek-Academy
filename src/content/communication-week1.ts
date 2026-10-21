import type { Lesson } from '../lib/types';

/**
 * Communication: Say It So It Lands — Week 1 (fully seeded).
 * Story-first, practical, and written for timid speakers: every try-on is
 * small, low-stakes, and comes with exact words to say.
 */
export const communicationWeek1: Lesson[] = [
  {
    id: 'com-d01',
    month: 1,
    week: 1,
    day: 1,
    dayIndex: 1,
    type: 'reading',
    title: 'Why Talking Feels Hard (It’s Not You)',
    duration: '10 min',
    summary:
      'Speaking up can feel like standing on a tall ladder. Today’s stories show why — and why it is the ladder, not you.',
    concepts: ['Speaking anxiety', 'Spotlight effect', 'Threat response'],
    tryOn:
      'Say one prepared sentence out loud today in a low-stakes place. Use these exact words anywhere they fit: "That sounds interesting — could you say more?" Nothing rides on this sentence. The win is the saying.',
    cards: [
      {
        kind: 'hook',
        body: 'Talking feels hard because your brain treats a room full of people like a room full of lions. It is protecting you — from the wrong thing.',
      },
      {
        kind: 'story',
        title: 'Tobi and the meeting',
        body: 'Tobi had an idea in the Tuesday meeting. For nine minutes he rehearsed it in his head. The words were perfect — in his head. When his turn came, he said "nothing from me" and spent the rest of the meeting annoyed at himself. That evening he told his sister the idea. She said: "That’s really good. Why didn’t you say it?" Great question. And the answer is not that Tobi is broken.',
      },
      {
        kind: 'text',
        title: 'The ladder in your head',
        body: 'When you speak in front of people, your brain runs the same alarm it runs for real danger: faster heart, dry mouth, blank mind. Psychologists call it a threat response. Useful when lions are present. In a meeting it is a false alarm — but your body does not know that yet. Today we start teaching it.',
      },
      {
        kind: 'definition',
        title: 'Spotlight effect',
        body: 'The feeling that everyone is watching you closely. Research shows they are watching far less than it feels.',
      },
      {
        kind: 'story',
        title: 'The two-minute spotlight',
        body: 'Amara tripped on the last stair at work and felt everyone’s eyes on her all morning. At lunch she mentioned it, embarrassed. Her colleague frowned: "What stair?" The spotlight that had been burning on her all morning had barely flickered for anyone else. Your awkward moment is a background detail in other people’s days.',
      },
      {
        kind: 'text',
        title: 'What this means for you',
        body: 'Three things follow. One: the fear is real, but the danger is not. Two: other people notice less than you think. Three: courage is not the absence of the ladder feeling — it is speaking while the ladder is still there. Today’s try-on is one sentence while standing on it.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Pick the place for your try-on now: a shop, a family member, a chat thread. Deciding early doubles your odds. And remember the sentence: "That sounds interesting — could you say more?"',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Why does speaking up feel physically dangerous?',
        options: [
          'The brain runs a threat response, like it would for real danger',
          'Because speaking is actually dangerous',
          'Because you are not good at talking',
          'Because your lungs are working wrong',
        ],
        answer: 0,
        explanation:
          'It is a false alarm — protective machinery firing in a safe room. The feeling is real; the danger is not.',
        concept: 'Threat response',
      },
      {
        kind: 'truefalse',
        question: 'The spotlight effect means everyone really is watching you closely.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'It only feels that way. Other people are busy with their own staircases.',
        concept: 'Spotlight effect',
      },
      {
        kind: 'scenario',
        question:
          'Tobi has an idea but says "nothing from me." What is the most useful first step?',
        options: [
          'Say one prepared sentence in a low-stakes place to practise speaking while nervous',
          'Wait until he never feels nervous',
          'Send anonymous notes forever',
          'Quit meetings',
        ],
        answer: 0,
        explanation: 'Courage grows by speaking while the ladder feeling is present — tiny sentences count.',
        concept: 'Speaking anxiety',
      },
    ],
    share: {
      hook: 'Courage is speaking while the ladder is still there.',
      question: 'What is one low-stakes sentence you could say this week?',
      posts: {
        reflective:
          'Day 1 of Uneek Academy’s communication course told two stories that felt uncomfortably familiar. Tobi rehearsed an idea for nine minutes and said nothing. Amara tripped on a stair and felt watched all morning — her colleague never noticed. The lesson: speaking up triggers a threat response built for lions, and the spotlight effect exaggerates everyone else’s attention. The fear is real; the danger is not. My try-on today was one prepared sentence in a shop: "That sounds interesting — could you say more?" Small, awkward, and weirdly powerful. What is one low-stakes sentence you could say this week?',
        direct:
          'Speaking up feels dangerous because your brain runs a threat response built for lions. Day 1 of Uneek Academy’s communication course. Add the spotlight effect — the false feeling that everyone is watching — and silence becomes logical. But silence has a cost. The fix is not fearlessness; it is one prepared sentence in a low-stakes place: "That sounds interesting — could you say more?" Today I said it. Nervous, fine, done. What is one low-stakes sentence you could say this week?',
        story:
          'In Tuesday’s meeting Tobi had a good idea and said "nothing from me." That evening his sister asked the painful question: "Why didn’t you say it?" Day 1 of Uneek Academy’s communication course explains why — and it is not that Tobi is broken. The brain treats speaking up like standing near a lion, and the spotlight effect makes everyone look like a judge. The fear is real; the danger is not. Today’s try-on: one sentence, low stakes, out loud. I chose "That sounds interesting — could you say more?" What is one sentence you could say this week?',
      },
    },
  },
  {
    id: 'com-d02',
    month: 1,
    week: 1,
    day: 2,
    dayIndex: 2,
    type: 'video',
    video: {
      youtubeId: 'gCfzeONu3Mo',
      title: 'How miscommunication happens (and how to avoid it)',
      by: 'Katherine Hampsten · TED-Ed',
      note: 'Why the words that leave your mouth are never the ones that land — the clay metaphor of message vs. reception — and four habits that fix it. 4M+ views.',
    },
    title: 'The Words That Come Out Wrong',
    duration: '8 min',
    summary:
      'What you mean and what people hear are two different sentences. Today: how to make them match.',
    concepts: ['Message vs. reception', 'Clarity', 'Tone'],
    tryOn:
      'Send one message today that you reread once before sending. Check only one thing: could any sentence be read in a grumpy tone? If yes, add a softener. Example: "Does Thursday work?" → "Would Thursday work for you?"',
    cards: [
      {
        kind: 'hook',
        body: 'You send a message. It arrives as a completely different message. Nobody is lying — translation just happened without you.',
      },
      {
        kind: 'story',
        title: 'The shortest text in history',
        body: 'Chidi sent his team: "We need to talk about the report." Four words. Within an hour, two people were polishing their CVs. He had meant: "Let’s improve the report together." What he wrote sounded like a verdict. The words were his; the fear in them was everyone else’s imagination — invited by his wording.',
      },
      {
        kind: 'text',
        title: 'Message vs. reception',
        body: 'Every message is received twice: what you meant, and what it sounds like. Tone, wording, and context do the translating. You cannot fully control reception — but you can write sentences that leave less room for the scary reading.',
      },
      {
        kind: 'definition',
        title: 'Tone in writing',
        body: 'The emotional colour your words carry to the reader — often darker or sharper than you intended.',
      },
      {
        kind: 'example',
        title: 'Everyday example',
        body: '"Fine." vs "Sounds good!" vs "Sure thing." All mean yes. All land differently. The fix is not emoji (though they help); it is specific, warm wording: "Would Thursday work for you?" beats "Does Thursday work?" by a mile.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Use today’s try-on on one real message. Keep the receipt: screenshot before/after. You are building a habit of reading your words as if you were the other person.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Why can a neutral message be received as hostile?',
        options: [
          'The reader fills in tone the writer never intended',
          'The internet corrupts text',
          'Readers are usually unkind',
          'Capital letters change meaning',
        ],
        answer: 0,
        explanation: 'Reception is a translation. Leave less room for the scary reading with warm, specific wording.',
        concept: 'Message vs. reception',
      },
      {
        kind: 'truefalse',
        question: '"We need to talk about the report" is a neutral way to open a collaboration.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'It reads like a verdict. "Let’s improve the report together" says the same intent without the chill.',
        concept: 'Tone',
      },
      {
        kind: 'scenario',
        question:
          'Which is the clearest, warmest way to ask about timing?',
        options: [
          '"Would Thursday work for you?"',
          '"Does Thursday work?"',
          '"Thursday."',
          '"You probably can’t do Thursday."',
        ],
        answer: 0,
        explanation: 'Specific, polite, and easy to answer. Clarity is kindness to the reader.',
        concept: 'Clarity',
      },
    ],
    share: {
      hook: 'You send a message. It arrives as a different message.',
      question: 'What is one message you could rewrite to land kinder?',
      posts: {
        reflective:
          'Day 2 of Uneek Academy’s communication course: "We need to talk about the report." Four words, and two teammates were polishing their CVs. The writer meant "let’s improve it together"; the readers heard a verdict. Messages are received twice — what you meant, and what it sounds like. The exercise was small and surprisingly useful: reread one message before sending and ask, could this be read in a grumpy tone? I changed "Does Thursday work?" to "Would Thursday work for you?" The whole sentence relaxed. What is one message you could rewrite to land kinder?',
        direct:
          'Your message is received twice: what you meant, and what it sounds like. Day 2 of Uneek Academy’s communication course. "We need to talk about the report" meant "let’s improve it" — it read like a firing. The fix takes ten seconds: reread before sending and warm one sentence. "Would Thursday work for you?" instead of "Does Thursday work?" Clarity is kindness to the reader. What is one message you could rewrite to land kinder?',
        story:
          'My friend sent his team "we need to talk about the report" and spent the afternoon calming two people who thought they were in trouble. He meant: let’s make it better. Day 2 of Uneek Academy’s communication course called it message vs. reception — the words were his, the fear was invited by his wording. My try-on: reread one message before sending, warm one sentence. "Does Thursday work?" became "Would Thursday work for you?" Small edit, different weather. What is one message you could rewrite to land kinder?',
      },
    },
  },
  {
    id: 'com-d03',
    month: 1,
    week: 1,
    day: 3,
    dayIndex: 3,
    type: 'interactive',
    title: 'The 3-Second Pause',
    duration: '8 min',
    summary:
      'Between what happens and what you say, there is a gap. Practice makes the gap big enough to choose in.',
    concepts: ['Response gap', 'Pausing', 'Composure'],
    tryOn:
      'Use a 3-second pause before answering any question today. Count it quietly: "one, two, three" — then speak. Timid version: the pause actually makes you sound thoughtful, not slow. That is the trick.',
    cards: [
      {
        kind: 'hook',
        body: 'Between what happens and what you say, there is a gap. Most people never find it. Today you find it — and stand in it.',
      },
      {
        kind: 'story',
        title: 'The gap that saved a conversation',
        body: 'Someone asked Ifeoma, "So do you actually know how to do this?" The old Ifeoma would have snapped back or shrunk. New Ifeoma — three days into practising pauses — counted "one, two, three" and said, "I’m still learning it. What would you like to see first?" The question was rude. The answer was calm. The three seconds did that.',
      },
      {
        kind: 'text',
        title: 'Why three seconds',
        body: 'Your first reaction forms in about one second — usually the defensive one. Three seconds is enough for the thoughtful one to catch up. In that gap you can choose tone, choose words, or choose silence. The pause also makes you look composed: audiences read it as confidence.',
      },
      {
        kind: 'definition',
        title: 'Response gap',
        body: 'The small space between a trigger and your reply — trainable, and where most of communication is actually won.',
      },
      {
        kind: 'example',
        title: 'Everyday example',
        body: 'In the scenarios below, notice how the pause changes every outcome. "Are you free Saturday?" (pause → you check your actual weekend). "This is wrong." (pause → you ask which part, instead of defending everything).',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Before today’s try-on, practise the pause alone: ask yourself a question out loud, count three, answer. It feels silly for ten seconds. Then it feels like a superpower.',
      },
    ],
    questions: [
      {
        kind: 'scenario',
        question:
          'Someone says, "So do you actually know how to do this?" What is the pause for?',
        options: [
          'To let a calm, chosen answer arrive instead of a defensive one',
          'To make them uncomfortable',
          'To remember the words',
          'To decide whether to leave',
        ],
        answer: 0,
        explanation: 'The gap is where tone and wording become choices instead of reflexes.',
        concept: 'Response gap',
      },
      {
        kind: 'mcq',
        question: 'How do audiences usually read a 3-second pause?',
        options: ['As composure and thoughtfulness', 'As confusion', 'As weakness', 'As rudeness'],
        answer: 0,
        explanation: 'The pause that helps you also signals confidence to the room.',
        concept: 'Composure',
      },
      {
        kind: 'truefalse',
        question: 'Your first reaction is usually the most thoughtful one.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'The first reaction is the fast, defensive one. The thoughtful one arrives a beat later.',
        concept: 'Pausing',
      },
    ],
    share: {
      hook: 'Between what happens and what you say, there is a gap. Stand in it.',
      question: 'Where would a 3-second pause have helped you this week?',
      posts: {
        reflective:
          'Day 3 of Uneek Academy’s communication course gave me one of the smallest and most useful tools I have tried: a 3-second pause. Between a trigger and your reply there is a gap — one second brings the defensive reaction, three seconds brings the thoughtful one. A story in the lesson: someone asked "do you actually know how to do this?" and the answer after a pause was calm instead of sharp. My try-on was pausing before every answer today. Nobody noticed the pause. Two people told me I seemed thoughtful. Where would a 3-second pause have helped you this week?',
        direct:
          'The 3-second pause is the cheapest upgrade in communication. Day 3 of Uneek Academy’s course. One second delivers the defensive reply; three seconds delivers the chosen one — and the pause reads as composure, not slowness. Today I counted "one, two, three" before answering anything. Two people said I seemed thoughtful. That is the trick: the pause helps you and flatters you at once. Where would it have helped you this week?',
        story:
          'A colleague asked me, a little sharply, "so do you actually know how to do this?" Old me would have snapped or shrunk. This week — day 3 of Uneek Academy’s communication course — I counted one, two, three and said "I’m still learning it. What would you like to see first?" The question was rude; the answer was calm. The three seconds did that. My try-on is now a daily habit: pause before every answer. Where would a 3-second pause have helped you this week?',
      },
    },
  },
  {
    id: 'com-d04',
    month: 1,
    week: 1,
    day: 4,
    dayIndex: 4,
    type: 'reading',
    title: 'Say It So People Can Hear It',
    duration: '9 min',
    summary:
      'Clear beats clever. Today’s tool: one simple structure that makes anything you say easier to follow.',
    concepts: ['Clarity', 'Structure', 'What–So What–Now What'],
    exercise:
      'Rewrite one real thing you need to say this week using the What–So What–Now What structure. Keep it under three sentences. Test it on a friend, a mirror, or a voice note.',
    tryOn:
      'Find one thing you need to say this week (a request, an update, an opinion). Write it in three lines: "What: ___. So what: ___. Now what: ___." Read it aloud once. Notice how much shorter it is than what you had planned to say.',
    cards: [
      {
        kind: 'hook',
        body: 'People do not fail to hear you because your idea is bad. They fail because it arrived as a pile instead of a path.',
      },
      {
        kind: 'story',
        title: 'The five-minute answer',
        body: 'In her review, Grace was asked "How is the project going?" She talked for five minutes about vendor delays, the new intern, and a bug from March. Her manager’s face slowly went blank. Afterwards her mentor asked one question: "What did you want them to know?" Grace thought: "That we’ll be two weeks late." Five minutes to deliver one sentence. It is not nerves this time — it is structure.',
      },
      {
        kind: 'text',
        title: 'What–So What–Now What',
        body: 'Anything you say lands better in three moves: What (the facts), So what (why it matters), Now what (what happens next). "We’ll be two weeks late (what) — the launch misses the school term (so what) — I suggest we ship the reading feature first (now what)." Three lines. A person can repeat that.',
      },
      {
        kind: 'definition',
        title: 'What–So What–Now What',
        body: 'A three-part structure: the facts, why they matter, and what happens next.',
      },
      {
        kind: 'example',
        title: 'Everyday example',
        body: 'Asking for help: "What: I’m stuck on the budget sheet. So what: it blocks Friday’s numbers. Now what: could you spare 15 minutes today?" Compare with the usual five-minute fog. Same request, actually answerable.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Run today’s exercise on a real message. Bonus rule of thumb: if a sentence does not fit What, So what, or Now what, it is probably a pile — take it out.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Grace’s five-minute answer failed because…',
        options: [
          'It lacked structure — the key point was buried',
          'Her idea was bad',
          'She was not smart enough',
          'Her manager was rude',
        ],
        answer: 0,
        explanation: 'A pile of facts hides the one sentence people need. Structure is the rescue.',
        concept: 'Structure',
      },
      {
        kind: 'mcq',
        question: '"So what" in the structure means…',
        options: [
          'Why the facts matter to this listener',
          'What happens next',
          'The facts themselves',
          'An apology',
        ],
        answer: 0,
        explanation: 'What = facts. So what = relevance. Now what = next step.',
        concept: 'What–So What–Now What',
      },
      {
        kind: 'scenario',
        question:
          'Which request is clearest?',
        options: [
          '"I’m stuck on the budget sheet; it blocks Friday’s numbers; could you spare 15 minutes today?"',
          '"So… about the thing… there’s a lot going on…"',
          '"Can I ask a small favour? It’s complicated."',
          '"Never mind, I’ll manage."',
        ],
        answer: 0,
        explanation: 'What, so what, now what — in one breath, and fully answerable.',
        concept: 'Clarity',
      },
    ],
    share: {
      hook: 'Clear beats clever. Structure is how you get clear.',
      question: 'What is one thing you could say in three lines instead of five minutes?',
      posts: {
        reflective:
          'Day 4 of Uneek Academy’s communication course fixed a habit I did not know I had: the five-minute fog. The lesson’s story — asked "how is the project going?", one person talked for five minutes and delivered one sentence — felt like watching myself. The tool is What–So What–Now What: facts, why they matter, next step. I rewrote a real request in three lines and said it out loud in fifteen seconds. It was answered in thirty. What is one thing you could say in three lines instead of five minutes?',
        direct:
          'Stop talking for five minutes to deliver one sentence. Day 4 of Uneek Academy’s communication course: use What–So What–Now What. The facts, why they matter, what happens next. "We’ll be two weeks late — the launch misses the school term — let’s ship the reading feature first." That is answerable. I tested it on a real request: 15 seconds to say, 30 to answer. What is one thing you could say in three lines instead of five minutes?',
        story:
          'My manager asked "how is the project going?" and I talked for five minutes about vendors, interns, and a bug from March. Afterwards I wrote the one thing I had wanted them to know: "We’ll be two weeks late." Day 4 of Uneek Academy’s communication course gave me the fix — What, So What, Now What. I rewrote my next request in three lines and it took fifteen seconds to say. What is one thing you could say in three lines instead of five minutes?',
      },
    },
  },
  {
    id: 'com-d05',
    month: 1,
    week: 1,
    day: 5,
    dayIndex: 5,
    type: 'reading',
    title: 'Your First Brave Sentence',
    duration: '9 min',
    summary:
      'Bravery scales. Today is about the smallest possible acts of speaking up — with exact words, for people who hate speaking up.',
    concepts: ['Micro-bravery', 'Scripts', 'Speaking up'],
    exercise:
      'Choose one brave sentence from today’s list and use it in the wild this week. Write the line down, put it in your notes app, and deploy it when the moment comes. Note what happened.',
    tryOn:
      'Pick ONE script and say it today. (1) "Actually, I’d prefer tea, thanks." (2) "Could I add one thing?" (3) "I disagree — here’s why." (4) "Could you repeat that? I want to get it right." Each is under eight words. The size is the point.',
    cards: [
      {
        kind: 'hook',
        body: 'Bravery is not a personality. It is a size. Shrink it small enough and anyone can carry it.',
      },
      {
        kind: 'story',
        title: 'The tea test',
        body: 'Zainab’s communication coach did not start with speeches. The first assignment: order tea — and say "Actually, I’d prefer tea, thanks" when they brought coffee by mistake. Zainab practised the sentence in her car. She said it at the café. The waiter said "no problem." That was the whole event. But something shifted: a sentence she used to swallow, said out loud, and the world did not end. Week after week the sentences grew. That is how it actually works.',
      },
      {
        kind: 'text',
        title: 'The micro-bravery ladder',
        body: 'Speaking up is a muscle, not a switch. Start with zero-audience sentences (ordering, small preferences), then tiny-audience sentences ("could I add one thing?" with one friend), then real ones (a disagreement in a meeting). Each rung is a sentence under ten words. Timid people do not need bigger courage — they need smaller first rungs.',
      },
      {
        kind: 'definition',
        title: 'Micro-bravery',
        body: 'A deliberately tiny act of speaking up — small enough that your threat system lets you do it.',
      },
      {
        kind: 'list',
        title: 'The brave-sentence kit (say one today)',
        items: [
          '"Actually, I’d prefer tea, thanks." — preferences, zero stakes.',
          '"Could I add one thing?" — entering a conversation.',
          '"I disagree — here’s why." — opinions, one-on-one first.',
          '"Could you repeat that? I want to get it right." — when jokes sting.',
          '"No, thank you." — the complete sentence. No essay required.',
        ],
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Run today’s exercise: one script in the wild this week. Report card is one line: what you said, what happened. Expect the answer to be "nothing bad." That expectation update is the real lesson.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Why start with tiny sentences like ordering tea?',
        options: [
          'Small enough that the threat system allows them — bravery grows from there',
          'To waste time before real talk',
          'Because waiters need practice too',
          'Because big sentences are banned',
        ],
        answer: 0,
        explanation: 'Shrink the task until it fits under your fear. Then grow it.',
        concept: 'Micro-bravery',
      },
      {
        kind: 'truefalse',
        question: 'Timid people need bigger courage before they can speak up.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'They need smaller first rungs. The courage was never the missing part.',
        concept: 'Speaking up',
      },
      {
        kind: 'scenario',
        question:
          'Someone makes a stinging joke at your expense. Which script fits?',
        options: [
          '"Could you repeat that? I want to get it right."',
          'Laugh along and hurt later',
          '"Nothing from me."',
          'Send a long text that night',
        ],
        answer: 0,
        explanation: 'It is calm, under eight words, and passes the joke back to its owner.',
        concept: 'Scripts',
      },
    ],
    share: {
      hook: 'Bravery is not a personality. It is a size.',
      question: 'What is the smallest brave sentence you could say today?',
      posts: {
        reflective:
          'Day 5 of Uneek Academy’s communication course: the tea test. The first assignment was not a speech — it was correcting an order: "Actually, I’d prefer tea, thanks." One sentence, practised in a car, said to a waiter, answered with "no problem." That is the micro-bravery ladder: sentences under ten words, growing rung by rung. Timid people don’t need bigger courage; they need smaller first rungs. I ran my sentence today. Nothing bad happened — which is exactly the data I needed. What is the smallest brave sentence you could say today?',
        direct:
          'Bravery is a size, not a personality. Day 5 of Uneek Academy’s communication course. Start where your threat system won’t fight you: "Actually, I’d prefer tea, thanks." Then "Could I add one thing?" Then "I disagree — here’s why." Under ten words each, in order. I used one today. The world did not end; it rarely does. Timid people don’t need bigger courage — they need smaller first rungs. What is the smallest brave sentence you could say today?',
        story:
          'My friend’s first communication assignment was absurd: order tea, let them bring coffee, and say "Actually, I’d prefer tea, thanks." She practised it in the car. The waiter said "no problem." That was the whole event — and it changed something. Day 5 of Uneek Academy’s communication course names it: micro-bravery. Sentences under ten words, growing rung by rung. I tried "Could I add one thing?" in a meeting today. It worked. What is the smallest brave sentence you could say today?',
      },
    },
  },
  {
    id: 'com-d06',
    month: 1,
    week: 1,
    day: 6,
    dayIndex: 6,
    type: 'review',
    title: 'Week 1 Review: Speaking Without Shrinking',
    duration: '10 min',
    summary:
      'Five tools, one week: threat response, the spotlight effect, the pause, What–So What–Now What, and micro-bravery.',
    concepts: ['Week 1 synthesis'],
    reviewTopics: [
      'Threat response',
      'Spotlight effect',
      'The 3-second pause',
      'What–So What–Now What',
      'Micro-bravery',
    ],
    tryOn:
      'Teach one of this week’s five ideas to a person — or to a voice note. Use a real example from your week. If you stumble on one idea, that is your review list.',
    cards: [
      {
        kind: 'hook',
        body: 'One week ago, speaking up was a personality trait. Now it is a set of tools — and tools can be picked up.',
      },
      {
        kind: 'list',
        title: 'This week’s five concepts',
        items: [
          'Threat response — the ladder feeling is a false alarm, not a verdict.',
          'Spotlight effect — everyone is watching less than it feels.',
          'The 3-second pause — the gap where chosen words live.',
          'What–So What–Now What — facts, why they matter, next step.',
          'Micro-bravery — sentences under ten words, rung by rung.',
        ],
      },
      {
        kind: 'text',
        title: 'How they fit together',
        body: 'The pause buys you time when the threat system fires. Structure gives the words a shape. Micro-bravery is how you practise safely. The spotlight effect is the reminder that the risk is smaller than it feels. Together: a quiet person with tools.',
      },
      {
        kind: 'practice',
        title: 'Before the quiz',
        body: 'Say the five concepts out loud once. Whichever one you cannot say without looking is the one the quiz will ask about first.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'The ladder feeling when speaking up comes from…',
        options: [
          'A threat response built for real danger',
          'A character flaw',
          'Poor vocabulary',
          'The audience being hostile',
        ],
        answer: 0,
        explanation: 'False alarm, real feeling. You can speak while it rings.',
        concept: 'Threat response',
      },
      {
        kind: 'mcq',
        question: 'The spotlight effect says that…',
        options: [
          'People watch you less closely than it feels',
          'Everyone is judging you carefully',
          'Lights should face the speaker',
          'You should avoid attention',
        ],
        answer: 0,
        explanation: 'Your awkward moment is a background detail in other people’s days.',
        concept: 'Spotlight effect',
      },
      {
        kind: 'mcq',
        question: 'The 3-second pause is valuable because…',
        options: [
          'The thoughtful response arrives a beat after the defensive one',
          'It confuses listeners',
          'It fills silence',
          'It is required by etiquette',
        ],
        answer: 0,
        explanation: 'One second = reflex. Three seconds = choice.',
        concept: 'The 3-second pause',
      },
      {
        kind: 'mcq',
        question: '"So what" in What–So What–Now What stands for…',
        options: [
          'Why the facts matter to the listener',
          'The facts',
          'The next step',
          'An apology',
        ],
        answer: 0,
        explanation: 'What = facts. So what = relevance. Now what = next step.',
        concept: 'What–So What–Now What',
      },
      {
        kind: 'mcq',
        question: 'Micro-bravery means…',
        options: [
          'Deliberately tiny acts of speaking up',
          'Speaking less',
          'Pretending to be brave',
          'Big speeches in small rooms',
        ],
        answer: 0,
        explanation: 'Shrink the task until it fits under your fear. Then grow it.',
        concept: 'Micro-bravery',
      },
      {
        kind: 'truefalse',
        question: 'A 3-second pause makes you look slow and uncertain.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Audiences read it as composure. It helps you and flatters you.',
        concept: 'The 3-second pause',
      },
      {
        kind: 'truefalse',
        question: 'Tone in writing can change how neutral words are received.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Messages are received twice. Warm, specific wording shrinks the gap.',
        concept: 'Threat response',
      },
      {
        kind: 'scenario',
        question:
          'You must tell your team the launch slips two weeks. Best structure?',
        options: [
          'What (two weeks late) → So what (misses the school term) → Now what (ship the reading feature first)',
          'Five minutes of background first',
          '"It’s complicated, we’ll see."',
          'An apology, then silence',
        ],
        answer: 0,
        explanation: 'Three lines a person can repeat. Clarity is kindness.',
        concept: 'What–So What–Now What',
      },
    ],
    share: {
      hook: 'Speaking up is not a personality. It is a set of tools.',
      question: 'Which of the week’s five tools will you carry into next week?',
      posts: {
        reflective:
          'Week 1 of Uneek Academy’s communication course done. Five tools: the threat response is a false alarm, the spotlight effect exaggerates attention, the 3-second pause creates choice, What–So What–Now What creates clarity, and micro-bravery creates momentum. Two try-ons surprised me: a pause that made me sound thoughtful, and a small preference said out loud with no disaster. I am not suddenly loud. I am no longer silent. Which of the five tools will you carry into next week?',
        direct:
          'Week 1 of Uneek Academy’s communication course complete. The toolkit: threat response (false alarm), spotlight effect (they’re not watching), 3-second pause (choice), What–So What–Now What (clarity), micro-bravery (momentum). Practical result this week: one corrected order, one added opinion, one clear request. Quiet, not silenced. Which tool are you carrying into next week?',
        story:
          'Seven days ago my friend would have said she is "just shy." Tonight she corrected an order — "Actually, I’d prefer tea, thanks" — and told a three-line story about her week without apologising once. Week 1 of Uneek Academy’s communication course: the ladder feeling is a false alarm, the spotlight is dimmer than it feels, the pause is a superpower, structure beats fog, and bravery is a size. Which of the five tools will you carry into next week?',
      },
    },
  },
  {
    id: 'com-d07',
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
      'Your voice has practised enough for one week. Today: no exercises, no scripts. Let it settle. Tick rest below and the streak keeps rolling.',
    share: {
      hook: 'Rest is where learning settles.',
      posts: { reflective: '', direct: '', story: '' },
    },
  },
];
