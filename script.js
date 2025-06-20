const quotes = [
    "The best way to get started is to quit talking and begin doing. – Walt Disney",
    "Don’t let yesterday take up too much of today. – Will Rogers",
    "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "Opportunities don’t happen. You create them. – Chris Grosser",
    "Do what you can with all you have, wherever you are. – Theodore Roosevelt"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomIndex];
}

// Bind the function after the DOM has loaded
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("quote-btn").addEventListener("click", generateQuote);
});
