import React from 'react'

function Props(props) {
  return (  
    <div> <h3> my name is { props.person.name} and my sirname is {props.person.lastname} and my age is {props.person.id}</h3></div>
  )
}

export default Props