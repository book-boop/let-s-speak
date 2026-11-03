/* ========================================================
 * Let's Speak - Book 2: Unit 6 ~ Unit 10 題庫資料
 * 檔名: book2_u6_u10.js
 * ======================================================== */

// 第一大題：單字聽力排序（30 個單字池）
const book2_U6_U10_Data = [
  {
    unit: "Unit 6",
    title: "Congratulations!",
    items: [
      { id: "b2_u6_1", word: "spelling", image: "images/b2_u6_spelling.png" },
      { id: "b2_u6_2", word: "speech", image: "images/b2_u6_speech.png" },
      { id: "b2_u6_3", word: "art", image: "images/b2_u6_art.png" },
      { id: "b2_u6_4", word: "dance", image: "images/b2_u6_dance.png" },
      { id: "b2_u6_5", word: "singing", image: "images/b2_u6_singing.png" },
      { id: "b2_u6_6", word: "cartoon marathon", image: "images/b2_u6_cartoonmarathon.png" }
    ]
  },
  {
    unit: "Unit 7",
    title: "I Have a Cold",
    items: [
      { id: "b2_u7_1", word: "headache", image: "images/b2_u7_headache.png" },
      { id: "b2_u7_2", word: "fever", image: "images/b2_u7_fever.png" },
      { id: "b2_u7_3", word: "cold", image: "images/b2_u7_cold.png" },
      { id: "b2_u7_4", word: "toothache", image: "images/b2_u7_toothache.png" },
      { id: "b2_u7_5", word: "stomachache", image: "images/b2_u7_stomachache.png" },
      { id: "b2_u7_6", word: "sore throat", image: "images/b2_u7_sorethroat.png" }
    ]
  },
  {
    unit: "Unit 8",
    title: "How Do You Go to the Gym?",
    items: [
      { id: "b2_u8_1", word: "on foot", image: "images/b2_u8_onfoot.png" },
      { id: "b2_u8_2", word: "by train", image: "images/b2_u8_bytrain.png" },
      { id: "b2_u8_3", word: "by bus", image: "images/b2_u8_bybus.png" },
      { id: "b2_u8_4", word: "by car", image: "images/b2_u8_bycar.png" },
      { id: "b2_u8_5", word: "by subway", image: "images/b2_u8_bysubway.png" },
      { id: "b2_u8_6", word: "gym", image: "images/b2_u8_gym.png" }
    ]
  },
  {
    unit: "Unit 9",
    title: "How Do I Get There?",
    items: [
      { id: "b2_u9_1", word: "go straight", image: "images/b2_u9_gostraight.png" },
      { id: "b2_u9_2", word: "cross the street", image: "images/b2_u9_crossthestreet.png" },
      { id: "b2_u9_3", word: "turn right", image: "images/b2_u9_turnright.png" },
      { id: "b2_u9_4", word: "turn left", image: "images/b2_u9_turnleft.png" },
      { id: "b2_u9_5", word: "convenience store", image: "images/b2_u9_conveniencestore.png" },
      { id: "b2_u9_6", word: "zoo", image: "images/b2_u9_zoo.png" }
    ]
  },
  {
    unit: "Unit 10",
    title: "Can You Show Me How to Get to the Bakery?",
    items: [
      { id: "b2_u10_1", word: "bakery", image: "images/b2_u10_bakery.png" },
      { id: "b2_u10_2", word: "bus station", image: "images/b2_u10_busstation.png" },
      { id: "b2_u10_3", word: "hospital", image: "images/b2_u10_hospital.png" },
      { id: "b2_u10_4", word: "restaurant", image: "images/b2_u10_restaurant.png" },
      { id: "b2_u10_5", word: "go along", image: "images/b2_u10_goalong.png" },
      { id: "b2_u10_6", word: "bookstore", image: "images/b2_u10_bookstore.png" }
    ]
  }
];

// 第二大題：句子回應聽力選擇（波形校準，已去除原題號）
const book2_PartB_U6_U10_Data = {
  audioFile: "audio/test5_track14.mp3",
  questions: [
    {
      id: 1,
      script: "You don't look good. What's the matter?",
      start: 2.74,
      end: 5.96,
      options: [
        { label: "A", text: "I have a headache." },
        { label: "B", text: "Thanks for your concern." },
        { label: "C", text: "That’s no good." }
      ],
      answer: "A"
    },
    {
      id: 2,
      script: "How do you go there?",
      start: 12.14,
      end: 14.01,
      options: [
        { label: "A", text: "Get well soon!" },
        { label: "B", text: "I go there by car." },
        { label: "C", text: "Let’s go together!" }
      ],
      answer: "B"
    },
    {
      id: 3,
      script: "Is there a snack shop around here?",
      start: 20.04,
      end: 23.47,
      options: [
        { label: "A", text: "Yes, there is one." },
        { label: "B", text: "No problem at all." },
        { label: "C", text: "Thanks for your help." }
      ],
      answer: "A"
    },
    {
      id: 4,
      script: "Where is the snack shop?",
      start: 29.40,
      end: 31.91,
      options: [
        { label: "A", text: "It’s on Maple Street." },
        { label: "B", text: "You’re welcome." },
        { label: "C", text: "Have a nice day." }
      ],
      answer: "A"
    },
    {
      id: 5,
      script: "How are we going to celebrate?",
      start: 37.87,
      end: 40.75,
      options: [
        { label: "A", text: "For sure!" },
        { label: "B", text: "See you." },
        { label: "C", text: "Let’s have a big meal." }
      ],
      answer: "C"
    },
    {
      id: 6,
      script: "Let's find the bakery on the map.",
      start: 46.95,
      end: 49.58,
      options: [
        { label: "A", text: "It’s on South Rd." },
        { label: "B", text: "That’s fantastic!" },
        { label: "C", text: "Thanks a lot." }
      ],
      answer: "A"
    },
    {
      id: 7,
      script: "Congratulations on winning first place in the art contest.",
      start: 55.62,
      end: 60.66,
      options: [
        { label: "A", text: "I can’t wait." },
        { label: "B", text: "Thanks!" },
        { label: "C", text: "Make sure to drink some water." }
      ],
      answer: "B"
    },
    {
      id: 8,
      script: "Do you go to the gym every Sunday?",
      start: 66.75,
      end: 70.17,
      options: [
        { label: "A", text: "I go there by bus." },
        { label: "B", text: "I do." },
        { label: "C", text: "Where is it?" }
      ],
      answer: "A"
    },
    {
      id: 9,
      script: "Do you want to have some ice cream later?",
      start: 76.26,
      end: 79.59,
      options: [
        { label: "A", text: "Try again." },
        { label: "B", text: "Well done." },
        { label: "C", text: "I’d love to, but I have a stomachache." }
      ],
      answer: "C"
    },
    {
      id: 10,
      script: "How do I get to the department store?",
      start: 85.55,
      end: 89.09,
      options: [
        { label: "A", text: "Sounds awesome." },
        { label: "B", text: "How about you?" },
        { label: "C", text: "Just go straight and you’ll see it." }
      ],
      answer: "C"
    }
  ]
};