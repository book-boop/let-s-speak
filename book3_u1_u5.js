/* ========================================================
 * Let's Speak - Book 3: Unit 1 ~ Unit 5 題庫資料
 * 檔名: book3_u1_u5.js
 * ======================================================== */

// 第一大題：單字聽力排序（30 個單字池）
const book3_U1_U5_Data = [
  {
    unit: "Unit 1",
    title: "What Do You Think?",
    items: [
      { id: "b3_u1_1", word: "robotics club", image: "images/b3_u1_robotics.png" },
      { id: "b3_u1_2", word: "drama club", image: "images/b3_u1_drama.png" },
      { id: "b3_u1_3", word: "science club", image: "images/b3_u1_science.png" },
      { id: "b3_u1_4", word: "nature club", image: "images/b3_u1_nature.png" },
      { id: "b3_u1_5", word: "sports club", image: "images/b3_u1_sports.png" },
      { id: "b3_u1_6", word: "cooking club", image: "images/b3_u1_cooking.png" }
    ]
  },
  {
    unit: "Unit 2",
    title: "Could You Help Me?",
    items: [
      { id: "b3_u2_1", word: "math", image: "images/b3_u2_math.png" },
      { id: "b3_u2_2", word: "English", image: "images/b3_u2_english.png" },
      { id: "b3_u2_3", word: "Chinese", image: "images/b3_u2_chinese.png" },
      { id: "b3_u2_4", word: "science", image: "images/b3_u2_science.png" },
      { id: "b3_u2_5", word: "history", image: "images/b3_u2_history.png" },
      { id: "b3_u2_6", word: "geography", image: "images/b3_u2_geography.png" }
    ]
  },
  {
    unit: "Unit 3",
    title: "Let's Play Bingo!",
    items: [
      { id: "b3_u3_1", word: "animals", image: "images/b3_u3_animals.png" },
      { id: "b3_u3_2", word: "pictures", image: "images/b3_u3_pictures.png" },
      { id: "b3_u3_3", word: "words", image: "images/b3_u3_words.png" },
      { id: "b3_u3_4", word: "numbers", image: "images/b3_u3_numbers.png" },
      { id: "b3_u3_5", word: "vegetables", image: "images/b3_u3_vegetables.png" },
      { id: "b3_u3_6", word: "toys", image: "images/b3_u3_toys.png" }
    ]
  },
  {
    unit: "Unit 4",
    title: "The Superhero Movie Was Awesome!",
    items: [
      { id: "b3_u4_1", word: "superhero", image: "images/b3_u4_superhero.png" },
      { id: "b3_u4_2", word: "horror", image: "images/b3_u4_horror.png" },
      { id: "b3_u4_3", word: "comedy", image: "images/b3_u4_comedy.png" },
      { id: "b3_u4_4", word: "sci-fi", image: "images/b3_u4_scifi.png" },
      { id: "b3_u4_5", word: "fantasy", image: "images/b3_u4_fantasy.png" },
      { id: "b3_u4_6", word: "action", image: "images/b3_u4_action.png" }
    ]
  },
  {
    unit: "Unit 5",
    title: "I Felt Excited",
    items: [
      { id: "b3_u5_1", word: "pass the test", image: "images/b3_u5_passtest.png" },
      { id: "b3_u5_2", word: "fail the test", image: "images/b3_u5_failtest.png" },
      { id: "b3_u5_3", word: "get a new bike", image: "images/b3_u5_newbike.png" },
      { id: "b3_u5_4", word: "lose my wallet", image: "images/b3_u5_losewallet.png" },
      { id: "b3_u5_5", word: "level up in a game", image: "images/b3_u5_levelup.png" },
      { id: "b3_u5_6", word: "make a new friend", image: "images/b3_u5_newfriend.png" }
    ]
  }
];

// 第二大題：句子回應聽力選擇（波形校準，已去除原題號）
const book3_PartB_U1_U5_Data = {
  audioFile: "audio/test7_track20.mp3",
  questions: [
    {
      id: 1,
      script: "Do you like vegetables? What's your favorite one?",
      start: 2.70,
      end: 6.78,
      options: [
        { label: "A", text: "I like cabbage best." },
        { label: "B", text: "How about peaches?" },
        { label: "C", text: "I like apple pies." }
      ],
      answer: "A"
    },
    {
      id: 2,
      script: "It's rainy today. Let's play bingo at home.",
      start: 12.83,
      end: 17.03,
      options: [
        { label: "A", text: "You’re welcome!" },
        { label: "B", text: "Nice to meet you." },
        { label: "C", text: "Good idea!" }
      ],
      answer: "C"
    },
    {
      id: 3,
      script: "Thanks a lot.",
      start: 23.02,
      end: 24.31,
      options: [
        { label: "A", text: "Anytime! I’m here to help." },
        { label: "B", text: "I get what you mean." },
        { label: "C", text: "What about yours?" }
      ],
      answer: "A"
    },
    {
      id: 4,
      script: "Do you like horror movies?",
      start: 30.13,
      end: 32.74,
      options: [
        { label: "A", text: "I think so, too." },
        { label: "B", text: "I’m glad you like them." },
        { label: "C", text: "Yeah, I do! I like them a lot." }
      ],
      answer: "C"
    },
    {
      id: 5,
      script: "Hey, could you help me with something?",
      start: 38.67,
      end: 41.80,
      options: [
        { label: "A", text: "Thanks for asking." },
        { label: "B", text: "Great! When is it?" },
        { label: "C", text: "Of course! What’s up?" }
      ],
      answer: "C"
    },
    {
      id: 6,
      script: "I want to join the book club, what do you think?",
      start: 47.87,
      end: 51.69,
      options: [
        { label: "A", text: "That’s a good idea." },
        { label: "B", text: "Sure! I love sports." },
        { label: "C", text: "Sure, what’s the matter?" }
      ],
      answer: "A"
    },
    {
      id: 7,
      script: "You look terrible. What happened?",
      start: 57.82,
      end: 60.99,
      options: [
        { label: "A", text: "No problem!" },
        { label: "B", text: "I lost my wallet." },
        { label: "C", text: "Have fun." }
      ],
      answer: "B"
    },
    {
      id: 8,
      script: "Guess what? I just leveled up in a game. I'm so excited.",
      start: 67.02,
      end: 72.52,
      options: [
        { label: "A", text: "Congratulations!" },
        { label: "B", text: "Maybe next time." },
        { label: "C", text: "That’s no fun." }
      ],
      answer: "A"
    },
    {
      id: 9,
      script: "The new sci-fi movie was boring.",
      start: 78.51,
      end: 81.85,
      options: [
        { label: "A", text: "Let’s go together." },
        { label: "B", text: "Really? That’s too bad." },
        { label: "C", text: "Sure, I’ll bring some drinks." }
      ],
      answer: "B"
    },
    {
      id: 10,
      script: "I really want to improve my cooking.",
      start: 87.82,
      end: 90.94,
      options: [
        { label: "A", text: "We can join the chess club." },
        { label: "B", text: "Maybe you can join the cooking club." },
        { label: "C", text: "Let’s meet at the snack shop." }
      ],
      answer: "B"
    }
  ]
};