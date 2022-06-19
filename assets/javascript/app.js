// Selectors
const expensesTrackerCardOne = document.querySelector(".expense-tracker-card");
const expensesTrackerCardTwo = document.querySelector(".expense-tracker-card-two");
const expensesTrackerCardThree = document.querySelector(".expense-tracker-card-three");
const nextCardStart = document.querySelector(".next-card-start");
const previousCard = document.querySelector(".previous-card");
const nextCard = document.querySelector(".next-card");
const previousCardLast = document.querySelector(".previous-card-last");
const expenseLog = document.querySelector(".expense-log");

// Event Listeners
nextCardStart.addEventListener("click", secondCard);
previousCard.addEventListener("click", firstCard);
nextCard.addEventListener("click", thirdCard);
previousCardLast.addEventListener("click", thirdToSecondCard);

// Functions
function firstCard() {
    expensesTrackerCardOne.classList.remove("expense-tracker-card-hidden");
    expensesTrackerCardTwo.classList.add("expense-tracker-card-hidden");
}

function secondCard() {
    expensesTrackerCardOne.classList.add("expense-tracker-card-hidden");
    expensesTrackerCardTwo.classList.remove("expense-tracker-card-hidden");
}

function thirdCard() {
    expensesTrackerCardOne.classList.add("expense-tracker-card-hidden");
    expensesTrackerCardTwo.classList.add("expense-tracker-card-hidden");
    expensesTrackerCardThree.classList.remove("expense-tracker-card-hidden");
}

function thirdToSecondCard() {
    expensesTrackerCardOne.classList.add("expense-tracker-card-hidden");
    expensesTrackerCardTwo.classList.remove("expense-tracker-card-hidden");
    expensesTrackerCardThree.classList.add("expense-tracker-card-hidden");
}