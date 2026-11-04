/* ========================================================
 * Let's Speak - Book 3: Unit 6 ~ Unit 10 題庫資料
 * 檔名: book3_u6_u10.js
 * ======================================================== */

// 第一大題：單字聽力排序（30 個單字池）
const book3_U6_U10_Data = [
  {
    unit: "Unit 6",
    title: "Could You Repeat That?",
    items: [
      { id: "b3_u6_1", word: "seafood pizza", image: "images/b3_u6_seafoodpizza.png" },
      { id: "b3_u6_2", word: "fried chicken", image: "images/b3_u6_friedchicken.png" },
      { id: "b3_u6_3", word: "garlic bread", image: "images/b3_u6_garlicbread.png" },
      { id: "b3_u6_4", word: "Caesar salad", image: "images/b3_u6_caesarsalad.png" },
      { id: "b3_u6_5", word: "four-cheese pizza", image: "images/b3_u6_fourcheesepizza.png" },
      { id: "b3_u6_6", word: "Buffalo wings", image: "images/b3_u6_buffalowings.png" }
    ]
  },
  {
    unit: "Unit 7",
    title: "No Ball Games Allowed",
    items: [
      { id: "b3_u7_1", word: "volleyball", image: "images/b3_u7_volleyball.png" },
      { id: "b3_u7_2", word: "table tennis", image: "images/b3_u7_tabletennis.png" },
      { id: "b3_u7_3", word: "baseball", image: "images/b3_u7_baseball.png" },
      { id: "b3_u7_4", word: "badminton", image: "images/b3_u7_badminton.png" },
      { id: "b3_u7_5", word: "tag", image: "images/b3_u7_tag.png" },
      { id: "b3_u7_6", word: "hopscotch", image: "images/b3_u7_hopscotch.png" }
    ]
  },
  {
    unit: "Unit 8",
    title: "Can You Tell Me How to Get There?",
    items: [
      { id: "b3_u8_1", word: "toy shop", image: "images/b3_u8_toyshop.png" },
      { id: "b3_u8_2", word: "hospital", image: "images/b3_u8_hospital.png" },
      { id: "b3_u8_3", word: "bookstore", image: "images/b3_u8_bookstore.png" },
      { id: "b3_u8_4", word: "post office", image: "images/b3_u8_postoffice.png" },
      { id: "b3_u8_5", word: "supermarket", image: "images/b3_u8_supermarket.png" },
      { id: "b3_u8_6", word: "restaurant", image: "images/b3_u8_restaurant.png" }
    ]
  },
  {
    unit: "Unit 9",
    title: "You're Really Talented",
    items: [
      { id: "b3_u9_1", word: "artwork", image: "images/b3_u9_artwork.png" },
      { id: "b3_u9_2", word: "sketch", image: "images/b3_u9_sketch.png" },
      { id: "b3_u9_3", word: "painting", image: "images/b3_u9_painting.png" },
      { id: "b3_u9_4", word: "drawing", image: "images/b3_u9_drawing.png" },
      { id: "b3_u9_5", word: "collage", image: "images/b3_u9_collage.png" },
      { id: "b3_u9_6", word: "paper cutting", image: "images/b3_u9_papercutting.png" }
    ]
  },
  {
    unit: "Unit 10",
    title: "What Should We Do Today?",
    items: [
      { id: "b3_u10_1", word: "order some pizza", image: "images/b3_u10_orderpizza.png" },
      { id: "b3_u10_2", word: "order some churros", image: "images/b3_u10_orderchurros.png" },
      { id: "b3_u10_3", word: "grab some blankets", image: "images/b3_u10_grabblankets.png" },
      { id: "b3_u10_4", word: "grab some snacks", image: "images/b3_u10_grabsnacks.png" },
      { id: "b3_u10_5", word: "make some hot cocoa", image: "images/b3_u10_makehotcocoa.png" },
      { id: "b3_u10_6", word: "make some popcorn", image: "images/b3_u10_makepopcorn.png" }
    ]
  }
];

// 第二大題：句子回應聽力選擇（波形校準，已去除原題號）
const book3_PartB_U6_U10_Data = {
  audioFile: "audio/test8_track23.mp3",
  questions: [
    {
      id: 1,
      script: "Ah, I really wanted to play badminton.",
      start: 2.90,
      end: 6.71,
      options: [
        { label: "A", text: "Me, too. But rules are rules." },
        { label: "B", text: "Yes, I like badminton, too." },
        { label: "C", text: "Badminton is not my favorite." }
      ],
      answer: "A"
    },
    {
      id: 2,
      script: "Thanks for your help.",
      start: 12.70,
      end: 14.19,
      options: [
        { label: "A", text: "Get well soon!" },
        { label: "B", text: "Anytime." },
        { label: "C", text: "Help me, please." }
      ],
      answer: "B"
    },
    {
      id: 3,
      script: "Your model looks so cool.",
      start: 20.13,
      end: 22.93,
      options: [
        { label: "A", text: "I’m glad you like it." },
        { label: "B", text: "No problem at all." },
        { label: "C", text: "That’s not mine." }
      ],
      answer: "A"
    },
    {
      id: 4,
      script: "Let's make some popcorn first.",
      start: 28.80,
      end: 31.27,
      options: [
        { label: "A", text: "I don’t like movies." },
        { label: "B", text: "Let’s do it." },
        { label: "C", text: "Have a nice day." }
      ],
      answer: "B"
    },
    {
      id: 5,
      script: "Excuse me, could you repeat that?",
      start: 37.29,
      end: 40.11,
      options: [
        { label: "A", text: "I said I want to order some potato wedges." },
        { label: "B", text: "I’m sorry, I can’t help." },
        { label: "C", text: "I said it again." }
      ],
      answer: "A"
    },
    {
      id: 6,
      script: "It's raining outside. What should we do today?",
      start: 46.10,
      end: 50.21,
      options: [
        { label: "A", text: "Let’s play outside." },
        { label: "B", text: "How about we watch movies at home?" },
        { label: "C", text: "Thanks a lot." }
      ],
      answer: "B"
    },
    {
      id: 7,
      script: "May I take your order?",
      start: 56.23,
      end: 58.24,
      options: [
        { label: "A", text: "I can’t wait." },
        { label: "B", text: "A box of fried chicken, please." },
        { label: "C", text: "Let’s go to the shop now." }
      ],
      answer: "B"
    },
    {
      id: 8,
      script: "Great job. I really like it.",
      start: 64.18,
      end: 66.93,
      options: [
        { label: "A", text: "Thanks! I’m glad you like it!" },
        { label: "B", text: "Don’t worry." },
        { label: "C", text: "That’s no fun." }
      ],
      answer: "A"
    },
    {
      id: 9,
      script: "Oh no, we can't play ball games here.",
      start: 72.95,
      end: 76.85,
      options: [
        { label: "A", text: "Try again." },
        { label: "B", text: "Ball games are boring." },
        { label: "C", text: "Let’s play tag instead." }
      ],
      answer: "C"
    },
    {
      id: 10,
      script: "Excuse me, can you tell me how to get to the city zoo?",
      start: 82.75,
      end: 87.70,
      options: [
        { label: "A", text: "Welcome to the city." },
        { label: "B", text: "No, I don’t go to the zoo." },
        { label: "C", text: "Sure! Just walk down King Street, and you’ll see it on your left." }
      ],
      answer: "C"
    }
  ]
};