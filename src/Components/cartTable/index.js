import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.table`
width:35%;
border-collapse: collapse;


td, th {
	border:4px solid #DDD;
	padding:8px;
	text-align:center;
}

tr:nth-child(even){
	background:#DDD;
}
`;

const CartTable=({cart}) => (
	<Wrapper>
		<thead>
			<tr>
				<th>Nombre medicamento</th>
				<th>Precio</th>
				<th>Cantidad</th>
			</tr>
		</thead>
		<tbody>
		{cart.items.map(item => (
			<tr key={item.productId}>
			<td>{item.product.name}</td>
			<td>{item.product.price}</td>
			<td>{item.quantity}</td>

		</tr>
		))}
		</tbody>
	</Wrapper>
	);

	CartTable.propTypes={
	cart: PropTypes.shape({
		items: PropTypes.arrayOf(PropTypes.shape({
			product: PropTypes.shape({
			name: PropTypes.string.isRequired,
			price: PropTypes.string.isRequired,
		}).isRequired,
			productId: PropTypes.string.isRequired,
			quantity: PropTypes.number.isRequired,
		})).isRequired,
	}).isRequired,
	};		
			
	export default CartTable;	



	