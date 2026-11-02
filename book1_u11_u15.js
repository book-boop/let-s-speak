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
    { id: 1, script: "How do you spell your name?", start: 2.60, end: 5.5, options: [{ label: "A", text: "I’m Ruby." }, { label: "B", text: "It’s J-E-N-N-Y." }, { label: "C", text: "It’s Lisa." }], answer: "B" },
    { id: 2, script: "Hey there, I’m Allen. What’s your name?", start: 11.60, end: 15.6, options: [{ label: "A", text: "Hi, Allen. I’m Kelly!" }, { label: "B", text: "Nice to meet you." }, { label: "C", text: "Welcome to our school." }], answer: "A" },
    { id: 3, script: "Eric, this is my mother.", start: 21.60, end: 23.9, options: [{ label: "A", text: "It’s E-R-I-C." }, { label: "B", text: "Hello, Mr. Smith." }, { label: "C", text: "Hi, nice to meet you, Mrs. Smith." }], answer: "C" },
    { id: 4, script: "How old is your brother?", start: 30.15, end: 32.3, options: [{ label: "A", text: "He’s fifteen years old." }, { label: "B", text: "He has short hair." }, { label: "C", text: "He is tall." }], answer: "A" },
    { id: 5, script: "Nice to meet you. Welcome to our school.", start: 38.15, end: 41.8, options: [{ label: "A", text: "How are you?" }, { label: "B", text: "See you." }, { label: "C", text: "It’s nice to meet you, too." }], answer: "C" },
    { id: 6, script: "What’s the weather like today?", start: 47.85, end: 50.5, options: [{ label: "A", text: "Let’s read books at home." }, { label: "B", text: "It’s cool and cloudy." }, { label: "C", text: "See you later." }], answer: "B" },
    { id: 7, script: "Is your mother wearing a yellow T-shirt?", start: 56.60, end: 60.1, options: [{ label: "A", text: "Yes, she is." }, { label: "B", text: "No, he isn’t." }, { label: "C", text: "Yes, she’s wearing a yellow cap." }], answer: "A" },
    { id: 8, script: "What does your sister look like?", start: 66.00, end: 68.5, options: [{ label: "A", text: "She’s ten." }, { label: "B", text: "He’s handsome." }, { label: "C", text: "She’s tall." }], answer: "C" },
    { id: 9, script: "How do you say “hi” in the afternoon?", start: 74.60, end: 78.6, options: [{ label: "A", text: "It’s “Good morning.”" }, { label: "B", text: "It’s “Good afternoon.”" }, { label: "C", text: "It’s “Good evening.”" }], answer: "B" },
    { id: 10, script: "We can fly kites in the park today. What do you think?", start: 84.50, end: 89.4, options: [{ label: "A", text: "See you later." }, { label: "B", text: "Nice to meet you, too." }, { label: "C", text: "Sure! Let’s do it." }], answer: "C" }
  ]
};