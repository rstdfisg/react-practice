import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Todo></Todo>
    </div>
  );
}


type todoitem = {
  id: string;
  content: string;
  status: string;
};

function Todo() {
  const [todo, settodo] = useState(Array<todoitem>());
  const [input, setinput] = useState('');

  return (
    <>
      <div>
        Todo
        <input
          value={input}
          onChange={(e) => setinput(e.target.value)}
        ></input>
        <button onClick={() => console.log('123')} > add item</button>
      </div>
    </>
  );
}





export default App;
