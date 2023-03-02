import React, { useState } from 'react';
import './App.css';
import {FaRegTrashAlt} from 'react-icons/fa';

function App() {
  const [array, setArray] = useState([]);
  const [event, setEvent] = useState("");
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(array.length){
      setArray([...array, {event, id:array.length +1}]);
    }else{
      setArray([{event, id:1}]);
    }
    setEvent("");
  };
  const handleDelete = (id) =>{
    const filtered = array.filter((pro) => pro.id !== id);
    setArray(filtered);
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <input className='input' 
               placeholder="Day's Events" 
               onChange={(e)=>setEvent(e.target.value)} 
               value={event}
               autoFocus/>
        <button type='submit'
                className='btn'>ADD</button>
      </form>
    
      {array.map((item,i) => (
        <div key={i}
             className='list'>
          <span className='events'>{item.event}</span> 
            {/* <button onClick={() => handleDelete(item.id)}>Delete</button> */}
          <FaRegTrashAlt onClick={() => handleDelete(item.id)}
                         className='delete-icon'/>  
        </div>
      ))}
    </div>
  );
}

export default App;
