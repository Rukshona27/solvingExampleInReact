import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {
  const initNotes = [
    {
      id: 'GYi9G_uC4gBF1e2SixDvu',
      name: '2-СЛОЙНЫЙ ГОФРОКАРТОН',
      price: 'от 12,5 руб/м2',
    },
    {
      id: 'IWSpfBPSV3SXgRF87uO74',
      name: '3-СЛОЙНЫЙ ГОФРОКАРТОН БУРЫЙ',
      price: 'от 12,5 руб/м2',
    },
    {
      id: 'JAmjRlfQT8rLTm5tG2m1L',
      name: '3-СЛОЙНЫЙ ГОФРОКАРТОН',
      price: 'от 12,5 руб/м2',
    },
    {
      id: 'JAmjRlfQT8rLTm5tG2m2l',
      name: '5-СЛОЙНЫЙ ГОФРОКАРТОН',
      price: 'от 12,5 руб/м2',
    }
  ];
  const navHeader = ['ПРОДУКЦИЯ', 'НАШЕ ПРОИЗВОДСТВО', 'УСЛУГИ', 'ДОСТАВКА', 'КОНТАКТЫ'];
  //const navHeader2 = ['Гофрокартон и упаковка оптом', 'Московская область, Раменский р-н, Бронницы, с. Михеево', '']
  const [notes, setNotes] = useState(initNotes);
  const [navEl, setNav] = useState(navHeader);

	
  const header = navEl.map((nav, index) =>{
    return <a href='#'><li className='colorWhite' key={index}>{nav}</li></a>
  })

  const result = notes.map(note => {
		return <li className='Li' key={note.id}>
			<span>{note.name}</span>
			<span>{note.price}</span>
			
			<button onClick={() => doSmth(note.id)}>
				btn
			</button>
		</li>;
	});

  function doSmth(id) {
		setNotes(notes.map(note => {
			if (note.id === id) {
				note.prop1 += '!';
				note.prop2 += '!';
				note.prop3 += '!';
				
				return note;
			}
			
			return note;
		}));
	}
  return <>
  <section className='justFlex secNav1'>
    <aside className='logoText'>
      <img src='../public/logo.png' alt='logo'/>
      <p>Гофрокартон и упаковка оптом</p>
    </aside>
    <aside className='address justFlex'>
      <span class="material-symbols-outlined  locationOnIcon colorOrange">location_on</span>
      <p>Московская область, Раменский р-н, <br/> Бронницы, с. Михеево</p>
    </aside>
    <aside className='contacts'>
      <p>+7 (495) 545-47-88</p>
      <div className='justFlex'><span class="material-symbols-outlined colorOrange scheduleIcon">schedule</span> <p>Пн-пт: 9:00 – 18:00</p></div>
    </aside>
    <aside className='feedBack'></aside>
  </section>
  <div className='nav'>
    <ul>
      {header}
    </ul>
  </div>
  <div>
  <ul className='Ul justFlex'>
    {result}
  </ul>
</div>
</>

}


export default App;

