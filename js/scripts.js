var quotes = [
    "Skim milk is water that\’s lying about being milk.",
    "Frozen yogurt, you are the celery of desserts. Be ice cream, or be nothing.",
    "Fishing is like yoga, except you still get to kill something.",
    "When I eat, it is the food that is scared.",
    "Don\’t start chasing applause and acclaim. That way lies madness.",
    "If there were more food and fewer people, this would be a perfect party.",
    "Any dog under 50 pounds is a cat, and cats are useless.",
    "I regret nothing. The end.",
    "Luck is a concept created by the weak to explain their failures.",
    "Clear alcohols are for rich women on diets."
]
function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}