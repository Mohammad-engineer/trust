import Modal  from "./component/modal";
import AddToDo from "./views/contents/AddToDo";
import ToDoListView from "./views/contents/ToDoListView";

function App() {
  return (
    <div className='container' style={{ textAlign: 'center', marginTop: '10px' }}>
      <h1>TO DO List</h1>
      <AddToDo />
      <ToDoListView />  
      <Modal />
    </div>
  );
}

export default App;
