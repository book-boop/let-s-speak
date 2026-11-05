/* ========================================================
 * Let's Speak - Book 3: Unit 11 ~ Unit 15 題庫資料
 * 檔名: book3_u11_u15.js
 * ======================================================== */

// 第一大題：單字聽力排序（30 個單字池）
const book3_U11_U15_Data = [
  {
    unit: "Unit 11",
    title: "I Often Listen to Music",
    items: [
      { id: "b3_u11_1", word: "play sports", image: "images/b3_u11_playsports.png" },
      { id: "b3_u11_2", word: "go jogging", image: "images/b3_u11_gojogging.png" },
      { id: "b3_u11_3", word: "listen to music", image: "images/b3_u11_listentomusic.png" },
      { id: "b3_u11_4", word: "go to concerts", image: "images/b3_u11_gotoconcerts.png" },
      { id: "b3_u11_5", word: "watch cartoons", image: "images/b3_u11_watchcartoons.png" },
      { id: "b3_u11_6", word: "play board games", image: "images/b3_u11_playboardgames.png" }
    ]
  },
  {
    unit: "Unit 12",
    title: "What Are You Going to Do This Weekend?",
    items: [
      { id: "b3_u12_1", word: "volunteer at an animal shelter", image: "images/b3_u12_volunteer.png" },
      { id: "b3_u12_2", word: "go to the movies", image: "images/b3_u12_gotothemovies.png" },
      { id: "b3_u12_3", word: "visit my grandparents", image: "images/b3_u12_visitgrandparents.png" },
      { id: "b3_u12_4", word: "bake cookies", image: "images/b3_u12_bakecookies.png" },
      { id: "b3_u12_5", word: "go hiking", image: "images/b3_u12_gohiking.png" },
      { id: "b3_u12_6", word: "go shopping", image: "images/b3_u12_goshopping.png" }
    ]
  },
  {
    unit: "Unit 13",
    title: "What Time Should We Meet?",
    items: [
      { id: "b3_u13_1", word: "go on a picnic", image: "images/b3_u13_goonapicnic.png" },
      { id: "b3_u13_2", word: "go skating", image: "images/b3_u13_goskating.png" },
      { id: "b3_u13_3", word: "go bowling", image: "images/b3_u13_gobowling.png" },
      { id: "b3_u13_4", word: "play tennis", image: "images/b3_u13_playtennis.png" },
      { id: "b3_u13_5", word: "do the report", image: "images/b3_u13_dothereport.png" },
      { id: "b3_u13_6", word: "study for the test", image: "images/b3_u13_studyforthetest.png" }
    ]
  },
  {
    unit: "Unit 14",
    title: "I Missed the Bus",
    items: [
      { id: "b3_u14_1", word: "metro train", image: "images/b3_u14_metrotrain.png" },
      { id: "b3_u14_2", word: "bus", image: "images/b3_u14_bus.png" },
      { id: "b3_u14_3", word: "train", image: "images/b3_u14_train.png" },
      { id: "b3_u14_4", word: "ferry", image: "images/b3_u14_ferry.png" },
      { id: "b3_u14_5", word: "trolley", image: "images/b3_u14_trolley.png" },
      { id: "b3_u14_6", word: "shuttle", image: "images/b3_u14_shuttle.png" }
    ]
  },
  {
    unit: "Unit 15",
    title: "I'm Making a Cherry Cupcake for Mom",
    items: [
      { id: "b3_u15_1", word: "vanilla", image: "images/b3_u15_vanilla.png" },
      { id: "b3_u15_2", word: "chocolate", image: "images/b3_u15_chocolate.png" },
      { id: "b3_u15_3", word: "peanut butter", image: "images/b3_u15_peanutbutter.png" },
      { id: "b3_u15_4", word: "caramel", image: "images/b3_u15_caramel.png" },
      { id: "b3_u15_5", word: "strawberry", image: "images/b3_u15_strawberry.png" },
      { id: "b3_u15_6", word: "cherry", image: "images/b3_u15_cherry.png" }
    ]
  }
];

// 第二大題：句子回應聽力配對選擇（波形校準，全共享選項池）
const book3_PartB_U11_U15_Data = {
  audioFile: "audio/test9_track26.mp3",
  // 本單元 10 個共享選項池
  sharedOptions: [
    { label: "A", text: "Sure, let’s meet at the playground after school." },
    { label: "B", text: "No worries, let’s hurry." },
    { label: "C", text: "Yes, I do. It’s tasty!" },
    { label: "D", text: "Yeah, sure! How about Saturday? I’m free in the afternoon." },
    { label: "E", text: "I like lemons." },
    { label: "F", text: "I missed the bus. I’m so sorry!" },
    { label: "G", text: "That sounds lovely! Have fun." },
    { label: "H", text: "I usually read comic books." },
    { label: "I", text: "Yes, I often do. I love concerts." },
    { label: "J", text: "Thanks! You, too!" }
  ],
  questions: [
    {
      id: 1,
      script: "Have a great weekend.",
      start: 2.80,
      end: 4.56,
      answer: "J"
    },
    {
      id: 2,
      script: "Do you go to concerts in your free time?",
      start: 10.60,
      end: 14.10,
      answer: "I"
    },
    {
      id: 3,
      script: "My friend and I are going to go hiking.",
      start: 20.00,
      end: 23.33,
      answer: "G"
    },
    {
      id: 4,
      script: "Do you like lemons or strawberries?",
      start: 29.47,
      end: 32.58,
      answer: "E"
    },
    {
      id: 5,
      script: "What do you usually do in your free time?",
      start: 38.47,
      end: 42.50,
      answer: "H"
    },
    {
      id: 6,
      script: "Hey, let's study for the test together this weekend.",
      start: 48.72,
      end: 52.67,
      answer: "D"
    },
    {
      id: 7,
      script: "Do you like adding peanut butter to your bread?",
      start: 58.91,
      end: 62.48,
      answer: "C"
    },
    {
      id: 8,
      script: "Are you okay? What happened?",
      start: 68.70,
      end: 71.78,
      answer: "F"
    },
    {
      id: 9,
      script: "Do you want to play tennis after school?",
      start: 77.91,
      end: 81.18,
      answer: "A"
    },
    {
      id: 10,
      script: "I'm sorry for being late. I overslept.",
      start: 87.11,
      end: 91.28,
      answer: "B"
    }
  ]
};