import React from "react";

function Product({ name, surn, age }) {
	return <p>
		name: <span>{name}</span>,
		surn: <span>{surn}</span>,
        age: <span>{age}</span>
	</p>;
}
export default Product;