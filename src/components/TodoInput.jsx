import { useState } from "react"

export default function TodoInput(props){
    const {handleTodos, todoValue, setNewTodo }  = props

    return(
        <header>
            <input value={todoValue} onChange={(e)=>{
                setNewTodo(e.target.value)
            }} type="text"  placeholder="add todo"/>
            <button onClick={()=>  {
            handleTodos(todoValue) 
            setNewTodo('')}
            }>Add</button>
        </header>
    )
}