export const products = [
  {
    id: 1,
    name: "the Barista Express",
    description:
      "The best-selling, home espresso machine, with a built-in grinder",
    price: 798,
    largePrice: 998,
    image: "https://placehold.co/400x400/E0E0E0/36454F?text=Product+1",
  },
  {
    id: 2,
    name: "the Bambino",
    description: "The best value for money, standalone espresso machine",
    price: 498,
    largePrice: 598,
    image: "https://placehold.co/400x400/E0E0E0/36454F?text=Product+2",
  },
  {
    id: 3,
    name: "the Bambino Plus",
    description: "Everything in the Bambino, plus automatic milk frothing",
    price: 598,
    largePrice: 698,
    image: "https://placehold.co/400x400/E0E0E0/36454F?text=Product+3",
  },
  {
    id: 4,
    name: "the Oracle Touch",
    description:
      "Top of the line Dual Boiler performance with touch screen usability.",
    price: 3988,
    largePrice: 4888,
    image: "https://placehold.co/400x400/E0E0E0/36454F?text=Product+4",
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
    { name: "Stainless Steel", value: "#C0C0C0" },
    { name: "Black", value: "#242424" },
  ],
  longDescription: [
    "One of the world's popular and well-recommended espresso machines for home use, the Barista Express is perfect for anyone wanting to get into coffee.",
    "This semi-automatic machine balances simplicity and flexibility. With automated, low pressure pre-infusion and shot timers, you can pull espresso at just the press of a button. Hone your skills tamping, and experimenting with various beans, doses and grind sizes.",
  ],
};

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
