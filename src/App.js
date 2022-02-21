import React from 'react'
export default function App() {

  const users = [
    { name: 'yash', number: [{ personal: 9898 }, { office: 9595 }] },
    { name: 'anish', number: [{ personal: 4589 }, { office: 9998 }] },
    { name: 'digu', number: [{ personal: 5582 }, { office: 8787 }] }
  ]

  return (
    <div className='container'>

      <h1>Nested Map Function</h1>
      {
        users.map((data, i) =>
          <div key={i}>
            <h3>{data.name}</h3>
            {/* --- Nested Map --- */}
            {
              data.number.map((num, i) => {
                return(
                <div key={i}>
                  <h4>{num.personal}</h4>
                  <h4>{num.office}</h4>
                </div>
                )
              })
            }
          </div>
        )
      }

    </div>
  )
}
