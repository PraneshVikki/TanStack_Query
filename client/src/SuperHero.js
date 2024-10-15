import React from 'react'

const SuperHero = ({data}) => {
    console.log(data)
  return (
    <div>
         {data.map((d)=>(
             <div key={d.id}>
                
             {
             (d.id == 1 && console.log(d.name))
             }
             <p>{d.name}</p>
             </div>
         ))
             }
        <p>Hi</p>
    </div>
  )
}

export default SuperHero