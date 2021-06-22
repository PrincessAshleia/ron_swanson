var quotes = [
    "One person\'s annoying is another person\'s inspiring and heroic.",
    "There is nothing we cannot do if we work hard, never sleep, and shirk all other responsibilities our lives.",
    "I am big enough to admit that I am often inspired by myself.",
    "Hoes before bros. Uteruses before duderuses. Ovaries before brovaries.",
    "Positive is always better than negative.",
    "Math is worthless in real life."
]
function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}