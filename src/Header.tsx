import { FormEvent } from 'react';
import './Header.css';
import {useState} from 'react';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Header( {addTask} : {addTask: any} ) {

  const [text, setText] = useState('');

  const handleUpdateText = (text : string ) => {
    setText(text);
  }

  const handleSubmit = (e : FormEvent) => {
    e.preventDefault();
    setText('');

    addTask(text);

  }

  return (
    <header className='header-wrapper'>
      <h1>Todo List on React && TypeScript!</h1>
      <form className='header-form' action="">
        <input 
          type="text" 
          placeholder='Type your task here'
          value = {text}
          onChange={(e) => handleUpdateText(e.target.value)}
           />
        <button onClick={handleSubmit} type='submit'>Add Task</button>
      </form>
    </header>
  )
}

export default Header;