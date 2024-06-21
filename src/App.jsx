import { useEffect, useState } from 'react'
import './App.css'
import { AddUser } from './components/AddUser'
import { UserList } from './components/UserList'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [users, setUsers] = useState([])
  const addItem=obj=>setUsers([...users,obj])

  const handleSalaryUp=id=>{
    const user=users.find(u=>u.id==id)
    const newSalary=+user.salary+50000 
    axios
    .put(`http://localhost:3004/users/${id}`,{...user,salary:newSalary})
    .then(()=>{
      setUsers(users.map(u=>u.id==id?{...u,salary:newSalary}:u))
    })
  }

  const handleDelete=id=>{
    axios
    .delete(`http://localhost:3004/users/${id}`)
    .then(()=>{
      setUsers(users.filter(u=>u.id!==id))
  })      
  toast.success("user successfully deleted")
  }
  
  useEffect(()=>{
    axios
    .get("http://localhost:3004/users")
    .then(res=>{
      setUsers(res.data)
    })
  },[])


  return (
    <div className='row'>
      <AddUser
      onAdd={addItem}
      />
      <UserList
        users = {users}
        onDelete={handleDelete}
        onUp={handleSalaryUp}

      />
      <ToastContainer

      />
    </div>
  )
}

export default App
