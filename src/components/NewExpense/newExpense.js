import "./newExpense.css";
import ExpenseForm from "./expenseFrom";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing]=useState(false)
const saveExpenseDataHandler =(enteredExpenseData )=>{
    const expenseData ={
        ...enteredExpenseData,
        id: Math.random().toString()
    }
  
    props.onAddExpense(expenseData) 
   setIsEditing(false)
}

const startEditingHandler=()=>{
  setIsEditing(true)
}
const stopEditingHandler=()=>{
  setIsEditing(false)
}
// console.log(props.expenseData);

// if(props.expenseData){
//   return <div className='new-expense'>
//   <button type='submit' >Add New Expense</button>
// </div>
// }


  return (
    <div className="new-expense">
    {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
    {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );

};
export default NewExpense;
