import React, { useState } from 'react'

function Usestat() {
    const [name , updated ] = useState ({fname:'' , lname :''})
  return (
    <div>
      
      <input type='text' value={name.fname} onChange= { e => updated({...name , fname: e.target.value})}/>
      <input type='text' value={name.lname} onChange={ e => updated({ ...name , lname: e.target.value})}/>
      <h1>myfirst name is {name.fname}</h1>
      <h1>mylast name is {name.lname} </h1>
      
    </div>
  )
}

export default Usestat
