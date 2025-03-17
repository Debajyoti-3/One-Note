import {useContext, createContext} from 'react'

export const ToDocontext = createContext({
    todos:[
        {
        id:1,
        todo: "todo msg",
        completed: false
    },{},{}
],
    addTodo: (todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}
});

export const useTodo = ()=>{
    return useContext(ToDocontext);
}

export const ToDoprovider = ToDocontext.Provider