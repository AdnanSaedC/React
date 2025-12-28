import React from 'react'

let array = [123]

function Comp({useranme = "adnan",myArr = array}) {
  
  return (
    <div>comp belongs to {useranme} {myArr}
        <h4>this components takes arguments</h4>
    </div>
  )
}

export default Comp