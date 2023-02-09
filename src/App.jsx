import logo from './logo.svg';
import './App.css';
import Header from './myComponents/header';
import Footer from './myComponents/footer';
import TodoItems from './myComponents/todo-items';
import Todo from './myComponents/todo';

function App() {
  let todos=[
    {
      sno:1,
      title:'Go to Market',
      desc:'Purchase Food Items in market'
    },
    {
      sno:2,
      title:'Go to School',
      desc:'Study in School'
    },
    {
      sno:3,
      title:'Go to Software House',
      desc:'Learn Coding'
    }
  ]
  return (
    <>
    <Header title="My Todos App" othermenus={true}/>
    <Footer contact="www.waqar.com"/>
    <TodoItems todo={todos }/>
    <Todo/>
    </>
  );
}

export default App;
