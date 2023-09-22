import { useState,useEffect } from "react"
import './App.css'
import { User, getUsers } from './services/userService'
import UserItem from "./components/UserItem"

function App() {
  const [users,setUsers] = useState<User[]>()

  useEffect(()=>{
    async function fetchUsers(){
      const users = await getUsers();
      setUsers(users)
    }

    fetchUsers()
  },[])


  return (
   <main>
    <h1>Users</h1>
    <ul className="usersList">
    {
      users?.map(user=>(
        <UserItem key={user.email} title={user.title} first={user.first} last={user.last} picture={user.picture}/>
      ))
    }
    </ul>
    
   </main>
  )
}

export default App
