import React, {useState} from 'react'

import {useSelector, useDispatch} from 'react-redux';

// action creators
import {ordered, restocked} from './iceCreamSlice'

export const IceCreamView = () => {
  const numOfIceCreams = useSelector(store => store.iceCream.numOfIceCreams);
  const dispach = useDispatch();

  const [value, setValue] = useState(1);
  return (
    <div>
        <h2>Number of ice creams - {numOfIceCreams} </h2>
        <button onClick={() => {
          dispach(ordered())
        }}>Order ice creams</button>
        <br/>
        <input type="number" value={value} onChange={e => setValue(parseInt(e.target.value))}/>        
        <button onClick={() => {
          dispach(restocked(value))
        }}>Restock {value} ice creams</button>
    </div>
  )
}
