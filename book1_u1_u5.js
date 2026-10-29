/* ========================================================
 * Let's Speak - Book 1: Unit 1 ~ Unit 5 題庫 (30 張單字圖片皆為 PNG)
 * 檔名: book1_u1_u5.js
 * ======================================================== */

// 第一大題：單字聽力排序（30 個單字池，副檔名皆為 .png）
const book1_U1_U5_Data = [
  {
    unit: "Unit 1",
    title: "Welcome to Our School",
    items: [
      { id: "b1_u1_1", word: "school", image: "images/b1_u1_school.png" },
      { id: "b1_u1_2", word: "city", image: "images/b1_u1_city.png" },
      { id: "b1_u1_3", word: "neighborhood", image: "images/b1_u1_neighborhood.png" },
      { id: "b1_u1_4", word: "class", image: "images/b1_u1_class.png" },
      { id: "b1_u1_5", word: "town", image: "images/b1_u1_town.png" },
      { id: "b1_u1_6", word: "party", image: "images/b1_u1_party.png" }
    ]
  },
  {
    unit: "Unit 2",
    title: "Nice to Meet You",
    items: [
      { id: "b1_u2_1", word: "mother", image: "images/b1_u2_mother.png" },
      { id: "b1_u2_2", word: "father", image: "images/b1_u2_father.png" },
      { id: "b1_u2_3", word: "brother", image: "images/b1_u2_brother.png" },
      { id: "b1_u2_4", word: "sister", image: "images/b1_u2_sister.png" },
      { id: "b1_u2_5", word: "teacher", image: "images/b1_u2_teacher.png" },
      { id: "b1_u2_6", word: "classmate", image: "images/b1_u2_classmate.png" }
    ]
  },
  {
    unit: "Unit 3",
    title: "She's Tall",
    items: [
      { id: "b1_u3_1", word: "T-shirt", image: "images/b1_u3_tshirt.png" },
      { id: "b1_u3_2", word: "skirt", image: "images/b1_u3_skirt.png" },
      { id: "b1_u3_3", word: "cap", image: "images/b1_u3_cap.png" },
      { id: "b1_u3_4", word: "shoes", image: "images/b1_u3_shoes.png" },
      { id: "b1_u3_5", word: "jeans", image: "images/b1_u3_jeans.png" },
      { id: "b1_u3_6", word: "pants", image: "images/b1_u3_pants.png" }
    ]
  },
  {
    unit: "Unit 4",
    title: "It's \"Good Morning\"",
    items: [
      { id: "b1_u4_1", word: "good morning", image: "images/b1_u4_morning.png" },
      { id: "b1_u4_2", word: "good afternoon", image: "images/b1_u4_afternoon.png" },
      { id: "b1_u4_3", word: "good evening", image: "images/b1_u4_evening.png" },
      { id: "b1_u4_4", word: "hi", image: "images/b1_u4_hi.png" },
      { id: "b1_u4_5", word: "how are you", image: "images/b1_u4_howareyou.png" },
      { id: "b1_u4_6", word: "hello", image: "images/b1_u4_hello.png" }
    ]
  },
  {
    unit: "Unit 5",
    title: "How's the Weather?",
    items: [
      { id: "b1_u5_1", word: "sunny", image: "images/b1_u5_sunny.png" },
      { id: "b1_u5_2", word: "cloudy", image: "images/b1_u5_cloudy.png" },
      { id: "b1_u5_3", word: "windy", image: "images/b1_u5_windy.png" },
      { id: "b1_u5_4", word: "rainy", image: "images/b1_u5_rainy.png" },
      { id: "b1_u5_5", word: "hot", image: "images/b1_u5_hot.png" },
      { id: "b1_u5_6", word: "warm", image: "images/b1_u5_warm.png" }
    ]
  }
];

// 第二大題：句子回應聽力選擇（10 題抽 5 題）
const book1_PartB_Data = {
  audioFile: "audio/B1 U1-U5.mp3",
  questions: [
    {
      id: 1,
      script: "One. How do you spell your name?",
      start: 0.0,
      end: 4.8,
      options: [
        { label: "A", text: "I’m Ruby." },
        { label: "B", text: "It’s J-E-N-N-Y." },
        { label: "C", text: "It’s Lisa." }
      ],
      answer: "B"
    },
    {
      id: 2,
      script: "Two. Hey there, I’m Allen. What’s your name?",
      start: 9.0,
      end: 15.2,
      options: [
        { label: "A", text: "Hi, Allen. I’m Kelly!" },
        { label: "B", text: "Nice to meet you." },
        { label: "C", text: "Welcome to our school." }
      ],
      answer: "A"
    },
    {
      id: 3,
      script: "Three. Eric, this is my mother.",
      start: 19.5,
      end: 24.5,
      options: [
        { label: "A", text: "It’s E-R-I-C." },
        { label: "B", text: "Hello, Mr. Smith." },
        { label: "C", text: "Hi, nice to meet you, Mrs. Smith." }
      ],
      answer: "C"
    },
    {
      id: 4,
      script: "Four. How old is your brother?",
      start: 29.0,
      end: 34.0,
      options: [
        { label: "A", text: "He’s fifteen years old." },
        { label: "B", text: "He has short hair." },
        { label: "C", text: "He is tall." }
      ],
      answer: "A"
    },
    {
      id: 5,
      script: "Five. Nice to meet you. Welcome to our school.",
      start: 38.5,
      end: 44.5,
      options: [
        { label: "A", text: "How are you?" },
        { label: "B", text: "See you." },
        { label: "C", text: "It’s nice to meet you, too." }
      ],
      answer: "C"
    },
    {
      id: 6,
      script: "Six. What’s the weather like today?",
      start: 49.0,
      end: 54.0,
      options: [
        { label: "A", text: "Let’s read books at home." },
        { label: "B", text: "It’s cool and cloudy." },
        { label: "C", text: "See you later." }
      ],
      answer: "B"
    },
    {
      id: 7,
      script: "Seven. Is your mother wearing a yellow T-shirt?",
      start: 58.5,
      end: 64.5,
      options: [
        { label: "A", text: "Yes, she is." },
        { label: "B", text: "No, he isn’t." },
        { label: "C", text: "Yes, she’s wearing a yellow cap." }
      ],
      answer: "A"
    },
    {
      id: 8,
      script: "Eight. What does your sister look like?",
      start: 69.0,
      end: 74.0,
      options: [
        { label: "A", text: "She’s ten." },
        { label: "B", text: "He’s handsome." },
        { label: "C", text: "She’s tall." }
      ],
      answer: "C"
    },
    {
      id: 9,
      script: "Nine. How do you say “hi” in the afternoon?",
      start: 78.5,
      end: 84.5,
      options: [
        { label: "A", text: "It’s “Good morning.”" },
        { label: "B", text: "It’s “Good afternoon.”" },
        { label: "C", text: "It’s “Good evening.”" }
      ],
      answer: "B"
    },
    {
      id: 10,
      script: "Ten. We can fly kites in the park today. What do you think?",
      start: 88.5,
      end: 95.0,
      options: [
        { label: "A", text: "See you later." },
        { label: "B", text: "Nice to meet you, too." },
        { label: "C", text: "Sure! Let’s do it." }
      ],
      answer: "C"
    }
  ]
};