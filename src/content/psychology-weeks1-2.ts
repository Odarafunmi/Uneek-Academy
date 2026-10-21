import type { Lesson } from '../lib/types';

/**
 * Psychology: How People Think — Month 1 (Weeks 1–2)
 * Teaching voice: plain language for a smart 15-year-old.
 * Every concept: hook → explanation → everyday example → practice task.
 */
export const weeks1to2: Lesson[] = [
  /* ---------------- WEEK 1 ---------------- */
  {
    id: 'psy-d01',
    month: 1,
    week: 1,
    day: 1,
    dayIndex: 1,
    type: 'reading',
    title: 'What Psychology Actually Is',
    duration: '10 min',
    summary:
      'Psychology is not mind-reading or Freud on a couch. It is the careful study of how people think, feel, and behave — told today through two small stories you will recognize.',
    concepts: ['What psychology is', 'Patterns of behaviour', 'Science of the mind'],
    tryOn:
      'Find one conversation today — any conversation. Afterwards, write one line: "They said ___ but I noticed ___." That is your first data point. (Quiet version: just listen to a call or a show and note it privately. Nothing to say out loud yet.)',
    cards: [
      {
        kind: 'hook',
        body: 'Psychology is not about reading minds. It is about noticing patterns.',
      },
      {
        kind: 'story',
        title: 'The two conversations',
        body: 'Amara had two conversations last Monday. First, her friend said "I’m fine" while closing her phone and dropping her voice. Amara shrugged and changed the subject. Second, her little cousin said "I hate school" and Amara asked, "What happened today?" — and got the real story: a spelling test went badly. Same Amara. Two conversations. In one she heard words; in the other she heard a pattern. Psychology is the second way of listening.',
      },
      {
        kind: 'text',
        title: 'So what is it?',
        body: 'Psychology is the study of how people think, feel, and behave. Not guesses or horoscopes — careful observation. Psychologists watch what people do, form a guess about why, and then test that guess. The "why" part is what makes it powerful.',
      },
      {
        kind: 'definition',
        title: 'Psychology',
        body: 'The careful study of how people think, feel, and behave — and why.',
      },
      {
        kind: 'story',
        title: 'The pattern behind "I’m fine"',
        body: 'Think again about Amara’s friend. The words said fine; the tone said otherwise. A psychologist does not guess her whole childhood from one sentence. They simply notice the gap between words and behaviour — and stay curious. Over a week, that curiosity might reveal a pattern: she goes quiet whenever work comes up. One observation is a data point. Three observations is a pattern. A pattern is where psychology begins.',
      },
      {
        kind: 'example',
        title: 'Everyday example',
        body: 'You wave at a friend and they do not wave back. The instant sentence in your head: "They’re ignoring me." That sentence is a guess about behaviour. Psychology teaches you to hold it loosely: maybe they did not see you. Same event, different reading — and a much different evening.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Before today’s try-on, do this warm-up: watch one conversation — at home, in class, or on a call. Notice one thing someone did that did not match what they said. That’s it. You just collected your first data point.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Which is the best definition of psychology?',
        options: [
          'The careful study of how people think, feel, and behave',
          'The ability to know what someone is thinking without asking',
          'Advice about how to live a better life',
          'The study of the brain’s cells and chemicals only',
        ],
        answer: 0,
        explanation:
          'Psychology studies thoughts, feelings, and behaviour — carefully, and with tests, not guesses.',
        concept: 'What psychology is',
      },
      {
        kind: 'truefalse',
        question: 'Psychology relies mainly on guessing what people are thinking.',
        options: ['True', 'False'],
        answer: 1,
        explanation:
          'Psychologists observe and test. The word "guess" is the opposite of the whole method.',
        concept: 'Science of the mind',
      },
      {
        kind: 'scenario',
        question:
          'A colleague says "Great idea" but immediately starts finding problems with it. What is the psychological move?',
        options: [
          'Assume they are jealous of you',
          'Notice the gap between their words and behaviour and get curious about it',
          'Tell them to stop being negative',
          'Ignore everything and move on',
        ],
        answer: 1,
        explanation:
          'Psychology starts with noticing the mismatch, then staying curious — not jumping to conclusions.',
        concept: 'Patterns of behaviour',
      },
    ],
    share: {
      hook: 'Psychology is not about reading minds. It is about noticing patterns.',
      question: 'What is one pattern in your own behaviour you have never questioned?',
      posts: {
        reflective:
          'I used to think psychology was about reading minds. Day 1 of Uneek Academy taught me it is closer to gardening: noticing what grows, and under what conditions. The lesson followed two conversations — one where "I’m fine" was just words, and one where asking "what happened?" revealed a spelling test that went badly. The gap between what people say and what they do is where the real information lives. Today I watched one conversation and noticed a mismatch between words and tone. It is a small habit, but it already changes how I listen. Question for you: what is one pattern in your own behaviour you have never questioned?',
        direct:
          'Psychology is not mind-reading. It is pattern-noticing. That is the first lesson of Uneek Academy’s psychology course, and it lands hard. The method is simple: observe behaviour, form a guess, test the guess. No horoscopes, no guessing what people think. The most useful signal is the gap between what someone says and what they do — "I’m fine" said in a flat voice. Today’s task: watch one conversation and record one mismatch. One data point a day beats a shelf of unread books. What pattern in your own behaviour have you never questioned?',
        story:
          'Last Monday my friend said "I’m fine" while closing her phone and dropping her voice. Old me shrugged and changed the subject. That same evening, my little cousin said "I hate school" and I asked "what happened today?" — and got the real story. Day 1 of Uneek Academy’s psychology course named the difference: psychology is not reading minds, it is noticing patterns. The gap between words and behaviour is where the real information lives. My try-on today: one conversation, one mismatch, one note. What is one pattern in your own behaviour you have never questioned?',
      },
    },
  },
  {
    id: 'psy-d02',
    month: 1,
    week: 1,
    day: 2,
    dayIndex: 2,
    type: 'video',
    video: {
      youtubeId: '-moW9jvvMr4',
      title: 'A simple way to break a bad habit',
      by: 'Judson Brewer · TED',
      note: 'Psychiatrist Judson Brewer shows the trigger–behaviour–reward loop that runs your brain on autopilot — and how curious awareness, not willpower, hands you back the controls. 38M+ views across TED.',
    },
    title: 'Your Brain on Autopilot',
    duration: '8 min',
    summary:
      'Most of your day runs on mental autopilot. That is not laziness — it is your brain saving energy for what matters.',
    concepts: ['Automatic processing', 'Mental energy', 'Conscious control'],
    tryOn: 'Redo one tiny routine today as if it were your first time — tea, tying laces, the walk to your door. Count the steps in your head and note the one step autopilot always hides from you.',
    cards: [
      {
        kind: 'hook',
        body: 'You drove or walked a familiar route today and remember almost none of it. That is not a failure. That is the design.',
      },
      {
        kind: 'text',
        title: 'Two systems, one brain',
        body: 'Your brain runs a lot of actions automatically: walking, reading faces, tying laces. Automatic processing is fast, effortless, and mostly invisible. Conscious control is slow, effortful, and tiring. Your brain uses it sparingly — like a phone that dims the screen to save battery.',
      },
      {
        kind: 'definition',
        title: 'Automatic processing',
        body: 'Mental work your brain does quickly and without effort because it has practised it before.',
      },
      {
        kind: 'example',
        title: 'Everyday example',
        body: 'Think about the first time you cooked rice versus now. Then, every step needed attention. Now you do it while talking. The effort did not disappear — it moved into autopilot. This is why experts look calm: their basics are automatic.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Pick one routine you do daily (brushing teeth, a commute, making tea). Do it once today as if it were your first time. Notice how many tiny steps autopilot was hiding from you.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Why does the brain use automatic processing?',
        options: [
          'To save mental energy for harder problems',
          'Because it is lazy and refuses to think',
          'To make everything slower and safer',
          'Because conscious thought is impossible',
        ],
        answer: 0,
        explanation:
          'Automatic processing is efficiency: practised actions run quietly so attention is free for what is new or hard.',
        concept: 'Automatic processing',
      },
      {
        kind: 'truefalse',
        question: 'Conscious control is fast and effortless.',
        options: ['True', 'False'],
        answer: 1,
        explanation:
          'Conscious control is slow and effortful — that is exactly why the brain reserves it.',
        concept: 'Conscious control',
      },
      {
        kind: 'scenario',
        question:
          'You arrive at work and cannot remember the drive. What is the best explanation?',
        options: [
          'Your memory is failing',
          'The drive was handled by automatic processing, so little needed conscious attention',
          'You were probably asleep',
          'You are too stressed to function',
        ],
        answer: 1,
        explanation:
          'Familiar actions run on autopilot. When nothing surprising happens, little of it gets stored.',
        concept: 'Automatic processing',
      },
    ],
    share: {
      hook: 'Your brain is not lazy. It is running a power-saving mode.',
      question: 'Which part of your day would you like to bring back from autopilot?',
      posts: {
        reflective:
          'Day 2 of Uneek Academy’s psychology course: your brain has a power-saving mode. Walking, reading faces, making tea — these run on automatic processing so your attention is free for what is new or hard. Conscious control is the expensive resource; the brain spends it carefully. The exercise was to redo one routine as if it were my first time. I tried making tea slowly and found eleven steps autopilot had been hiding. It reframes "being on autopilot" as efficiency, not failure — and it asks a nice question: what would you like to bring back from autopilot into the light?',
        direct:
          'Your brain runs a power-saving mode. Day 2 of a psychology course, and this is the most useful thing I learned this week. Familiar actions — walking, tea, commuting — run on automatic processing so conscious effort can be spent on what actually matters. That is why you cannot remember your commute: nothing surprising needed storing. Expertise works the same way: when the basics are automatic, you look calm doing hard things. Today’s task: redo one routine as if it were your first time. Eleven steps in a cup of tea. Which part of your day would you bring back from autopilot?',
        story:
          'This morning I made tea as if it were my first time — kettle, cup, bag, water, timing, milk. Eleven tiny steps. Normally all of it happens while I am thinking about work, and I remember nothing. That, I learned today, is automatic processing: your brain’s power-saving mode. Conscious control is slow and expensive, so the brain spends it only where something is new or surprising. It is a kind explanation for feeling scattered on busy days: the battery is not broken, it is being spent. Which part of your day would you like to bring back from autopilot?',
      },
    },
  },
  {
    id: 'psy-d03',
    month: 1,
    week: 1,
    day: 3,
    dayIndex: 3,
    type: 'interactive',
    title: 'How You See What You See',
    duration: '7 min',
    summary:
      'Your eyes are cameras, but your brain is the editor. Perception is construction — and it sometimes overwrites reality.',
    concepts: ['Perception', 'Top-down processing', 'Visual illusions'],
    tryOn: 'Find one optical illusion today (search "optical illusion"). Stare at it for 30 seconds and try to make your brain un-see the trick. It will refuse — that refusal is your evidence. Note one line: "My brain edited ___."',
    cards: [
      {
        kind: 'hook',
        body: 'You do not see the world. You see the story your brain builds about the world.',
      },
      {
        kind: 'text',
        title: 'Perception is construction',
        body: 'Light hits your eyes, but "seeing" happens in the brain. Your brain fills gaps, corrects colours, and guesses shapes using what it expects. This is called top-down processing: your knowledge shapes what you perceive. It is usually helpful — and sometimes it edits reality without telling you.',
      },
      {
        kind: 'definition',
        title: 'Top-down processing',
        body: 'When your brain uses expectations and past experience to fill in what the senses leave out.',
      },
      {
        kind: 'example',
        title: 'Everyday example',
        body: 'Read this: "Y0U C4N R34D TH1S." Your eyes saw a mess of numbers, but your brain predicted the words. It does the same with half-heard speech, blurry faces, and messy handwriting. Usually helpful. Occasionally wrong.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Find one photo with an optical illusion today (search "optical illusion" and pick one). Watch your brain refuse to believe the measurement. That refusal is top-down processing in action.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Where does "seeing" actually happen?',
        options: ['In the eyes', 'In the brain', 'In the light', 'In the object being looked at'],
        answer: 1,
        explanation:
          'Eyes collect light; the brain interprets it. Perception is an act of construction.',
        concept: 'Perception',
      },
      {
        kind: 'truefalse',
        question: 'Top-down processing means using expectations to fill in missing information.',
        options: ['True', 'False'],
        answer: 0,
        explanation:
          'Exactly: knowledge from above (the brain) shapes what the senses deliver.',
        concept: 'Top-down processing',
      },
      {
        kind: 'mcq',
        question: 'Reading "Y0U C4N R34D TH1S" is mainly an example of…',
        options: [
          'Eyes adapting to the dark',
          'Top-down processing filling in messy input',
          'A photographic memory',
          'Optical damage to the eye',
        ],
        answer: 1,
        explanation:
          'Your expectations of English words overrode the messy pixels. Your brain edited the scene.',
        concept: 'Top-down processing',
      },
    ],
    share: {
      hook: 'You do not see the world. You see your brain’s best guess of the world.',
      concept: 'Top-down processing',
      definition:
        'When your brain uses expectations to fill in what the senses leave out.',
      posts: {
        reflective:
          'Day 3 of Uneek Academy’s psychology course. Eyes are cameras; the brain is the editor. Perception is construction — your brain fills gaps, predicts words, and fixes colours using what it expects. The technical name is top-down processing. Try reading "Y0U C4N R34D TH1S": your eyes saw noise, your brain produced the sentence. The humbling part: this happens to everything you see, all day, without your permission. Noticing that my own eyes are an editorial process, not a recording, has already made me slower to say "I know what I saw." What has your brain edited for you lately?',
        direct:
          'You do not see the world. You see your brain’s best guess. Day 3 of Uneek Academy’s psychology course covers top-down processing: the brain uses expectations to fill in missing information. Cameras capture; brains edit. Proof: "Y0U C4N R34D TH1S." The pixels were noise, but your expectations built the sentence. This is why two people can watch the same argument and describe different events — perception is construction. Practical takeaway: "I know what I saw" is a weaker claim than it feels. What has your brain edited for you this week?',
        story:
          'My cousin and I watched the same argument at a family gathering. She described an aggressive shout; I described someone overwhelmed. Both of us were certain. Today’s lesson explains why: perception is construction. The brain edits raw input using expectations — top-down processing. It is why "Y0U C4N R34D TH1S" reads as English and why eyewitnesses disagree. The exercise was an optical illusion that refused to behave even after I measured it. My takeaway: certainty about what I saw is a feeling, not a fact. What has your brain edited for you lately?',
      },
    },
  },
  {
    id: 'psy-d04',
    month: 1,
    week: 1,
    day: 4,
    dayIndex: 4,
    type: 'reading',
    title: 'The Spotlight of Attention',
    duration: '6 min',
    summary:
      'Attention is a spotlight, not a floodlight. What it misses is as important as what it catches — and that explains the invisible gorilla.',
    concepts: ['Selective attention', 'Inattentional blindness', 'Attention as a resource'],
    tryOn: 'Give one conversation 60 full seconds of attention today — no phone, no rehearsing your reply. Timid version: do this on a call where you never speak. Note one detail you would normally have missed.',
    cards: [
      {
        kind: 'hook',
        body: 'Attention is a spotlight. Whatever stands outside the beam might as well not exist.',
      },
      {
        kind: 'text',
        title: 'A spotlight, not a floodlight',
        body: 'Your senses take in far more than you can process. Attention chooses. Focus hard on one thing and other things — even obvious ones — can pass unnoticed. This is not a character flaw; it is a budget. Attention is a limited resource, spent wherever your goals point it.',
      },
      {
        kind: 'definition',
        title: 'Inattentional blindness',
        body: 'Failing to notice something visible because attention is busy elsewhere.',
      },
      {
        kind: 'example',
        title: 'Everyday example',
        body: 'In the famous "invisible gorilla" study, people counting basketball passes missed a person in a gorilla suit walking through the scene. Daily version: you cannot hear your name at a loud party until someone says it — then it is suddenly everywhere. The information was always there; the spotlight was elsewhere.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'In one conversation today, give full attention for 60 seconds — no phone, no planning your reply. Notice how much more you catch. Then notice how quickly the spotlight drifts.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'The "spotlight" metaphor for attention means that…',
        options: [
          'We notice everything within a wide area',
          'We process well what we focus on and miss much of the rest',
          'Attention works better at night',
          'Attention cannot be controlled',
        ],
        answer: 1,
        explanation:
          'Attention selects a narrow beam. Outside the beam, awareness is thin.',
        concept: 'Selective attention',
      },
      {
        kind: 'truefalse',
        question:
          'In the "invisible gorilla" study, most people in the gorilla study saw the gorilla because it was so obvious.',
        options: ['True', 'False'],
        answer: 1,
        explanation:
          'About half of viewers miss the gorilla entirely. Busy attention makes visible things invisible.',
        concept: 'Inattentional blindness',
      },
      {
        kind: 'scenario',
        question:
          'You are rehearsing your presentation while a colleague explains a problem, and you catch none of it. What happened?',
        options: [
          'They must have mumbled',
          'Your attention spotlight was on your rehearsal, so their words were outside the beam',
          'Your hearing briefly failed',
          'They were not worth listening to',
        ],
        answer: 1,
        explanation:
          'Attention is a budget pointed by your goals. Rehearsal spent it all; listening got what was left.',
        concept: 'Attention as a resource',
      },
    ],
    share: {
      hook: 'Attention is a spotlight, not a floodlight.',
      question: 'What is standing outside your spotlight right now?',
      posts: {
        reflective:
          'Day 4 of Uneek Academy’s psychology course: attention is a spotlight, not a floodlight. Whatever falls outside the beam might as well not exist — that is why people counting basketball passes miss a gorilla walking through the scene. Attention is not a moral quality; it is a budget, pointed wherever your goals send it. I tried the task: sixty seconds of full attention in one conversation, no phone, no rehearsing my reply. The difference in what I heard was embarrassing and instructive. The question I am carrying: what is standing outside my spotlight right now that someone wishes I could see?',
        direct:
          'Attention is a spotlight, not a floodlight. Day 4 of Uneek Academy’s psychology course. If you have not seen the invisible gorilla study, look it up: people counting passes miss a person in a gorilla suit. Attention is a limited budget, pointed by your goals — when you rehearse your reply, you literally cannot take in what is being said. Not a character flaw. A design feature. The fix is cheap: sixty seconds of full attention per conversation. Try it once today and notice how much you have been missing. What is standing outside your spotlight right now?',
        story:
          'My teammate asked what she should do about a client problem, and I caught exactly zero of it. Why? I was rehearsing my own presentation in my head. Today’s lesson names it: attention is a spotlight, and mine was pointing at me. The invisible gorilla study shows the same thing on video — focused counters miss a gorilla. Attention is a budget, not a virtue. Tonight I redid one conversation with sixty seconds of true focus. I heard a detail that changed my advice completely. What is standing outside your spotlight right now that someone wishes you could see?',
      },
    },
  },
  {
    id: 'psy-d05',
    month: 1,
    week: 1,
    day: 5,
    dayIndex: 5,
    type: 'reading',
    title: 'Why Your Brain Takes Shortcuts',
    duration: '7 min',
    summary:
      'Mental shortcuts are fast and usually right. "Usually" is the word that makes psychology necessary.',
    concepts: ['Heuristics', 'Judgement under uncertainty', 'When shortcuts fail'],
    tryOn: 'Catch one shortcut. Write two lines: the quick judgement, then the actual evidence. Quiet version: practise on strangers in a queue — zero risk, same muscle.',
    exercise:
      'Catch one shortcut today: find a quick judgement you made (someone’s outfit, a headline, a tone of voice) and ask what evidence you actually had.',
    cards: [
      {
        kind: 'hook',
        body: 'Your brain is a shortcut machine — fast, efficient, and occasionally confidently wrong.',
      },
      {
        kind: 'text',
        title: 'Shortcuts by design',
        body: 'The world gives you too much information and too little time. So the brain uses heuristics: mental shortcuts that produce a good-enough answer quickly. They work surprisingly often. But "surprisingly often" is not "always," and the failures are predictable.',
      },
      {
        kind: 'definition',
        title: 'Heuristic',
        body: 'A mental shortcut that trades perfect accuracy for speed.',
      },
      {
        kind: 'example',
        title: 'Everyday example',
        body: 'You hear one loud laugh in a quiet library and instantly judge "rude person." The shortcut: loudness → character. The reality might be someone reading a funny message from a friend. Fast verdict, thin evidence.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Use today’s exercise prompt: catch one shortcut, write the judgement, then list the actual evidence. Two lines each. The goal is not to stop judging — it is to see the machinery.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Heuristics are best described as…',
        options: [
          'Mental shortcuts for fast, good-enough judgement',
          'Logical rules that guarantee the right answer',
          'Errors in memory',
          'Emotional reactions',
        ],
        answer: 0,
        explanation:
          'Heuristics trade a little accuracy for a lot of speed. Mostly helpful, sometimes misleading.',
        concept: 'Heuristics',
      },
      {
        kind: 'truefalse',
        question: 'Mental shortcuts fail in random, unpredictable ways.',
        options: ['True', 'False'],
        answer: 1,
        explanation:
          'Shortcut failures are patterned — which is exactly why a course like this can teach them.',
        concept: 'When shortcuts fail',
      },
      {
        kind: 'scenario',
        question:
          'A candidate’s handshake is weak, and you instantly think "not confident." What is the shortcut doing?',
        options: [
          'Reading their personality accurately from one cue',
          'Using one thin signal to stand in for a complex judgement',
          'Applying a legal hiring rule',
          'Nothing — this is careful reasoning',
        ],
        answer: 1,
        explanation:
          'One cue standing in for a big conclusion is classic heuristic thinking. Fast, and risky.',
        concept: 'Judgement under uncertainty',
      },
    ],
    share: {
      hook: 'Your brain is a shortcut machine — fast, efficient, and occasionally confidently wrong.',
      question: 'What is one quick judgement you made today on thin evidence?',
      posts: {
        reflective:
          'Day 5 of Uneek Academy’s psychology course covered heuristics — the brain’s mental shortcuts. They are not bugs. The world gives too much data and too little time, so the brain trades perfect accuracy for speed. A loud laugh in a library → "rude person." A weak handshake → "not confident." Fast verdicts, thin evidence. The task was to catch one shortcut and list the real evidence behind it. I found three judgements before lunch. The point is not to stop judging — it is to see the machinery running. What is one quick judgement you made today on thin evidence?',
        direct:
          'Your brain is a shortcut machine. Day 5 of Uneek Academy’s psychology course: heuristics — mental shortcuts that trade accuracy for speed. They work most of the time, which is why they hide. Loud laugh in a library → "rude person." Weak handshake → "not confident." One thin cue standing in for a whole human being. The exercise: catch a shortcut and list the actual evidence. I found three before lunch. Seeing the machinery is the first step to better judgement. What quick judgement did you make today on thin evidence?',
        story:
          'A man laughed loudly in a quiet café and I decided, instantly, that he was rude. Then he turned his laptop and I saw a video call with a toddler dancing on a table. My shortcut — loudness equals character — had delivered a confident, wrong verdict. That is heuristics: the brain’s shortcut system, covered in Day 5 of Uneek Academy’s psychology course. They are needed (too much data, too little time) and they fail in patterned ways. My task: catch one shortcut a day and check the evidence. What quick judgement did you make today on thin evidence?',
      },
    },
  },
  {
    id: 'psy-d06',
    month: 1,
    week: 1,
    day: 6,
    dayIndex: 6,
    type: 'review',
    title: 'Week 1 Review: The Mind’s First Map',
    duration: '10 min',
    summary:
      'Five ideas, one week: what psychology is, automatic processing, perception, attention, and mental shortcuts.',
    concepts: ['Week 1 synthesis'],
    tryOn: 'Retell this week\'s five ideas to someone in under two minutes — or to an empty room. The one you stumble on is the one to review.',
    reviewTopics: [
      'What psychology is',
      'Automatic processing',
      'Top-down processing',
      'Selective attention',
      'Heuristics',
    ],
    cards: [
      {
        kind: 'hook',
        body: 'One week in, you already have a working map of the mind’s first machinery.',
      },
      {
        kind: 'list',
        title: 'This week’s five concepts',
        items: [
          'What psychology is — careful study of thoughts, feelings, behaviour, and why.',
          'Automatic processing — practised actions run quietly so attention is free.',
          'Top-down processing — expectations fill in what the senses leave out.',
          'Selective attention — the spotlight catches little outside the beam.',
          'Heuristics — fast shortcuts, patterned failures.',
        ],
      },
      {
        kind: 'text',
        title: 'How they fit together',
        body: 'Perception builds your world, attention chooses what matters, and shortcuts decide fast. Automatic processing keeps it all affordable. Psychology is simply the practice of watching these systems instead of being run by them.',
      },
      {
        kind: 'practice',
        title: 'Before the quiz',
        body: 'Say the five concepts out loud without looking. Anything you cannot recall goes on your weak list — the quiz will find it anyway.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Psychology is best defined as…',
        options: [
          'The study of how people think, feel, and behave',
          'The practice of reading people’s minds',
          'Advice for living well',
          'The study of brain chemicals only',
        ],
        answer: 0,
        explanation: 'The careful study of thoughts, feelings, behaviour — and why.',
        concept: 'What psychology is',
      },
      {
        kind: 'mcq',
        question: 'Why does the brain use automatic processing?',
        options: [
          'To save effort for new or hard problems',
          'Because it is lazy',
          'To slow everything down',
          'Because conscious thought is impossible',
        ],
        answer: 0,
        explanation: 'Practised actions run quietly; conscious effort is spent carefully.',
        concept: 'Automatic processing',
      },
      {
        kind: 'mcq',
        question: 'Reading messy text like "Y0U C4N R34D TH1S" is an example of…',
        options: ['Top-down processing', 'Inattentional blindness', 'A heuristic', 'Autopilot'],
        answer: 0,
        explanation: 'Expectations of language fill in the messy input.',
        concept: 'Top-down processing',
      },
      {
        kind: 'mcq',
        question: 'In the invisible gorilla study, people miss the gorilla because…',
        options: [
          'It was too fast to see',
          'Their attention was busy counting passes',
          'It was hidden behind the players',
          'Their eyes were closed',
        ],
        answer: 1,
        explanation: 'Busy attention makes visible things effectively invisible.',
        concept: 'Selective attention',
      },
      {
        kind: 'mcq',
        question: 'A heuristic is…',
        options: [
          'A mental shortcut trading accuracy for speed',
          'A memory error',
          'A rule that guarantees correctness',
          'A type of emotion',
        ],
        answer: 0,
        explanation: 'Good-enough answers, fast — with patterned failure modes.',
        concept: 'Heuristics',
      },
      {
        kind: 'truefalse',
        question: 'Perception is closer to construction than to recording.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'The brain builds what you see from input plus expectations.',
        concept: 'Top-down processing',
      },
      {
        kind: 'truefalse',
        question: 'Attention is unlimited if you try hard enough.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Attention is a budget; effort points it, it does not enlarge it.',
        concept: 'Selective attention',
      },
      {
        kind: 'scenario',
        question:
          'You judge someone as unfriendly from a single short text. Which concept best explains this?',
        options: [
          'Heuristics — a fast shortcut from thin evidence',
          'Top-down processing',
          'Automatic processing',
          'Inattentional blindness',
        ],
        answer: 0,
        explanation: 'One thin cue standing in for a whole person is classic heuristic thinking.',
        concept: 'Heuristics',
      },
    ],
    share: {
      hook: 'You do not see the world. You see your brain’s best guess.',
      question: 'Which of the week’s five ideas will you watch for this weekend?',
      posts: {
        reflective:
          'One week of Uneek Academy’s psychology course done. Five ideas: psychology is pattern-noticing, not mind-reading; autopilot saves energy; perception is construction; attention is a spotlight; shortcuts are fast and sometimes wrong. What strikes me is how the pieces fit — the mind spends energy carefully and hands us confident stories about the world. Watching the machinery instead of being run by it is the whole game. The quiz found my weak spot (attention vs. heuristics). Which of these five ideas will you watch for this weekend?',
        direct:
          'Week 1 of Uneek Academy’s psychology course complete. The five takeaways: (1) psychology is careful pattern-noticing, (2) the brain runs a power-saving autopilot, (3) perception is construction, (4) attention is a spotlight, (5) heuristics are fast and patterned. That is already enough to change how you listen in meetings and how quickly you judge people. Quiz score is in, weak topics listed. Best question I can ask you: which of these five ideas will you watch for in your own life this weekend?',
        story:
          'On Monday I thought psychology was about reading minds. By Saturday I had a map: autopilot runs the basics, the brain edits what I see, attention is a tiny spotlight, and shortcuts make fast judgements on thin evidence. One week of Uneek Academy’s course and I caught myself mid-shortcut twice today — once judging a stranger’s tone, once missing a friend’s point because I was rehearsing mine. The quiz found my weak spot; the weak list will fix it. Which of these five ideas will you watch for this weekend?',
      },
    },
  },
  {
    id: 'psy-d07',
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
      'Your brain consolidates learning while it rests. Today: no lesson, no quiz. Step outside, nap, or do nothing on purpose. Tick rest below and your streak stays alive.',
    share: {
      hook: 'Rest is where learning settles.',
      posts: { reflective: '', direct: '', story: '' },
    },
  },

  /* ---------------- WEEK 2 ---------------- */
  {
    id: 'psy-d08',
    month: 1,
    week: 2,
    day: 1,
    dayIndex: 8,
    type: 'reading',
    title: 'Memory Is a Rebuilder, Not a Recorder',
    duration: '7 min',
    summary:
      'Every time you remember something, you rebuild it — and the rebuild is never quite the original.',
    concepts: ['Reconstructive memory', 'Encoding', 'Memory as editing'],
    tryOn: 'Write one strong memory from this week in five sentences. Then check one detail against a photo, a message, or another person. Find the seam — that is the point.',
    cards: [
      {
        kind: 'hook',
        body: 'Memory is not a filing cabinet. It is a storyteller with a shaky pen.',
      },
      {
        kind: 'text',
        title: 'Recording vs. rebuilding',
        body: 'We imagine memory as a recording: capture once, play back forever. It is nothing like that. To remember is to rebuild the event from pieces — what was noticed, what mattered, what was said afterwards. Each rebuild can shift the story slightly.',
      },
      {
        kind: 'definition',
        title: 'Reconstructive memory',
        body: 'Remembering by rebuilding an event from pieces, which can change the memory each time.',
      },
      {
        kind: 'example',
        title: 'Everyday example',
        body: 'Two siblings describe the same childhood holiday. Both are certain. Both stories disagree — who cried, who said what, whether it rained. Neither is lying. Each memory was rebuilt hundreds of times, borrowing details from photos, retellings, and feelings.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Write down one strong memory from this week in five sentences. Then compare it with a photo, message, or another person’s version. Look for the seams.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Reconstructive memory means that…',
        options: [
          'Remembering rebuilds events from pieces and can change them',
          'Memories are stored like videos',
          'We can edit memories at will',
          'Memory only works during sleep',
        ],
        answer: 0,
        explanation:
          'Each act of remembering is a rebuild — faithful-ish, and editable by retelling.',
        concept: 'Reconstructive memory',
      },
      {
        kind: 'truefalse',
        question: 'A very vivid memory must be accurate.',
        options: ['True', 'False'],
        answer: 1,
        explanation:
          'Vividness is a feeling, not a guarantee. Confidence and accuracy come apart often.',
        concept: 'Memory as editing',
      },
      {
        kind: 'scenario',
        question:
          'Two friends give completely different accounts of the same dinner, both certain. What is the best explanation?',
        options: [
          'One of them is lying',
          'Both rebuilt the memory from different noticed details and retellings',
          'Memories do not exist',
          'One was not paying attention at all',
        ],
        answer: 1,
        explanation:
          'Reconstruction plus different attention produces divergent, sincere accounts.',
        concept: 'Reconstructive memory',
      },
    ],
    share: {
      hook: 'Memory is not a filing cabinet. It is a storyteller with a shaky pen.',
      question: 'How many times have you edited a memory by retelling it?',
      posts: {
        reflective:
          'Day 8 of Uneek Academy’s psychology course: memory is reconstructive. Every act of remembering is a rebuild from pieces — noticed details, feelings, later retellings — and the rebuild drifts. Vividness is not accuracy; certainty is not evidence. I wrote one strong memory from this week in five sentences, then checked it against my phone’s photo timeline. Two details were already wrong. It is humbling in the best way: I can trust my memories as stories that shaped me, less as footage to win arguments with. How many times have you edited a memory just by retelling it?',
        direct:
          'Memory is reconstructive, not a recording. Day 8 of Uneek Academy’s psychology course. Every time you remember, you rebuild the event from pieces — and the rebuild drifts. That is why two siblings disagree about the same holiday and both are certain. Vividness is not accuracy. The exercise: write one memory in five sentences and check it against evidence. Two of mine were already wrong. Practical rule: treat confident memories as stories, not footage. How many times have you edited a memory by retelling it?',
        story:
          'My brother and I argued about who said what at Christmas 2019. Both certain. Both different. Today’s lesson explains it: memory is a rebuild, not a recording — each retelling edits the file. I tested it by writing one memory from this week and comparing it with my camera roll. Two details were wrong already. There is freedom in that: my memories are stories that shaped me, not security footage. I can stop needing them to be perfect. How many times have you edited a memory just by telling it?',
      },
    },
  },
  {
    id: 'psy-d09',
    month: 1,
    week: 2,
    day: 2,
    dayIndex: 9,
    type: 'video',
    video: {
      youtubeId: 'Irx0tC92fdE',
      title: 'How your memory works — and why forgetting is totally OK',
      by: 'Lisa Genova · TED',
      note: 'Neuroscientist Lisa Genova explains why we forget names, words, and why we walked into a room — and why forgetting is normal memory doing its job, not you failing.',
    },
    title: 'Why We Forget',
    duration: '8 min',
    summary:
      'Forgetting is not a defect. It is housekeeping — and there are three simple ways it happens.',
    concepts: ['Forgetting curves', 'Interference', 'Retrieval failure'],
    tryOn: 'When you forget something today, name the door: decay, interference, or retrieval failure. Keep a 3-line note. No judgement — just labels.',
    cards: [
      {
        kind: 'hook',
        body: 'Forgetting is not a flaw in you. It is a feature of the system.',
      },
      {
        kind: 'text',
        title: 'Three doors to forgetting',
        body: 'Memories fade if unused (decay). New memories push old ones around (interference). And sometimes the memory is in there, but the cue to open it is missing (retrieval failure). You have experienced all three today.',
      },
      {
        kind: 'definition',
        title: 'Retrieval failure',
        body: 'The memory exists, but you cannot open it without the right cue — the tip-of-the-tongue feeling.',
      },
      {
        kind: 'example',
        title: 'Everyday example',
        body: 'You cannot recall an actor’s name at dinner (retrieval failure), then someone mentions the movie and it pops out (the cue arrived). Meanwhile, last week’s meeting agenda has faded (decay) and two passwords now fight in your head (interference).',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'When you forget something today, name which door it likely was: decay, interference, or retrieval failure. No judgement — just classification.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Retrieval failure means…',
        options: [
          'The memory is there but the cue to open it is missing',
          'The memory has decayed completely',
          'A new memory overwrote it',
          'You never encoded it',
        ],
        answer: 0,
        explanation: 'Tip-of-the-tongue is retrieval failure: the file exists, the key is missing.',
        concept: 'Retrieval failure',
      },
      {
        kind: 'truefalse',
        question: 'Forgetting is always a failure of the memory system.',
        options: ['True', 'False'],
        answer: 1,
        explanation:
          'Forgetting is housekeeping — it clears space and reduces interference.',
        concept: 'Forgetting curves',
      },
      {
        kind: 'scenario',
        question:
          'You learn French, then Spanish, and start mixing the vocabulary. What is happening?',
        options: [
          'Decay of the French',
          'Interference — the new learning jostles the old',
          'Retrieval failure',
          'Encoding failure',
        ],
        answer: 1,
        explanation: 'Similar new material competes with old material. Classic interference.',
        concept: 'Interference',
      },
    ],
    share: {
      hook: 'Forgetting is not a flaw in you. It is a feature of the system.',
      question: 'Which kind of forgetting has caught you this week?',
      posts: {
        reflective:
          'Day 9 of Uneek Academy’s psychology course: forgetting has three doors — decay (unused memories fade), interference (new learning jostles old), and retrieval failure (the memory is there, the cue is not). Forgetting is housekeeping, not a defect. Today I classified my forgets instead of feeling bad about them: an actor’s name was retrieval failure; my old password was interference. The reframe is kind and useful. If forgetting has structure, remembering can too — cues, spacing, and sleep. Which kind of forgetting has caught you this week?',
        direct:
          'Forgetting is a feature, not a failure. Day 9 of Uneek Academy’s psychology course. Three mechanisms: decay (unused memories fade), interference (new learning jostles old), retrieval failure (memory present, cue missing). Tip-of-the-tongue? Retrieval failure. Mixing up French and Spanish? Interference. The exercise: classify your forgets instead of judging them. It takes the shame out and points to the fix — better cues, spacing, sleep. Which kind of forgetting has caught you this week?',
        story:
          'I forgot a client’s name mid-intro today. Old me: panic and self-blame. New me (day 9 of a psychology course): that is retrieval failure — the memory is stored, the cue is missing. I asked about the project they mentioned last month and the name arrived instantly. Forgetting, it turns out, has three doors: decay, interference, retrieval failure. It is housekeeping, not a defect. Classifying my forgets is already less stressful than fearing them. Which kind of forgetting has caught you this week?',
      },
    },
  },
  {
    id: 'psy-d10',
    month: 1,
    week: 2,
    day: 3,
    dayIndex: 10,
    type: 'interactive',
    title: 'How Memories Are Made',
    duration: '7 min',
    summary:
      'Encoding, storage, retrieval — and why attention at the moment of encoding decides most of memory’s fate.',
    concepts: ['Encoding', 'Storage', 'Retrieval', 'Attention at encoding'],
    tryOn: 'Use the name trick on one person today (real or on screen): hear it, say it back once, picture it. Timid version: practise with names on a news show — nobody knows you are practising.',
    cards: [
      {
        kind: 'hook',
        body: 'Most "bad memory" is really "no attention at encoding."',
      },
      {
        kind: 'text',
        title: 'Three steps',
        body: 'Memory has three steps: encoding (getting the experience in), storage (keeping it), retrieval (getting it out). If encoding was rushed or distracted, storage has little to work with. You cannot retrieve what never got in.',
      },
      {
        kind: 'definition',
        title: 'Encoding',
        body: 'The first step of memory: turning an experience into something the brain can store.',
      },
      {
        kind: 'example',
        title: 'Everyday example',
        body: 'Someone introduces themselves while you are checking your phone. Thirty seconds later the name is gone. That is not a bad memory. Nothing was encoded. The phone ate the attention that encoding needed.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Meet one new name today (or re-learn one you keep forgetting). Hear it, say it back, and connect it to an image ("Grace moves with grace"). Notice the difference.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Which is the correct order?',
        options: [
          'Encoding → storage → retrieval',
          'Storage → encoding → retrieval',
          'Retrieval → storage → encoding',
          'Encoding → retrieval → storage',
        ],
        answer: 0,
        explanation: 'In, keep, out — in that order.',
        concept: 'Encoding',
      },
      {
        kind: 'scenario',
        question:
          'You read a full page and cannot recall a single sentence. Where did it most likely fail?',
        options: [
          'Storage decayed instantly',
          'Encoding — attention was elsewhere while reading',
          'Retrieval only; the page is perfectly stored',
          'The page was too long',
        ],
        answer: 1,
        explanation: 'Reading with a distracted mind is looking without encoding.',
        concept: 'Attention at encoding',
      },
      {
        kind: 'truefalse',
        question: 'Connecting a new name to an image helps retrieval later.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Images and associations create extra cues — extra doors into the memory.',
        concept: 'Retrieval',
      },
    ],
    share: {
      hook: 'Most "bad memory" is really "no attention at encoding."',
      question: 'What did you fail to encode today — and where was your attention?',
      posts: {
        reflective:
          'Day 10 of Uneek Academy’s psychology course: memory is encoding → storage → retrieval. The quiet insight is that most "bad memory" happens at step one. If attention is elsewhere when the moment arrives, nothing gets in to store. I tested it with names: hear it, say it back, attach an image. "Grace moves with grace" — instant retrieval four hours later. It is a small, practical upgrade that reframes the problem. I do not have a bad memory. I have been absent at the moment of capture. What did you fail to encode today?',
        direct:
          'Most "bad memory" is really "no attention at encoding." Day 10 of Uneek Academy’s psychology course. Memory runs encoding → storage → retrieval, and step one is where phones destroy it. If you are checking messages during an introduction, the name never gets in — there is nothing to retrieve. Fix: hear the name, say it back, attach an image. Tested it today; retrieval was instant hours later. Stop buying memory supplements; buy attention. What did you fail to encode today, and where was your attention?',
        story:
          'A man told me his name at an event while I glanced at my phone. Gone in seconds. Today’s lesson called my bluff: that was not forgetting, that was never encoding. The fix is embarrassingly simple — hear it, say it back, picture it. This afternoon I tried "Tobi drives a taxi" (a stretch, but it stuck). Memory is a three-step pipeline and my attention is the gate at step one. I do not have a bad memory. I have been missing my own life at the moment of capture. What did you fail to encode today?',
      },
    },
  },
  {
    id: 'psy-d11',
    month: 1,
    week: 2,
    day: 4,
    dayIndex: 11,
    type: 'reading',
    title: 'Thoughts Are Sentences in Your Head',
    duration: '6 min',
    summary:
      'That running commentary is made of actual sentences — and once you can hear them, you can work with them.',
    concepts: ['Automatic thoughts', 'Self-talk', 'Thought awareness'],
    tryOn: 'Catch three sentences in your head today and write them word for word. If that feels too raw, start with sentences about something small — traffic, lunch, the weather.',
    exercise:
      'Catch three sentences in your head today and write them down word for word. No editing. The exact wording matters.',
    cards: [
      {
        kind: 'hook',
        body: 'You talk to yourself all day. The only question is what you are saying.',
      },
      {
        kind: 'text',
        title: 'The inner commentary',
        body: 'Underneath the day there is a running stream of short sentences: "I’m late." "She looked annoyed." "I’ll mess this up." These automatic thoughts are fast, specific, and mostly believed without inspection. Psychology’s first trick is simply catching them.',
      },
      {
        kind: 'definition',
        title: 'Automatic thought',
        body: 'A quick, spontaneous sentence in the mind that shapes how you feel and act.',
      },
      {
        kind: 'example',
        title: 'Everyday example',
        body: 'You wave at a friend and they do not wave back. The sentence arrives instantly: "They’re ignoring me." Notice it is a sentence, not a fact. The same scene could read: "They didn’t see me." Same event, different sentence, different feeling.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Run today’s exercise: catch three sentences, write them exactly. Do not argue with them yet. Catching comes before changing — always.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Automatic thoughts are best described as…',
        options: [
          'Quick spontaneous sentences that shape feelings and actions',
          'Carefully reasoned conclusions',
          'Things other people say to us',
          'Random words with no effect',
        ],
        answer: 0,
        explanation: 'Fast, specific, and usually believed on arrival. First step: catch them.',
        concept: 'Automatic thoughts',
      },
      {
        kind: 'truefalse',
        question: 'You must challenge every negative thought immediately.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Catching comes before changing. Inspection first; argument second.',
        concept: 'Thought awareness',
      },
      {
        kind: 'scenario',
        question:
          'A friend does not wave back and you think "They’re ignoring me." What is the useful first move?',
        options: [
          'Decide the friendship is over',
          'Notice the sentence as a sentence — not a fact — and consider other readings',
          'Force yourself to think something positive',
          'Pretend it did not happen',
        ],
        answer: 1,
        explanation:
          'One event, many possible sentences. The skill is noticing which one arrived.',
        concept: 'Self-talk',
      },
    ],
    share: {
      hook: 'You talk to yourself all day. The only question is what you are saying.',
      question: 'What is one sentence your inner voice repeats?',
      posts: {
        reflective:
          'Day 11 of Uneek Academy’s psychology course: thoughts are actual sentences. Under the day runs a commentary — "I’m late," "they looked annoyed," "I’ll mess this up" — fast, specific, and believed without inspection. The exercise was to catch three of them word for word. Mine were sharper than I expected; one was simply untrue. Noticing is the skill. Not fixing, not arguing — noticing. A friend waved past me and my sentence was "they’re ignoring me"; the truer one was "they didn’t see me." Same event, different sentence, different evening. What is one sentence your inner voice repeats?',
        direct:
          'Your thoughts are sentences, and you can audit them. Day 11 of Uneek Academy’s psychology course: automatic thoughts are quick spontaneous sentences that shape feelings and action. The exercise: catch three today and write them word for word. Mine were sharper than expected, and one was plain false. The order matters — catch before you challenge. Same event ("friend didn’t wave back") supports different sentences: "they’re ignoring me" vs "they didn’t see me." Pick your sentence and you pick your evening. What is one sentence your inner voice repeats?',
        story:
          'I waved at a friend and she walked past. Instant sentence: "She’s ignoring me." I wrote it down — day 11 of Uneek Academy’s psychology course taught me to catch these — and kept going. Two hours later she texted: she had just left an argument and saw nothing at all. My sentence had been fiction, and I had been feeling hurt by it. Thoughts are real sentences with real power. The exercise is small and strange: catch three, write them exactly. What is one sentence your inner voice repeats?',
      },
    },
  },
  {
    id: 'psy-d12',
    month: 1,
    week: 2,
    day: 5,
    dayIndex: 12,
    type: 'reading',
    title: 'Emotions vs. Thoughts',
    duration: '7 min',
    summary:
      'Feelings and thoughts are different things — tangled together, but separable. Learning to tell them apart is a superpower.',
    concepts: ['Emotions vs. thoughts', 'Labelling feelings', 'The feeling–thought gap'],
    tryOn: 'Next time a strong feeling lands, split the page: "What I feel" (one word) on the left, "What I think" (sentences) on the right. Once, privately — notebook or phone.',
    exercise:
      'Next time you feel a strong emotion, split the page in two: "What I feel" (one word) and "What I think" (the sentences). Notice they are different columns.',
    cards: [
      {
        kind: 'hook',
        body: '"I feel like they don’t respect me" is not a feeling. It is a thought wearing a feeling’s clothes.',
      },
      {
        kind: 'text',
        title: 'Two different things',
        body: 'Emotions are body-states: anger, sadness, fear, joy — felt, not argued. Thoughts are sentences: "This is unfair." They influence each other constantly, but they are not the same object. Most "feelings" people name are actually thoughts: "I feel ignored," "I feel like a failure."',
      },
      {
        kind: 'definition',
        title: 'Emotion',
        body: 'A body-state you feel (anger, fear, joy, sadness) — not a sentence you tell yourself.',
      },
      {
        kind: 'example',
        title: 'Everyday example',
        body: '"I feel disrespected" mixes both. The feeling might be anger (hot face, tight jaw). The thought is "They don’t respect me." Split them and you get options: the emotion can be soothed, the thought can be checked.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Run today’s exercise when a strong emotion arrives. Two columns: feeling-word on the left, sentences on the right. This one habit is the foundation of everything in Month 5.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Which of these is an emotion, strictly speaking?',
        options: ['"I feel like a failure"', 'Anger', '"I feel ignored"', '"I feel like quitting"'],
        answer: 1,
        explanation: 'Anger is a body-state. The others are thoughts wearing feeling words.',
        concept: 'Emotions vs. thoughts',
      },
      {
        kind: 'truefalse',
        question: '"I feel disrespected" names a pure emotion.',
        options: ['True', 'False'],
        answer: 1,
        explanation:
          'It mixes a feeling (maybe anger) with a thought ("they don’t respect me").',
        concept: 'Emotions vs. thoughts',
      },
      {
        kind: 'scenario',
        question:
          'Why bother splitting feelings from thoughts?',
        options: [
          'It is just academic; nothing changes',
          'Each can be worked with differently — feelings soothed, thoughts checked',
          'Feelings are more accurate than thoughts',
          'Thoughts should always be ignored',
        ],
        answer: 1,
        explanation:
          'Separating the two gives you two handles instead of one tangled knot.',
        concept: 'The feeling–thought gap',
      },
    ],
    share: {
      hook: '"I feel like they don’t respect me" is not a feeling. It is a thought in disguise.',
      concept: 'Emotion',
      definition: 'A body-state you feel — not a sentence you tell yourself.',
      posts: {
        reflective:
          'Day 12 of Uneek Academy’s psychology course untangled something I say constantly. "I feel disrespected" is not a pure emotion. The feeling is anger — hot face, tight jaw. The thought is "they don’t respect me." Two different objects. Feelings are body-states to soothe; thoughts are sentences to check. The exercise: when a strong emotion lands, split the page — "What I feel" (one word) vs "What I think" (the sentences). The columns do not match, and that gap is where choice lives. Which of your "feelings" might actually be thoughts?',
        direct:
          '"I feel disrespected" is not a feeling. It is a thought wearing a feeling’s clothes. Day 12 of Uneek Academy’s psychology course separates emotions (body-states: anger, fear, joy) from thoughts (sentences: "they don’t respect me"). The split matters because each has a different fix: feelings are soothed, thoughts are checked. Exercise: when emotion hits, two columns — "what I feel" in one word, "what I think" in sentences. The gap between the columns is where your options live. Which of your "feelings" are actually thoughts?',
        story:
          'I told a friend "I feel like my boss doesn’t respect me." Day 12 of the course asked me to split that sentence. Left column, the feeling: anger — jaw tight, face hot. Right column, the thought: "he doesn’t respect me." Two objects, not one. The anger responded to a walk and water. The thought needed evidence — and it turned out weaker than it felt. Feelings are body-states; thoughts are sentences. Mixing them keeps both tangled. Which of your "feelings" might actually be thoughts?',
      },
    },
  },
  {
    id: 'psy-d13',
    month: 1,
    week: 2,
    day: 6,
    dayIndex: 13,
    type: 'review',
    title: 'Week 2 Review: Memory and Thoughts',
    duration: '10 min',
    summary:
      'Five ideas, one week: reconstructive memory, forgetting, encoding, automatic thoughts, and the feelings–thoughts split.',
    concepts: ['Week 2 synthesis'],
    tryOn: 'Explain the feelings-vs-thoughts split to one person this week using your own example. Script: "I used to say I felt disrespected — that was a thought; the feeling was anger."',
    reviewTopics: [
      'Reconstructive memory',
      'Retrieval failure',
      'Encoding',
      'Automatic thoughts',
      'Emotions vs. thoughts',
    ],
    cards: [
      {
        kind: 'hook',
        body: 'Memory rebuilds, thoughts narrate, feelings surge. Week 2 taught you to tell the three apart.',
      },
      {
        kind: 'list',
        title: 'This week’s five concepts',
        items: [
          'Reconstructive memory — remembering is rebuilding; the story drifts.',
          'Forgetting — decay, interference, retrieval failure. Housekeeping, not failure.',
          'Encoding — get it in with attention or it is not stored.',
          'Automatic thoughts — quick sentences that shape feeling and action.',
          'Emotions vs. thoughts — body-states to soothe, sentences to check.',
        ],
      },
      {
        kind: 'text',
        title: 'How they fit together',
        body: 'What you encoded becomes memory, rebuilt each time you tell it. Your thoughts narrate the present while feelings surge through the body. Telling the three apart gives you handles on all three.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Remembering an event differently each time is called…',
        options: ['Reconstructive memory', 'Retrieval failure', 'Interference', 'Encoding'],
        answer: 0,
        explanation: 'Each remember is a rebuild from pieces — and the pieces shift.',
        concept: 'Reconstructive memory',
      },
      {
        kind: 'mcq',
        question: 'Tip-of-the-tongue is…',
        options: ['Retrieval failure', 'Decay', 'Interference', 'Poor encoding'],
        answer: 0,
        explanation: 'The memory is present; the cue is missing.',
        concept: 'Retrieval failure',
      },
      {
        kind: 'mcq',
        question: 'You read a page distracted and recall nothing. The failure was at…',
        options: ['Encoding', 'Storage', 'Retrieval', 'Forgetting'],
        answer: 0,
        explanation: 'Attention at encoding decides most of memory’s fate.',
        concept: 'Encoding',
      },
      {
        kind: 'mcq',
        question: 'Automatic thoughts are…',
        options: [
          'Quick spontaneous sentences',
          'Careful conclusions',
          'Other people’s words',
          'Emotions',
        ],
        answer: 0,
        explanation: 'Fast, specific, and believed on arrival — until you catch them.',
        concept: 'Automatic thoughts',
      },
      {
        kind: 'mcq',
        question: 'Which is an emotion rather than a thought?',
        options: ['Fear', '"I feel ignored"', '"I feel like a failure"', '"I feel like quitting"'],
        answer: 0,
        explanation: 'Fear is a body-state. The rest are sentences using feeling words.',
        concept: 'Emotions vs. thoughts',
      },
      {
        kind: 'truefalse',
        question: 'Forgetting is always a personal failure.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Forgetting is housekeeping — decay, interference, retrieval failure.',
        concept: 'Retrieval failure',
      },
      {
        kind: 'truefalse',
        question: 'Vividness of a memory guarantees its accuracy.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Confidence and accuracy come apart. Vividness is a feeling.',
        concept: 'Reconstructive memory',
      },
      {
        kind: 'scenario',
        question:
          'You feel "like everyone noticed my mistake." Using today’s tools, the first move is…',
        options: [
          'Split the feeling (embarrassment?) from the thought ("everyone noticed") and check the thought',
          'Push the feeling away',
          'Agree with the thought and apologise to everyone',
          'Assume the thought is true and avoid the meeting',
        ],
        answer: 0,
        explanation: 'Feelings and thoughts get different treatments. Split first.',
        concept: 'Emotions vs. thoughts',
      },
    ],
    share: {
      hook: 'Memory rebuilds, thoughts narrate, feelings surge.',
      question: 'Which of the week’s ideas showed up in your own life?',
      posts: {
        reflective:
          'Two weeks of Uneek Academy’s psychology course. This week: memory is a rebuild, forgetting is housekeeping, encoding demands attention, thoughts are sentences, and feelings are body-states — not the same thing. The feelings–thoughts split alone is worth the time; "I feel disrespected" suddenly has two parts, and two parts means two handles. I am catching sentences mid-air now and checking memories before I use them as evidence. Slowly, the machinery becomes visible. Which of this week’s ideas showed up in your own life?',
        direct:
          'Week 2 of Uneek Academy’s psychology course done. Five tools: reconstructive memory, three doors of forgetting, encoding with attention, catching automatic thoughts, splitting feelings from thoughts. The split is the one to steal: "I feel disrespected" = feeling (anger) + thought ("they don’t respect me"). Feelings get soothed; thoughts get checked. That is a real upgrade in how you handle hard conversations. Which of these five ideas showed up in your life this week?',
        story:
          'Tonight I caught myself mid-sentence — "I feel like no one values my work" — and, courtesy of week 2 of Uneek Academy’s psychology course, split it. Feeling: sadness. Thought: "no one values my work." The sadness needed a walk. The thought needed evidence, and evidence was thin. Two weeks in, the theme is clear: memory is a rebuild, thoughts are sentences, feelings are weather. You can work with each — once you can tell them apart. Which of this week’s ideas showed up in your life?',
      },
    },
  },
  {
    id: 'psy-d14',
    month: 1,
    week: 2,
    day: 7,
    dayIndex: 14,
    type: 'rest',
    title: 'Rest Day',
    duration: '1 min',
    summary: 'Rest is part of the program, not a break from it.',
    concepts: [],
    cards: [],
    questions: [],
    restMessage:
      'Two weeks done. Today the only task is to rest on purpose — walk, nap, or stare at the ceiling. Memories consolidate in rest. Tick the box and keep the streak.',
    share: {
      hook: 'Rest is where learning settles.',
      posts: { reflective: '', direct: '', story: '' },
    },
  },
];
