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

// 第二大題：句子回應聽力選擇（4 選 1 標準化，不會遮住畫面）
const book3_PartB_U11_U15_Data = {
  audioFile: "audio/test9_track26.mp3",
  questions: [
    {
      id: 1,
      script: "Have a great weekend.",
      start: 2.80,
      end: 4.56,
      options: [
        { label: "A", text: "Sure, let’s meet at the playground after school." },
        { label: "B", text: "No worries, let’s hurry." },
        { label: "C", text: "Thanks! You, too!" },
        { label: "D", text: "I like lemons." }
      ],
      answer: "C"
    },
    {
      id: 2,
      script: "Do you go to concerts in your free time?",
      start: 10.60,
      end: 14.10,
      options: [
        { label: "A", text: "Yes, I often do. I love concerts." },
        { label: "B", text: "I usually read comic books." },
        { label: "C", text: "I missed the bus. I’m so sorry!" },
        { label: "D", text: "Yes, I do. It’s tasty!" }
      ],
      answer: "A"
    },
    {
      id: 3,
      script: "My friend and I are going to go hiking.",
      start: 20.00,
      end: 23.33,
      options: [
        { label: "A", text: "Thanks! You, too!" },
        { label: "B", text: "That sounds lovely! Have fun." },
        { label: "C", text: "No worries, let’s hurry." },
        { label: "D", text: "Sure, let’s meet at the playground after school." }
      ],
      answer: "B"
    },
    {
      id: 4,
      script: "Do you like lemons or strawberries?",
      start: 29.47,
      end: 32.58,
      options: [
        { label: "A", text: "Yes, I often do. I love concerts." },
        { label: "B", text: "Yeah, sure! How about Saturday?" },
        { label: "C", text: "I like lemons." },
        { label: "D", text: "I missed the bus. I’m so sorry!" }
      ],
      answer: "C"
    },
    {
      id: 5,
      script: "What do you usually do in your free time?",
      start: 38.47,
      end: 42.50,
      options: [
        { label: "A", text: "I usually read comic books." },
        { label: "B", text: "Yes, I do. It’s tasty!" },
        { label: "C", text: "No worries, let’s hurry." },
        { label: "D", text: "That sounds lovely! Have fun." }
      ],
      answer: "A"
    },
    {
      id: 6,
      script: "Hey, let's study for the test together this weekend.",
      start: 48.72,
      end: 52.67,
      options: [
        { label: "A", text: "I missed the bus. I’m so sorry!" },
        { label: "B", text: "Yeah, sure! How about Saturday? I’m free in the afternoon." },
        { label: "C", text: "Thanks! You, too!" },
        { label: "D", text: "I like lemons." }
      ],
      answer: "B"
    },
    {
      id: 7,
      script: "Do you like adding peanut butter to your bread?",
      start: 58.91,
      end: 62.48,
      options: [
        { label: "A", text: "Sure, let’s meet at the playground after school." },
        { label: "B", text: "I usually read comic books." },
        { label: "C", text: "Yes, I do. It’s tasty!" },
        { label: "D", text: "That sounds lovely! Have fun." }
      ],
      answer: "C"
    },
    {
      id: 8,
      script: "Are you okay? What happened?",
      start: 68.70,
      end: 71.78,
      options: [
        { label: "A", text: "I missed the bus. I’m so sorry!" },
        { label: "B", text: "Yes, I often do. I love concerts." },
        { label: "C", text: "No worries, let’s hurry." },
        { label: "D", text: "Yeah, sure! How about Saturday?" }
      ],
      answer: "A"
    },
    {
      id: 9,
      script: "Do you want to play tennis after school?",
      start: 77.91,
      end: 81.18,
      options: [
        { label: "A", text: "I like lemons." },
        { label: "B", text: "Sure, let’s meet at the playground after school." },
        { label: "C", text: "Thanks! You, too!" },
        { label: "D", text: "Yes, I do. It’s tasty!" }
      ],
      answer: "B"
    },
    {
      id: 10,
      script: "I'm sorry for being late. I overslept.",
      start: 87.11,
      end: 91.28,
      options: [
        { label: "A", text: "That sounds lovely! Have fun." },
        { label: "B", text: "I usually read comic books." },
        { label: "C", text: "No worries, let’s hurry." },
        { label: "D", text: "Yes, I often do. I love concerts." }
      ],
      answer: "C"
    }
  ]
};