import ExpenseItem from "./ExpenseItem"
import './ExpensesList.css'

const ExpensesList =(props)=>{

    console.log(props);

    if(props.items.length=== 0){
      return <h2 className="expenses-list__fallback">No expenses found</h2>
    }

    return <ul className='expenses-list'>
        {
            props.items.map((item)=>{
        return <ExpenseItem 
               title={item.title}
               amounet={item.amount}
               date={item.date}
               key={item.id}
           />
       })
        }
    </ul>
}

export default ExpensesList