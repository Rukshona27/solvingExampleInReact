import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {
	const [value, setValue] = useState('1');
  const [value2, setValue2] = useState('2')
	return <div>
		<input value={value} onChange={event => (setValue(event.target.value))}/>
    <p>text: {value}</p>
    <input value={value2} onChange={event => (setValue2(event.target.value))}/>
    <p>text2: {value2}</p>
	</div>;
}


export default App;

