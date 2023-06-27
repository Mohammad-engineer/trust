import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/todoSlice';

function Modal({id,title}) {


  
  const location = useLocation();
  console.log(location);
  



  const [editValue,setEditValue] = useState('');

  const dispatch = useDispatch();

 const clickHandler = () =>{
  
  console.log(editTodo);
    dispatch(
      editTodo({
        id:2,
        title: editValue
      })
    );
}


  return (
    <>
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit Todo Item</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <input type='text' id='todoTilte' value={editValue} onChange={(e)=>setEditValue(e.target.value)}  className='w-100 border-0 p-3 border-info h4 pb-2 mb-4 text-primary border-bottom border-danger'/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">cancel</button>
              <button type="button" id='saveTodo' class="btn btn-primary" data-bs-dismiss="modal" onClick={clickHandler}>save</button>
            </div>
          </div>
        </div>
      </div>
    </>
   
  )
}

export default Modal