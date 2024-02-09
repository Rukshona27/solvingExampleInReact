import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
/*средне арифметическое */
// function App() {
// 	const [value1, setValue1] = useState(0);
// 	const [value2, setValue2] = useState(0);
//   const [value3, setValue3] = useState(0);
//   const [value4, setValue4] = useState(0);
//   const [value5, setValue5] = useState(0);
//   const [result, setResult] = useState(0);
	
// 	return <div>
// 		<input value={value1} onChange={event=>setValue1(+event.target.value)} />
// 		<input value={value2} onChange={event=>setValue2(+event.target.value)} />
//     <input value={value3} onChange={event=>setValue3(+event.target.value)}/>
//     <input value={value4} onChange={event=>setValue4(+event.target.value)}/>
//     <input value={value5} onChange={event=>setValue5(+event.target.value)}/>
//     <button onClick={()=>setResult(Number(value1))+ (Number(value2))+(Number(value3))+(Number(value4))+(Number(value5))}>btn</button>
// 		<p>result: {result}</p>
// 	</div>
//};

// ⊗jsrtPmFmsDt
//N1
// function App(){
//   const [value, setValue] = useState(0);
//   const [value2, setValue2] = useState(0);
//   const [result, setResult] = useState(0);
//   const [result2, setResult2]= useState(0);
//   return <div>
//     <input value={value} onChange={ event => setValue(+event.target.value)}/>
//     <input value={value2} onChange={event => setValue2(+event.target.value)}/>
//     <button onClick={()=> setResult(Number(value) + Number(value2))}>summ</button>
//     <button onClick={()=> setResult2(Number(value)*Number(value2))}>Product of numbers</button>
//     <p>sum:{result} <br/>
//     product:{result2}</p>
//   </div>
//}

// N2 Даны два инпута, кнопка и абзац. Пусть в инпуты вводятся даты в формате 2025-12-31. По нажатию на кнопку найдите разницу между датами в днях и результат выведите в абзац.
// function App(){
//   const [value, setValue] = useState(0);
//   const[result, setResult] = useState(0);

//   function addZero(num) {
//     if (num >= 0 && num <= 9) {
//       return '0' + num;
//     } else {
//       return num;
//     }
//   }

//   function getDifference(val){
//     let date = new Date;
//     let fullDate = date.getFullYear()+ '-' + addZero(date.getMonth() + 1 ) +'-' + addZero(date.getDay());
//     return fullDate;
//   }


//   return <div>
//     <input value={value} onChange={event => setValue(+event.target.value)} placeholder='введите дату'/>
//     <input placeholder={getDifference()}/>
//     <button onClick={()=> setResult((getDifference())-value)}>difference in time</button>
//     <p>result:{result}</p>
//   </div>
// }

//N4 Дан инпут и абзац. В инпут вводится число. По потери фокуса выведите в абзац сумму цифр введенного числа.
// function App(){
//   const [value, setValue] = useState("");
//   const [result, setResult] = useState(0);
//   function handle(event){
//     setValue(event.target.value);
//   }
//   function sum(num){
//     alert(num)
//   }
//   return <div>
//     <input value={value} onChange={handle} onBlur={sum(value)}/>
//     <p>{value}</p>
//   </div>
// }
function App(){
  return
}

export default App;

