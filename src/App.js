import React, { useEffect,useState } from 'react'

// ? API ko hum useEffect me call karte hai 

export default function App() {

  const [dataArr, setdataArr] = useState([])
  const url = `http://localhost:5000/users`;
  useEffect(() => {

    /*
    
    Here we are fetching a JSON file across the network and printing it to the console. 
    The simplest use of fetch() takes one argument 
    — the path to the resource you want to fetch 
      — and does not directly return the JSON response body but instead returns a promise that resolves with a Response object.
    
      The Response object, in turn, does not directly contain the actual JSON response body 
      but is instead a representation of the entire HTTP response.
      So, to extract the JSON body content from the Response object, we use the json() method, 
      which returns a second promise that resolves with the result of parsing the response body text as JSON.
      
      */

    // * explanation : https://www.youtube.com/watch?v=cuEtnrL9-H0
    fetch(url)     // will return promise
      // if promise resolve then ...
      .then((response) => {
        console.log(response)
        return response.json()    // convert data to json | + getting new promise
      })
      .then((data) => {
        console.log("data : ",data)
        setdataArr(data)   // set data to dataArr (which is empty Array)
      })  // if resolve then print data
  },[])  // ager yha per '[]' nhi add karenge to infinite time get method call hoga

  console.log("dataArr var : ",dataArr)


  return (
    <div className='container'>
      <h1>GET API</h1>
      {
        dataArr.map((user,i)=>{
          return (
            <div key={i}>
              <span>________________</span>
              <h5>id : {user.userId} </h5>
              <h5>name : {user.name} </h5>
              <h5>mail : {user.email} </h5>
              <h5>number : {user.number} </h5>
            </div>
          )
        })
      }
    </div>
  )
}
