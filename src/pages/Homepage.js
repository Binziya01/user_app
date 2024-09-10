import React,{ useContext, useEffect, useState } from 'react'
import Search from '../components/Search'
import axios from 'axios'
import UserCard from '../components/UserCard'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'


const Homepage = () => {
    const [searchTerm,setSearchTerm]=useState("")
    const {users, setUsers} = useContext(UserContext)

    const userData = async()=>{
      const {data}=await axios.get("https://jsonplaceholder.typicode.com/users")
      setUsers(data)
    }

    useEffect(()=>{
      userData()
    },[])

  return (
    <div className="flex px-2 lg:px-24 gap-10 flex-col py-20 dark:bg-[#C4B69D] text-gray-300 min-h-screen justify-start items-center">
    <h1 className="text-black text-3xl font-bold">USERS LIST</h1>
    <div>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {
      users && users.filter((user)=>{
          return user.name.toLowerCase().includes(searchTerm)
        })
      .map((user)=>{
        return (
          <Link key={user.id} to={`/users/${user.id}`}>
          <UserCard user={user} />
        </Link>
        )
      })
    }

    
    </div>

    </div>
  )
}

export default Homepage