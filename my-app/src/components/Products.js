import React, { useState } from "react";
import img from '../img/prod.png';
import ProductList from "./ProductList";

function Products() {
	const initProds = [
		    {
		      id: 'GYi9G_uC4gBF1e2SixDvu',
		      name: '2-СЛОЙНЫЙ ГОФРОКАРТОН',
		      price: 'от 12,5 руб/м2',
			  inCart: false,
		    },
		    {
		      id: 'IWSpfBPSV3SXgRF87uO74',
		      name: '3-СЛОЙНЫЙ ГОФРОКАРТОН БУРЫЙ',
		      price: 'от 12,5 руб/м2',
			  inCart: false,
		    },
		    {
		      id: 'JAmjRlfQT8rLTm5tG2m1L',
		      name: '3-СЛОЙНЫЙ ГОФРОКАРТОН',
		      price: 'от 12,5 руб/м2',
			  inCart: false,
		    },
		    // {
		    //   id: 'JAmjRlfQT8rLTm5tG2m2l',
		    //   name: '5-СЛОЙНЫЙ ГОФРОКАРТОН',
		    //   price: 'от 12,5 руб/м2',
			//   inCart: false,
		    // }
		];
	const [prods, setProds] = useState(initProds);
	const items = prods.map(prod =>{
		return(<div key={prod.id} className="item">
			<img src={img}/>
			<p>{prod.name} </p>
			<p>{prod.price} </p>
			<span>{prod.inCart ? 'in cart' : 'not in cart'}</span>
		<button onClick={()=>{setProds(addToCart(prod.id))}}>to cart</button>
		</div>)
		// return <ProductList
		// key={prod.id}
		// id={prod.id}
		// img={img}
		// name={prod.name}
		// price={prod.price}
		//inCart={prod.inCart}/>
	})
	return <div className="items">{items}</div>;
	function addToCart(id) {
		setProds(prods.map(prod => {
			if (prod.id === id) {
				prod.inCart = true;
			}
			
			return prod;
		}));
}
}
export default Products;