import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onAddNewExpenseHandler = () => {
    setIsEditing(true);
  };

  const onCancel = () => {
    setIsEditing(false);
  };

  const onSaveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setIsEditing(false);

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={onAddNewExpenseHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <div className="new-expense">
          <ExpenseForm
            onSaveNewExpense={onSaveExpenseHandler}
            cancel={onCancel}
          />
        </div>
      )}
    </div>
  );
};

export default NewExpense;
