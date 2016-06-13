import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class EditProduct extends TrackerReact(Component) {
	constructor(){
		super();
		this.state = {
			name: "",
			subscription: {
				products: Meteor.subscribe("products"),
				// images: Meteor.subscribe("images"),
				// categories: Meteor.subscribe("categories")
			}
		}
	}
	getProduct(){
		const product = Products.findOne(this.props._id)
		// console.log(product)
		return product
	}
	renameProduct(e){
		const name = e.target.value
		Products.update(this.props._id,{
			$set: {
				name: name
			}
		});
		console.log(name)
	}
	editProduct(e){
		e.preventDefault()
		name = e.target.name.value
		// console.log(name)
		// Meteor.call("updateProduct", name)
	}
	componentWillUnmount() {
		this._renderComputation.stop();
		this.state.subscription.products.stop();  
		// this.state.subscription.images.stop(); 
		// this.state.subscription.categories.stop(); 
	}

	render(){
		const product = this.getProduct()
		if (!product) {
			return null
		}
		return(
			<div>
				<form onSubmit={this.editProduct}>
					<input type="text" onChange={this.renameProduct.bind(this)} value={product.name} name="name" />
					<button className="btn-primary btn" type="submit">Сохранить продукт</button>
				</form>
			</div>
		)
	}
}