import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"

const App = () => {
  const [users, setUsers] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async() => {
    try {
      const usersData = await axios.get('http://localhost:3001/users')
      console.log("UsersData: ", JSON.stringify(usersData))
      //if(userdData.data)
      setUsers(usersData.data.data)
    } catch (error) {
      console.log("fetchUsers Error: ", error)
    }
  }
  return (<div className="app-container">
    <header className="app-header">
      <h1>
        Team Members
      </h1>
      <div className="add-user-container">
        <input type="text" 
        placeholder="search by ID, Name or course" 
        value={searchQuery}
        onChange={(e) => {
          return setSearchQuery(e.target.value)
        }}
        className="search-bar">
        </input>
      </div>
    </header>
    <table className="users-table">
        <thead>
          <tr>
            <th> ID </th>
            <th> Name </th>
            <th> Course </th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => {
              return (<tr key={user.id}>
                <td> {user.id} </td>
                <td> {user.name} </td>
                <td> {user.course} </td>
              </tr>)
            })
          }
        </tbody>
    </table>
  </div>)
}

//module.exports = {App}
export default App