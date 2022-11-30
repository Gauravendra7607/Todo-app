import React from 'react'

const Greet=props=>{
    return(
        <div>
<h1> hello {props.name} {props.heroname}</h1>
{props.children}
</div>
    )
}
export default Greet

// export const Greet = () => <h1>Hello World</h1>