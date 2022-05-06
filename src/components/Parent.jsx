import React, { useState } from 'react';
import Child from '../components/Child'

const Parent = () => {

    const [input, setInput] = useState();

    return (
        <div>
            <input 
                type='text' 
                placeholder='type something here'
                onChange={(e)=> setInput(e.target.value)}
             ></input>
           <Child userInput={input} />
        </div>
    )

};

export default Parent