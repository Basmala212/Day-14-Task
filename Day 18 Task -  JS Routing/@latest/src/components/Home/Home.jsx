import React, { useState } from 'react'
import Hero from '../Hero/Hero'


export default function Home() {

    let [counter, setCounter] = useState(0)
    let [nums, setNums] = useState([1,2,3,4,5,6])
    let newNums = nums.map( (num) => num + 10 )
    
    function Increse(param){
        setCounter(counter + param)        
    }
    
    return (
        <>
        <h1>Home Page</h1>
        <h1>Counter: {counter}</h1>
        <button className='btn btn-primary' onClick={function(){Increse(10)}}>Increse Counter</button>
        
        <div className={ counter > 20 ? 'bg-info d-block' : 'd-none'}>
            <h2>Counter: {counter}</h2>
        </div>
        <div>
            <ul>
                { newNums.map( (num) => <li className='bg-info text-center'>{num}</li> ) }
            </ul>
        </div>
    
        </>
    )
}