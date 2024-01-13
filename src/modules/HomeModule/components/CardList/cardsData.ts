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
      "✅ Мы приготовим закваску и испечем первую булочку<strong></strong> хлеба за 7 дней!</strong",
      "✅ Курс состоит из коротких и понятных видео без воды, а также текстовое сопровождение со всей рецептурой и <strong>точной граммовкой.</strong>",
      "✅ Разберем инвентарь пекаря, обязательно <strong>иметь духовку и кухонные весы.</strong>",
      "✅ Мы выведем закваску <strong>с нуля и самостоятельно</strong>, научимся поддерживать активную закваску в холодильнике - это отличный вариант для тех, кто выпекает хлеб не часто.",
      "✅ Рассмотрим <strong>особенности</strong> ржаной закваски и чем она отличается от пшеничной, а так же <strong>чем хлеб на закваске отличается</strong> от того, что продаются в обычных супермаркетах.",
      "✅ <strong>Поддержка и помощь</strong> на всех этапах курса, я доведу <strong>каждого</strong> с нуля до готовой булочки хлеба!",
      "✅ Мои консультации и разбор ошибок первые два месяца со дня покупки курса 🙌",
      "✅ Доступ ко всей информации - <strong>НАВСЕГДА</strong>, вы сможете начать проходить курс <strong>в любое удобное для вас время.</strong>",
      "✅ <strong style='color: forestgreen'>Бонус — тостовый хлеб на закваске для сендвичей!</strong>",
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
