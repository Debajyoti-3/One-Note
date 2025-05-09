import { useState , useEffect} from 'react'
import './App.css'
import { ToDoprovider } from './context/ToDoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'



function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (todo, id)=>{
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id 
    === id ? todo : prevTodo))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo)=> todo.id !== id))
  }

  const toggleComplete =(id)=>{
    setTodos((prev) => prev.map((prevTodo)=> 
      {prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo}))
  }



  // Local Storage implementation

 useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem("todos"));
  if (storedTodos && storedTodos.length > 0) {
    setTodos(storedTodos);
  }
}, []); // ✅ Runs only once on mount

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]); // ✅ Runs every time `todos` updates

  
  

  return (
        <ToDoprovider value={ {todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
          <div className="bg-[#205781] min-h-screen py-8">
              <div className="w-full max-w-2xl mx-auto  shadow-md rounded-lg px-4 py-3 text-white ">
                  <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                  <div className="mb-4">
                      {/* Todo form goes here */} 
                      <TodoForm/>
                  </div>
                  <div className="flex flex-wrap gap-y-3">
                      {/*Loop and Add TodoItem here */}

                      {todos.map((todo)=>(
                        <div key={todo.id}
                        className='w-full'>
                          <TodoItem todo={todo}/>
                        </div>
                      ))}
                  </div>
              </div>
          </div>
        </ToDoprovider>
  )
}

export default App
