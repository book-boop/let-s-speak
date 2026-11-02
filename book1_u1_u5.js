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
    { id: 1, script: "Do you like peaches?", start: 2.60, end: 4.9, options: [{ label: "A", text: "Yes, I like oranges." }, { label: "B", text: "Yes, I love them." }, { label: "C", text: "It’s not mine." }], answer: "B" },
    { id: 2, script: "Do you like tomatoes?", start: 10.90, end: 13.0, options: [{ label: "A", text: "No, I’m not a fan." }, { label: "B", text: "It’s mine." }, { label: "C", text: "They’re on the table." }], answer: "A" },
    { id: 3, script: "Which do you like better, strawberries or apples?", start: 18.95, end: 23.3, options: [{ label: "A", text: "I like bananas." }, { label: "B", text: "I don’t like grapes." }, { label: "C", text: "I prefer strawberries." }], answer: "C" },
    { id: 4, script: "What’s your favorite vegetable?", start: 29.05, end: 31.6, options: [{ label: "A", text: "I love mushrooms." }, { label: "B", text: "I love apples." }, { label: "C", text: "I don’t like them." }], answer: "A" },
    { id: 5, script: "How much is the glue?", start: 37.30, end: 39.7, options: [{ label: "A", text: "It’s 10 years old." }, { label: "B", text: "They’re 15 dollars." }, { label: "C", text: "It’s 30 dollars." }], answer: "C" },
    { id: 6, script: "May I take your order?", start: 45.55, end: 47.4, options: [{ label: "A", text: "No, how about you?" }, { label: "B", text: "Anything else?" }, { label: "C", text: "Yes, I want a hamburger." }], answer: "C" },
    { id: 7, script: "I want to have a sleepover at my house this weekend. Are you coming?", start: 53.35, end: 59.2, options: [{ label: "A", text: "Here you go." }, { label: "B", text: "Whose party is it?" }, { label: "C", text: "That sounds fun. Count me in!" }], answer: "C" },
    { id: 8, script: "I want to bring my favorite video game to the party.", start: 65.05, end: 69.8, options: [{ label: "A", text: "Are you coming?" }, { label: "B", text: "Let’s go shopping." }, { label: "C", text: "Great idea." }], answer: "C" },
    { id: 9, script: "How much are the scissors?", start: 75.85, end: 78.4, options: [{ label: "A", text: "They’re 60 dollars." }, { label: "B", text: "It’s 50 dollars." }, { label: "C", text: "Here you are." }], answer: "A" },
    { id: 10, script: "Anything to drink?", start: 84.25, end: 86.2, options: [{ label: "A", text: "Yes, a large one." }, { label: "B", text: "An apple juice, please." }, { label: "C", text: "An apple pie, please." }], answer: "B" }
  ]
};