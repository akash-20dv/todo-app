import { Fragment } from "react";
import {FaPenAlt, FaTrash} from "react-icons/fa";
const TodoList = ({ todos,setTodos }) => {
    return ( <Fragment>
        <div className="todo-items">
          <h1 className="uppercase text-center bg-teal-500 px-3 py-1 font-semibold">items list</h1>
          {todos ?
          todos.map((todo) =>{

          <div className="list-of-todos w-full flex border-2 px-3 py-2 my-2 shadow-md items-center justify-between">
            <div className="text-base font-semibold text-teal-500 ">
             { todo}
            </div>

            <div className="buttons flex items-center gap-3">
            <button className="edit-item text-xl text-gray-500 hover:text-green-500"><FaPenAlt/></button>
            <button className="delete-item text-xl text-gray-500 hover:text-red-600"><FaTrash/></button>
            </div>
          </div>
          })
        :
        <h1>No Todos Found</h1>}
        </div>  
    </Fragment> );
}
 
export default TodoList;