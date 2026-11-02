/* ========================================================
 * Let's Speak - Book 1: Unit 6 ~ Unit 10 題庫資料
 * 檔名: book1_u6_u10.js
 * ======================================================== */

// 第一大題：單字聽力排序（30 個單字池，副檔名皆為 .png）
const book1_U6_U10_Data = [
  {
    unit: "Unit 6",
    title: "I Can Play the Piano",
    items: [
      { id: "b1_u6_1", word: "piano", image: "images/b1_u6_piano.png" },
      { id: "b1_u6_2", word: "guitar", image: "images/b1_u6_guitar.png" },
      { id: "b1_u6_3", word: "violin", image: "images/b1_u6_violin.png" },
      { id: "b1_u6_4", word: "drums", image: "images/b1_u6_drums.png" },
      { id: "b1_u6_5", word: "keyboard", image: "images/b1_u6_keyboard.png" },
      { id: "b1_u6_6", word: "flute", image: "images/b1_u6_flute.png" }
    ]
  },
  {
    unit: "Unit 7",
    title: "What Do You Do After School?",
    items: [
      { id: "b1_u7_1", word: "practice the piano", image: "images/b1_u7_piano.png" },
      { id: "b1_u7_2", word: "play games", image: "images/b1_u7_games.png" },
      { id: "b1_u7_3", word: "play basketball", image: "images/b1_u7_basketball.png" },
      { id: "b1_u7_4", word: "play soccer", image: "images/b1_u7_soccer.png" },
      { id: "b1_u7_5", word: "read books", image: "images/b1_u7_books.png" },
      { id: "b1_u7_6", word: "practice the violin", image: "images/b1_u7_violin.png" }
    ]
  },
  {
    unit: "Unit 8",
    title: "I'm Making Cupcakes",
    items: [
      { id: "b1_u8_1", word: "mix the flour and milk", image: "images/b1_u8_mix.png" },
      { id: "b1_u8_2", word: "cupcake", image: "images/b1_u8_cupcake.png" },
      { id: "b1_u8_3", word: "banana bread", image: "images/b1_u8_bananabread.png" },
      { id: "b1_u8_4", word: "wash the apples", image: "images/b1_u8_washapples.png" },
      { id: "b1_u8_5", word: "cut the bananas", image: "images/b1_u8_cutbananas.png" },
      { id: "b1_u8_6", word: "apple pie", image: "images/b1_u8_applepie.png" }
    ]
  },
  {
    unit: "Unit 9",
    title: "My Cap Is Missing",
    items: [
      { id: "b1_u9_1", word: "sofa", image: "images/b1_u9_sofa.png" },
      { id: "b1_u9_2", word: "table", image: "images/b1_u9_table.png" },
      { id: "b1_u9_3", word: "under", image: "images/b1_u9_under.png" },
      { id: "b1_u9_4", word: "on", image: "images/b1_u9_on.png" },
      { id: "b1_u9_5", word: "chair", image: "images/b1_u9_chair.png" },
      { id: "b1_u9_6", word: "desk", image: "images/b1_u9_desk.png" }
    ]
  },
  {
    unit: "Unit 10",
    title: "They're Lily's",
    items: [
      { id: "b1_u10_1", word: "headphones", image: "images/b1_u10_headphones.png" },
      { id: "b1_u10_2", word: "gloves", image: "images/b1_u10_gloves.png" },
      { id: "b1_u10_3", word: "glasses", image: "images/b1_u10_glasses.png" },
      { id: "b1_u10_4", word: "money", image: "images/b1_u10_money.png" },
      { id: "b1_u10_5", word: "umbrella", image: "images/b1_u10_umbrella.png" },
      { id: "b1_u10_6", word: "scarf", image: "images/b1_u10_scarf.png" }
    ]
  }
];

// 第二大題：句子回應聽力選擇（10 題抽 5 題）
const book1_PartB_U6_U10_Data = {
  audioFile: "audio/test2_track05.mp3",
  questions: [
    { id: 1, script: "Whose gloves are these?", start: 3.10, end: 5.18, options: [{ label: "A", text: "They’re my brother’s." }, { label: "B", text: "It’s not mine." }, { label: "C", text: "It’s Lisa’s." }], answer: "A" },
    { id: 2, script: "Where is my money?", start: 11.20, end: 12.98, options: [{ label: "A", text: "Whose money is it?" }, { label: "B", text: "It’s mine." }, { label: "C", text: "It’s on the table." }], answer: "C" },
    { id: 3, script: "What’s wrong?", start: 18.80, end: 20.28, options: [{ label: "A", text: "It’s yours." }, { label: "B", text: "I can’t find my bag." }, { label: "C", text: "Please wash the apples." }], answer: "B" },
    { id: 4, script: "How can I help you?", start: 26.20, end: 27.98, options: [{ label: "A", text: "Please wash the apples." }, { label: "B", text: "Please help me." }, { label: "C", text: "Yes, please help me." }], answer: "A" },
    { id: 5, script: "Please mix the flour and milk for me.", start: 33.90, end: 37.42, options: [{ label: "A", text: "No problem." }, { label: "B", text: "See you." }, { label: "C", text: "Wonderful." }], answer: "A" },
    { id: 6, script: "Hi, Allen. What do you do after school?", start: 43.70, end: 47.76, options: [{ label: "A", text: "Let’s read books at home." }, { label: "B", text: "It’s sunny and hot." }, { label: "C", text: "I usually read books." }], answer: "C" },
    { id: 7, script: "Is he playing the piano?", start: 53.95, end: 56.48, options: [{ label: "A", text: "No, he isn’t dancing." }, { label: "B", text: "Yes, he is." }, { label: "C", text: "Yes, he’s playing games." }], answer: "B" },
    { id: 8, script: "Where is my flute?", start: 62.60, end: 64.50, options: [{ label: "A", text: "My flute is not on the table." }, { label: "B", text: "It’s on the sofa." }, { label: "C", text: "Where is it?" }], answer: "B" },
    { id: 9, script: "I’m making cupcakes. Can you help me?", start: 70.95, end: 74.20, options: [{ label: "A", text: "Sure!" }, { label: "B", text: "Well done." }, { label: "C", text: "Try again." }], answer: "A" },
    { id: 10, script: "Can you play any instruments?", start: 80.65, end: 83.20, options: [{ label: "A", text: "Sounds awesome." }, { label: "B", text: "How about you?" }, { label: "C", text: "Yes, I can play the drums." }], answer: "C" }
  ]
};