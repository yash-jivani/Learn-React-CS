import React, { useEffect, useState } from 'react'

export default function App() {

  const [dataArr, setDataArr] = useState([])
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")

  useEffect(() => {
    getUsers()
  }, [])

  function getUsers() {

    let URL = `http://localhost:5000/users`;
    fetch(URL)
      .then((response) => { return response.json() })
      .then((data) => { setDataArr(data) })
  }

  console.log(dataArr);

  const deleteUser = (id) => {
    URL = `http://localhost:5000/users/${id}`
    alert(id)
    fetch(URL, {
      method: "DELETE"
    })
    getUsers()
  }

  const selectUser = (id) => {
    // array 0 se start hota hai aur id 1 se start hota hai iss liye
    let idMain = id-1;
    // console.log(dataArr[idMain])
    setName(dataArr[idMain].name)
    setEmail(dataArr[idMain].email)
    setNumber(dataArr[idMain].number)
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
              <button onClick={() => { deleteUser(user.id) }}>DELETE</button>
              <button onClick={() => { selectUser(user.id) }}>Fill-data</button>
            </div>
          )
        })
      }
        <br /><br /><br />
      <div>
        <h5>______________________</h5>
        <h3>Pre-fill</h3>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/> <br /> <br />
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br /> <br />
        <input type="text" value={number} onChange={(e)=>{setNumber(e.target.value)}}/> <br /> <br />
        <button>Update-User</button>
      </div>

    </div>
  )
}
