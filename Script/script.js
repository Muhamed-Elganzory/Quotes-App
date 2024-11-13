var DOMElements = {
    elementContentQute: document.getElementById("content-quote"),
};

var quotesList = [
    qouteObj = {
        textQuote: "The best revenge is massive success.",
        authorQuote: "― Frank Sinatra 1",
    },
    {
        textQuote: "Do not take life too seriously. You will not get out alive.",
        authorQuote: "― Elbert Hubbard 2",
    },
    {
        textQuote: "It's not what happens to you, but how you react to it that matters.",
        authorQuote: "― Epictetus 3",
    },
    {
        textQuote: "Resentment is like drinking poison and waiting for your enemies to die.",
        authorQuote: "― Nelson Mandela 4",
    },
    {
        textQuote: "You miss 100% of the shots you don't take.",
        authorQuote: "― Wayne Gretzy 5",
    },
    {
        textQuote: "Do not take life too seriously. You will not get out alive.",
        authorQuote: "― Elbert Hubbard 6",
    },
    {
        textQuote: "Two things are infinite: the universe and human stupidity and I'm not sure about the universe.",
        authorQuote: "― Albert Einstein 7",
    },
    {
        textQuote: "A room without books is like a body without a soul.",
        authorQuote: "― Marcus Tullius Cicero 8",
    },
    {
        textQuote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        authorQuote: "― Bernard M. Baruch 9",
    },
    {
        textQuote: "You only live once, but if you do it right, once is enough.",
        authorQuote: "― Mae West 10",
    },
];

function injectQuoteElement() {
    var currentQuoteIndex = Math.floor(Math.random() * quotesList.length);

    DOMElements.elementContentQute.innerHTML =
        `
        <div class="quote-text">
            <p>"${quotesList[currentQuoteIndex].textQuote}"</p>
            <p>${quotesList[currentQuoteIndex].authorQuote}</p>
        </div>
        `;
};

function clickMe() {
    injectQuoteElement();
}
