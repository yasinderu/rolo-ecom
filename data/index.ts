import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "the Barista Express",
    shortDesc:
      "The best-selling, home espresso machine, with a built-in grinder",
    price: 798,
    oldPrice: 998,
    img: [
      "https://placehold.co/400x400/E0E0E0/36454F?text=Product+1",
      "https://placehold.co/400x400/E0E0E0/36454F?text=Product+2",
      "https://placehold.co/400x400/E0E0E0/36454F?text=Product+3",
      "https://placehold.co/400x400/E0E0E0/36454F?text=Product+4",
      "https://placehold.co/400x400/E0E0E0/36454F?text=Product+5",
    ],
    longDesc: [
      "One of the world’s popular and well-recommended espresso machines for home use, the Barista Express is perfect for anyone wanting to get into coffee.",
      "This semi-automatic machine balances simplicity and flexibility. With automated, low pressure pre-infusion and shot timers, you can pull espresso at just the press of a button. Hone your skills tamping, and experimenting with various beans, doses and grind sizes.",
      "With an in-built grinder and steam wand, this all-in-one setup is all you need is freshly roasted coffee beans and a weighing scale, to take your espresso to the next level and make cafe-level, specialty coffee at home.",
    ],
    packageDetail: [
      "54mm Portafilter, stainless steel with double spout",
      "4 Espresso Filter Baskets – 9g & 18g pressurised, 9g & 18g unpressurised",
      "Integrated, Magnetic Tamper",
      "480ml (16oz) Thermal Milk Jug",
      "Dosing Funnel",
      "Leveling Tool",
      "Water Filter",
      "Maintenance Kit – cleaning brush, Allen key, cleaning disc, steam wand pin",
      "1 Descaling Dose, and 2 Cleaning Tablets",
    ],
    colors: [
      { name: "Stainless Steel", value: "#F0F0F0" },
      { name: "Black", value: "#242424" },
    ],
  },
  {
    id: 2,
    name: "the Bambino",
    shortDesc: "The best value for money, standalone espresso machine",
    price: 498,
    img: ["https://placehold.co/400x400/E0E0E0/36454F?text=Product+2"],
    longDesc: [
      "The Breville Bambino is one of the best, entry-level espresso machines to brew café, specialty coffee from home.",
      "With its small, compact profile, the Bambino is perfect for budding enthusiasts, letting you step up and pair this with a grinder of your choice.",
      "Compared to the Bambino Plus, this has a fully manual steam wand, letting you to practice and hone your milk steaming, and impress guests with your latte art.",
    ],
    packageDetail: [
      "54mm Portafilter, with double spout",
      "4 Espresso Filter Baskets – 9g & 18g pressurised, 9g & 18g unpressurised",
      "54mm Plastic Tamper",
      "480ml (16oz) Thermal Milk Jug",
      "Maintenance Kit – cleaning disc, steam wand pin",
      "1 Descaling Dose",
    ],
    colors: [{ name: "Stainless Steel", value: "#F0F0F0" }],
  },
  {
    id: 3,
    name: "the Bambino Plus",
    shortDesc: "Everything in the Bambino, plus automatic milk frothing",
    price: 598,
    img: ["https://placehold.co/400x400/E0E0E0/36454F?text=Product+3"],
    longDesc: [
      "The Breville Bambino is already one of the best, entry-level espresso machines to brew café, specialty coffee from home.",
      "The Bambino Plus takes that even further, giving you more simplicity with automatic milk frothing, to elevate your lattes and cappuccinos.",
      "With its small, compact profile, the Bambino Plus is perfect for budding enthusiasts, letting you step up and pair this with a grinder of your choice.",
    ],
    packageDetail: [
      "54mm Portafilter, with double spout",
      "4 Espresso Filter Baskets – 9g & 18g pressurised, 9g & 18g unpressurised",
      "54mm Tamper",
      "480ml (16oz) Thermal Milk Jug",
      "Leveling Tool",
      "Maintenance Kit – cleaning disc, steam wand pin",
      "1 Descaling Dose, and 2 Cleaning Tablets",
    ],
    colors: [{ name: "Stainless Steel", value: "#F0F0F0" }],
  },
  {
    id: 4,
    name: "the Oracle Touch",
    shortDesc:
      "Top of the line Dual Boiler performance with touch screen usability.",
    price: 3988,
    img: ["https://placehold.co/400x400/E0E0E0/36454F?text=Product+4"],
    longDesc: [
      "The Oracle Touch is the pinnacle of Breville’s espresso machines.",
      "This semi-automatic machine balances simplicity and flexibility. With automated, low pressure pre-infusion and shot timers, you can pull espresso at just the press of a button. Hone your skills tamping, and experimenting with various beans, doses and grind sizes.",
      "With an in-built grinder and steam wand, this all-in-one setup is all you need is freshly roasted coffee beans and a weighing scale, to take your espresso to the next level and make cafe-level, specialty coffee at home.",
    ],
    packageDetail: [
      "58mm Portafilter, stainless steel with double spout",
      "2 Espresso Filter Baskets – 9g & 18g unpressurised",
      "Integrated, Magnetic Tamper",
      "480ml (16oz) Thermal Milk Jug",
      "Dosing Funnel",
      "Leveling Tool",
      "Knock Box",
      "Water Filter",
      "Maintenance Kit – cleaning brushes, Allen keys, cleaning disc, steam wand pin",
      "1 Descaling Dose, Steam Wand Cleaner and 2 Cleaning Tablets",
    ],
    colors: [
      { name: "Stainless Steel", value: "#F0F0F0" },
      { name: "Black", value: "#242424" },
    ],
  },
];

