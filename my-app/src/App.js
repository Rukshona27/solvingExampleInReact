import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const [value, setValue] = useState('');
	
	const result = notes.map((note, index) => {
		return <li key={index} onClick={() => setValue(note, index)}>
			{note}
		</li>;
	});
	function square(index) {
		let copy = Object.assign([], notes);
		copy[index]  = copy[index]*copy[index]; // что-то сделаем с элементом
		setNotes(copy);
	}
  function delEl(index){
    let copy = Object.assign([], notes);
    copy.splice(index, 1);
    setNotes(copy)
  }
  function saveInp(val){
    let copy = Object.assign([], notes);
    copy[val] = val;
    setNotes(copy);
  }
  function reverseeArr(){
    let copy = Object.assign([], notes);
    copy = copy.reverse();
    setNotes(copy);
  }
	return <div>
		<ul>
			{result}
		</ul>
    <input value={value} onChange={(event)=> {setValue(event.target.value)}} onBlur={()=>{saveInp(value)}}/>
    <button onClick={()=>{reverseeArr()}}>reverse</button>
	</div>;
}

export default App;

