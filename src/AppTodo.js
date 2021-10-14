import {useState} from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from './store/todoSlice';
import NewTodoForm from './components/cypressTutorial/NewTodoForm';
import TodoList from './components/cypressTutorial/TodoList';

import './AppTodo.css';


const AppTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodo({text}));
      setText('');
    }
  }

  return (
    <div className='App'>
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
}

export default AppTodo;