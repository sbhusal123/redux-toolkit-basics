import React from 'react'

import {useSelector} from 'react-redux';

export const IceCreamView = () => {
  const numOfIceCreams = useSelector(store => store.iceCream.numOfIceCreams);
  return (
    <div>
        <h2>Number of ice creams - {numOfIceCreams} </h2>
        <button>Order ice creams</button>
        <button>Restock ice creams</button>
    </div>
  )
}
