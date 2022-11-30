import React from 'react'

function NameList() {
    const persons =[{
        id:1,
        name:"gaurav",
        skill:"react",
        age:22,
    },
    {
        id: 2,
        name:"mayank",
        skill:"angular",
    }

]
    const PersonList= persons.map(person=> <h2> {person.name} {person.age}{person.skill}</h2>)
  return (
    <div> 
        {PersonList}
    </div>
  )
}

export default NameList