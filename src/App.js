
import { useState, useEffect, useMemo } from 'react';
import './App.css';
// import ToDo from './components/ToDo';
import List from './components/List';
import Search from './components/Search';

function App() {
  const [search, setSearch] = useState('');

  const data = useMemo(() => {
    return ['html', 'css', 'js', 'typescript', 'NodeJS']
  }, []);

  const [items, setItems] = useState(data);

  useEffect(() => {
    setItems(data.filter(el => el.toLowerCase().includes(search.toLowerCase())))
  }, [data, search]);

  /* const todos = [
    {id: 1, title: 'wash dishes', completed: false, },
    {id: 2, title: 'make dinner', completed: true, }
  ] */
  return (
    <div className="App">
      <header className="App-header">
        {/* todos.map(item => {
          return <ToDo todo={item} />
        }) */}
        <Search value={search} onChange={(e) => setSearch(e.target.value)}>
          Find course:
        </Search>
        <List items={items} />
      </header>
    </div>
  );
}

export default App;
