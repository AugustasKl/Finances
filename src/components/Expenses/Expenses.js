import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import Card from "../UI/Card"
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'


const Expenses = (props)=>{
  

  const[year,setYear]=useState('2019')

  const filterChangeHandler=(enteredYearData)=>{
    setYear(enteredYearData);
    // console.log(year);
  }

  const filteredExpenses = props.items.filter(item=>{
    return item.date.getFullYear().toString()===year
  })
  
  

  //filteredExpenses.map...
      return(
        <div>
        <Card className='expenses'>
        <ExpensesFilter selected={year} onSaveSelectYear={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
  
        {/* {props.items.filter((item)=>(item.date.getFullYear()==year)).map((item)=>{
         return <ExpenseItem 
                title={item.title}
                amounet={item.amount}
                date={item.date}
                key={item.id}
            />
        })}  */}
            {/* <ExpenseItem 
                title={props.items[0].title}
                amounet={props.items[0].amount}
                date={props.items[0].date}
            />
             <ExpenseItem 
                title={props.items[1].title}
                amounet={props.items[1].amount}
                date={props.items[1].date}
            />
             <ExpenseItem 
                title={props.items[2].title}
                amounet={props.items[2].amount}
                date={props.items[2].date}
            />
              <ExpenseItem 
                title={props.items[3].title}
                amounet={props.items[3].amount}
                date={props.items[3].date}
            /> */}
        </Card>
    </div>
      )

}
export default Expenses