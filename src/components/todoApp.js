import React from 'react';
import { useState } from 'react';
import Todo from './todo';

export default function TodoApp(){

    const [title, setTitle] = useState();
    const [todos, setTodos] = useState([]);

    const handleChange = (event)=>{
        const value = event.target.value;
        setTitle(value);
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        };

        const temp = [...todos];
        temp.unshift(newTodo);
        setTodos(temp);

        setTitle("");
    };

    const handleUpdate = (id, value)=>{
        const temp = [...todos];
        const item = temp.find((item)=> item.id == id);
        item.title = value;
        setTodos(temp); 
    };

    const handleDelete = (id)=>{
        const temp = todos.filter(item => item.id != id);
        setTodos(temp);
        
    };

    return(
        <div className='container'>
            <form className='formTodo' onSubmit={handleSubmit}>
                <input className='inputTodo' value={title} onChange={handleChange} />
                <input className='submitTodo' type="submit" value="Create to-do" onClick={handleSubmit}/>
            </form>
            <div className='todo-container'>
                {
                    todos.map(item =>(
                        <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                    ))
                }
            </div>
        </div>
    )
}