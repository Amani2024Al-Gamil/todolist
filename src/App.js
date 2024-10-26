import React, { useRef, useState } from 'react';
import './App.css';




function App() {
  const[x , setx] = useState([])
  const inputRef = useRef()
  const add = ()=>{
    const value = inputRef.current.value
    const newData = {completed:false,value}
   
    setx([...x,newData])
    inputRef.current.value = ''

  }
  const itemDone =(index) =>{
    const newx =[...x]
    newx[index].completed = ! newx[index].completed
    setx(newx)

  }
  const toDelete =(index)=>{
    const newx=[...x]
    newx.splice(index,1)
    setx(newx)
  }
  return (
    <div className="App">
    <h2> to do list</h2>
    <ul>
      {x.map(({value,completed},index)=>{
        return<div className='div10'>
        <li className={completed ? 'difstyle' : ""} onClick={() => itemDone(index)}>{value}</li>
        <span onClick={()=>toDelete(index)}>x</span>
        </div>
      })}

    </ul>
    <input ref={inputRef} placeholder='enter your task ......'/>
    <button onClick={add}>Add</button>
    
   
  </div>
   
  );
}

export default App;
