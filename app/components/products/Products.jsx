import React, { Component } from 'react';
import classNames from 'classnames';
import Product from './Product';

export default class ProductsComponent extends Component {

	render() {
		const products = this.props.products.map( (product)=>{
			return(
				<Product 
					product={product} 
					key={product} />
			)
		} );
		return(
			<div>
				{products}
			</div>
		);
	}
}