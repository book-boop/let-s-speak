/* ========================================================
 * Let's Speak - Book 2: Unit 1 ~ Unit 5 題庫資料
 * 檔名: book2_u1_u5.js
 * ======================================================== */

// 第一大題：單字聽力排序（30 個單字池）
const book2_U1_U5_Data = [
  {
    unit: "Unit 1",
    title: "Hi, Lily! What's Up?",
    items: [
      { id: "b2_u1_1", word: "ice cream", image: "images/b2_u1_icecream.png" },
      { id: "b2_u1_2", word: "doughnuts", image: "images/b2_u1_doughnuts.png" },
      { id: "b2_u1_3", word: "smoothies", image: "images/b2_u1_smoothies.png" },
      { id: "b2_u1_4", word: "Frisbee", image: "images/b2_u1_frisbee.png" },
      { id: "b2_u1_5", word: "dodgeball", image: "images/b2_u1_dodgeball.png" },
      { id: "b2_u1_6", word: "hide-and-seek", image: "images/b2_u1_hideandseek.png" }
    ]
  },
  {
    unit: "Unit 2",
    title: "It's on Saturday!",
    items: [
      { id: "b2_u2_1", word: "Monday", image: "images/b2_u2_monday.png" },
      { id: "b2_u2_2", word: "Tuesday", image: "images/b2_u2_tuesday.png" },
      { id: "b2_u2_3", word: "Wednesday", image: "images/b2_u2_wednesday.png" },
      { id: "b2_u2_4", word: "Thursday", image: "images/b2_u2_thursday.png" },
      { id: "b2_u2_5", word: "Friday", image: "images/b2_u2_friday.png" },
      { id: "b2_u2_6", word: "Saturday", image: "images/b2_u2_saturday.png" }
    ]
  },
  {
    unit: "Unit 3",
    title: "Thank You for the Gift",
    items: [
      { id: "b2_u3_1", word: "comic book", image: "images/b2_u3_comicbook.png" },
      { id: "b2_u3_2", word: "robot", image: "images/b2_u3_robot.png" },
      { id: "b2_u3_3", word: "doll", image: "images/b2_u3_doll.png" },
      { id: "b2_u3_4", word: "backpack", image: "images/b2_u3_backpack.png" },
      { id: "b2_u3_5", word: "toy car", image: "images/b2_u3_toycar.png" },
      { id: "b2_u3_6", word: "puzzle", image: "images/b2_u3_puzzle.png" }
    ]
  },
  {
    unit: "Unit 4",
    title: "Cool! I'd Love To!",
    items: [
      { id: "b2_u4_1", word: "video game night", image: "images/b2_u4_videogame.png" },
      { id: "b2_u4_2", word: "movie night", image: "images/b2_u4_movienight.png" },
      { id: "b2_u4_3", word: "picnic", image: "images/b2_u4_picnic.png" },
      { id: "b2_u4_4", word: "barbecue", image: "images/b2_u4_barbecue.png" },
      { id: "b2_u4_5", word: "potluck", image: "images/b2_u4_potluck.png" },
      { id: "b2_u4_6", word: "drinks", image: "images/b2_u4_drinks.png" }
    ]
  },
  {
    unit: "Unit 5",
    title: "Maybe Next Time",
    items: [
      { id: "b2_u5_1", word: "mall", image: "images/b2_u5_mall.png" },
      { id: "b2_u5_2", word: "museum", image: "images/b2_u5_museum.png" },
      { id: "b2_u5_3", word: "beach", image: "images/b2_u5_beach.png" },
      { id: "b2_u5_4", word: "toy shop", image: "images/b2_u5_toyshop.png" },
      { id: "b2_u5_5", word: "clean my room", image: "images/b2_u5_cleanroom.png" },
      { id: "b2_u5_6", word: "study for a test", image: "images/b2_u5_study.png" }
    ]
  }
];

// 第二大題：句子回應聽力選擇（已略過原錄音題號）
const book2_PartB_U1_U5_Data = {
  audioFile: "audio/test4_track11.mp3",
  questions: [
    {
      id: 1,
      script: "How much is the toy car?",
      start: 2.66,
      end: 5.30,
      options: [
        { label: "A", text: "It’s five years old." },
        { label: "B", text: "It’s 200 dollars." },
        { label: "C", text: "It’s ten o’clock." }
      ],
      answer: "B"
    },
    {
      id: 2,
      script: "Thank you for the birthday gift.",
      start: 11.19,
      end: 13.81,
      options: [
        { label: "A", text: "You’re welcome!" },
        { label: "B", text: "Nice to meet you." },
        { label: "C", text: "Welcome to party!" }
      ],
      answer: "A"
    },
    {
      id: 3,
      script: "What time should I come over?",
      start: 19.77,
      end: 21.85,
      options: [
        { label: "A", text: "On my birthday." },
        { label: "B", text: "On Friday." },
        { label: "C", text: "Around 4 PM." }
      ],
      answer: "C"
    },
    {
      id: 4,
      script: "We’re having a movie night at my place this Saturday. Are you coming?",
      start: 27.72,
      end: 33.33,
      options: [
        { label: "A", text: "What about yours?" },
        { label: "B", text: "Great! I’d love to." },
        { label: "C", text: "I’m glad you are happy." }
      ],
      answer: "B"
    },
    {
      id: 5,
      script: "When is your birthday?",
      start: 39.17,
      end: 41.12,
      options: [
        { label: "A", text: "It’s on Tuesday, July 13th." },
        { label: "B", text: "Great! When is it?" },
        { label: "C", text: "Thank you for the gift." }
      ],
      answer: "A"
    },
    {
      id: 6,
      script: "Do you want to play dodgeball later?",
      start: 47.29,
      end: 50.57,
      options: [
        { label: "A", text: "Let’s read books at home." },
        { label: "B", text: "Sure! I love ice cream." },
        { label: "C", text: "Sure, sounds fun." }
      ],
      answer: "C"
    },
    {
      id: 7,
      script: "Thanks for inviting me. I’d love to, but I have to clean my room.",
      start: 56.76,
      end: 62.10,
      options: [
        { label: "A", text: "Have fun at the party." },
        { label: "B", text: "No, I’m not." },
        { label: "C", text: "No problem! Maybe next time." }
      ],
      answer: "C"
    },
    {
      id: 8,
      script: "What time does it start?",
      start: 68.17,
      end: 70.20,
      options: [
        { label: "A", text: "On Sunday morning." },
        { label: "B", text: "Let’s meet at the museum." },
        { label: "C", text: "Around 9 AM." }
      ],
      answer: "C"
    },
    {
      id: 9,
      script: "Can you bring some chips for the video game night?",
      start: 76.19,
      end: 80.04,
      options: [
        { label: "A", text: "No problem." },
        { label: "B", text: "Sure, I’ll bring some drinks." },
        { label: "C", text: "Have a good night!" }
      ],
      answer: "A"
    },
    {
      id: 10,
      script: "Where should we meet later?",
      start: 86.16,
      end: 88.70,
      options: [
        { label: "A", text: "At 11 AM." },
        { label: "B", text: "See you later." },
        { label: "C", text: "Let’s meet at the snack shop." }
      ],
      answer: "C"
    }
  ]
};