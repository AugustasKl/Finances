import Chart from '../Chart/Chart'

const ExpensesChart = (props) => {
    const chartDataPoints = [
      { label: 'Jan', value: 0 },
      { label: 'Feb', value: 0 },
      { label: 'Mar', value: 0 },
      { label: 'Apr', value: 0 },
      { label: 'May', value: 0 },
      { label: 'Jun', value: 0 },
      { label: 'Jul', value: 0 },
      { label: 'Aug', value: 0 },
      { label: 'Sep', value: 0 },
      { label: 'Oct', value: 0 },
      { label: 'Nov', value: 0 },
      { label: 'Dec', value: 0 },
    ];

    props.expenses.forEach((expense)=>{

      console.log(expense.date.getMonth());

      const expenseMonth=expense.date.getMonth()
      chartDataPoints[expenseMonth].value+=expense.amount;
    })
  
    // for (const expense of props.expenses) {
    //   console.log(expense);
    //   const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    //   console.log(expenseMonth);
    //   chartDataPoints[expenseMonth].value += expense.amount;
    //   // console.log(expense.amount);
    //   console.log(chartDataPoints[expenseMonth].value);
    // }
  
    return <Chart dataPoints={chartDataPoints} />;
  };
export default ExpensesChart