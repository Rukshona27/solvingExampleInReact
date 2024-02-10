//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const initNotes = [
    {
      id: 'id1',
      name: 'name1',
      desc: 'long description 1',
      show: false,
    },
    {
      id: 'id2',
      name: 'name2',
      desc: 'long description 2',
      show: false,
    },
    {
      id: 'id3',
      name: 'name3',
      desc: 'long description 3',
      show: false,
    },
  ];
  const [notes, setNotes] = useState(initNotes);

  function showDecr(id){
    setNotes(notes.map(note => {
      if(note.id === id){
        note.show = true;
        return note;
      }
      return note;
    }))
  }
  const result = notes.map(note => {
    if(note.show === false){
      return <><li key={note.id}>
			{note.name}</li>
      <button onClick={()=>{showDecr(note.id)}}>show</button></>
    }else{
      return <><li key={note.id}>
			{note.name}</li>
      <li>{note.desc}</li>
      <button onClick={()=>{showDecr(note.id)}}>dont show</button></>
    };
	});

   
	return <div>
    <ul>
      {result}
    </ul>
	</div>;
}

export default App;

