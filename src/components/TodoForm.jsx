import React, { useState } from 'react'
import {useTodo} from '../context/ToDoContext'

function TodoForm() {
    const [todo, setTodo] = useState("")

    const {addTodo} = useTodo()

    const add =(e)=>{
        e.preventDefault();
        
        if(!todo) return;
        else{
            addTodo({todo, completed: false})
            setTodo("")
        }
    }
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-[#F6F8D5] py-1.5 text-black"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />

            <button type="submit" className="rounded-r-lg px-3 py-1 bg-[#4F959D] text-white shrink-0 cursor-pointer">
                Add
            </button>
        </form>
    );
}

export default TodoForm
