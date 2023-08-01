import { Fragment } from "react";
import { FaPlus } from "react-icons/fa";

const AddTodo = ({ todos,addTodo,handleChange  }) => {
    return ( <Fragment>
          <div className="input-bar my-3 flex w-full items-center gap-4 justify-between">
            <input onChange={handleChange} value={todos} type="text" className="w-full text-slate-400 text-lg border-2 px-2 py-1"  placeholder="Add todos here..."/>
            <button onClick={addTodo} className="w-fit text-teal-600 border-2 px-3 py-2" > <FaPlus/>  </button>
          </div>
    </Fragment> );
}
 
export default AddTodo;