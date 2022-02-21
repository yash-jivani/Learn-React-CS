
import React from 'react'

export default function App() {

  // ? Normal use :: 

  const students = ['yash', 'anish', 'jaymin', 'jay']

  // with for loop
  console.log('--- for loop ---')
  for (let i of students) {
    console.log(i)
  }

  // with map function
  console.log('--- map function ---')
  students.map((data) => {
    console.log(data)
  })

  // ? Real life Example :

  const info = [
    {name:'yash',mail:"yash@mail.com",number:121},
    {name:'digu',mail:"digu@mail.com",number:231},
    {name:'anish',mail:"anish@mail.com",number:221},
    {name:'jay',mail:"jay@mail.com",number:520},
  ]

  return (

    <div className='container'>

      <h1>Array list with Map Function</h1>

      {/* ----------- write in '{}' | JSX --------- */}

{/* WITH MAP FUNCTION */}

      {/* {
        students.map((item)=>{
           return <h3>{item}</h3>
        })
      } */}

      {/* OR */}

      {
        students.map((item) =>
          <h3>{item}</h3>
        )
      }

{/* WITH FOR LOOP | will not work */}

      {/* {
        for(let i of students){
          <h3>{i}</h3>
        }
      } */}


      {/* ---------- real life demo example ----------- */}

      {
        info.map((data)=>{
          return <h3>{data.mail} | {data.name} | {data.number}</h3>
        })
      }


    </div>
  )
}
