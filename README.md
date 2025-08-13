# Ecommerce App built in nextjs

## Installation

First create your own `.env` file referencing the `.env.example` file provided within the project. Then start installing and running the app in your local.

To install the app in your local

```bash
npm install
```

To run the app in your local

```bash
npm run dev
```

## Notes

\*feeding customer data to google sheet feature is controlled using "a flag" that can be turned on and off in the env variable, the default value is off. This flag is to make sure the app flow is functioning well until payment, since I have not yet tested it properly due to Google Cloud account creation that needs credit card payment data even though it's free for 1 year, and unfortunately I don't have credit card in hand.
