import Header from './Header';
import Taskbar from './Taskbar';
import {  useCallback, useState } from 'react';

const App = () => {
    const [todos, setTodos] = useState<string[]>([]);


    return (
        <div className='wrapper'>
        <div className="wrapper-inner">
          <Header  addTask={useCallback((todoText:string)=>{
      setTodos(prevTodos => [...prevTodos, todoText])
         },[])} />
          <Taskbar deleteElementToMain={(idx: number) => setTodos(array => array.filter((el, index) => index !== idx))} taskArray={todos} />
        </div>
      </div>
    )
}

export default App;