import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const[value, setValue] = useState('');
	function addElem(el){
    let copy = Object.assign([], notes);
    copy.push(el);
    setNotes(copy);
  }
	const result = notes.map((note, index) => {
		return <li key={index}>{note}</li>;
	});
	
	return <div>
		<ul>
			{result}
		</ul>
    <input value={value} onChange={(event)=>{setValue(event.target.value)}}/>
    <button onClick={()=> {addElem(value)}}>add</button>
	</div>;
}

export default App;

