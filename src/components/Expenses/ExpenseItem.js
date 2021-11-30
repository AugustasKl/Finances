import {useState} from "react";
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem=(props)=> {

  // const [title,setTitle]= useState(props.title)
   
    // const clickHandler=()=>{
    //   setTitle("ham")
    //   console.log(title);
    // }
    
  return (
    <li>
    <Card className='expense-item'>
   <ExpenseDate date={props.date}/>
    <div className='expense-item__description'>
      <h2>{props.title}</h2>
      <div className='expense-item__price'>${props.amounet}</div>
    </div>
  
  </Card>
  </li>
  )
}

export default ExpenseItem;