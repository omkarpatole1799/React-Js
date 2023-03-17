import logo from './logo.svg';
import './App.css';
import ExpenseComp from './components/ExpenseComp';

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

  return (
    <div>
      <ExpenseComp data={expenses} />
    </div>
  );
}

export default App;
