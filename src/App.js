import React, { useEffect, useState } from "react";

import {FaEdit, FaPenAlt,FaPlus, FaTrash} from "react-icons/fa";
function App() {
  const[todo,setTodo] = useState("")
  const[todos,setTodos] = useState([])
  const[toggle,setToggle] =useState(false)
  const [updateItem,setUpdateItem] = useState(null)
  const handleChange= (e)=>{
    setTodo(e.target.value)
  
  }
  
 const addTodos = () => {
  // Trim the input to remove leading/trailing whitespaces
  const trimmedTodo = todo.trim();
  
  if (trimmedTodo) {
    const newItem = {
      id: new Date().getTime().toString(),
      text: trimmedTodo,
    };

    setTodos([...todos, newItem]);
    
    setTodo(""); // Clear the input field explicitly
  }
  else if(!toggle && todo){
    setTodos(
      todos.map((item)=>{
        if( item.id === updateItem){
        return  {...item, text:todo}
      }
        return item;  
      }
      )
    )
    setTodo("")
    setToggle(false)

  }
   else {
    // Handle the case when the input is empty or contains only whitespace
    console.error("Todo text cannot be empty.");
    // Optionally, you can show a message to the user to indicate the error.
    // You could set an error state and display the error message in the UI.
  }
};

const updateTodos = (index) =>{
  const editText = [...todos].find(item=> item.id ===index);
  // console.log(editText)
  setTodo(editText.text)
  setToggle(true)
  setUpdateItem(index)
}

  const deleteTodo = (index)=>{
    if(todos){
   const afterDeleted= [...todos].filter((todo)=> index !==todo.id)
    setTodos(afterDeleted)
    }else alert('no Todos found ')
  }
  return (
    <div className="TodoContainer max-w-[800px] mx-auto border-4 rounded-sm p-2">
        <div className="table-head py-[20px] px-3 bg-teal-600 ">
          <h1 className="text-md text-3xl text-white font-bold text-center">Todo App</h1>
        </div>  
        <div className="body-part">
        <div className="input-bar my-3 flex w-full items-center gap-4 justify-between">
            <input onChange={handleChange} value={todo} type="text" className="w-full text-slate-400 text-lg border-2 px-2 py-1"  placeholder="Add todos here..."/>
          { toggle ? <button onClick={addTodos} className="w-fit text-teal-600 border-2 px-3 py-2" > <FaEdit/>  </button> : <button onClick={addTodos} className="w-fit text-yellow-600 border-2 px-3 py-2" > <FaPlus/>  </button>}
          </div>
          <div className="todo-items">
            <h1 className="uppercase text-center bg-teal-500 px-3 py-1 font-semibold">items list</h1>
            {
            todos.map((item) =>{
                return(
              <div key={item.id} className="list-of-todos w-full flex border-2 px-3 py-2 my-2 shadow-md items-center justify-between">
                <div className="text-base font-semibold text-teal-500 ">
                { item.text} 
                </div>

                <div className="buttons flex items-center gap-3">
                <button onClick={()=>updateTodos(item.id)} className="edit-item text-xl text-gray-500 hover:text-green-500"><FaPenAlt/></button>
                <button onClick={()=>deleteTodo(item.id)} className="delete-item text-xl text-gray-500 hover:text-red-600"><FaTrash/></button>
                </div>
              </div>
              )
              })}
       
          <div className="todo-count">
              Total Todos : {todos.length}
          </div>
        </div>
    </div>
    </div>
  );
}

export default App;
