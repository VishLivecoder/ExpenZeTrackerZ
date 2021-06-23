import './NewExpense.css';
import './ExpenseForm.js';
import ExpenseForm from './ExpenseForm.js';
function NewExpense(props) {
    const userSubmitDataHandler =(userEnteredData) =>{
        const enterdExpense={
           
            
            ...userEnteredData,
            id: Math.random().toString(),
        };
        props.onReceiveUserData(enterdExpense);

    };

return(<div className="new-expense">
    <ExpenseForm onUserSubmitData={userSubmitDataHandler}></ExpenseForm>
</div>);
}
export default NewExpense;