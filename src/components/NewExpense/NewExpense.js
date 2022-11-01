import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  function saveExpenseDataHandler(enteredexpenseData) {
    const expenseData = {
      ...enteredexpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  }

  function staetEditing() {
    setIsEditing(true);
  }
  function stopEditingHandler() {
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={staetEditing}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          stopEditing={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
