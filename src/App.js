import Header from './components/Header';
import './App.css';
import ListTodo from './components/ListTodo';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App">
     
    <Header/>
    <AddTodo/>
    <ListTodo/>
    </div>
  );
}

export default App;
