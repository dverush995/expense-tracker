// Selectors
const expenseName = document.querySelector(".expense-name");
const expenseDate = document.querySelector(".expense-date");
const expenseAmount = document.querySelector(".expense-amount");
const addExpenseButton = document.querySelector(".add-expense-button");
const expensesEmptyRow = document.querySelector(".expenses-empty-row");

// Event Listeners
addExpenseButton.addEventListener("click", newExpenseItem);

// Functions
function newExpenseItem(e) {
  e.preventDefault();

  expensesEmptyRow.style.display = "none";

  if (expenseName.value === "" && expenseDate.value === "" && expenseAmount.value === "") return;

  const expensesTable = document.querySelector(".expenses-table");
  const expensesRow = expensesTable.insertRow(1);
  const expenseItemNameValue = expensesRow.insertCell(0);
  const expenseItemDateValue = expensesRow.insertCell(1);
  const expenseItemAmountValue = expensesRow.insertCell(2);
  const expenseItemDelete = expensesRow.insertCell(3);

  expenseItemNameValue.classList.add("expenses-table-item", "expenses-table-item-name");
  expenseItemDateValue.classList.add("expenses-table-item", "expenses-table-item-date");
  expenseItemAmountValue.classList.add("expenses-table-item", "expenses-table-item-amount");
  expenseItemDelete.classList.add("expenses-table-item", "expenses-table-item-delete");

  expenseItemNameValue.textContent = expenseName.value;
  expenseItemDateValue.textContent = expenseDate.value;
  expenseItemAmountValue.textContent = expenseAmount.value;
  expenseItemDelete.innerHTML = `<i class="uil uil-trash"></i>`;

  const trashIcon = document.querySelector(".uil-trash");
  trashIcon.addEventListener("click", () => {
    expenseItemNameValue.style.display = "none";
    expenseItemDateValue.style.display = "none";
    expenseItemAmountValue.style.display = "none";
    expenseItemDelete.style.display = "none";
  });

  expenseName.value = "";
  expenseDate.value = "";
  expenseAmount.value = "";
}
