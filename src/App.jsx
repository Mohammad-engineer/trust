import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import UserList from './component/UserList';
import CrudUser from './component/CrudUser';



function App() {
  return (
    <>
      <h1>User Application</h1>
      <a href="/user-list">User List</a>
      <br />
      <a href="/crud-user">Crud User</a>
      <Routes>
        <Route path="/user-list" element={<UserList />} />
        <Route path="/crud-user" element={<CrudUser />} />
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
