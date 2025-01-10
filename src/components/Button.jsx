import React, { useContext } from 'react'
import Components from './Components'
import { makeContext } from '../context/context'

const Button = () => {
    const consumeContext = useContext(makeContext)
  return (
    <div>
        <button onClick={()=>consumeContext.setCount((count)=>count+1)}><span><Components/></span>I'm Batman</button>
    </div>
  )
}

export default Button