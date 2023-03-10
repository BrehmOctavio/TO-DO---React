import React from 'react';
import { useState } from 'react';

export default function Todo({item, onUpdate, onDelete}){

    const [isEdit, setIsEdit] = useState();

    const FormEdit = () =>{

        const [newValue, setNewValue] = useState(item.value);

        const handleSubmit = (e)=>{
            e.preventDefault();
        };

        const handleChange = (e)=>{
            const value = e.target.value;
            setNewValue(value);
        };

        const handleClickUpdateTodo = ()=>{
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }

        return(
            <form className="todo-update-form" onSubmit={handleSubmit}>
                <input type="text" className='todo-input' onChange={handleChange} value={newValue} />
                <button className="button" onClick={handleClickUpdateTodo}>Update</button>
            </form>
        )
    };

    const TodoElement = ()=>{
        return(
            <div className='todo-info'>
                {item.title}
                <button onClick={()=> setIsEdit(true)}>Edit</button>
                <button onClick={()=> onDelete(item.id)}>Delete</button>
            </div>
        )
    };

    return(
        <div className='todo'>
            {isEdit ? <FormEdit /> : <TodoElement />}
        </div>
    )
}