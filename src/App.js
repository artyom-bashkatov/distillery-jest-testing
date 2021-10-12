
import { useState, useEffect } from 'react';
import './App.css';
import ToDo from './components/ToDo';
import List from './components/List';
import Search from './components/Search';

function App() {
  const [search, setSearch] = useState('');
  const data = ['html', 'css', 'js', 'typescript', 'NodeJS'];

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
        <Search value={search} onChange={(e) => setSearch(e.target.value)}>
          Find course:
        </Search>
        <List items={data} />
      </header>
    </div>
  );
}

export default App;
