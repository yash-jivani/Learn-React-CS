import React, { useEffect, useState } from 'react'

export default function App() {

  const [dataArr, setDataArr] = useState([])
  let URL = `http://localhost:5000/users`;

  useEffect(() => {
    getUsers()
    }, [])

  function getUsers(){

    fetch(URL)
      .then((response) => { return response.json() })
      .then((data) => { setDataArr(data) })
  }

  console.log(dataArr);

  const deleteUser = (id) => {
    URL = `http://localhost:5000/users/${id}`
    alert(id)
    fetch(URL,{
      method:"DELETE"
    })
    // getUsers()
    
  }

  return (
    <div className='container'>

      <h1>DELETE Method</h1>
      <span> - Refresh page after delete - </span>
      {
        dataArr.map((user, i) => {
          return (
            <div key={i}>
              <h5>__________________</h5>
              <h2>{user.name}, {user.email}, {user.number}</h2>
              <button onClick={()=>{deleteUser(user.id)}}>DELETE</button>
            </div>
          )
        })
      }

    </div>
  )
}
