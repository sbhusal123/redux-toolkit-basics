import React, {useState} from 'react'

import {useSelector, useDispatch} from 'react-redux';

// action creators
import {ordered, restocked} from '../cake/cakeSlics'

export const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);

  return (
    <div>
        <h2>Number of cakes - {numOfCakes}</h2>
        <button onClick={() => {
          dispatch(ordered())
        }}>Order Cake</button>
        <br/>
        <input type="number" value={value} onChange={e => setValue(parseInt(e.target.value))}/>
        <button onClick={() => {
          dispatch(restocked(value))
        }}>Restock {value} Cakes</button>
    </div>
  )
}
