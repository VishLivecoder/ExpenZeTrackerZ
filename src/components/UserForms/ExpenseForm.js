
import { useState } from 'react';
import './ExpenseForm.css';
function ExpenseForm(props) {

    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
        
    }
    function amountChangedHandler(event) {
        setEnteredAmount(event.target.value);
        
    }
    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
        
    }
    const submitHandler= (event) => {
        event.preventDefault();
        const expenseData={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        props.onUserSubmitData(expenseData);
        
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
        


    };

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangedHandler}/>

                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">SUBMIT</button>
                </div>
            </div>

        </form>

    );
}

export default  ExpenseForm;