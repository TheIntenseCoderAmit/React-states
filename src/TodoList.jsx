import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample task",id:uuidv4(),isDone: false}]);

  let [newTodo, setNewTodo] = useState("");
// Adding new Task
  let addNewTask = () => {
   setTodos((prevTodos)=>{
    return[...todos, {task: newTodo,id : uuidv4(),idDone:false}]
   });
   setNewTodo("");
  };



  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  // deleting task
  let deleteTodo=(id)=>{
  setTodos( (prevTodos)=> todos.filter((prevTodos)=> prevTodos.id != id));
  
  }
// Task to uppercase
  let markAllAsDone=()=> {
setTodos( (prevtodos)=>
  
  prevtodos.map((todo)=>{

 return{...todo,

  isDone:true,

 };
})
);

  };

  let markAsDone=(id)=>{
    setTodos( (prevtodos)=>
  
      prevtodos.map((todo)=>{
        if(todo.id==id){
          return{...todo,
    
            isDone:true,
          
           };
        }else{
          return todo;
        }
    
    
    })
    );
  }

  return (
    <div>  
      <input
        type="text"
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h4>Todo List</h4> 
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>
          <span style={todo.isDone ? {textDecorationLine:"line-through" }: {}}> {todo.task}</span>
          &nbsp; &nbsp; &nbsp;
           <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
           <button onClick={()=> markAsDone(todo.id)}>Mark As Done</button>
          </li>;
        })}
      </ul>
      <br />
      <button onClick={markAllAsDone}>Mark All As Done</button>
    </div>
  );

};