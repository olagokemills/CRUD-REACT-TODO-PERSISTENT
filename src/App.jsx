import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

 const [todos, setTodos] = useState([])
 const [todoValue, setNewTodo] = useState()

 function persistData(newList){
  localStorage.setItem('todos',JSON.stringify({todos:newList}))
 }
 function handleTodos(newTodo){
   const newTodoList = [...todos,newTodo]
   persistData(newTodoList)
   setTodos(newTodoList)
 }
 function handleDelete(index){
  const newTodoList = todos.filter((todo, todoIndex)=>{
    return todoIndex !== index
  })
  persistData(newTodoList)
  setTodos(newTodoList)
 }
 function handleEdit(index){
  const valueToEdit =  todos[index]
  console.log(valueToEdit)
  
  setNewTodo(valueToEdit)
  handleDelete(index)
 }
 useEffect(()=>{
  if(!localStorage){
    return
  }
  let localTodos = localStorage.getItem('todos')
  if(!localTodos){
    return
  }
  console.log(localTodos)
  localTodos = JSON.parse(localTodos).todos
  setTodos(localTodos)
 },[])
  return (
    <>
      <TodoInput todoValue={todoValue} setNewTodo={setNewTodo} handleTodos={handleTodos}/>
      <TodoList handleDelete={handleDelete} handleEdit={handleEdit} todos={todos}/>
    </>
  )
}

export default App
