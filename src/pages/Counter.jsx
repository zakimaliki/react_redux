import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ShowRegister from '../components/ShowRegister'
import { decrement } from '../configs/redux/actions/decrementAction.jsx'
import { increment } from '../configs/redux/actions/incrementAction.jsx'
import { emailAction } from '../configs/redux/actions/emailAction.jsx'



const Counter = () => {
    const {count} = useSelector((state)=>state.counter);
    const dispatch = useDispatch();
    const [email,setEmail] = useState('');
    const handleIncrement=()=>{
        dispatch(increment())
    }
    const handleDecrement = () =>{
        dispatch(decrement())
    }
    const handleRegister = (e) =>{
        e.preventDefault()
        dispatch(emailAction(email))
        setEmail('')
    }
  return (
    <div>
        <p>Counter : {count}</p>
        <button className='btn border' onClick={handleIncrement}>Increment</button>
        <button className='btn border' onClick={handleDecrement}>Decrement</button>
        <form onSubmit={handleRegister}>
        <input type="text" placeholder='masukan email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button type='submit'>Submit</button>
        </form>
        <hr />
        <ShowRegister/>
    </div>
  )
}

export default Counter