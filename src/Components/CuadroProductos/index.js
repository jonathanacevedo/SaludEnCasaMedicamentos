import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper=styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;
padding: 1em 7em;
`;

const ProductWrapper=styled.div`
flex-basis:30%;
margin-bottom:20px;
`;

const ProductImage=styled.img`
width:100%;
`;

const ProductName=styled.div`
margin:10px 0;
`;

const CuadroProductos =({ products, addToCart }) => (
	<Wrapper>
	{products.map(product =>(
		<ProductWrapper key={product.id}>
		<ProductImage
		src={product.picture}
		/>
		<ProductName>
		{product.name}
		</ProductName>
		<button onClick={() => addToCart(product)}>
		Agregar al carro
		</button>
				<button>
		Eliminar del carro
		</button>

		</ProductWrapper>
		))	}
	</Wrapper>

	);

	CuadroProductos.propTypes={
		products:PropTypes.arrayOf(PropTypes.shape({
			_id: PropTypes.string.isRequired,
			picture:PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			})).isRequired,
			addToCart: PropTypes.func.isRequired,
		
	};

	export default CuadroProductos;
