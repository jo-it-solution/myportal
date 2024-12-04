import React, { useEffect, useState } from 'react'

function Useeffect() {
    const [count , updatedcount ] = useState(0)
    useEffect (() => {console.log(count)}, [])
  return (
    <div>
        <h1>count {count} </h1>
      <button onClick={() => updatedcount(count + 1)}>increace</button>
    </div>
  )
}

export default Useeffect
