import './App.css'

import {CakeView} from './features/cake/cakeView';
import {IceCreamView} from './features/icecream/iceCreamView';
import {UserView} from './features/user/userView';

function App() {

  return (
    <div className="App">
      <h1> Offer: Buy one Cake Get one Ice Cream Free.</h1>
      <CakeView/>
      <IceCreamView/>
      <UserView/>
    </div>
  )
}

export default App
