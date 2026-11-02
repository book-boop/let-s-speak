/* ========================================================
 * Let's Speak - Book 1: Unit 11 ~ Unit 15 題庫資料
 * 檔名: book1_u11_u15.js
 * ======================================================== */

// 第一大題：單字聽力排序（30 個單字池）
const book1_U11_U15_Data = [
  {
    unit: "Unit 11",
    title: "I Like Tomatoes",
    items: [
      { id: "b1_u11_1", word: "cucumber", image: "images/b1_u11_cucumber.png" },
      { id: "b1_u11_2", word: "carrot", image: "images/b1_u11_carrot.png" },
      { id: "b1_u11_3", word: "tomato", image: "images/b1_u11_tomato.png" },
      { id: "b1_u11_4", word: "mushroom", image: "images/b1_u11_mushroom.png" },
      { id: "b1_u11_5", word: "eggplant", image: "images/b1_u11_eggplant.png" },
      { id: "b1_u11_6", word: "corn", image: "images/b1_u11_corn.png" }
    ]
  },
  {
    unit: "Unit 12",
    title: "I Like Oranges More",
    items: [
      { id: "b1_u12_1", word: "strawberry", image: "images/b1_u12_strawberry.png" },
      { id: "b1_u12_2", word: "apple", image: "images/b1_u12_apple.png" },
      { id: "b1_u12_3", word: "banana", image: "images/b1_u12_banana.png" },
      { id: "b1_u12_4", word: "peach", image: "images/b1_u12_peach.png" },
      { id: "b1_u12_5", word: "grape", image: "images/b1_u12_grape.png" },
      { id: "b1_u12_6", word: "orange", image: "images/b1_u12_orange.png" }
    ]
  },
  {
    unit: "Unit 13",
    title: "I Want French Fries",
    items: [
      { id: "b1_u13_1", word: "hamburger", image: "images/b1_u13_hamburger.png" },
      { id: "b1_u13_2", word: "apple pie", image: "images/b1_u13_applepie.png" },
      { id: "b1_u13_3", word: "ice cream cone", image: "images/b1_u13_icecream.png" },
      { id: "b1_u13_4", word: "orange juice", image: "images/b1_u13_orangejuice.png" },
      { id: "b1_u13_5", word: "lemon tea", image: "images/b1_u13_lemontea.png" },
      { id: "b1_u13_6", word: "French fries", image: "images/b1_u13_frenchfries.png" }
    ]
  },
  {
    unit: "Unit 14",
    title: "It's 80 Dollars",
    items: [
      { id: "b1_u14_1", word: "pencil", image: "images/b1_u14_pencil.png" },
      { id: "b1_u14_2", word: "ruler", image: "images/b1_u14_ruler.png" },
      { id: "b1_u14_3", word: "pencil box", image: "images/b1_u14_pencilbox.png" },
      { id: "b1_u14_4", word: "eraser", image: "images/b1_u14_eraser.png" },
      { id: "b1_u14_5", word: "crayon", image: "images/b1_u14_crayon.png" },
      { id: "b1_u14_6", word: "scissors", image: "images/b1_u14_scissors.png" }
    ]
  },
  {
    unit: "Unit 15",
    title: "Let's Go Shopping",
    items: [
      { id: "b1_u15_1", word: "sleeping bag", image: "images/b1_u15_sleepingbag.png" },
      { id: "b1_u15_2", word: "pillow", image: "images/b1_u15_pillow.png" },
      { id: "b1_u15_3", word: "pajamas", image: "images/b1_u15_pajamas.png" },
      { id: "b1_u15_4", word: "slippers", image: "images/b1_u15_slippers.png" },
      { id: "b1_u15_5", word: "board game", image: "images/b1_u15_boardgame.png" },
      { id: "b1_u15_6", word: "video game", image: "images/b1_u15_videogame.png" }
    ]
  }
];

// 第二大題：句子回應聽力選擇（波形校正後）
const book1_PartB_U11_U15_Data = {
  audioFile: "audio/test3_track08.mp3",
  questions: [
    { id: 1, script: "Do you like peaches?", start: 2.65, end: 4.85, options: [{ label: "A", text: "Yes, I like oranges." }, { label: "B", text: "Yes, I love them." }, { label: "C", text: "It’s not mine." }], answer: "B" },
    { id: 2, script: "Do you like tomatoes?", start: 10.93, end: 12.95, options: [{ label: "A", text: "No, I’m not a fan." }, { label: "B", text: "It’s mine." }, { label: "C", text: "They’re on the table." }], answer: "A" },
    { id: 3, script: "Which do you like better, strawberries or apples?", start: 19.02, end: 23.20, options: [{ label: "A", text: "I like bananas." }, { label: "B", text: "I don’t like grapes." }, { label: "C", text: "I prefer strawberries." }], answer: "C" },
    { id: 4, script: "What’s your favorite vegetable?", start: 29.06, end: 31.57, options: [{ label: "A", text: "I love mushrooms." }, { label: "B", text: "I love apples." }, { label: "C", text: "I don’t like them." }], answer: "A" },
    { id: 5, script: "How much is the glue?", start: 37.40, end: 39.57, options: [{ label: "A", text: "It’s 10 years old." }, { label: "B", text: "They’re 15 dollars." }, { label: "C", text: "It’s 30 dollars." }], answer: "C" },
    { id: 6, script: "May I take your order?", start: 45.64, end: 47.33, options: [{ label: "A", text: "No, how about you?" }, { label: "B", text: "Anything else?" }, { label: "C", text: "Yes, I want a hamburger." }], answer: "C" },
    { id: 7, script: "I want to have a sleepover at my house this weekend. Are you coming?", start: 53.42, end: 59.14, options: [{ label: "A", text: "Here you go." }, { label: "B", text: "Whose party is it?" }, { label: "C", text: "That sounds fun. Count me in!" }], answer: "C" },
    { id: 8, script: "I want to bring my favorite video game to the party.", start: 65.14, end: 69.68, options: [{ label: "A", text: "Are you coming?" }, { label: "B", text: "Let’s go shopping." }, { label: "C", text: "Great idea." }], answer: "C" },
    { id: 9, script: "How much are the scissors?", start: 75.94, end: 78.34, options: [{ label: "A", text: "They’re 60 dollars." }, { label: "B", text: "It’s 50 dollars." }, { label: "C", text: "Here you are." }], answer: "A" },
    { id: 10, script: "Anything to drink?", start: 84.34, end: 86.02, options: [{ label: "A", text: "Yes, a large one." }, { label: "B", text: "An apple juice, please." }, { label: "C", text: "An apple pie, please." }], answer: "B" }
  ]
};