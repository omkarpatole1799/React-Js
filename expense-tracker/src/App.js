import ExpenseComp from './components/Expenses/ExpenseComp';
import NewExpense from './components/NewExpense/NewExpense';
function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Food',
      date: new Date(23, 2, 23),
      amount: 44
    },
    {
      id: 'e2',
      title: 'Grocery',
      date: new Date(23, 2, 23),
      amount: 33
    },
    {
      id: 'e3',
      title: 'Bike',
      date: new Date(23, 2, 23),
      amount: 54
    }, {
      id: 'e4',
      title: 'Cash',
      date: new Date(23, 2, 23),
      amount: 11
    }
  ]

  const allExpenseDataHandler= (expensesAll)=>{
    console.log('In app component');
    console.log(expensesAll);
  }

  return (
    <>
      <NewExpense onAllExpenseData = {allExpenseDataHandler}/>

      <ExpenseComp data={expenses} />

    </>
  );
}

export default App;
