import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {
  const initNotes = [
    {
      id: 'GYi9G_uC4gBF1e2SixDvu',
      prop1: 'value11',
      prop2: 'value12',
      prop3: 'value13',
    },
    {
      id: 'IWSpfBPSV3SXgRF87uO74',
      prop1: 'value21',
      prop2: 'value22',
      prop3: 'value23',
    },
    {
      id: 'JAmjRlfQT8rLTm5tG2m1L',
      prop1: 'value31',
      prop2: 'value32',
      prop3: 'value33',
    },
  ];
	const [notes, setNotes] = useState(initNotes);
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
	
	const result = notes.map(note => {
		return <li key={note.id}>
			<span>{note.prop1}</span>
			<span>{note.prop2}</span>
			<span>{note.prop3}</span>
		</li>;
	});

  function addLi(val1, val2,val3){
    const copy = Object.assign([], notes);
    copy.push({
      id: 'idLi',
      val: val1,
      val2:val2,
      val3:val3,
    });
    setNotes(copy);
  }

	return <div>
		<ul>
			{result}
		</ul>
    <input  value={value} onChange={(event)=>{setValue(event.target.value)}}/>
    <input  value={value1} onChange={(event)=>{setValue1(event.target.value)}}/>
    <input  value={value2} onChange={(event)=>{setValue2(event.target.value)}}/>
    <button onClick={()=>{addLi(value, value1, value2)}}>add</button>
	</div>;
}

export default App;

