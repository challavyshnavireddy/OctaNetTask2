import React,{useState} from 'react';
import { TododList } from './components/TodoList';
import { FaTasks } from 'react-icons/fa';
import {useForm} from 'react-hook-form'     
import './App.css'
import   todo from  './components/images/todo.jpg'

const App = () => {
  const [task,setTask]=useState("");
const [todos,setTodos]=useState([]);
const {register,handleSubmit,formState:{errors}}=useForm();
const changeHandler= e =>{
  setTask(e.target.value)
}
const submitHandler= (e)=>{
//  e.preventDefault();
  const newTodos=[...todos,task];
  setTodos(newTodos);
  setTask("");
 
}
const deleteHandler=(indexValue)=>{
  const newTodos= todos.filter((todo,index)=>index!==indexValue);
  setTodos(newTodos)
}
  return (
<center>
<div >
        <div className='contain' style={{backgroundImage:`url(${todo})`}} >
         <div className='wrap'>
          
            <h5 className='t1 '> <FaTasks color=' ' size={50}  /> TODO management</h5>
          <form onSubmit={handleSubmit(submitHandler)}>
          {errors.task?.type==="required" && <p>*you arent jobless</p>}
            <input className='p-2 p' {...register('task',{required:true})} placeholder='enter task' type="text" name="task" value={task} onChange={changeHandler}  />
           &nbsp;&nbsp;&nbsp;
           <button className='btn btn-success' type="submit" >ADD TASK </button>
          </form>
          <TododList todolist={todos} deleteHandler={deleteHandler}/>
          </div>
          </div>
          </div>
</center>
  )
}

export default App;
