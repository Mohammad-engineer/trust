import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo ,editTodo} from "../../redux/todoSlice";
import { useNavigate } from "react-router-dom";


const ToDoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(toggleComplete({ id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id }));
  };

  const handleEditClick = (id) => {
    dispatch(editTodo({ id , title}));
 
  };

  return (
    <>
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span
          className="d-flex flex-row juctify-contents-around align-items-center"
          style={{ textDecoration: completed && "line-through" }}
        >
          <input
            type="checkbox"
            className="mr-3"
            onClick={handleCheckboxClick}
            checked={completed}
          ></input>
          {title}
        </span>
        <div>
        <button type="button" onClick={handleEditClick(id)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            edit in modal
          </button>
        
          <button className="btn btn-danger" onClick={handleDeleteClick}>
            X
          </button>
        </div>
      </div>
    </li>
   
    </>
  );
};



export default ToDoItem;
