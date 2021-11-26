const quote = document.querySelector(".quote");
const author = document.querySelector(".authorName");
const changeButton = document.querySelector("button");

const inspirationalQuotes = [
  {
    quote: "Act as if what you do makes a difference. IT DOES.",
    author: "William James",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the COURAGE TO CONTINUE that counts.",
    author: "Winston Churchill",
  },
  {
    quote:
      "Never bend your head. Always hold it high. Look the world straight in the eye.",
    author: "Helen Keller",
  },
  {
    quote:
      "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "When you have a dream, you've got to grab it and never let go.",
    author: "Carol Burnett",
  },
  {
    quote:
      "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    author: "Jimmy Dean",
  },
  {
    quote:
      "No matter what you're going through, there's a light at the end of the tunnel.",
    author: "Demi Lovato",
  },
  {
    quote:
      "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
    author: "William James",
  },
  {
    quote:
      "Life is like riding a bicycle. To keep your BALANCE, you must keep moving.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Just don't give up trying to do what you really want to do. Where ther is love and INSPIRATION. I don't think you can do wrong.",
    author: "Ella Fitzgerald",
  },
  {
    quote: "Limit your 'ALWAYS' and your 'NEVERS'.",
    author: "Amy Poehler",
  },
  {
    quote: "Nothing is IMPOSSIBLE. The word itself says 'I/'M POSSIBLE!'",
    author: "Audrey Hepburn",
  },
  {
    quote: "You are never too old to set another goal or to dream a NEW DREAM.",
    author: "C.S. Lewis",
  },
  {
    quote: "You do not find the happy life. YOU MAKE IT.",
    author: "Camilla Eyring Kimball",
  },
  {
    quote:
      "Inspiration comes from within yourself. One has to be POSITIVE. When you're positive, good things happen.",
    author: "Deep Roy",
  },
  {
    quote:
      "Sometimes you will never know the value of a moment, until it becomes a memory.",
    author: "DR. Seuss",
  },
  {
    quote: "It isn't where you came from. It's where you're going that counts.",
    author: "Ella fitzgerald",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    quote: "Stay close to anything that makes you glad you are alive",
    author: "Hafez",
  },
  {
    quote:
      "Some people look for a beautiful place. Others make a place beautiful.",
    author: "Hazrat Inayat Khan",
  },
  {
    quote:
      "Happiness often sneaks in through a door you didn't know you left open.",
    author: "John Barrymore",
  },
  {
    quote: "Happiness is not by chance, but by choice.",
    author: "Jim Rohn",
  },
  {
    quote:
      "Never limit yourself because of others' limited imagination; never limit others because of your own limited imagination.",
    author: "Mae Jemison",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "You don't always need to plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
    author: "Mandy Hale",
  },
  {
    quote: "If I cannot do great things, I can do small things in a great way.",
    author: "Martin Luther King JR.",
  },
  {
    quote: "My mission in life is not merely to survive, but to thrive.",
    author: "Maya Angelou",
  },
  {
    quote: "You are enough just as you are.",
    author: "Meghan Markle",
  },
  {
    quote: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "People who are crazy enough to think they can change the world, are the ones who do.",
    author: "Rob Siltanen",
  },
  {
    quote:
      "For every reason it's not possible, there are hundreds of people who have faced the same circumstances and succeeded.",
    author: "Jack Canfield",
  },
  {
    quote: "We generate fears while we sit. We overcome them by action.",
    author: "Dr. Henry Link",
  },
  {
    quote: "The best preparation for tomorrow is doing your best today.",
    author: "H. Jackson Brown, Jr.",
  },
  {
    quote:
      "Start by doing what's necessary; then do what's possible and suddenly you are doing the impossible",
    author: "Francis of Assisi",
  },
  {
    quote:
      "If you believe in yourself and have dedication and pride - and never quit, you'll be a winner. The price of victory is high but so are the rewards.",
    author: "Bear Bryant",
  },
  {
    quote: "If opportunity doesn't knock, build a door",
    author: "Milton Berle",
  },
];

function changeQuote() {
  const num = Math.floor(Math.random() * inspirationalQuotes.length);
  const randomQuote = inspirationalQuotes[num];
  quote.innerHTML =
    "<i class='fas fa-quote-left'></i>" +
    randomQuote.quote +
    "<i class='fas fa-quote-right'></i>";
  author.innerHTML = "~ " + randomQuote.author;
}

changeButton.addEventListener("click", changeQuote);
