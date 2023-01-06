import React from "react";
import {useState, useEffect} from "react";

import {nanoid} from "nanoid";

import "./TodoList.css";
import HomeButton from "../../components/HomeButton.js";
import Todo from "./Todo.js";

function TodoList() {
    const [todos, setTodos] = useState(() => {return JSON.parse(localStorage.getItem("50projects-todos")) || []})
    const [inputValue, setInputValue] = useState("");

    //save todos to localStorage
    useEffect(() => {
            localStorage.setItem("50projects-todos", JSON.stringify(todos)
            );
    }, [todos])
    
    //working
    function addTodo(e) {
        e.preventDefault();

        const newTodo = {
            id: nanoid(),
            text: inputValue,
            isChecked: false
        }
        
        if(inputValue !== "") {
            setTodos([...todos, newTodo])
            setInputValue("");
        }
    }
    //console.log(todos)
    
    //working
    function handleDeleteTodo(e, id) {
        //right click would normally bring up context menu
        e.preventDefault()

        console.log("delete clicked")
        const newTodos = todos.filter((todo) => todo.id !== id)
        setTodos(newTodos)
    }
    
    //working
    function handleCrossed(id) {
        let updatedTodos = todos.map((todo) => {
            if(todo.id === id) {
                todo.isChecked = !todo.isChecked
            }
            return todo
        })
        setTodos(updatedTodos)
        console.log("changed isChecked")
    }
    
    
    return (
       <div className="todo-container">
            <h1 className="todo-h1">todos</h1>

            <form id="form" className="todo-form" onSubmit={(e) => addTodo(e)}>
                <input type="text" className="todo-input" id="input" placeholder="Enter your todo..." spellCheck="false"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />

                <ul className="todo-todos" id="todos">
                    {
                        todos ? 
                        todos.map((todo) => {
                        return <Todo 
                        key={todo.id}
                        id={todo.id}
                        todoText={todo.text}
                        isCrossed={todo.isChecked}
                        handleDeleteTodo={handleDeleteTodo}
                        handleCrossed={() => handleCrossed(todo.id)}  
                            
                        />
                        })
                        :
                        null
                        }
                </ul>
            </form>

            <small className="todo-small">Left-click to toggle completed. <br />
            Right-click to delete todo.</small>

            <HomeButton />
       </div>
    )
}

export default TodoList;