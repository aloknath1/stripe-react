import React, {useState} from 'react';
import iPhone from './assets/iphone.jpg';
import Stripe from './Stripe';

function App() {  
    const [showForm, setShowForm] = useState(false);

  return (
    <div className="App">
        {showForm ? <Stripe/> :<><h3 style={{textAlign:'left'}}>$0.01</h3> <img src={iPhone} width="100" alt="iphone" /> <button onClick={()=>setShowForm(true)}>BUY</button></>}             
    </div>
  );
}

export default App;