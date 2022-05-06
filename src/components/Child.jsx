import React from 'react'

const Child = (props) => {

        console.log(props)
    return (
        <div>
           <h2>Child Component</h2>
           <h4>User input {props.userInput}</h4>
        </div>
        
    )

}

export default Child