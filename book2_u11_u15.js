/* ========================================================
 * Let's Speak - Book 2: Unit 11 ~ Unit 15 題庫資料
 * 檔名: book2_u11_u15.js
 * ======================================================== */

// 第一大題：單字聽力排序（30 個單字池）
const book2_U11_U15_Data = [
  {
    unit: "Unit 11",
    title: "Do You Need Mine?",
    items: [
      { id: "b2_u11_1", word: "knife", image: "images/b2_u11_knife.png" },
      { id: "b2_u11_2", word: "chopsticks", image: "images/b2_u11_chopsticks.png" },
      { id: "b2_u11_3", word: "spoon", image: "images/b2_u11_spoon.png" },
      { id: "b2_u11_4", word: "fork", image: "images/b2_u11_fork.png" },
      { id: "b2_u11_5", word: "plate", image: "images/b2_u11_plate.png" },
      { id: "b2_u11_6", word: "mug", image: "images/b2_u11_mug.png" }
    ]
  },
  {
    unit: "Unit 12",
    title: "Can I Talk to You for a Minute?",
    items: [
      { id: "b2_u12_1", word: "math homework", image: "images/b2_u12_mathhomework.png" },
      { id: "b2_u12_2", word: "school project", image: "images/b2_u12_schoolproject.png" },
      { id: "b2_u12_3", word: "science report", image: "images/b2_u12_sciencereport.png" },
      { id: "b2_u12_4", word: "tablet", image: "images/b2_u12_tablet.png" },
      { id: "b2_u12_5", word: "smartphone", image: "images/b2_u12_smartphone.png" },
      { id: "b2_u12_6", word: "bike", image: "images/b2_u12_bike.png" }
    ]
  },
  {
    unit: "Unit 13",
    title: "It'll Be So Much Fun!",
    items: [
      { id: "b2_u13_1", word: "theme park trip", image: "images/b2_u13_themepark.png" },
      { id: "b2_u13_2", word: "field trip", image: "images/b2_u13_fieldtrip.png" },
      { id: "b2_u13_3", word: "beach trip", image: "images/b2_u13_beachtrip.png" },
      { id: "b2_u13_4", word: "skiing trip", image: "images/b2_u13_skiing.png" },
      { id: "b2_u13_5", word: "science museum trip", image: "images/b2_u13_sciencemuseum.png" },
      { id: "b2_u13_6", word: "hiking trip", image: "images/b2_u13_hiking.png" }
    ]
  },
  {
    unit: "Unit 14",
    title: "I Like Winter",
    items: [
      { id: "b2_u14_1", word: "spring", image: "images/b2_u14_spring.png" },
      { id: "b2_u14_2", word: "summer", image: "images/b2_u14_summer.png" },
      { id: "b2_u14_3", word: "autumn", image: "images/b2_u14_autumn.png" },
      { id: "b2_u14_4", word: "winter", image: "images/b2_u14_winter.png" },
      { id: "b2_u14_5", word: "snowboarding", image: "images/b2_u14_snowboarding.png" },
      { id: "b2_u14_6", word: "swimming", image: "images/b2_u14_swimming.png" }
    ]
  },
  {
    unit: "Unit 15",
    title: "Let's Play a Game!",
    items: [
      { id: "b2_u15_1", word: "clock", image: "images/b2_u15_clock.png" },
      { id: "b2_u15_2", word: "kitchen set", image: "images/b2_u15_kitchenset.png" },
      { id: "b2_u15_3", word: "action figure", image: "images/b2_u15_actionfigure.png" },
      { id: "b2_u15_4", word: "computer", image: "images/b2_u15_computer.png" },
      { id: "b2_u15_5", word: "game console", image: "images/b2_u15_gameconsole.png" },
      { id: "b2_u15_6", word: "teddy bear", image: "images/b2_u15_teddybear.png" }
    ]
  }
];

// 第二大題：句子回應聽力選擇（波形校準，已去除原題號）
const book2_PartB_U11_U15_Data = {
  audioFile: "audio/test6_track17.mp3",
  questions: [
    {
      id: 1,
      script: "I'm having some problems with the recipe. Can you help me?",
      start: 2.63,
      end: 7.31,
      options: [
        { label: "A", text: "Who can help?" },
        { label: "B", text: "Why summer?" },
        { label: "C", text: "Sure! I can help you after lunch." }
      ],
      answer: "C"
    },
    {
      id: 2,
      script: "I need a knife to cut the apples.",
      start: 13.31,
      end: 16.44,
      options: [
        { label: "A", text: "Here you go." },
        { label: "B", text: "It’s mine." },
        { label: "C", text: "They’re on the table." }
      ],
      answer: "A"
    },
    {
      id: 3,
      script: "Thanks Dave, that means a lot.",
      start: 22.36,
      end: 25.05,
      options: [
        { label: "A", text: "Maybe next time." },
        { label: "B", text: "No problem at all." },
        { label: "C", text: "Are you coming?" }
      ],
      answer: "B"
    },
    {
      id: 4,
      script: "Is it a kitchen set?",
      start: 31.05,
      end: 33.34,
      options: [
        { label: "A", text: "Yes, bingo!" },
        { label: "B", text: "Yes, try again." },
        { label: "C", text: "Yes, it’s a toy car." }
      ],
      answer: "A"
    },
    {
      id: 5,
      script: "Oops, I forgot my spoon.",
      start: 39.20,
      end: 42.20,
      options: [
        { label: "A", text: "Thanks for your help." },
        { label: "B", text: "A spoon, interesting!" },
        { label: "C", text: "Do you need mine? I have an extra one." }
      ],
      answer: "C"
    },
    {
      id: 6,
      script: "When is the science museum trip?",
      start: 48.35,
      end: 51.37,
      options: [
        { label: "A", text: "It’s next Wednesday." },
        { label: "B", text: "Anything else?" },
        { label: "C", text: "When is it?" }
      ],
      answer: "A"
    },
    {
      id: 7,
      script: "Hey, want to solve a riddle?",
      start: 57.47,
      end: 60.03,
      options: [
        { label: "A", text: "Here you go." },
        { label: "B", text: "Can I go?" },
        { label: "C", text: "Of course. I love riddles!" }
      ],
      answer: "C"
    },
    {
      id: 8,
      script: "Why don't you like winter?",
      start: 66.19,
      end: 68.86,
      options: [
        { label: "A", text: "It’s too cold." },
        { label: "B", text: "Let’s go shopping." },
        { label: "C", text: "I like birdwatching." }
      ],
      answer: "A"
    },
    {
      id: 9,
      script: "I'm planning to go on a hiking trip this Sunday. Are you coming?",
      start: 74.98,
      end: 80.16,
      options: [
        { label: "A", text: "I also love hiking." },
        { label: "B", text: "Yeah! I can’t wait." },
        { label: "C", text: "Here you are." }
      ],
      answer: "B"
    },
    {
      id: 10,
      script: "I like summer the most. How about you?",
      start: 86.12,
      end: 89.92,
      options: [
        { label: "A", text: "Me, too." },
        { label: "B", text: "I love autumn, too." },
        { label: "C", text: "Why spring?" }
      ],
      answer: "A"
    }
  ]
};