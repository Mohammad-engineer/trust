import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo, updateTodo } from '../../redux/todoSlice';

const ToDoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState();
    const [value, setValue] = useState('');

    const handleCheckboxClick = () => {
        dispatch(toggleComplete({ id, completed: !completed }));
    };

    const handleDeleteClick = () => {
        dispatch(deleteTodo({ id }));
    };

    var buttonText = show ? "Done" : "Update";

    const updateHandler = () => {
        setShow(!show);
        setValue(title)

        if (buttonText === 'Done') {
            dispatch(updateTodo({ id, title: value, }))
        }
    };


    return (
        <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
            <div className='d-flex justify-content-between'>
                <span className={!show ? 'span-show' : 'span-hidden'} style={{ textDecoration: completed && 'line-through' }}>
                    <input
                        type='checkbox'
                        className='mr-3'
                        onChange={handleCheckboxClick}
                        checked={completed}
                    ></input>
                    {title}
                </span>
                <input type='text' value={value} className={show ? 'input-text input-show' : 'input-text input-hidden'} onChange={(event) => setValue(event.target.value)} />
                <div className='button-container'>
                    <button className='update-button' onClick={updateHandler}>{buttonText}</button>
                    <button className='btn btn-danger' onClick={handleDeleteClick} >X</button>
                </div>
            </div>
        </li >
    );
};

export default ToDoItem;