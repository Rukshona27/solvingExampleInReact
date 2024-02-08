import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);
	
  function plusCount(){
    setCount(count+1);
  };
  function minusCount(){
    if(count>0){
      setCount(count-1);
    }
  };
	return <div>
		 <p>count: {count}</p>
    <button onClick={()=>{plusCount()}}>+</button>
    <button onClick={()=>{minusCount()}}>-</button>
	</div>;
}

export default App;

