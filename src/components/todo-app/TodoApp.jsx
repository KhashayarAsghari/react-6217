import { useState } from "react"
import TodoItem from "./TodoItem"

export default function TodoApp() {
    const [todos, setTodos] = useState([])
    const [inputVal, setInputVal] = useState("")

    function handleAddTodo() {
        const newTodo = {
            id: Math.floor(Math.random() * 100000),
            title: inputVal,
            is_done: false
        }

        setTodos([...todos, newTodo])
    }

    return (
        <>
            <input value={inputVal} onChange={(evt) => setInputVal(evt.target.value)} type="text" />
            <button onClick={handleAddTodo}>add todo</button>

            <ul>
                {todos.map(todo => <TodoItem key={todo.id} title={todo.title} />)}
            </ul>
        </>
    )
}