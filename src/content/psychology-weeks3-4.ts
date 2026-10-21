import type { Lesson } from '../lib/types';

/**
 * Psychology: How People Think — Month 1 (Weeks 3–4)
 */
export const weeks3to4: Lesson[] = [
  /* ---------------- WEEK 3 ---------------- */
  {
    id: 'psy-d15',
    month: 1,
    week: 3,
    day: 1,
    dayIndex: 15,
    type: 'reading',
    title: 'Where Thoughts Come From',
    duration: '7 min',
    summary:
      'Thoughts feel automatic because they are — they grow from beliefs planted long before you noticed them.',
    concepts: ['Beliefs', 'Thought origins', 'Core beliefs'],
    cards: [
      {
        kind: 'hook',
        body: 'Thoughts are the leaves. Beliefs are the roots. You have been staring at the leaves.',
      },
      {
        kind: 'text',
        title: 'The layer under the sentence',
        body: 'Automatic thoughts sit on top of beliefs — broad, deep conclusions about yourself, others, and the world ("I must be useful to be loved"). Beliefs form slowly through experience, family, culture, and repetition. Thoughts are what they say in daily conversation.',
      },
      {
        kind: 'definition',
        title: 'Core belief',
        body: 'A deep, long-held conclusion about yourself, others, or the world that shapes daily thoughts.',
      },
      {
        kind: 'example',
        title: 'Everyday example',
        body: 'A small critique at work triggers "I’m useless." The sentence is a leaf. The root may be a belief formed years ago: "If I’m not perfect, I’m rejected." Change gets easier when you find the root instead of pruning leaves forever.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Take one sentence you caught this week ("I’ll mess this up") and ask: "What would have to be true about the world for this sentence to make sense?" Write the answer. That is usually a belief.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'The relationship between beliefs and automatic thoughts is…',
        options: [
          'Beliefs are deep roots; thoughts are the daily leaves',
          'They are the same thing',
          'Thoughts come first, beliefs form from them only',
          'Beliefs are conscious choices',
        ],
        answer: 0,
        explanation: 'Daily sentences grow out of long-held conclusions.',
        concept: 'Beliefs',
      },
      {
        kind: 'truefalse',
        question: 'Core beliefs form overnight from a single event.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'They build slowly through repeated experience, culture, and family.',
        concept: 'Core beliefs',
      },
      {
        kind: 'scenario',
        question:
          'A minor critique triggers "I’m useless." What is the deeper layer worth exploring?',
        options: [
          'A core belief about needing to be perfect to be accepted',
          'The wording of the critique',
          'Your blood sugar',
          'The time of day',
        ],
        answer: 0,
        explanation: 'The daily sentence usually broadcasts a deeper conclusion.',
        concept: 'Thought origins',
      },
    ],
    share: {
      hook: 'Thoughts are the leaves. Beliefs are the roots.',
      question: 'What belief might be growing under one of your automatic thoughts?',
      posts: {
        reflective:
          'Day 15 of Uneek Academy’s psychology course: thoughts are the leaves, beliefs are the roots. Automatic sentences — "I’ll mess this up" — sit on top of deep conclusions formed over years ("if I’m not perfect, I’m rejected"). The exercise: take one caught thought and ask what would have to be true about the world for it to make sense. My answer was uncomfortable and clarifying. You cannot prune leaves forever; at some point you look at the roots. What belief might be growing under one of your automatic thoughts?',
        direct:
          'Thoughts are the leaves; beliefs are the roots. Day 15 of Uneek Academy’s psychology course. Automatic thoughts ("I’m useless") broadcast core beliefs formed long ago ("I must be perfect to be accepted"). The exercise: for one thought, ask "what would have to be true about the world for this to make sense?" The answer is your belief. Stop pruning leaves; find the root. What belief might be growing under one of your automatic thoughts?',
        story:
          'A one-line critique at work sent me spiralling into "I’m useless." Day 15 of the course asked the key question: what would have to be true for that sentence to make sense? My answer: "If I’m not perfect, I’m out." That is not today’s thought — that is an old root, probably watered for years. Thoughts are the leaves; beliefs are the roots. I am done pruning. What belief might be growing under one of your automatic thoughts?',
      },
    },
  },
  {
    id: 'psy-d16',
    month: 1,
    week: 3,
    day: 2,
    dayIndex: 16,
    type: 'video',
    title: 'The Story Your Brain Tells',
    duration: '8 min',
    summary:
      'The brain is a story machine. It fills gaps with plots — and the plot is usually about you.',
    concepts: ['Narrative brain', 'Confabulation', 'Story vs. evidence'],
    cards: [
      {
        kind: 'hook',
        body: 'When information runs out, the brain does not stay quiet. It writes fiction.',
      },
      {
        kind: 'text',
        title: 'A machine that needs a plot',
        body: 'The brain hates loose ends. Given partial information, it generates a story that connects the dots — with you as the main character. This is why ambiguity feels so uncomfortable: the story-machine is running without data, and its favourite genre is threat.',
      },
      {
        kind: 'definition',
        title: 'Confabulation',
        body: 'Filling gaps in memory or information with plausible stories — believed sincerely.',
      },
      {
        kind: 'example',
        title: 'Everyday example',
        body: 'Your messages are left on read. The story arrives instantly: "They’re upset with me." Zero evidence, full plot, main character: you. The data might be that their phone died. The brain wrote a thriller; reality was a comedy.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'The next time you invent a story about someone’s behaviour, label it: "My story is…" Then write one boring alternative story. Both are guesses; only one is making you suffer.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'When information is missing, the brain tends to…',
        options: [
          'Fill gaps with a plausible story',
          'Stay carefully silent',
          'Forget the situation entirely',
          'Ask for more data every time',
        ],
        answer: 0,
        explanation: 'The story machine runs on whatever data exists — even none.',
        concept: 'Narrative brain',
      },
      {
        kind: 'truefalse',
        question: 'Confabulated stories are told knowingly as fiction.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Confabulation is sincere — the person believes the story they produced.',
        concept: 'Confabulation',
      },
      {
        kind: 'scenario',
        question:
          'A friend leaves messages on read and you think "They’re angry with me." The best move is…',
        options: [
          'Label it as your story and write one boring alternative',
          'Assume the story is true and withdraw',
          'Send an angry reply',
          'Ignore your feelings entirely',
        ],
        answer: 0,
        explanation: 'Two competing stories, zero evidence. Name yours first.',
        concept: 'Story vs. evidence',
      },
    ],
    share: {
      hook: 'When information runs out, the brain does not stay quiet. It writes fiction.',
      question: 'What story did you write today on almost no data?',
      posts: {
        reflective:
          'Day 16 of Uneek Academy’s psychology course: the brain is a story machine. Left on read? It writes "they’re angry with me" instantly, casting you as the main character. The technical word is confabulation — filling gaps with plausible fiction, sincerely believed. The task today: label one of your stories "my story is…" and write a boring alternative. Mine (a colleague’s short reply) had two versions: "she thinks I’m incompetent" vs "she was in a meeting." The boredom of the second one is the point. What story did you write today on almost no data?',
        direct:
          'Your brain writes fiction all day. Day 16 of Uneek Academy’s psychology course: when data runs out, the story machine fills gaps — usually with you as the main character. Messages on read → "they’re angry with me." A short reply → "I’m incompetent." Confabulation: plausible stories, sincerely believed. Fix: label it "my story is…" and write one boring alternative. Reality is usually boring. What story did you write today on almost no data?',
        story:
          'A colleague replied "ok" to my proposal and my brain produced an entire drama: she hates it, I look foolish, the project is dead. Then day 16 of the course told me to write "my story is…" at the top of the page. My story was fiction on two data points. The boring alternative: she was walking into a meeting. Later she replied with praise. The brain is a story machine that hates loose ends; my job is to notice the genre. What story did you write today on almost no data?',
      },
    },
  },
  {
    id: 'psy-d17',
    month: 1,
    week: 3,
    day: 3,
    dayIndex: 17,
    type: 'interactive',
    title: 'Feelings First, Reasons Later',
    duration: '7 min',
    summary:
      'We often feel a conclusion before we reason it — then build the reasoning as a press release.',
    concepts: ['Emotion-first judgement', 'Post-hoc reasoning', 'Deliberation'],
    cards: [
      {
        kind: 'hook',
        body: 'The verdict often arrives before the evidence. The evidence is hired afterwards.',
      },
      {
        kind: 'text',
        title: 'The press-release brain',
        body: 'Research on moral and emotional judgement suggests feelings often come first; reasoning follows to explain them. Reasoning is not useless — it can revise the verdict — but it must know it works for the feeling, not the other way around.',
      },
      {
        kind: 'definition',
        title: 'Post-hoc reasoning',
        body: 'Building an explanation after the conclusion has already been reached.',
      },
      {
        kind: 'example',
        title: 'Everyday example',
        body: 'You dislike a proposal the second you hear it, then spend ten minutes producing "rational" objections. Ask: did the reasons cause the dislike, or did the dislike hire the reasons? Swap positions with a friend and watch the reasons rearrange instantly.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'In one decision today, write your gut verdict first (one line), then your reasons. Ask honestly: if the verdict were opposite, could I write reasons just as easily?',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Post-hoc reasoning means…',
        options: [
          'Explaining a conclusion that was already reached emotionally',
          'Reasoning before deciding',
          'Forgetting your reasons',
          'Reasoning during sleep',
        ],
        answer: 0,
        explanation: 'The press release after the decision — not the cause of it.',
        concept: 'Post-hoc reasoning',
      },
      {
        kind: 'truefalse',
        question: 'Emotions and reasoning always arrive in the same order.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Often feeling leads and reasoning follows. Not always — but often.',
        concept: 'Emotion-first judgement',
      },
      {
        kind: 'scenario',
        question:
          'You instantly dislike an idea and list three objections after. The honest question is…',
        options: [
          'Did my dislike hire these reasons?',
          'Are three objections enough?',
          'Who else dislikes it?',
          'Should I say nothing?',
        ],
        answer: 0,
        explanation: 'Test whether the reasons caused the verdict or the verdict hired the reasons.',
        concept: 'Deliberation',
      },
    ],
    share: {
      hook: 'The verdict often arrives before the evidence.',
      question: 'What verdict did you reach first and justify later — today?',
      posts: {
        reflective:
          'Day 17 of Uneek Academy’s psychology course: feelings often deliver the verdict first; reasoning arrives later as a press release. Not a comfortable idea for someone who prides themselves on logic. The exercise: write your gut verdict before your reasons, then ask if the opposite verdict could hire reasons just as easily. Mine could. Deliberation still matters — it can revise the verdict — but only if it knows who it works for. What verdict did you reach first and justify later today?',
        direct:
          'Your reasoning may be a press release. Day 17 of Uneek Academy’s psychology course: emotion often judges first; reasons are hired afterwards to explain it. Test it: write the gut verdict before the reasons, then ask if the opposite verdict could justify itself just as well. Mine could. The fix is not to kill feelings — it is to stop confusing hired reasons for honest ones. What verdict did you reach first and justify later today?',
        story:
          'I rejected an idea in a meeting within two seconds and spent ten minutes producing elegant objections. Then I did day 17’s exercise: gut verdict first, reasons second, and one question — could the opposite hire reasons just as easily? Easily, yes. My logic had been a press release for my feelings. The lesson is not "feelings bad" — feelings carry information. It is "know who your reasoning works for." What verdict did you reach first and justify later today?',
      },
    },
  },
  {
    id: 'psy-d18',
    month: 1,
    week: 3,
    day: 4,
    dayIndex: 18,
    type: 'reading',
    title: 'Naming Emotions Accurately',
    duration: '6 min',
    summary:
      'The more precisely you can name a feeling, the less power it has. This skill has a name: emotional granularity.',
    concepts: ['Emotional granularity', 'Labelling', 'Precision of feeling'],
    exercise:
      'Upgrade three vague feelings today. "Bad" → is it disappointed, anxious, embarrassed, tired? Use a feelings list if you get stuck.',
    cards: [
      {
        kind: 'hook',
        body: 'Name it to tame it — but only if you name it precisely.',
      },
      {
        kind: 'text',
        title: 'Granularity is a skill',
        body: 'Some people use three feeling-words for everything: fine, bad, good. Others distinguish disappointed from frustrated, anxious from excited. That precision is emotional granularity, and it predicts better regulation: a specific feeling suggests a specific action.',
      },
      {
        kind: 'definition',
        title: 'Emotional granularity',
        body: 'How precisely you can name what you feel — the difference between "bad" and "disappointed".',
      },
      {
        kind: 'example',
        title: 'Everyday example',
        body: '"I feel bad" offers no direction. "I’m disappointed the plan fell through" points at the loss and suggests what helps: replanning. "I’m anxious about the review" points at uncertainty and suggests preparation or reassurance. Precise names, precise next steps.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Run today’s exercise: upgrade three vague feelings. Keep a short feelings list in your notes app — ten words beat three.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Emotional granularity is…',
        options: [
          'Precision in naming what you feel',
          'Feeling more strongly than others',
          'Hiding feelings well',
          'A personality type',
        ],
        answer: 0,
        explanation: 'Specific names for specific states — a learnable skill.',
        concept: 'Emotional granularity',
      },
      {
        kind: 'truefalse',
        question: 'A precise feeling-word suggests a more precise response.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Disappointment points to loss; anxiety points to uncertainty. Different fixes.',
        concept: 'Labelling',
      },
      {
        kind: 'scenario',
        question: 'Which is the most granular description?',
        options: [
          '"I feel bad"',
          '"I’m a bit off"',
          '"I’m frustrated that the deadline moved without asking me"',
          '"I’m fine"',
        ],
        answer: 2,
        explanation: 'Specific state + specific cause + specific context. That is granularity.',
        concept: 'Precision of feeling',
      },
    ],
    share: {
      hook: 'Name it to tame it — but only if you name it precisely.',
      concept: 'Emotional granularity',
      definition: 'How precisely you can name what you feel.',
      posts: {
        reflective:
          'Day 18 of Uneek Academy’s psychology course introduced emotional granularity: how precisely you can name what you feel. Three words — fine, bad, good — leave you with no direction. "Disappointed the plan fell through" suggests replanning; "anxious about the review" suggests preparing. Precise names give precise next steps. I upgraded three vague feelings today and one of them changed from "bad" to "overlooked" — which quietly suggested asking for what I needed instead of sulking. Name it to tame it. What is one feeling you could rename this week?',
        direct:
          'Stop saying "I feel bad." Day 18 of Uneek Academy’s psychology course: emotional granularity — precision in naming feelings — predicts better regulation. "Disappointed" points to loss and suggests replanning. "Anxious" points to uncertainty and suggests preparation. Vague words give vague lives. The exercise: upgrade three vague feelings today using a feelings list. One of mine went from "bad" to "overlooked" and instantly suggested an action. What is one feeling you could rename this week?',
        story:
          'I said "I just feel bad" and my friend asked "bad like sad, bad like angry, bad like tired?" Three questions later I had it: overlooked. The whole situation looked different. That is emotional granularity, from day 18 of Uneek Academy’s psychology course: precise names for feelings suggest precise next steps. "Overlooked" meant I needed to ask for something, not sulk. I now keep a ten-word feelings list on my phone. What is one feeling you could rename this week?',
      },
    },
  },
  {
    id: 'psy-d19',
    month: 1,
    week: 3,
    day: 5,
    dayIndex: 19,
    type: 'reading',
    title: 'The Thought–Feeling–Action Loop',
    duration: '7 min',
    summary:
      'Thoughts, feelings, and actions run in a loop. Find the loop and you find three places to intervene.',
    concepts: ['The loop model', 'Intervention points', 'Behavioural change'],
    exercise:
      'Map one recent mood dip: the thought, the feeling, and the action. Mark which point in the loop is easiest for you to change first.',
    cards: [
      {
        kind: 'hook',
        body: 'Thoughts spark feelings. Feelings drive actions. Actions feed thoughts. The loop runs all day.',
      },
      {
        kind: 'text',
        title: 'One model, three handles',
        body: 'The thought–feeling–action loop is a simple map: a thought ("I’ll fail") sparks a feeling (anxiety), which drives an action (avoidance), which confirms the thought ("See? I can’t"). Loops can spiral down or up. The value of the map is intervention: you can enter at any of the three points.',
      },
      {
        kind: 'definition',
        title: 'Thought–feeling–action loop',
        body: 'The cycle where thoughts spark feelings, feelings drive actions, and actions feed back into thoughts.',
      },
      {
        kind: 'example',
        title: 'Everyday example',
        body: 'Thought: "They don’t want me there." Feeling: hurt. Action: skip the gathering. Thought grows: "See, I’m excluded." Enter anywhere: check the thought ("Did anyone say that?"), soothe the feeling (call a friend), or change the action (go for one hour).',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Run today’s exercise on one mood dip. Draw the three boxes and arrows. Changing just the action box is often the fastest way to break a loop.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'The loop model says that thoughts, feelings, and actions…',
        options: [
          'Influence each other in a cycle',
          'Happen only in order and never repeat',
          'Are unrelated',
          'Only matter in therapy',
        ],
        answer: 0,
        explanation: 'Each drives the next — and the last feeds the first.',
        concept: 'The loop model',
      },
      {
        kind: 'scenario',
        question:
          'Thought: "I’ll fail." Feeling: anxious. Action: avoid. What is the loop reinforcing?',
        options: [
          'The belief that you cannot do it',
          'Your preparation skills',
          'Nothing',
          'Your memory',
        ],
        answer: 0,
        explanation: 'Avoidance feels like proof the task was impossible. The loop closes.',
        concept: 'Intervention points',
      },
      {
        kind: 'mcq',
        question: 'Where can you intervene in the loop?',
        options: [
          'At any point: thought, feeling, or action',
          'Only at thoughts',
          'Only at feelings',
          'Nowhere once it starts',
        ],
        answer: 0,
        explanation: 'Three handles. Action is often the fastest entry point.',
        concept: 'Behavioural change',
      },
    ],
    share: {
      hook: 'Thoughts spark feelings. Feelings drive actions. Actions feed thoughts.',
      question: 'Where in the loop do you usually get stuck?',
      posts: {
        reflective:
          'Day 19 of Uneek Academy’s psychology course connected the week: the thought–feeling–action loop. "I’ll fail" (thought) → anxiety (feeling) → avoidance (action) → "see, I can’t" (thought). Loops can spiral down or up, and — the hopeful part — you can enter at any of the three points. I mapped one mood dip from Tuesday and found the action box was the easiest door: a five-minute start broke a loop that had been running for days. Where in the loop do you usually get stuck?',
        direct:
          'One model, three handles: the thought–feeling–action loop. Day 19 of Uneek Academy’s psychology course. Thoughts spark feelings, feelings drive actions, actions feed thoughts — "I’ll fail" → anxiety → avoidance → "see, I can’t." Break the cycle at any point. The fastest door is usually action: five minutes of starting beats an hour of spiralling. Map one mood dip today and mark your easiest entry point. Where in the loop do you usually get stuck?',
        story:
          'Tuesday’s mood dip had a shape: "they think I’m unqualified" → shame → hiding in my inbox → feeling more invisible. Day 19 of the course gave me the map — thoughts, feelings, actions in a loop — and one instruction: enter anywhere. I chose action: ten minutes of the task I was avoiding. The feeling softened before the thought changed. Three boxes and arrows, and suddenly the spiral has doors. Where in the loop do you usually get stuck?',
      },
    },
  },
  {
    id: 'psy-d20',
    month: 1,
    week: 3,
    day: 6,
    dayIndex: 20,
    type: 'review',
    title: 'Week 3 Review: The Roots of Thought',
    duration: '10 min',
    summary:
      'Five ideas: beliefs under thoughts, the story machine, feelings-first judgements, emotional granularity, and the loop.',
    concepts: ['Week 3 synthesis'],
    reviewTopics: [
      'Beliefs vs. thoughts',
      'Narrative brain',
      'Post-hoc reasoning',
      'Emotional granularity',
      'The thought–feeling–action loop',
    ],
    cards: [
      {
        kind: 'hook',
        body: 'You can now see the machinery behind a mood: roots, stories, verdicts, names, loops.',
      },
      {
        kind: 'list',
        title: 'This week’s five concepts',
        items: [
          'Beliefs vs. thoughts — leaves and roots.',
          'Narrative brain — gaps get fiction, sincerely believed.',
          'Post-hoc reasoning — verdict first, press release second.',
          'Emotional granularity — precise names give precise next steps.',
          'The loop — thoughts, feelings, actions feeding each other.',
        ],
      },
      {
        kind: 'text',
        title: 'How they fit together',
        body: 'Beliefs generate thoughts; thoughts enter loops with feelings and actions; feelings get named (or not); and the story machine narrates all of it. Week 4 builds the first tools on top of this map.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: '"Thoughts are leaves, beliefs are roots" means…',
        options: [
          'Daily thoughts grow from deeper long-held conclusions',
          'Beliefs are less important',
          'Thoughts and beliefs are identical',
          'Roots are conscious',
        ],
        answer: 0,
        explanation: 'Change the root and the leaves change.',
        concept: 'Beliefs vs. thoughts',
      },
      {
        kind: 'mcq',
        question: 'Filling gaps with plausible, sincere fiction is…',
        options: ['Confabulation', 'Post-hoc reasoning', 'Granularity', 'The loop'],
        answer: 0,
        explanation: 'The story machine cannot stand a blank page.',
        concept: 'Narrative brain',
      },
      {
        kind: 'mcq',
        question: 'Building reasons after an emotional verdict is…',
        options: ['Post-hoc reasoning', 'Confabulation', 'Labelling', 'Encoding'],
        answer: 0,
        explanation: 'The press release follows the decision.',
        concept: 'Post-hoc reasoning',
      },
      {
        kind: 'mcq',
        question: 'Which shows the highest emotional granularity?',
        options: [
          '"I’m overlooked, not just bad"',
          '"I’m fine"',
          '"I feel bad"',
          '"Whatever"',
        ],
        answer: 0,
        explanation: 'Precision in naming points to precision in action.',
        concept: 'Emotional granularity',
      },
      {
        kind: 'mcq',
        question: 'The thought–feeling–action loop shows that…',
        options: [
          'Each element feeds the next in a cycle',
          'Only thoughts matter',
          'Feelings cannot change',
          'Actions are irrelevant',
        ],
        answer: 0,
        explanation: 'Three handles, one loop. Action is often the fastest door.',
        concept: 'The thought–feeling–action loop',
      },
      {
        kind: 'truefalse',
        question: 'Confabulators know their stories are invented.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Confabulation is sincere. That is what makes it powerful.',
        concept: 'Narrative brain',
      },
      {
        kind: 'truefalse',
        question: 'A core belief usually forms from a single event overnight.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Roots grow slowly from repeated experience.',
        concept: 'Beliefs vs. thoughts',
      },
      {
        kind: 'scenario',
        question:
          'After a bad meeting you skip the gym and think "I’m off track." The fastest loop entry point is…',
        options: [
          'The action: go for a 10-minute walk',
          'The thought: demand it vanish',
          'The feeling: pretend it is not there',
          'None; loops cannot be broken',
        ],
        answer: 0,
        explanation: 'Small action first. It feeds back into thought and feeling.',
        concept: 'The thought–feeling–action loop',
      },
    ],
    share: {
      hook: 'You can see the machinery behind a mood.',
      question: 'Which of the week’s five ideas will you practise this weekend?',
      posts: {
        reflective:
          'Three weeks of Uneek Academy’s psychology course. This week mapped the roots: beliefs under thoughts, the story machine filling gaps, feelings hiring reasons, precise names for feelings, and the loop that runs all three. The image that sticks: thoughts are leaves, beliefs are roots. I have been pruning leaves for years. The loop model gives me doors instead of walls. One more month of foundations to go — and a weak-topic list that is getting shorter. Which of the five ideas will you practise this weekend?',
        direct:
          'Week 3 of Uneek Academy’s psychology course done. Takeaways: beliefs drive thoughts; the brain confabulates; verdicts come before reasons; precise feeling-words give precise actions; thoughts–feelings–actions run in a loop with three doors. Practical result: less spiralling, more options. The exam found my weak spot (post-hoc reasoning vs confabulation) and it is queued for review. Which of the five ideas will you practise this weekend?',
        story:
          'Tonight I mapped a mood on paper: the thought, the feeling, the action, and the arrow pointing back. Day 19’s exercise, three weeks into Uneek Academy’s psychology course. Seeing the loop drawn made it hard to keep believing "that’s just how I am." There are three doors in that diagram. This week also taught me that my confident stories are fiction and my feelings hire press-release writers. Not flattering. Very useful. Which of the five ideas will you practise this weekend?',
      },
    },
  },
  {
    id: 'psy-d21',
    month: 1,
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
      'Three weeks is real momentum. Today, rest is the work. Whatever you do, do it slowly. Tick rest and the streak continues.',
    share: {
      hook: 'Rest is where learning settles.',
      posts: { reflective: '', direct: '', story: '' },
    },
  },

  /* ---------------- WEEK 4 ---------------- */
  {
    id: 'psy-d22',
    month: 1,
    week: 4,
    day: 1,
    dayIndex: 22,
    type: 'reading',
    title: 'Schemas: The Mind’s Filing System',
    duration: '7 min',
    summary:
      'Schemas are folders the mind builds to make the world fast to read — until it stops reading and just files.',
    concepts: ['Schemas', 'Mental models', 'When schemas mislead'],
    cards: [
      {
        kind: 'hook',
        body: 'Your mind does not meet the world raw. It meets a filing system.',
      },
      {
        kind: 'text',
        title: 'Folders for everything',
        body: 'A schema is a mental structure that organises knowledge: "restaurant," "first date," "my manager." Schemas make life navigable. The cost: once a folder exists, new information gets filed into it faster than it gets examined.',
      },
      {
        kind: 'definition',
        title: 'Schema',
        body: 'A mental folder of expectations about a type of person, place, or situation.',
      },
      {
        kind: 'example',
        title: 'Everyday example',
        body: 'Your "quiet person" schema files a quiet colleague as shy. Then a meeting reveals they are fierce in debate. If the schema updates, good. If you think "they’re pretending," the folder just defended itself against reality.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Name three schemas you use daily (types of people, places, situations). For one of them, write one way it helps and one way it could mislead.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'A schema is…',
        options: [
          'A mental folder of expectations',
          'A feeling',
          'A memory error',
          'A logical rule',
        ],
        answer: 0,
        explanation: 'Organised expectations that make the world fast to navigate.',
        concept: 'Schemas',
      },
      {
        kind: 'truefalse',
        question: 'Schemas save time but can filter out contradicting evidence.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Fast filing, slow updating. That is the trade.',
        concept: 'When schemas mislead',
      },
      {
        kind: 'scenario',
        question:
          'New evidence contradicts your schema and you explain it away. What happened?',
        options: [
          'The schema defended itself against reality',
          'The evidence was worthless',
          'Your memory failed',
          'Nothing unusual',
        ],
        answer: 0,
        explanation: 'Folders protect their contents. Healthy minds update folders anyway.',
        concept: 'Mental models',
      },
    ],
    share: {
      hook: 'Your mind does not meet the world raw. It meets a filing system.',
      question: 'Which schema of yours is overdue for an update?',
      posts: {
        reflective:
          'Day 22 of Uneek Academy’s psychology course: schemas — the mind’s filing system. Folders like "quiet person" or "first date" make the world navigable and fast. The cost: reality gets filed before it gets examined. When evidence contradicts the folder, the folder defends itself ("they’re pretending"). The exercise: name three daily schemas and find where each helps and misleads. Mine around "serious people" needs an update. Which schema of yours is overdue for one?',
        direct:
          'Your mind files the world into folders. Day 22 of Uneek Academy’s psychology course: schemas — "restaurant," "my manager," "quiet person" — make life fast and predictable. Downside: new information gets filed before it gets examined, and folders defend themselves against evidence. Task: name three schemas and spot where each misleads. Mine around "serious people" is overdue for an update. Which of yours is?',
        story:
          'I had a neat folder labelled "quiet guy from finance." Last week he dismantled a bad plan in thirty seconds and my folder refused to update: "he’s showing off." Day 22 named it — schemas. The mind’s filing system, brilliant at speed and stubborn against reality. I listed three of my folders today and found one doing real damage around "serious people." Folders should serve the data, not the other way round. Which schema of yours is overdue for an update?',
      },
    },
  },
  {
    id: 'psy-d23',
    month: 1,
    week: 4,
    day: 2,
    dayIndex: 23,
    type: 'video',
    title: 'Cognitive Load: Why You Feel Stuck',
    duration: '8 min',
    summary:
      'Working memory is small. Overload it and you do not get "busy" — you get stuck.',
    concepts: ['Working memory', 'Cognitive load', 'Overwhelm management'],
    cards: [
      {
        kind: 'hook',
        body: 'Your working memory holds about four things. Modern life hands you forty.',
      },
      {
        kind: 'text',
        title: 'The tiny desk',
        body: 'Think of working memory as a small desk. It holds a few items at a time — a plan, a worry, a message to reply to. Every open loop occupies a slot. Fill the desk and thinking does not slow gracefully; it jams. That jam is what overwhelm feels like from the inside.',
      },
      {
        kind: 'definition',
        title: 'Cognitive load',
        body: 'How much your working memory is holding at once. Near its limit, everything gets harder.',
      },
      {
        kind: 'example',
        title: 'Everyday example',
        body: 'Cooking while arguing while checking messages: one burns. Not because you are careless — the desk was full. The fix is not willpower; it is fewer items on the desk (write them down) and fewer at once (serialise).',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'When you feel stuck today, do a "desk dump": write every open loop on paper within two minutes. The point is not organisation — it is offloading the desk.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Working memory is…',
        options: [
          'A small mental desk holding a few items at once',
          'Unlimited storage',
          'Long-term memory',
          'Emotional memory only',
        ],
        answer: 0,
        explanation: 'Few slots. Many demands. The math explains a lot of bad days.',
        concept: 'Working memory',
      },
      {
        kind: 'truefalse',
        question: 'When cognitive load is too high, thinking just speeds up to cope.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'It jams. Overwhelm is a desk with too much on it.',
        concept: 'Cognitive load',
      },
      {
        kind: 'scenario',
        question: 'You are juggling messages, cooking, and a phone call and something burns. Best fix?',
        options: [
          'Reduce what is on the desk: one task at a time, write the rest down',
          'Try harder to hold everything',
          'Blame your memory',
          'Do everything faster',
        ],
        answer: 0,
        explanation: 'Load is managed by offloading and sequencing, not by willpower.',
        concept: 'Overwhelm management',
      },
    ],
    share: {
      hook: 'Your working memory holds about four things. Modern life hands you forty.',
      question: 'What would you take off your desk today if you could?',
      posts: {
        reflective:
          'Day 23 of Uneek Academy’s psychology course: working memory is a tiny desk — about four slots — and each open loop occupies one. Fill it and thinking jams; that jam is what overwhelm actually is. Not a character flaw. An accounting problem. The exercise: a two-minute "desk dump" of every open loop. Eleven items. No wonder the day felt slow. The fix is offloading and sequencing, not willpower. What would you take off your desk today if you could?',
        direct:
          'Overwhelm is not a mood. It is an accounting problem. Day 23 of Uneek Academy’s psychology course: working memory holds ~4 items; each open loop takes a slot. Over the limit, thinking jams. Fix: desk-dump every open loop onto paper (two minutes) and do one thing at a time. I dumped eleven items today and instantly felt lighter. Not softer — smarter. What would you take off your desk today if you could?',
        story:
          'I was "busy" for three hours and produced nothing. Day 23 of the course explained it: my working-memory desk had fourteen items on it — emails, a worry, a plan, a message I owed. The desk jammed; that is what overwhelm is. I did the exercise: two-minute dump, everything on paper. Eleven items. Then one thing. The day restarted. What would you take off your desk today if you could?',
      },
    },
  },
  {
    id: 'psy-d24',
    month: 1,
    week: 4,
    day: 3,
    dayIndex: 24,
    type: 'interactive',
    title: 'The Mind–Body Connection',
    duration: '7 min',
    summary:
      'The body is not a taxi for the brain. Breathing, posture, sleep, and movement change how you think.',
    concepts: ['Physiology and cognition', 'Breathing', 'Sleep and the mind'],
    cards: [
      {
        kind: 'hook',
        body: 'The mind lives in a body. Treat the body well and the mind gets cheaper to run.',
      },
      {
        kind: 'text',
        title: 'Two-way street',
        body: 'Thoughts change the body (a worrying sentence raises your heart rate). The body changes the mind (slow breathing steadies attention; poor sleep wrecks judgement). Psychology keeps rediscovering that the fastest route to a calmer mind sometimes runs through the lungs.',
      },
      {
        kind: 'definition',
        title: 'Physiological regulation',
        body: 'Using the body — breath, movement, sleep — to change your mental state.',
      },
      {
        kind: 'example',
        title: 'Everyday example',
        body: 'Before a hard conversation, your stomach tightens and your thoughts race. Ten slow breaths do not fix the problem — but they widen the gap between trigger and reaction. Wider gap, better choices.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Do one physiological reset today: 10 slow breaths (out longer than in), a 5-minute walk, or a real lunch break away from screens. Notice the before and after.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'The mind–body connection means that…',
        options: [
          'Body states and mental states influence each other',
          'Only the mind matters',
          'Bodies are irrelevant to thought',
          'Thinking is purely mechanical',
        ],
        answer: 0,
        explanation: 'Two-way traffic. The body is a lever on the mind.',
        concept: 'Physiology and cognition',
      },
      {
        kind: 'truefalse',
        question: 'Slow breathing can steady attention before a hard conversation.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'It widens the gap between trigger and reaction. The gap is where choice lives.',
        concept: 'Breathing',
      },
      {
        kind: 'scenario',
        question:
          'After two nights of poor sleep you make a hasty decision. Which concept explains it best?',
        options: [
          'Sleep and the mind — rested cognition judges better',
          'Heuristics only',
          'Confabulation',
          'Inattentional blindness',
        ],
        answer: 0,
        explanation: 'Sleep is cognitive infrastructure, not downtime.',
        concept: 'Sleep and the mind',
      },
    ],
    share: {
      hook: 'The fastest route to a calmer mind sometimes runs through the lungs.',
      question: 'What is one body-first reset that works for you?',
      posts: {
        reflective:
          'Day 24 of Uneek Academy’s psychology course: the mind lives in a body. Slow breathing steadies attention; sleep is cognitive infrastructure; movement changes mood before thoughts do. The reframe is practical — not every problem needs a thought. Some need a walk, a meal, or ten breaths with a longer exhale. I tried the reset before a difficult call and the gap between trigger and reaction widened just enough to choose better words. What is one body-first reset that works for you?',
        direct:
          'Not every problem needs a thought. Some need a breath. Day 24 of Uneek Academy’s psychology course: body and mind run two-way traffic — slow breathing steadies attention, poor sleep wrecks judgement, movement changes mood fast. Before a hard conversation, ten slow breaths (longer exhale) widen the gap between trigger and reaction. That gap is where your options live. What is one body-first reset that works for you?',
        story:
          'I nearly sent a sharp reply at 11pm after two bad nights of sleep. Instead I remembered day 24’s lesson — the mind lives in a body — and closed the laptop. Morning, breakfast, a walk, then the reply. Same facts, kinder sentence, better outcome. Sleep is infrastructure; breath is a lever; the body is not just a taxi for the brain. What is one body-first reset that works for you?',
      },
    },
  },
  {
    id: 'psy-d25',
    month: 1,
    week: 4,
    day: 4,
    dayIndex: 25,
    type: 'reading',
    title: 'Your First Psychology Toolkit',
    duration: '7 min',
    summary:
      'Four weeks of tools, one page. Catch → name → check → act. The whole month in one small routine.',
    concepts: ['Integration', 'The catch-name-check-act routine', 'Deliberate practice'],
    exercise:
      'Use the full routine once today: catch a thought, name the feeling precisely, check the story, act small. Write down the four steps.',
    cards: [
      {
        kind: 'hook',
        body: 'Catch it. Name it. Check it. Act small. That is Month 1 in four words.',
      },
      {
        kind: 'text',
        title: 'The routine',
        body: 'Catch the automatic thought (Week 2). Name the feeling precisely (Week 3). Check the story: what is the evidence, what would I tell a friend (Weeks 1–3). Act small: one behaviour that feeds a better loop (Week 3). Four steps, portable anywhere.',
      },
      {
        kind: 'definition',
        title: 'Catch–name–check–act',
        body: 'A four-step routine: notice the thought, name the feeling, check the story, take one small action.',
      },
      {
        kind: 'example',
        title: 'Everyday example',
        body: 'A meeting invite lands with no agenda. Catch: "Something’s wrong." Name: anxiety, not "bad." Check: three invites this month had no agenda; nothing was wrong. Act: reply asking what to prepare. Four minutes, whole spiral defused.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Run today’s exercise with the complete routine. Write all four steps. Repetition makes the sequence automatic — and autopilot with good tools is exactly what we want.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'What is the correct order of the routine?',
        options: [
          'Catch → name → check → act',
          'Act → check → name → catch',
          'Name → catch → act → check',
          'Check → act → catch → name',
        ],
        answer: 0,
        explanation: 'Notice, label, examine, move.',
        concept: 'The catch-name-check-act routine',
      },
      {
        kind: 'mcq',
        question: '"Name" in the routine refers to…',
        options: [
          'Naming the feeling precisely',
          'Naming the other person',
          'Naming the thought’s author',
          'Nothing; it is a filler step',
        ],
        answer: 0,
        explanation: 'Emotional granularity: specific name, specific next step.',
        concept: 'Integration',
      },
      {
        kind: 'scenario',
        question:
          'You use the routine and the story still looks true. What then?',
        options: [
          'Act small on it — some stories are accurate and need a response',
          'Assume the routine failed',
          'Repeat "catch" forever',
          'Ignore the situation',
        ],
        answer: 0,
        explanation: 'The goal is accuracy and options, not forced positivity.',
        concept: 'Deliberate practice',
      },
    ],
    share: {
      hook: 'Catch it. Name it. Check it. Act small.',
      question: 'What problem could you take through the four steps today?',
      posts: {
        reflective:
          'Day 25 of Uneek Academy’s psychology course assembled the whole first month into one routine: catch the thought, name the feeling precisely, check the story against evidence, act small. I ran it on a meeting invite with no agenda and watched a mild spiral dissolve in four minutes. Not positive thinking — accurate thinking with options at the end. Tomorrow is the month review; today the routine went from notes to something I can actually do. What problem could you take through the four steps today?',
        direct:
          'Month 1 of Uneek Academy’s psychology course in four words: catch, name, check, act. Catch the automatic thought. Name the feeling precisely. Check the story against evidence. Act small. Four steps, portable, repeatable. Used it today on an ambiguous invite — dissolved in minutes. This is what "tools" means: not notes you reread, routines you run. What problem could you take through the four steps today?',
        story:
          'A vague calendar invite appeared and my stomach dropped: "they’re going to reassign the project." Day 25 of the course handed me the full routine. Catch: that sentence. Name: anxiety. Check: evidence? One missing agenda. Act: reply asking what to prepare. Total time, four minutes. Four weeks ago that sentence would have run my afternoon. Catch, name, check, act — Month 1, compressed. What problem could you take through the four steps today?',
      },
    },
  },
  {
    id: 'psy-d26',
    month: 1,
    week: 4,
    day: 5,
    dayIndex: 26,
    type: 'reading',
    title: 'Foundations in Action: A Day of Noticing',
    duration: '6 min',
    summary:
      'Your last learning day of Month 1 is a field trip: one full day of watching the machinery you have studied.',
    concepts: ['Applied observation', 'Integration', 'Month 1 capstone'],
    exercise:
      'A noticing day: collect five observations (one per concept: autopilot, perception, attention, a shortcut, a thought–feeling–action loop). One line each. That is your Month 1 field report.',
    cards: [
      {
        kind: 'hook',
        body: 'Psychology you do not use is trivia. Today, use all of it.',
      },
      {
        kind: 'text',
        title: 'A day of noticing',
        body: 'For one day, watch for the five machineries from Month 1: autopilot running a routine, perception editing reality, attention missing the gorilla, a shortcut judging on thin evidence, a loop running a mood. You are not fixing anything today. You are collecting field data.',
      },
      {
        kind: 'example',
        title: 'Everyday example',
        body: 'A field report might read: "Missed the turn (autopilot). Assumed the text was rude (story machine). Got angry then justified it (press release). Named it as overlooked, not bad (granularity). Walked before replying (action first)." Five lines. One person. One day.',
      },
      {
        kind: 'practice',
        title: 'Practice task',
        body: 'Today’s exercise is the capstone: five observations, one per concept, one line each. Tomorrow’s review will ask what you found.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'The purpose of a noticing day is to…',
        options: [
          'Collect field data on the machinery without fixing anything',
          'Prove the concepts wrong',
          'Replace the weekly review',
          'Earn extra XP for speed',
        ],
        answer: 0,
        explanation: 'Observation first. Change follows what you can see.',
        concept: 'Applied observation',
      },
      {
        kind: 'truefalse',
        question: 'On the noticing day you must correct every bias you spot.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Seeing is the task. Correcting comes later, and gently.',
        concept: 'Applied observation',
      },
      {
        kind: 'mcq',
        question: 'Which belongs in a field report line?',
        options: [
          '"Assumed the text was rude (story machine)"',
          '"I am a bad person"',
          '"Psychology is useless"',
          '"Nothing happened"',
        ],
        answer: 0,
        explanation: 'Observation + concept tag. Specific, short, non-judgemental.',
        concept: 'Integration',
      },
    ],
    share: {
      hook: 'Psychology you do not use is trivia.',
      question: 'What is one observation from your own noticing day?',
      posts: {
        reflective:
          'Final learning day of Month 1 in Uneek Academy’s psychology course: a noticing day. Five observations, one per concept — autopilot, perception, attention, a shortcut, a loop. Mine found all five by lunch. The most useful line: "assumed the text was rude (story machine)." No fixing today, just field data. A month ago I would have called all of this "just how I think." Now I can point at the machinery. What is one observation from your own noticing day?',
        direct:
          'Psychology you do not use is trivia. Last day of Month 1 in Uneek Academy’s psychology course is a field trip: collect five observations across the five concepts. Mine found all five before lunch. The point is seeing, not fixing. A month in, "just how I am" has become "which system is running?" That is the upgrade. What is one observation from your own noticing day?',
        story:
          'Today I watched my own mind like a field researcher. 8:40 — missed my exit (autopilot). 10:15 — decided a text was curt (story machine). 12:00 — got angry first, built reasons after (press release). 2:30 — renamed "bad" to "overlooked" (granularity). 4:00 — skipped the task, felt worse, noticed the loop. Five observations, Month 1 of Uneek Academy complete. The machinery is visible now. What is one observation from your own noticing day?',
      },
    },
  },
  {
    id: 'psy-d27',
    month: 1,
    week: 4,
    day: 6,
    dayIndex: 27,
    type: 'review',
    title: 'Month 1 Review: Foundations of the Mind',
    duration: '12 min',
    summary:
      'The full month in one test: perception, attention, memory, thoughts, feelings, and the loops between them.',
    concepts: ['Month 1 synthesis'],
    reviewTopics: [
      'What psychology is',
      'Automatic processing & perception',
      'Attention & heuristics',
      'Memory & encoding',
      'Thoughts, beliefs & the loop',
      'Emotional granularity & regulation',
    ],
    cards: [
      {
        kind: 'hook',
        body: 'One month ago these were ideas. Now they are things you have watched happen inside your own head.',
      },
      {
        kind: 'list',
        title: 'The whole map',
        items: [
          'The mind runs mostly on automatic processing; attention is a spotlight.',
          'Perception constructs reality from expectations; shortcuts judge fast.',
          'Memory rebuilds; encoding needs attention; forgetting is housekeeping.',
          'Thoughts are sentences on top of beliefs; the story machine fills gaps.',
          'Feelings and thoughts split into two handles; loops give three doors.',
          'The toolkit: catch → name → check → act.',
        ],
      },
      {
        kind: 'text',
        title: 'What changes next',
        body: 'Month 2 asks why people think the way they do — biases, beliefs, culture, identity. Everything you learned this month is the vocabulary for it.',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        question: 'Which pair is correctly matched?',
        options: [
          'Perception: construction from input + expectations',
          'Memory: perfect recording',
          'Attention: unlimited resource',
          'Heuristics: slow, exact rules',
        ],
        answer: 0,
        explanation: 'The brain builds, edits, and shortcuts its way through the world.',
        concept: 'Automatic processing & perception',
      },
      {
        kind: 'mcq',
        question: 'The fastest way to rescue an overloaded mind is…',
        options: [
          'Offload the desk: write open loops down and do one thing at a time',
          'Try harder to remember everything',
          'Scroll for a while',
          'Sleep at the desk',
        ],
        answer: 0,
        explanation: 'Cognitive load is an accounting problem; offload and sequence.',
        concept: 'Thoughts, beliefs & the loop',
      },
      {
        kind: 'mcq',
        question: '"I feel like they don’t respect me" should first be split into…',
        options: [
          'A feeling (anger/hurt) and a thought ("they don’t respect me")',
          'Two feelings',
          'Two thoughts',
          'Nothing; it is already precise',
        ],
        answer: 0,
        explanation: 'Two objects, two treatments. Split before solving.',
        concept: 'Emotional granularity & regulation',
      },
      {
        kind: 'mcq',
        question: 'Which is a retrieval failure?',
        options: [
          'Tip-of-the-tongue for a name',
          'A memory that never got encoded',
          'A belief',
          'A heuristic',
        ],
        answer: 0,
        explanation: 'The file is there; the cue is missing.',
        concept: 'Memory & encoding',
      },
      {
        kind: 'mcq',
        question: 'The "invisible gorilla" demonstrates…',
        options: [
          'Selective attention: busy focus makes visible things invisible',
          'Poor eyesight',
          'Memory decay',
          'Confabulation',
        ],
        answer: 0,
        explanation: 'Attention is a spotlight with a narrow beam.',
        concept: 'Attention & heuristics',
      },
      {
        kind: 'truefalse',
        question: 'Psychology is the careful study of thoughts, feelings, and behaviour.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Observed, tested, and revised — that is the method.',
        concept: 'What psychology is',
      },
      {
        kind: 'truefalse',
        question: 'Confabulated stories are told as deliberate lies.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Sincere fiction from the story machine.',
        concept: 'Thoughts, beliefs & the loop',
      },
      {
        kind: 'truefalse',
        question: 'Schemas can filter out evidence that contradicts them.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Folders defend contents; wise minds update folders.',
        concept: 'Thoughts, beliefs & the loop',
      },
      {
        kind: 'scenario',
        question:
          'A friend is harsh after a bad night’s sleep. Using Month 1, your first interpretation is…',
        options: [
          'Cognitive load and the mind–body connection: sleep loss degrades judgement',
          'They dislike you',
          'Their true character is showing',
          'Nothing to do with psychology',
        ],
        answer: 0,
        explanation: 'Physiology and load explain a lot of "personal" behaviour.',
        concept: 'Thoughts, beliefs & the loop',
      },
      {
        kind: 'scenario',
        question:
          'Using catch–name–check–act on "I’ll fail this test", the "check" step is…',
        options: [
          'Asking what the evidence is and what I would tell a friend',
          'Feeling worse about it',
          'Ignoring the thought',
          'Acting immediately',
        ],
        answer: 0,
        explanation: 'Check = examine the story with evidence and perspective.',
        concept: 'Thoughts, beliefs & the loop',
      },
    ],
    share: {
      hook: 'What was theory a month ago is now something you have watched happen.',
      question: 'What is the biggest change you have noticed in yourself this month?',
      posts: {
        reflective:
          'Month 1 of Uneek Academy’s psychology course complete. Four weeks ago, "attention is a spotlight" was a phrase. Now it is something I have watched — mid-conversation, rehearsing instead of listening. The month built a full map: autopilot, construction, shortcuts, rebuildable memory, sentences over beliefs, loops with three doors. The toolkit is four words: catch, name, check, act. I am not calmer because life got easier. I am calmer because the machinery is visible. What is the biggest change you have noticed in yourself this month?',
        direct:
          'Month 1 done: Foundations of the Mind, Uneek Academy. The full map — perception constructs, attention spots, shortcuts judge, memory rebuilds, thoughts narrate, feelings and thoughts split, loops run. Toolkit: catch, name, check, act. Twenty-six learning days, four reviews, four rests. Score is in; weak topics queued. Biggest upgrade: "just how I am" is now "which system is running?" What is the biggest change you have noticed in yourself this month?',
        story:
          'Tonight I reread my field notes from the noticing day: "assumed the text was rude (story machine)," "got angry first, justified later (press release)," "renamed bad → overlooked (granularity)." Four weeks of Uneek Academy’s psychology course, and the distance between those lines and how I would have described myself a month ago is enormous. Not a new personality — a visible machinery and four words: catch, name, check, act. On to Month 2. What is the biggest change you have noticed in yourself this month?',
      },
    },
  },
  {
    id: 'psy-d28',
    month: 1,
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
      'Month 1 is complete. The best thing you can do for your memory today is nothing at all. Rest, and let it settle. Tick rest to keep the streak.',
    share: {
      hook: 'Rest is where learning settles.',
      posts: { reflective: '', direct: '', story: '' },
    },
  },
];