export const productDetailExe = {
  id: 1,
  name: "the Barista Express",
  shortDescription:
    "The best-selling, home espresso machine, with a built-in grinder",
  price: 798,
  oldPrice: 998,
  largeImage: "https://placehold.co/800x800/E0E0E0/36454F?text=Main+Product",
  thumbnails: [
    "https://placehold.co/200x200/E0E0E0/36454F?text=Thumb+1",
    "https://placehold.co/200x200/E0E0E0/36454F?text=Thumb+2",
    "https://placehold.co/200x200/E0E0E0/36454F?text=Thumb+3",
    "https://placehold.co/200x200/E0E0E0/36454F?text=Thumb+4",
    "https://placehold.co/200x200/E0E0E0/36454F?text=Thumb+5",
  ],
  colors: [
    { name: "Stainless Steel", value: "#F0F0F0" },
    { name: "Black", value: "#242424" },
  ],
  longDescription: [
    "One of the world's popular and well-recommended espresso machines for home use, the Barista Express is perfect for anyone wanting to get into coffee.",
    "This semi-automatic machine balances simplicity and flexibility. With automated, low pressure pre-infusion and shot timers, you can pull espresso at just the press of a button. Hone your skills tamping, and experimenting with various beans, doses and grind sizes.",
  ],
};

export const productThumbnails = [
  {
    id: 1,
    thumbnails: [
      "https://placehold.co/200x200/E0E0E0/36454F?text=Thumb+1",
      "https://placehold.co/200x200/E0E0E0/36454F?text=Thumb+2",
      "https://placehold.co/200x200/E0E0E0/36454F?text=Thumb+3",
      "https://placehold.co/200x200/E0E0E0/36454F?text=Thumb+4",
      "https://placehold.co/200x200/E0E0E0/36454F?text=Thumb+5",
    ],
  },
];

export const cartItems = [
  {
    id: 1,
    name: "the Barista Express",
    color: "Truffle Black",
    price: 798,
    quantity: 1,
    image: "https://placehold.co/100x100/E0E0E0/36454F?text=Item+1",
  },
  {
    id: 2,
    name: "the Barista Express",
    color: "Stainless Steel",
    price: 798,
    quantity: 1,
    image: "https://placehold.co/100x100/E0E0E0/36454F?text=Item+2",
  },
  {
    id: 3,
    name: "the Bambino",
    color: "Stainless Steel",
    price: 498,
    quantity: 2,
    image: "https://placehold.co/100x100/E0E0E0/36454F?text=Item+3",
  },
];

export const order = {
  name: "Gobi Coffee",
  product: "Cold Brew",
  price: 4.0,
  currency: "SGD",
  subtotal: 4.0,
  total: 4.0,
};
