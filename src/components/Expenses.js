import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';
import ExpensesFilter from './UserForms/ExpenseFilter';
import { useState } from 'react';



function Expenses(props) {

  const [yearSelected,setyearSelected]= useState('');
  
const onUserSelectDiffYearHandler =(userEnteredYear) =>{
  
  console.log("In Expenses.js");
  setyearSelected(userEnteredYear);



}
const filtered_list={


};

  return (
    <div>
      
    
    <Card className="expenses">
    <ExpensesFilter onUserSelectYear={onUserSelectDiffYearHandler}></ExpensesFilter>

     {props.items.filter(expense1 => expense1.date.getFullYear() == yearSelected ).map((expense1) =>( <ExpenseItem title={expense1.title} amount={expense1.amount} date={expense1.date} />))};
   </Card>
    </div>
  );
}

export default Expenses;
