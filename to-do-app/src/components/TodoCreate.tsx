import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice';
import { TodoType } from '../types/Types';

function TodoCreaate() {
  const dispatch = useDispatch();

  const [newTodo,setNewtodo]= useState<string>('');

  const handleCreateTodo = ()=>{
    if(newTodo.trim().length==0){
      alert("todo giriniz!")
      return;
    } 
    const payload:TodoType = {
      id: Math.floor(Math.random()*9999999),
      content :newTodo
    }
    dispatch(createTodo(payload))
    setNewtodo('');
  }
    

  return (
    <div className='todo-create' >
        <input 
        value={newTodo}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setNewtodo(e.target.value)}
        placeholder='Todo Giriniz...' className='todo-input' type='text' /> 

        <button onClick={handleCreateTodo} className='todo-craate-button' >Oluştur</button>

    </div>
  ) 
}

export default TodoCreaate