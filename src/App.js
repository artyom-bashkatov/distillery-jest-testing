import './App.css';
import ToDo from './components/ToDo';

function App() {
  const todos = [
    {id: 1, title: 'wash dishes', completed: false, },
    {id: 2, title: 'make dinner', completed: true, }
  ]
  return (
    <div className="App">
      <header className="App-header">
        {todos.map(item => {
          return <ToDo todo={item} />
        })}
      </header>
    </div>
  );
}

export default App;
