import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";
import { Checkbox } from '@material-ui/core';

const TodoItem = ({ id, title, completed }) => {

    const dispatch = useDispatch();

    const removeTask = () => {
        dispatch(
            deleteTask({
                id: id
            })
        )
    }

    return (
        <li className="task-item">
            <div>
                {title}
            </div>
            <div>
                <Checkbox value={completed} />
            </div>
            <div>
                <button className="remove-task-button" onClick={() => {
                    removeTask();
                }}>Delete</button>
            </div>
        </li>
    );
};

export default TodoItem;
