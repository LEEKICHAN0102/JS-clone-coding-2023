const quotes = [
  {
    quote: "I can blame others. Because we're strangers!",
    author: "Ralo",
  },
  {
    quote: "Are you uncomfortable? If you're uncomfortable, fix your posture.",
    author: "Ralo",
  },
  {
    quote: "The fact that I like someone can hurt that person...",
    author: "Ralo",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
