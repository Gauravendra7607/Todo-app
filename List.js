import React, { useState } from 'react'

function List() {

    const [count , setCount]=useState(0)
    
    const add=()=>{
        setCount(count+1)
    }

    // const plus=(e)=>{
    //     setItems(e.target.value)

    // }
    
  return (
    <div>
        <form>
        <input type="text" />
        </form>
            {count}
        <button type='submit' onClick={add}> submit</button>
      
    </div>
  )
}

export default List 