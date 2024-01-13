export interface CardButton {
  text: string;
  color: string;
  href: string;
  discount?: string;
}
export interface CardItem {
  title: string;
  img: string;
  textItems: string[];
  priceButton: CardButton;
  targetButton: CardButton;
}

export const cardsData = [
  {
    title: "Онлайн курс «Хлеб на закваске с нуля».",
    img: "/static/images/img-6.webp",
    textItems: [
      "👨‍🍳 Этот онлайн курс разработан мною специально <strong>для новичков!</strong> Если вы не пекли хлеб на закваскеили пробовали и у вас ничего не вышло, то здесь <strong>вы научитесь с нуля печь хлеб на основе ржаной и пшеничной закваски.</strong>",
      " ✅ Мы приготовим закваску и испечем первую булочку<strong></strong> хлеба за 7 дней!</strong",
    ],
    priceButton: {
      text: "40 000 тг",
      discount: "",
      color: "#8d5b28",
      href: "https://t.me/Tanyusha_ya",
    },
    targetButton: {
      text: "Записаться",
      color: "#228b22",
      href: "https://t.me/Tanyusha_ya",
    },
  },
  {
    title: "",
    img: "/static/images/img-9.webp",
    textItems: [],
    priceButton: {
      text: "20 000 тг",
      discount: "",
      color: "#8d5b28",
      href: "https://t.me/Tanyusha_ya",
    },
    targetButton: {
      text: "Записаться",
      color: "#228b22",
      href: "https://t.me/Tanyusha_ya",
    },
  },
  {
    title: "",
    img: "/static/images/img-4.webp",
    textItems: [],
    priceButton: {
      text: "40 000 тг",
      discount: "",
      color: "#8d5b28",
      href: "https://t.me/Tanyusha_ya",
    },
    targetButton: {
      text: "Записаться",
      color: "#228b22",
      href: "https://t.me/Tanyusha_ya",
    },
  },
  {
    title: "",
    img: "/static/images/img-8.webp",
    textItems: [],
    priceButton: {
      text: "3 000 тг",
      discount: "",
      color: "#8d5b28",
      href: "https://t.me/Tanyusha_ya",
    },
    targetButton: {
      text: "Записаться",
      color: "#228b22",
      href: "https://t.me/Tanyusha_ya",
    },
  },
  {
    title: "",
    img: "/static/images/img-5.webp",
    textItems: [],
    priceButton: {
      text: "19 900 тг",
      discount: "",
      color: "#8d5b28",
      href: "https://t.me/Tanyusha_ya",
    },
    targetButton: {
      text: "Записаться",
      color: "#228b22",
      href: "https://t.me/Tanyusha_ya",
    },
  },
];
